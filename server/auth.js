'use strict';
/**
 * Đăng nhập Google / Facebook (OAuth phía máy chủ).
 * Biến môi trường: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_APP_ID,
 * FACEBOOK_APP_SECRET, SESSION_SECRET, PUBLIC_URL (vd https://ten-mien.com).
 * AUTH_MOCK=1: giả lập nhà cung cấp để kiểm thử (không dùng trên mạng thật).
 */
const crypto = require('crypto');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const MEMBER_RE = /^TA[A-Z0-9]{10}$/;
const DAY = 864e5;

function env(k) { return String(process.env[k] || '').trim(); }
function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64url(s) {
  s = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Buffer.from(s, 'base64');
}
function now() { return Date.now(); }

function publicBase() {
  const u = env('PUBLIC_URL').replace(/\/$/, '');
  return u || '';
}

function providers() {
  const mock = env('AUTH_MOCK') === '1' || env('PAY_TEST') === '1';
  const g = !!(env('GOOGLE_CLIENT_ID') && env('GOOGLE_CLIENT_SECRET') && env('SESSION_SECRET'));
  const f = !!(env('FACEBOOK_APP_ID') && env('FACEBOOK_APP_SECRET') && env('SESSION_SECRET'));
  return {
    google: g || (mock && !!env('SESSION_SECRET')),
    facebook: f || (mock && !!env('SESSION_SECRET')),
    mock: mock && !!env('SESSION_SECRET'),
    oneTap: g, // One Tap cần client id thật
    googleClientId: g ? env('GOOGLE_CLIENT_ID') : (mock ? 'mock-google-client' : ''),
    publicUrl: publicBase()
  };
}

function sign(payload) {
  const secret = env('SESSION_SECRET');
  if (!secret) throw new Error('Thiếu SESSION_SECRET');
  const body = b64url(JSON.stringify(payload));
  const sig = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  return body + '.' + sig;
}
function unsign(tok, maxAgeMs) {
  if (!tok || typeof tok !== 'string' || !tok.includes('.')) return null;
  const secret = env('SESSION_SECRET'); if (!secret) return null;
  const [body, sig] = tok.split('.');
  const expect = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expect))) return null;
  } catch (e) { return null; }
  let o; try { o = JSON.parse(fromB64url(body).toString('utf8')); } catch (e) { return null; }
  if (!o || !o.exp || o.exp < now()) return null;
  if (maxAgeMs && o.iat && now() - o.iat > maxAgeMs) return null;
  return o;
}

function parseCookies(req) {
  const out = {}; const h = String(req.headers.cookie || '');
  h.split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return out;
}
function setCookie(res, name, val, opts = {}) {
  const parts = [`${name}=${encodeURIComponent(val)}`];
  parts.push('Path=/'); parts.push('HttpOnly'); parts.push('SameSite=Lax');
  if (opts.maxAge != null) parts.push('Max-Age=' + Math.floor(opts.maxAge));
  if (opts.clear) parts.push('Max-Age=0');
  const secure = (publicBase().startsWith('https://') || process.env.FORCE_SECURE_COOKIE === '1');
  if (secure) parts.push('Secure');
  const prev = res.getHeader && res.getHeader('Set-Cookie');
  const list = prev ? (Array.isArray(prev) ? prev : [prev]) : [];
  list.push(parts.join('; '));
  res.setHeader('Set-Cookie', list);
}

function fetchJson(url, opt = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const lib = u.protocol === 'https:' ? https : http;
    const req = lib.request(u, { method: opt.method || 'GET', headers: opt.headers || {} }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => {
        try { resolve({ status: res.statusCode, json: d ? JSON.parse(d) : {} }); }
        catch (e) { reject(new Error('JSON lỗi từ ' + u.host)); }
      });
    });
    req.on('error', reject);
    if (opt.body) req.write(opt.body);
    req.end();
  });
}
function postForm(url, fields) {
  const body = new URLSearchParams(fields).toString();
  return fetchJson(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) }, body });
}

/* ---- Google id_token verify (JWKS) ---- */
let gJwks = null, gJwksAt = 0;
async function googleJwks() {
  if (gJwks && now() - gJwksAt < 3600e3) return gJwks;
  const r = await fetchJson('https://www.googleapis.com/oauth2/v3/certs');
  gJwks = r.json; gJwksAt = now(); return gJwks;
}
function decodeJwt(tok) {
  const [h, p, s] = String(tok).split('.');
  if (!h || !p || !s) throw new Error('id_token sai');
  return { header: JSON.parse(fromB64url(h).toString()), payload: JSON.parse(fromB64url(p).toString()), sig: s, h, p };
}
async function verifyGoogleIdToken(idToken) {
  const clientId = env('GOOGLE_CLIENT_ID');
  if (env('AUTH_MOCK') === '1' && idToken.startsWith('mock.')) {
    const p = unsign(idToken.slice(5), 600e3);
    if (!p || p.iss !== 'mock-google') throw new Error('Mock Google token sai');
    return { sub: p.sub, email: p.email || '', name: p.name || 'Bạn Google', picture: p.picture || '' };
  }
  const { header, payload, sig, h, p } = decodeJwt(idToken);
  if (payload.iss !== 'https://accounts.google.com' && payload.iss !== 'accounts.google.com') throw new Error('iss Google sai');
  const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!aud.includes(clientId)) throw new Error('aud Google sai');
  if (!payload.exp || payload.exp * 1000 < now() - 30e3) throw new Error('id_token hết hạn');
  const jwks = await googleJwks();
  const key = (jwks.keys || []).find(k => k.kid === header.kid);
  if (!key || key.kty !== 'RSA') throw new Error('Không tìm thấy khóa Google');
  const pub = crypto.createPublicKey({ key: { kty: 'RSA', n: key.n, e: key.e }, format: 'jwk' });
  const ok = crypto.verify('RSA-SHA256', Buffer.from(h + '.' + p), pub, fromB64url(sig));
  if (!ok) throw new Error('Chữ ký Google không hợp lệ');
  return { sub: payload.sub, email: payload.email || '', name: payload.name || payload.email || 'Bạn Google', picture: payload.picture || '' };
}

async function verifyFacebookToken(userToken) {
  if (env('AUTH_MOCK') === '1' && String(userToken).startsWith('mock.')) {
    const p = unsign(String(userToken).slice(5), 600e3);
    if (!p || p.iss !== 'mock-facebook') throw new Error('Mock Facebook token sai');
    return { id: p.sub, name: p.name || 'Bạn Facebook', email: p.email || '', picture: p.picture || '' };
  }
  const appId = env('FACEBOOK_APP_ID'), appSecret = env('FACEBOOK_APP_SECRET');
  const appTok = appId + '|' + appSecret;
  const dbg = await fetchJson(`https://graph.facebook.com/debug_token?input_token=${encodeURIComponent(userToken)}&access_token=${encodeURIComponent(appTok)}`);
  const data = dbg.json && dbg.json.data;
  if (!data || !data.is_valid || String(data.app_id) !== String(appId)) throw new Error('Token Facebook không hợp lệ');
  const me = await fetchJson(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${encodeURIComponent(userToken)}`);
  if (!me.json || !me.json.id) throw new Error('Không đọc được hồ sơ Facebook');
  const pic = me.json.picture && me.json.picture.data && me.json.picture.data.url;
  return { id: me.json.id, name: me.json.name || 'Bạn Facebook', email: me.json.email || '', picture: pic || '' };
}

function ensureDb(DB) {
  DB.accounts = DB.accounts || {};
  DB.oauthIndex = DB.oauthIndex || {};
  DB.mergeLog = DB.mergeLog || [];
  DB.mergedWallets = DB.mergedWallets || {}; // wallet -> { into, t }
}

function newAccountId() {
  return 'AC' + crypto.randomBytes(8).toString('hex');
}
function newWallet() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const r = crypto.randomBytes(10);
  return 'TA' + [...r].map(x => A[x % A.length]).join('');
}

function accountPub(a) {
  if (!a) return null;
  return {
    id: a.id,
    name: a.name,
    avatar: a.avatar || '',
    email: a.email || '',
    wallet: a.wallet,
    providers: Object.keys(a.providers || {}),
    created: a.created,
    lastLogin: a.lastLogin
  };
}

/** Gộp ví nguồn vào ví đích (atomic trên object DB). */
function mergeWallets(DB, from, into, reason) {
  ensureDb(DB);
  if (!MEMBER_RE.test(from) || !MEMBER_RE.test(into)) throw new Error('Mã ví không hợp lệ');
  if (from === into) return { ok: true, same: true };
  if (DB.mergedWallets[from]) {
    if (DB.mergedWallets[from].into === into) return { ok: true, already: true };
    throw new Error('Ví này đã được gộp trước đó');
  }
  if (DB.mergedWallets[into] && DB.mergedWallets[into].into) {
    // đích đã bị gộp đi chỗ khác — theo dõi
  }
  const wFrom = DB.wallets[from] || { bal: 0, spent: 0, topup: 0, created: now() };
  const wInto = DB.wallets[into] || (DB.wallets[into] = { bal: 0, spent: 0, topup: 0, created: now() });
  const snap = {
    t: now(), reason: reason || 'oauth', from, into,
    balFrom: wFrom.bal || 0, balInto: wInto.bal || 0,
    spentFrom: wFrom.spent || 0
  };
  wInto.bal = (wInto.bal || 0) + (wFrom.bal || 0);
  wInto.spent = (wInto.spent || 0) + (wFrom.spent || 0);
  wInto.topup = (wInto.topup || 0) + (wFrom.topup || 0);
  wInto.refEarned = (wInto.refEarned || 0) + (wFrom.refEarned || 0);
  if (!wInto.ref && wFrom.ref) wInto.ref = wFrom.ref;
  wFrom.bal = 0; wFrom.mergedInto = into; wFrom.mergedAt = now();

  // inventory: union by max until
  DB.inv = DB.inv || {};
  const invF = DB.inv[from] || [];
  const invI = DB.inv[into] || (DB.inv[into] = []);
  const byId = {};
  for (const x of invI) byId[x.id] = x;
  for (const x of invF) {
    if (!byId[x.id]) { invI.push(x); byId[x.id] = x; }
    else if ((x.until || 0) > (byId[x.id].until || 0)) byId[x.id].until = x.until;
  }
  delete DB.inv[from];

  // membership: max until
  DB.members = DB.members || {};
  const mF = DB.members[from], mI = DB.members[into];
  if (mF) {
    if (!mI || (mF.until || 0) > (mI.until || 0)) DB.members[into] = Object.assign({}, mF);
    delete DB.members[from];
  }

  // checkins: keep better streak / more recent
  DB.checkins = DB.checkins || {};
  const cF = DB.checkins[from], cI = DB.checkins[into];
  if (cF) {
    if (!cI) DB.checkins[into] = cF;
    else {
      const streak = Math.max(cF.streak || 0, cI.streak || 0);
      const last = (cF.last || '') >= (cI.last || '') ? cF.last : cI.last;
      DB.checkins[into] = {
        streak, last,
        bonuses: [...(cI.bonuses || []), ...(cF.bonuses || [])].slice(-30)
      };
    }
    delete DB.checkins[from];
  }

  // altars: move if target empty
  DB.altars = DB.altars || {};
  if (DB.altars[from]) {
    if (!DB.altars[into]) { DB.altars[into] = DB.altars[from]; }
    else snap.altarKept = into;
    delete DB.altars[from];
  }

  // rewrite spends / orders wallet references (history)
  for (const s of (DB.spends || [])) if (s.wallet === from) { s.wallet = into; s.mergedFrom = from; }
  for (const o of (DB.orders || [])) if (o.wallet === from) { o.wallet = into; o.mergedFrom = from; }

  DB.mergedWallets[from] = { into, t: now(), reason: reason || 'oauth' };
  DB.mergeLog.push(snap);
  if (DB.mergeLog.length > 5000) DB.mergeLog = DB.mergeLog.slice(-5000);
  return { ok: true, bal: wInto.bal, snap };
}

function findOrCreateAccount(DB, provider, profile) {
  ensureDb(DB);
  const key = provider + ':' + profile.sub;
  let id = DB.oauthIndex[key];
  let a = id && DB.accounts[id];
  if (!a) {
    // link by email if another account has same email
    if (profile.email) {
      const hit = Object.values(DB.accounts).find(x => x.email && x.email.toLowerCase() === profile.email.toLowerCase());
      if (hit) { a = hit; id = hit.id; }
    }
  }
  if (!a) {
    id = newAccountId();
    a = {
      id, name: String(profile.name || 'Phật tử').slice(0, 40),
      avatar: String(profile.picture || '').slice(0, 500),
      email: String(profile.email || '').slice(0, 120),
      providers: {}, wallet: null, created: now(), lastLogin: now()
    };
    DB.accounts[id] = a;
  }
  a.providers = a.providers || {};
  a.providers[provider] = { id: profile.sub, linkedAt: now() };
  DB.oauthIndex[key] = a.id;
  if (profile.name) a.name = String(profile.name).slice(0, 40);
  if (profile.picture) a.avatar = String(profile.picture).slice(0, 500);
  if (profile.email && !a.email) a.email = String(profile.email).slice(0, 120);
  a.lastLogin = now();
  return a;
}

function attachWallet(DB, account, deviceWallet, nick) {
  ensureDb(DB);
  let merge = null;
  const dw = MEMBER_RE.test(deviceWallet || '') ? deviceWallet : null;
  if (dw && DB.mergedWallets[dw]) {
    // device wallet already merged — use its target if matches or follow chain
    const into = DB.mergedWallets[dw].into;
    if (!account.wallet) account.wallet = into;
    else if (account.wallet !== into && account.wallet !== dw) merge = mergeWallets(DB, into, account.wallet, 'oauth-relink');
  } else if (!account.wallet) {
    account.wallet = dw || newWallet();
    if (!DB.wallets[account.wallet]) DB.wallets[account.wallet] = { bal: 0, spent: 0, topup: 0, created: now() };
  } else if (dw && dw !== account.wallet) {
    merge = mergeWallets(DB, dw, account.wallet, 'oauth-login');
  }
  if (nick) account.name = String(nick).slice(0, 40) || account.name;
  return { account, merge };
}

function sessionFor(account) {
  return sign({ aid: account.id, wid: account.wallet, iat: now(), exp: now() + 30 * DAY });
}

function readSession(req, DB) {
  ensureDb(DB);
  const c = parseCookies(req).cta_sess;
  const s = unsign(c, 31 * DAY);
  if (!s || !s.aid) return null;
  const a = DB.accounts[s.aid];
  if (!a) return null;
  return { sess: s, account: a };
}

function redirectUri(provider) {
  const base = publicBase() || ('http://localhost:' + (process.env.PORT || 8080));
  return base + '/api/auth/callback/' + provider;
}

function makeState(obj) {
  return sign(Object.assign({ iat: now(), exp: now() + 600e3 }, obj));
}

module.exports = function installAuth({ DB, markDirty }) {
  ensureDb(DB);
  const P = () => providers();

  function J(res, code, o, h = {}) {
    res.writeHead(code, Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, h));
    res.end(JSON.stringify(o));
  }
  function redirect(res, loc) {
    res.writeHead(302, { Location: loc, 'Cache-Control': 'no-store' });
    res.end();
  }
  function html(res, code, body) {
    res.writeHead(code, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(body);
  }

  async function handle(req, res, u) {
    const prov = P();
    try {
      if (u === '/api/auth/providers' && req.method === 'GET') {
        return J(res, 200, {
          google: prov.google, facebook: prov.facebook, oneTap: prov.oneTap,
          googleClientId: prov.oneTap ? prov.googleClientId : '',
          mock: !!prov.mock, configured: !!(prov.google || prov.facebook)
        }), true;
      }

      if (u === '/api/auth/me' && req.method === 'GET') {
        const s = readSession(req, DB);
        if (!s) return J(res, 200, { ok: false }), true;
        return J(res, 200, { ok: true, account: accountPub(s.account) }), true;
      }

      if (u === '/api/auth/logout' && req.method === 'POST') {
        setCookie(res, 'cta_sess', '', { clear: true });
        return J(res, 200, { ok: true }), true;
      }

      if (u === '/api/auth/delete' && req.method === 'POST') {
        const s = readSession(req, DB);
        if (!s) return J(res, 401, { error: 'Chưa đăng nhập' }), true;
        const a = s.account;
        for (const k of Object.keys(a.providers || {})) delete DB.oauthIndex[k + ':' + a.providers[k].id];
        // keep wallet data (xu) but detach account — privacy delete of PII
        const tomb = { id: a.id, deleted: now(), wallet: a.wallet };
        delete DB.accounts[a.id];
        DB.mergeLog.push({ t: now(), reason: 'account-delete', account: tomb });
        markDirty();
        setCookie(res, 'cta_sess', '', { clear: true });
        return J(res, 200, { ok: true, walletKept: a.wallet }), true;
      }

      /* ---- start OAuth ---- */
      if ((u === '/api/auth/start/google' || u === '/api/auth/start/facebook') && req.method === 'GET') {
        const provider = u.endsWith('google') ? 'google' : 'facebook';
        if (provider === 'google' && !prov.google) return J(res, 400, { error: 'Chưa cấu hình Google' }), true;
        if (provider === 'facebook' && !prov.facebook) return J(res, 400, { error: 'Chưa cấu hình Facebook' }), true;
        const q = new URL(req.url, 'http://x').searchParams;
        const wallet = String(q.get('wallet') || '');
        const name = String(q.get('name') || '').slice(0, 40);
        const state = makeState({ provider, wallet: MEMBER_RE.test(wallet) ? wallet : '', name, n: crypto.randomBytes(8).toString('hex') });
        setCookie(res, 'cta_oauth', state, { maxAge: 600 });

        if (prov.mock && (env('AUTH_MOCK') === '1' || (!env('GOOGLE_CLIENT_ID') && provider === 'google') || (!env('FACEBOOK_APP_ID') && provider === 'facebook'))) {
          return redirect(res, `/api/auth/callback/${provider}?code=mock&state=${encodeURIComponent(state)}`), true;
        }
        if (provider === 'google') {
          const params = new URLSearchParams({
            client_id: env('GOOGLE_CLIENT_ID'),
            redirect_uri: redirectUri('google'),
            response_type: 'code',
            scope: 'openid email profile',
            state,
            access_type: 'online',
            prompt: 'select_account'
          });
          return redirect(res, 'https://accounts.google.com/o/oauth2/v2/auth?' + params), true;
        }
        const params = new URLSearchParams({
          client_id: env('FACEBOOK_APP_ID'),
          redirect_uri: redirectUri('facebook'),
          state,
          scope: 'public_profile,email'
        });
        return redirect(res, 'https://www.facebook.com/v18.0/dialog/oauth?' + params), true;
      }

      /* ---- callback ---- */
      if ((u === '/api/auth/callback/google' || u === '/api/auth/callback/facebook') && req.method === 'GET') {
        const provider = u.includes('google') ? 'google' : 'facebook';
        const q = new URL(req.url, 'http://x').searchParams;
        const err = q.get('error');
        if (err) return redirect(res, '/?auth=err&msg=' + encodeURIComponent('Đăng nhập bị hủy')), true;
        const stateTok = q.get('state') || '';
        const cookieState = parseCookies(req).cta_oauth;
        const st = unsign(stateTok, 600e3) || unsign(cookieState, 600e3);
        if (!st || st.provider !== provider) return redirect(res, '/?auth=err&msg=' + encodeURIComponent('Phiên đăng nhập hết hạn, xin thử lại')), true;
        setCookie(res, 'cta_oauth', '', { clear: true });

        let profile;
        const code = q.get('code') || '';
        if (code === 'mock' && (env('AUTH_MOCK') === '1' || env('PAY_TEST') === '1')) {
          profile = {
            sub: 'mock-' + provider + '-' + (st.wallet || 'anon').slice(-6),
            email: provider + '.mock@example.com',
            name: st.name || (provider === 'google' ? 'Bạn Google' : 'Bạn Facebook'),
            picture: ''
          };
        } else if (provider === 'google') {
          const tok = await postForm('https://oauth2.googleapis.com/token', {
            code, client_id: env('GOOGLE_CLIENT_ID'), client_secret: env('GOOGLE_CLIENT_SECRET'),
            redirect_uri: redirectUri('google'), grant_type: 'authorization_code'
          });
          if (!tok.json || !tok.json.id_token) return redirect(res, '/?auth=err&msg=' + encodeURIComponent('Google không trả id_token')), true;
          const g = await verifyGoogleIdToken(tok.json.id_token);
          profile = { sub: g.sub, email: g.email, name: g.name, picture: g.picture };
        } else {
          const tok = await postForm('https://graph.facebook.com/v18.0/oauth/access_token', {
            client_id: env('FACEBOOK_APP_ID'), client_secret: env('FACEBOOK_APP_SECRET'),
            redirect_uri: redirectUri('facebook'), code
          });
          if (!tok.json || !tok.json.access_token) return redirect(res, '/?auth=err&msg=' + encodeURIComponent('Facebook không trả access_token')), true;
          const f = await verifyFacebookToken(tok.json.access_token);
          profile = { sub: f.id, email: f.email, name: f.name, picture: f.picture };
        }

        const account = findOrCreateAccount(DB, provider, profile);
        const { merge } = attachWallet(DB, account, st.wallet, st.name || profile.name);
        markDirty();
        setCookie(res, 'cta_sess', sessionFor(account), { maxAge: 30 * 24 * 3600 });
        const qs = new URLSearchParams({
          auth: 'ok', provider,
          nick: account.name || '',
          wallet: account.wallet || '',
          merged: merge && !merge.same && !merge.already ? '1' : '0'
        });
        return redirect(res, '/?' + qs.toString()), true;
      }

      /* ---- Google One Tap / GIS credential ---- */
      if (u === '/api/auth/google/onetap' && req.method === 'POST') {
        if (!prov.google && !prov.mock) return J(res, 400, { error: 'Chưa cấu hình Google' }), true;
        let b = '';
        b = await new Promise((ok, no) => { let s = ''; req.on('data', d => { s += d; if (s.length > 8192) { no(new Error('big')); req.destroy(); } }); req.on('end', () => ok(s)); });
        let body; try { body = JSON.parse(b || '{}'); } catch (e) { return J(res, 400, { error: 'JSON lỗi' }), true; }
        const g = await verifyGoogleIdToken(String(body.credential || body.id_token || ''));
        const account = findOrCreateAccount(DB, 'google', { sub: g.sub, email: g.email, name: g.name, picture: g.picture });
        const { merge } = attachWallet(DB, account, body.wallet, body.name || g.name);
        markDirty();
        setCookie(res, 'cta_sess', sessionFor(account), { maxAge: 30 * 24 * 3600 });
        return J(res, 200, { ok: true, account: accountPub(account), merged: !!(merge && !merge.same && !merge.already) }), true;
      }

      /* ---- mock login (test only) ---- */
      if (u === '/api/auth/mock/login' && req.method === 'POST') {
        if (!(env('AUTH_MOCK') === '1' || env('PAY_TEST') === '1')) return J(res, 403, { error: 'Mock tắt' }), true;
        if (!env('SESSION_SECRET')) return J(res, 400, { error: 'Thiếu SESSION_SECRET' }), true;
        let b = '';
        b = await new Promise((ok, no) => { let s = ''; req.on('data', d => { s += d; if (s.length > 4096) { no(new Error('big')); req.destroy(); } }); req.on('end', () => ok(s)); });
        let body; try { body = JSON.parse(b || '{}'); } catch (e) { return J(res, 400, { error: 'JSON lỗi' }), true; }
        const provider = body.provider === 'facebook' ? 'facebook' : 'google';
        const profile = {
          sub: String(body.sub || ('test-' + provider + '-' + crypto.randomBytes(3).toString('hex'))),
          email: String(body.email || ''),
          name: String(body.name || (provider === 'google' ? 'Test Google' : 'Test Facebook')).slice(0, 40),
          picture: ''
        };
        const account = findOrCreateAccount(DB, provider, profile);
        const { merge } = attachWallet(DB, account, body.wallet, body.name || profile.name);
        markDirty();
        setCookie(res, 'cta_sess', sessionFor(account), { maxAge: 30 * 24 * 3600 });
        return J(res, 200, { ok: true, account: accountPub(account), merge }), true;
      }

      /* ---- admin accounts ---- */
      if (u === '/admin/api/accounts' && req.method === 'GET') {
        return null; // let pay.js adminOk handle — actually we need admin here
      }

      return false;
    } catch (e) {
      console.warn('auth', e.message);
      if (u.includes('/callback/')) return redirect(res, '/?auth=err&msg=' + encodeURIComponent(e.message || 'Lỗi đăng nhập')), true;
      return J(res, 400, { error: e.message || 'Lỗi' }), true;
    }
  }

  function adminList(q) {
    ensureDb(DB);
    const s = String(q || '').toLowerCase().trim();
    return Object.values(DB.accounts).filter(a => {
      if (!s) return true;
      return (a.name || '').toLowerCase().includes(s) || (a.email || '').toLowerCase().includes(s)
        || (a.wallet || '').toLowerCase().includes(s) || (a.id || '').toLowerCase().includes(s)
        || Object.keys(a.providers || {}).some(p => (a.providers[p].id || '').includes(s));
    }).sort((a, b) => (b.lastLogin || 0) - (a.lastLogin || 0)).slice(0, 200).map(accountPub);
  }

  return {
    handle, providers: P, readSession, accountPub, mergeWallets, adminList,
    ensureDb, findOrCreateAccount, attachWallet, sessionFor, setCookie, verifyGoogleIdToken, verifyFacebookToken
  };
};
