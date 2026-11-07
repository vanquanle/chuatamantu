/* Chùa Tâm An — máy chủ nhiều người chơi (một file).
 * - Phục vụ trang web tĩnh ở thư mục cha (../)
 * - WebSocket /ws: đồng bộ vị trí/tư thế, trò chuyện, bộ đếm mõ chung,
 *   hoa đăng, cầu nguyện, tường nến, phóng sinh cá, khóa tụng kinh 19:00.
 * - Công đức / vật phẩm đặc biệt / bảng cầu an / hội viên: xem pay.js (duyệt tay qua /admin, hoặc PayOS tự động).
 * Không đăng nhập; chỉ lưu biệt danh và (nếu là hội viên) mã hội viên ngẫu nhiên do máy người dùng tạo. */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8080;
const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json');
let ROOM_MAX = +process.env.ROOM_MAX || 0; if (!ROOM_MAX) { try { ROOM_MAX = +JSON.parse(fs.readFileSync(process.env.CONFIG_FILE || path.join(__dirname, 'config.json'), 'utf8')).roomMax || 0; } catch (e) { } } ROOM_MAX = Math.max(2, Math.min(500, ROOM_MAX || 50));
const CHANT = { hour: 20, min: 0, tz: 7, dur: 20 * 60 }; // 20:00 giờ Việt Nam, 20 phút

/* ---------------- Lọc từ ngữ ---------------- */
const BAD = ['dm','dmm','dcm','dkm','vcl','vkl','vl','cl','clm','cc','dit','du ma','du me','dume','duma','lon','cac','buoi','deo','dech','di~','con di','dieu','cho chet','oc cho','occho','ngu','fuck','fck','shit','bitch','dick','pussy','cunt','sex','porn','dmvn','xxx','djt','dit me','dit moe'];
const BAD_STRICT = new Set(['lon','cac','buoi','deo','ngu','cl','cc','vl','dm','dmm','dcm','dkm','djt','dit','sex','xxx']);
const AMB = { lon: /[ồôổ]/, cac: /[ặạắc]{2}|ặ|ạ/, buoi: /ồ/, deo: /é/ };
function strip(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase();}
function clean(text, max){
  if (typeof text !== 'string') return '';
  let t = text.replace(/[\u0000-\u001f\u007f<>]/g,' ').replace(/\s+/g,' ').trim().slice(0, max);
  t = t.replace(/(https?:\/\/|www\.)\S+/gi,'***').replace(/\b\S+\.(com|net|vn|org|io|xyz|me|ly)\b\S*/gi,'***');
  const words = t.split(' ');
  const out = words.map(w => {
    const s = strip(w).replace(/[^a-z0-9]/g,'').replace(/(.)\1{2,}/g,'$1');
    if (!s) return w;
    if (AMB[s] && !AMB[s].test(w.toLowerCase())) return w;
    if (BAD_STRICT.has(s)) return '***';
    for (const b of BAD) { const bb = b.replace(/[^a-z]/g,''); if (bb.length >= 4 && s.includes(bb)) return '***'; }
    return w;
  });
  // cụm 2 từ (vd "du ma")
  for (let i = 0; i < out.length - 1; i++) {
    const pair = strip(words[i] + ' ' + words[i+1]).replace(/[^a-z ]/g,'');
    if (['du ma','du me','dit me','con di','cho chet','oc cho','dit moe'].includes(pair)) { out[i] = '***'; out[i+1] = '***'; }
  }
  return out.join(' ').trim();
}
function cleanName(n){ let s = clean(n, 18).replace(/\*+/g,'').trim(); return s || 'Phật tử'; }
const COLOR_RE = /^#[0-9a-fA-F]{6}$/;

/* ---------------- Dữ liệu chung ---------------- */
let DB = { prayers: [], candles: [], fishes: [], lanterns: {}, mo: {}, moGlobal: 0, visits: 0, chantTotal: 0, nextId: 1 };
try { Object.assign(DB, JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))); } catch (e) {}
let dirty = false;
setInterval(() => { if (!dirty) return; dirty = false; fs.writeFile(DATA_FILE, JSON.stringify(DB), () => {}); }, 30000);
const nid = () => (DB.nextId++).toString(36);
/* lễ vật: thời gian cháy + giới hạn mỗi nơi (server/config.json → offerings) */
let OFFER = { incense: { lifeMin: 20, capSticks: 30 }, candle: { lifeMin: 60, cap: 72 }, lotusLamp: { lifeMin: 60, cap: 30 }, lantern: { lifeMin: 45, cap: 40 } };
try { const c = JSON.parse(fs.readFileSync(process.env.CONFIG_FILE || path.join(__dirname, 'config.json'), 'utf8')); if (c.offerings) for (const k in OFFER) Object.assign(OFFER[k], c.offerings[k] || {}); } catch (e) {}
const LIFE = k => Math.max(1, +OFFER[k].lifeMin || 30) * 60e3;
DB.incense = DB.incense || {};
function capIncense(L){ let n = L.reduce((a, x) => a + x.n, 0); while (n > OFFER.incense.capSticks && L.length) n -= L.shift().n; return L; }
function capLanterns(L){ const lake = L.filter(l => l.l), pond = L.filter(l => !l.l); return [...pond.slice(-OFFER.lotusLamp.cap), ...lake.slice(-OFFER.lantern.cap)].sort((a, b) => a.t - b.t); }
function prune(){
  const now = Date.now();
  DB.candles = DB.candles.filter(c => now - c.t < LIFE('candle')).slice(-OFFER.candle.cap);
  DB.prayers = DB.prayers.slice(-200);
  DB.fishes = DB.fishes.filter(f => now - f.t < 3*24*3600e3).slice(-24);
  for (const k in DB.lanterns) DB.lanterns[k] = capLanterns(DB.lanterns[k].filter(l => now - l.t < LIFE(l.l ? 'lantern' : 'lotusLamp')));
  for (const k in DB.incense) for (const loc in DB.incense[k]) DB.incense[k][loc] = DB.incense[k][loc].filter(x => now - x.t < LIFE('incense'));
}
setInterval(prune, 60000); prune();

/* ---------------- Phòng ---------------- */
const rooms = new Map();
function makeRoom(id){ const r = { id, name: 'Chùa ' + id, players: new Map() }; rooms.set(id, r); if (!DB.lanterns[id]) DB.lanterns[id] = []; if (!DB.mo[id]) DB.mo[id] = 0; return r; }
[1,2,3].forEach(makeRoom);
function pickRoom(want){
  if (want && rooms.has(want) && rooms.get(want).players.size < ROOM_MAX) return rooms.get(want);
  let best = null;
  for (const r of rooms.values()) if (r.players.size < ROOM_MAX && (!best || r.players.size > best.players.size)) best = r;
  if (!best) { let k = 1; while (rooms.has(k)) k++; best = makeRoom(k); }
  return best;
}
/* số người chỉ hiển thị ước chừng (làm tròn) để không lộ chính xác ai đang ở đâu */
const approx = n => n < 10 ? n : Math.round(n / 5) * 5;
const roomList = () => [...rooms.values()].filter(r => !r.priv).sort((a, b) => a.id - b.id).map(r => ({ id: r.id, name: r.name, n: approx(r.players.size), max: ROOM_MAX, full: r.players.size >= ROOM_MAX }));
/* mã bạn đạo: 5 ký tự dễ đọc, không trùng người đang online */
const CODES = new Map(); const CA = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function newCode() { for (;;) { let c = ''; for (let i = 0; i < 5; i++) c += CA[Math.floor(Math.random() * CA.length)]; if (!CODES.has(c)) return c; } }
let online = 0;


/* Phục vụ file tĩnh: nén gzip/brotli (lưu sẵn trong RAM), ETag + 304, cache dài cho ảnh/mô hình và file có ?v= */
const zlib = require('zlib');
const ZCACHE = new Map(); const ZTYPES = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt', '.wasm', '.glb', '.md']);
function cacheHeader(ext, u, q) {
  if (ext === '.html') return 'no-cache';
  if (/(^|&)v=/.test(q)) return 'public, max-age=31536000, immutable';
  if (u.startsWith('/assets/') || u.startsWith('/fonts/')) return 'public, max-age=2592000, stale-while-revalidate=86400';
  return 'public, max-age=3600, stale-while-revalidate=86400';
}
function serveStatic(req, res, fp, u) {
  fs.stat(fp, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); return res.end('Không tìm thấy'); }
    const ext = path.extname(fp).toLowerCase(); const q = (req.url.split('?')[1] || '');
    const etag = 'W/"' + st.size.toString(36) + '-' + Math.floor(st.mtimeMs).toString(36) + '"';
    const h = { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': cacheHeader(ext, u, q), 'ETag': etag, 'Vary': 'Accept-Encoding', 'X-Content-Type-Options': 'nosniff' };
    if (req.headers['if-none-match'] === etag) { res.writeHead(304, h); return res.end(); }
    const ae = String(req.headers['accept-encoding'] || ''); const enc = ZTYPES.has(ext) && st.size > 1024 ? (/\bbr\b/.test(ae) ? 'br' : /\bgzip\b/.test(ae) ? 'gzip' : null) : null;
    if (!enc) { h['Content-Length'] = st.size; res.writeHead(200, h); if (req.method === 'HEAD') return res.end(); return fs.createReadStream(fp).pipe(res); }
    const key = fp + '|' + enc; const c = ZCACHE.get(key);
    const send = buf => { if (buf.length >= st.size * 0.95) { h['Content-Length'] = st.size; res.writeHead(200, h); return req.method === 'HEAD' ? res.end() : fs.createReadStream(fp).pipe(res); }
      h['Content-Encoding'] = enc; h['Content-Length'] = buf.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : buf); };
    if (c && c.etag === etag) return send(c.buf);
    fs.readFile(fp, (e2, raw) => { if (e2) { res.writeHead(500); return res.end(); }
      const done = (e3, buf) => { if (e3) buf = raw; ZCACHE.set(key, { etag, buf }); send(buf); };
      if (enc === 'br') zlib.brotliCompress(raw, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 9, [zlib.constants.BROTLI_PARAM_SIZE_HINT]: raw.length } }, done); else zlib.gzip(raw, { level: 9 }, done); });
  });
}

/* ---------------- HTTP tĩnh ---------------- */
const MIME = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.txt':'text/plain; charset=utf-8', '.md':'text/plain; charset=utf-8', '.ico':'image/x-icon', '.mp3':'audio/mpeg' };
const server = http.createServer((req, res) => {
  let u = decodeURIComponent((req.url || '/').split('?')[0]);
  if (u === '/health') { res.writeHead(200, {'Content-Type':'application/json'}); return res.end(JSON.stringify({ ok: true, online, rooms: roomList() })); }
  if (u === '/api/stats') { res.writeHead(200, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}); return res.end(JSON.stringify({ online, rooms: roomList(), moGlobal: DB.moGlobal })); }
  if (u.startsWith('/api/') || u === '/admin' || u.startsWith('/admin/')) { PAY.handle(req, res, u).then(done => { if (!done) { res.writeHead(404); res.end(); } }); return; }
  if (u.endsWith('/')) u += 'index.html';
  const fp = path.normalize(path.join(ROOT, u));
  if (!fp.startsWith(ROOT) || fp.includes(`${path.sep}server${path.sep}`) || path.basename(fp).startsWith('.')) { res.writeHead(403); return res.end('403'); }
  serveStatic(req, res, fp, u);
});

/* ---------------- WebSocket ---------------- */
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 4096 });
const send = (ws, o) => { if (ws.readyState === 1) ws.send(JSON.stringify(o)); };
const bcast = (room, o, except) => { const s = JSON.stringify(o); for (const p of room.players.values()) if (p.ws !== except && p.ws.readyState === 1) p.ws.send(s); };
const bcastAll = o => { const s = JSON.stringify(o); for (const r of rooms.values()) for (const p of r.players.values()) if (p.ws.readyState === 1) p.ws.send(s); };
const pub = p => ({ id: p.id, name: p.name, color: p.color, s: p.s, b: p.b ? 1 : 0, g: p.g || {} });
/* đồ lưu niệm đang mặc: chỉ nhận món có trong túi đồ của ví (kiểm tra ở máy chủ) */
const GEAR_SLOTS = ['ao', 'non', 'toc', 'chuoi', 'giay', 'tay', 'nhang', 'den'];
function cleanGear(P, g) { const out = {}; if (!g || typeof g !== 'object') return out; const L = PAY.shopList ? PAY.shopList() : [];
  for (const k of GEAR_SLOTS) { const id = String(g[k] || ''); const it = L.find(i => i.id === id && i.kind === k); if (it && PAY.hasItem(P.wallet, id)) out[k] = id; } return out; }
const paidToday = (P, item) => !!P.b || (!!P.wallet && recentSpend(P.wallet, item));
function recentSpend(wc, item) { const t = Date.now() - 864e5; const sp = (DB.spends || []); for (let i = sp.length - 1; i >= 0 && sp[i].t > t; i--) if (sp[i].wallet === wc && sp[i].item === item) return true; return false; }
function limiter(per, ms){ const hits = []; return () => { const n = Date.now(); while (hits.length && n - hits[0] > ms) hits.shift(); if (hits.length >= per) return false; hits.push(n); return true; }; }
const num = (v, lo, hi) => { v = +v; return Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : 0; };
/* Cây bồ đề chung: bộ đếm toàn chùa, mỗi ví (hoặc mỗi kết nối nếu chưa có ví) cộng tối đa 1 lượt / 60 giây; phát cho mọi người tối đa 1 lần / 2 giây */
const bodeHits = new Map(); let bodeQ = false;
function bodeAdd(key) { if (!key) return; const t = Date.now(); if (t - (bodeHits.get(key) || 0) < 60000) return; bodeHits.set(key, t); if (bodeHits.size > 5000) bodeHits.clear(); DB.bode = (DB.bode || 0) + 1; dirty = true; bodeQ = true; }
setInterval(() => { if (bodeQ) { bodeQ = false; bcastAll({ t: 'bode', n: DB.bode || 0 }); } }, 2000);
/* Gác chuông: tiếng chuông phát cho cả chùa (mọi phòng), mỗi người tối đa 1 tiếng / 6 giây, cả chùa tối đa 20 tiếng / phút */
let bellWin = [];
const PAY = require('./pay.js')({ bodeAdd, DB, markDirty: () => { dirty = true; }, bcastAll, clean,
  toWallet: (code, msg) => { for (const r of rooms.values()) for (const p of r.players.values()) if (p.wallet === code) send(p.ws, msg); },
  setMember: (code, until) => { for (const r of rooms.values()) for (const p of r.players.values()) if (p.wallet === code || p.member === code) { p.member = code; p.b = 1; bcast(r, { t: 'meta', id: p.id, name: p.name, color: p.color, b: 1 }); send(p.ws, { t: 'member', code, until }); } } });

wss.on('connection', (ws, req) => {
  ws.alive = true; ws.on('pong', () => ws.alive = true);
  let P = null, R = null;
  const lim = { msg: limiter(60, 1000), chat: limiter(6, 20000), chatGap: limiter(1, 1200), post: limiter(3, 60000), act: limiter(10, 5000), offer: limiter(12, 60000), feed: limiter(8, 4000) };
  function join(room){
    R = room; R.players.set(P.id, P); online++;
    send(ws, { t: 'welcome', id: P.id, code: P.code, room: { id: R.id, name: R.name }, roomMax: ROOM_MAX, rooms: roomList(), players: [...R.players.values()].filter(x => x !== P).map(pub),
      mo: DB.mo[R.id] || 0, moGlobal: DB.moGlobal, bode: DB.bode || 0, bells: DB.bells || 0, lanterns: DB.lanterns[R.id] || [], scrolls: (DB.scrolls || {})[R.id] || [], locks: (DB.locks || {})[R.id] || [], ribbons: (DB.ribbons || {})[R.id] || [], releases: ((DB.releases || {})[R.id] || []).slice(-8), prayers: DB.prayers.slice(-60), candles: DB.candles.slice(-OFFER.candle.cap), incense: DB.incense[R.id] || {}, offer: OFFER, fishes: DB.fishes,
      now: Date.now(), pot: (R.pot || []).length, dishes: R.dishes || [], chant: CHANT, chantTotal: DB.chantTotal, online });
    bcast(R, { t: 'join', p: pub(P) }, ws);
  }
  function leave(){ if (!R || !P) return; R.players.delete(P.id); online--; bcast(R, { t: 'leave', id: P.id }); if (R.priv && !R.players.size) { rooms.delete(R.id); delete DB.lanterns[R.id]; delete DB.mo[R.id]; } R = null; }
  function cd(action) { if (!P || !P.wallet || !PAY.deed) return; try { const r = PAY.deed(P.wallet, action); if (r && (r.added || r.msg)) send(ws, r); } catch (e) {} }
  ws.on('message', buf => {
    if (!lim.msg()) return;
    let m; try { m = JSON.parse(buf); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;
    if (m.t === 'hello' && !P) {
      P = { id: nid(), code: newCode(), name: cleanName(m.name), color: COLOR_RE.test(m.color) ? m.color : '#8c8c8c', s: [0, 0.9, -14, 0, 0], ws };
      if (/^TA[A-Z0-9]{10}$/.test(String(m.member || ''))) P.wallet = m.member;
      if (PAY.isMember(m.member)) { P.member = m.member; P.b = 1; }
      CODES.set(P.code, P); DB.visits++; dirty = true;
      return join(pickRoom(+m.room || 0));
    }
    if (!P) return;
    switch (m.t) {
      case 'st': { // [x,y,z,rotY,pose]
        const s = m.s; if (!Array.isArray(s)) return;
        P.s = [num(s[0],-80,80), num(s[1],-2,12), num(s[2],-120,80), num(s[3],-10,10), num(s[4],0,9)|0]; P.dirty = true; break; }
      case 'chat': {
        if (!lim.chatGap() || !lim.chat()) return send(ws, { t: 'notice', msg: 'Xin nói chậm lại một chút 🙏' });
        const txt = clean(m.text, 120); if (!txt || /^\**$/.test(txt.replace(/\s/g,''))) return;
        bcast(R, { t: 'chat', id: P.id, name: P.name, text: txt }); break; }
      case 'bell': { const t = Date.now(); if (t - (P.bellT || 0) < 6000) return send(ws, { t: 'notice', msg: 'Xin đợi tiếng chuông ngân dứt rồi hãy thỉnh tiếp 🙏' }); bellWin = bellWin.filter(x => t - x < 60000); if (bellWin.length >= 20) return send(ws, { t: 'notice', msg: 'Chuông đang ngân, xin đợi giây lát 🙏' });
        P.bellT = t; bellWin.push(t); DB.bells = (DB.bells || 0) + 1; dirty = true; bodeAdd(P.wallet || P.id); const msg = clean(m.msg, 60);
        bcastAll({ t: 'bell', id: P.id, name: P.name, msg, n: DB.bells }); cd('bell'); break; }
      case 'act': { const a = String(m.a || '').slice(0, 12); if (!/^[a-z]+$/.test(a)) return; if (a === 'huong' || a === 'thaphuong') bodeAdd(P.wallet || P.id);
        const offer = a === 'huong' || a === 'thaphuong';
        if (offer) { // nén hương luôn được ghi nhận (không chặn người dâng), giới hạn số que mỗi lư hương theo FIFO
          const loc = a === 'huong' && P.s && P.s[2] < -11 ? 'bowl' : 'urn'; const n = Math.max(1, Math.min(9, num(m.v, 1, 9)|0 || 3));
          const I = DB.incense[R.id] = DB.incense[R.id] || {}; const sk = P.g && P.g.nhang ? 1 : 0; I[loc] = capIncense([...(I[loc] || []), Object.assign({ id: nid(), t: Date.now(), n }, sk ? { k: 1 } : {})]); dirty = true;
          if (!lim.act()) return; bcast(R, Object.assign({ t: 'act', id: P.id, a, v: n, loc }, sk ? { k: 1 } : {}), ws); cd(a === 'thaphuong' ? 'huong' : a); break; }
        if (!lim.act()) return; bcast(R, { t: 'act', id: P.id, a, v: num(m.v, 0, 9)|0 }, ws); if (['lay', 'huong', 'hoa', 'khanh', 'mo', 'chaptay'].includes(a)) cd(a); break; }
      case 'mo': { const n = num(m.n, 0, 40) | 0; if (!n) return; DB.mo[R.id] = (DB.mo[R.id] || 0) + n; DB.moGlobal += n; R.moDirty = true; dirty = true; break; }
      case 'feed': { if (!lim.feed()) return; bcast(R, { t: 'feed', id: P.id, x: num(m.x,-80,80), z: num(m.z,-80,80) }, ws); cd('feed'); break; }
      case 'lantern': case 'prayer': case 'candle': case 'fish': {
        const isOffer = m.t === 'lantern' || m.t === 'candle';
        const okRate = isOffer ? lim.offer() : lim.post();
        if (!okRate && !isOffer) return send(ws, { t: 'notice', msg: 'Bạn vừa gửi rồi, đợi một chút nhé 🙏' });
        if (!okRate) { // lễ vật không bao giờ bị chặn: dâng quá nhanh thì vẫn hiện cho chính người dâng (không phát cho cả chùa, không lưu)
          const own = { id: nid(), name: P.name, text: clean(m.text, 80) || 'Nguyện bình an', t: Date.now(), c: num(m.c, 0, 5)|0 }; if (P.g && P.g.den && m.t === 'lantern') own.k = 1;
          if (m.t === 'lantern') { own.x = num(m.x,-80,80); own.z = num(m.z,-120,80); if (m.l) { own.l = 1; own.s = num(m.s, 0, 5)|0; } }
          return send(ws, { t: m.t, item: own }); }
        const text = clean(m.text, m.t === 'prayer' ? 160 : 80);
        const item = { id: nid(), name: P.name, text, t: Date.now() };
        if (m.t === 'lantern') { item.c = num(m.c, 0, 5)|0; if (P.g && P.g.den) item.k = 1; item.x = num(m.x,-80,80); item.z = num(m.z,-120,80); if (m.l) { item.l = 1; item.s = num(m.s, 0, 5)|0; } DB.lanterns[R.id] = capLanterns([...(DB.lanterns[R.id] || []), item]); bcast(R, { t: 'lantern', item }); cd('lantern'); }
        else if (m.t === 'fish') { item.k = num(m.k, 0, 7)|0; DB.fishes.push(item); bcastAll({ t: 'fish', item }); cd('fish'); }
        else if (m.t === 'candle') { item.text = text || 'Nguyện bình an'; item.c = num(m.c, 0, 3)|0; DB.candles.push(item); DB.candles = DB.candles.slice(-OFFER.candle.cap); bcastAll({ t: 'candle', item }); cd('candle'); }
        else { if (!text) return; item.likes = 0; bodeAdd(P.wallet || P.id); DB.prayers.push(item); bcastAll({ t: 'prayer', item }); cd('prayer'); }
        dirty = true; prune(); break; }
      case 'scroll': { // thầy đồ: treo chữ lên vách (giới hạn chữ kiểm tra lại ở máy chủ, giữ 8 bức mới nhất mỗi phòng)
        const W = x => String(x || '').trim().split(/\s+/).filter(Boolean).length, k = String(m.k || '');
        const it = { id: nid(), n: clean(P.name || m.n, 30) || 'Phật tử', k, p: ['do','zo','vang','kim'].includes(m.p) ? m.p : 'do', fr: ['tre','son'].includes(m.fr) ? m.fr : 'tre', f: clean(String(m.f || ''), 24), a: clean(m.a, 60), t: Date.now() };
        if (!/^[A-Za-z ]*$/.test(it.f)) it.f = '';
        if ((it.p === 'kim' || it.fr === 'son') && !(P.b || PAY.hasItem(P.wallet, 'khung_son') || paidToday(P, 'thaydo'))) { it.p = it.p === 'kim' ? 'vang' : it.p; it.fr = 'tre'; }
        if (k === 'chu') { if (!W(it.a) || W(it.a) > 2 || it.a.length > 24) return send(ws, { t: 'notice', msg: 'Xin chữ tối đa 2 từ.' }); it.s = clean(m.s, 40); }
        else if (k === 'doi') { it.b = clean(m.b, 48); if (!W(it.a) || !W(it.b) || W(it.a) > 7 || W(it.b) > 7) return send(ws, { t: 'notice', msg: 'Câu đối: mỗi vế tối đa 7 từ.' }); }
        else if (k === 'ky') { if (!it.a || it.a.length > 25) return send(ws, { t: 'notice', msg: 'Chữ ký tối đa 25 ký tự.' }); }
        else if (k === 'tang') { it.to = clean(m.to, 25); it.from = clean(m.from, 25); if (!it.to || !W(it.a) || W(it.a) > 8) return send(ws, { t: 'notice', msg: 'Lời chúc tối đa 8 từ.' }); }
        else return;
        if (!lim.offer()) return send(ws, { t: 'scroll', item: it });
        DB.scrolls = DB.scrolls || {}; DB.scrolls[R.id] = [...(DB.scrolls[R.id] || []), it].slice(-(OFFER.scroll ? OFFER.scroll.cap : 8)); dirty = true; bcast(R, { t: 'scroll', item: it }); break; }
      case 'release': { // phóng sinh: lưu 30 lượt gần nhất, phát cho cả phòng
        const k = String(m.k || ''); if (!['chep','rua','chim','chepvang','hac'].includes(k)) return; const w = clean(m.w, 90);
        if (w.split(/\s+/).filter(Boolean).length > 12) return send(ws, { t: 'notice', msg: 'Lời nguyện tối đa 12 từ.' });
        const it = { id: nid(), n: clean(P.name || m.n, 30) || 'Phật tử', k: (k === 'chepvang' || k === 'hac') && !paidToday(P, 'phongsinh') ? (k === 'hac' ? 'chim' : 'chep') : k, w, s: Math.random(), t: Date.now() };
        if (!lim.offer()) return send(ws, { t: 'release', item: it });
        DB.releases = DB.releases || {}; DB.releases[R.id] = [...(DB.releases[R.id] || []), it].slice(-(OFFER.release ? OFFER.release.cap : 30)); dirty = true; bcast(R, { t: 'release', item: it }); break; }
      case 'like': { const it = DB.prayers.find(x => x.id === m.id); if (!it || !lim.act()) return; it.likes = (it.likes || 0) + 1; dirty = true; bcastAll({ t: 'like', id: it.id, n: it.likes }); break; }
      case 'pot': { if (!lim.act()) return; const v = num(m.v, 0, 7)|0; R.pot = R.pot || []; R.pot.push(v); let done = false;
        if (R.pot.length >= 6) { done = true; R.pot = []; R.dishes = R.dishes || []; R.dishes.push({ k: 'noichung', name: 'Cả chùa', t: Date.now() }); R.dishes = R.dishes.slice(-8); }
        bcast(R, { t: 'pot', id: P.id, name: P.name, v, n: done ? 6 : R.pot.length, done, dishes: R.dishes || [] }); break; }
      case 'dish': { if (!lim.act()) return; const k = String(m.k || ''); if (!['dauhu','canh','xoigac','che','nem'].includes(k)) return; R.dishes = R.dishes || []; const d = { k, name: P.name, t: Date.now() }; R.dishes.push(d); R.dishes = R.dishes.slice(-8); bcast(R, { t: 'dish', d, dishes: R.dishes }); break; }
      case 'tea': {
        if (!lim.act()) return;
        R.tea = R.tea || { locks: {}, chats: {} };
        const a = String(m.a || '');
        const table = String(m.table || '').slice(0, 8);
        if (a === 'lock' && table) {
          const code = String(m.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
          if (code) R.tea.locks[table] = code; else delete R.tea.locks[table];
          break;
        }
        if (a === 'joinCode') {
          const code = String(m.code || '').toUpperCase();
          const hit = Object.entries(R.tea.locks || {}).find(([, c]) => c === code);
          if (!hit) { send(ws, { t: 'tea', a: 'err', msg: 'Không tìm thấy bàn với mã này' }); break; }
          P.teaTable = hit[0]; send(ws, { t: 'tea', a: 'joined', table: hit[0] }); break;
        }
        if (a === 'join' && table) {
          const need = R.tea.locks[table];
          if (need && String(m.code || '').toUpperCase() !== need) { send(ws, { t: 'tea', a: 'err', msg: 'Bàn đang khóa — cần mã' }); break; }
          P.teaTable = table; send(ws, { t: 'tea', a: 'joined', table }); break;
        }
        if (a === 'chat' && table) {
          if (!lim.chatGap() || !lim.chat()) { send(ws, { t: 'notice', msg: 'Xin nói chậm lại một chút 🙏' }); break; }
          const need = R.tea.locks[table];
          if (need && String(m.code || '').toUpperCase() !== need && P.teaTable !== table) break;
          const text = clean(String(m.text || ''), 80); if (!text) break;
          P.teaTable = table;
          const msg = { t: 'tea', a: 'chat', table, n: P.name, text, at: Date.now() };
          R.tea.chats[table] = (R.tea.chats[table] || []).concat([{ n: P.name, t: text, at: msg.at }]).slice(-40);
          for (const q of R.players.values()) {
            if (q.teaTable === table && q.ws.readyState === 1) send(q.ws, msg);
          }
          break;
        }
        if (a === 'sit' || a === 'pour') { P.teaTable = table || P.teaTable; bcast(R, { t: 'tea', a, table, id: P.id, name: P.name, tea: m.tea }, ws); break; }
        break;
      }
      case 'chant': { DB.chantTotal++; dirty = true; cd('kinh'); break; }
      case 'merit': { if (!P || !PAY.onMerit) return; try { const r = PAY.onMerit(P, m); if (r) send(ws, r); } catch (e) { send(ws, { t: 'congduc', error: 'Không ghi được công đức' }); } break; }
      case 'member': { if (/^TA[A-Z0-9]{10}$/.test(String(m.code || ''))) P.wallet = m.code; if (PAY.isMember(m.code)) { P.member = m.code; P.b = 1; bcast(R, { t: 'meta', id: P.id, name: P.name, color: P.color, b: 1 }); } break; }
      case 'private': { // phòng thiền riêng cho hội viên
        if (!P.b || !PAY.isMember(P.member)) return send(ws, { t: 'notice', msg: 'Phòng thiền riêng dành cho hội viên 🪷' });
        const id = 'p' + P.id; if (R && R.id === id) return; let pr = rooms.get(id); if (!pr) { pr = { id, name: 'Phòng thiền riêng', players: new Map(), priv: true }; rooms.set(id, pr); DB.lanterns[id] = []; DB.mo[id] = 0; }
        leave(); join(pr); break; }
      case 'rooms': { if (!lim.act()) return; send(ws, { t: 'rooms', rooms: roomList(), cur: R && R.id }); break; }
      case 'friend': { if (!lim.act()) return; const q = String(m.q || '').trim().slice(0, 24); if (!q) return; const Q = q.toUpperCase().replace(/^#/, '');
        let F = CODES.get(Q); if (!F) { const lq = q.toLowerCase(); for (const r of rooms.values()) { if (r.priv) continue; for (const p of r.players.values()) if (p !== P && p.name.toLowerCase() === lq) { F = p; break; } if (F) break; } }
        let fr = null; if (F) for (const r of rooms.values()) if (r.players.has(F.id)) fr = r;
        if (!F || F === P || !fr) return send(ws, { t: 'friend', ok: false, why: F === P ? 'self' : 'none' });
        if (fr.priv) return send(ws, { t: 'friend', ok: false, why: 'priv' });
        if (fr === R) return send(ws, { t: 'friend', ok: true, same: 1, name: F.name, room: fr.id });
        if (fr.players.size >= ROOM_MAX) return send(ws, { t: 'friend', ok: false, why: 'full', room: fr.id });
        send(ws, { t: 'friend', ok: true, name: F.name, room: fr.id }); leave(); join(fr); break; }
      case 'room': { const want = +m.room; if (!rooms.has(want) || R.id === want || rooms.get(want).players.size >= ROOM_MAX) return; leave(); join(rooms.get(want)); break; }
      case 'lock': case 'ribbon': { // cầu tình duyên: khóa tình yêu trên lan can cầu (30) và chỉ đỏ trên cây duyên (24)
        const wc = x => String(x || '').trim().split(/\s+/).filter(Boolean).length; const isLock = m.t === 'lock';
        const it = { id: nid(), n: clean(P.name, 30) || 'Phật tử', w: clean(m.w, 90), t: Date.now() };
        if (wc(it.w) > (isLock ? 12 : 20)) return send(ws, { t: 'notice', msg: isLock ? 'Lời hẹn tối đa 12 từ.' : 'Lời nguyện tối đa 20 từ.' });
        if (isLock) { it.a = clean(m.a, 20); it.b = clean(m.b, 20); if (!it.a || !it.b) return send(ws, { t: 'notice', msg: 'Xin khắc đủ hai tên (tối đa 20 ký tự mỗi tên).' });
          it.k = ['do', 'bac', 'hong', 'vang', 'ngoc'].includes(m.k) ? m.k : 'do'; if ((it.k === 'vang' || it.k === 'ngoc') && !paidToday(P, 'khoa')) it.k = 'do'; }
        else if (!it.w) return send(ws, { t: 'notice', msg: 'Xin viết lời nguyện trước khi cột chỉ đỏ.' });
        if (!lim.offer()) return send(ws, { t: m.t, item: it });
        const key = isLock ? 'locks' : 'ribbons'; DB[key] = DB[key] || {}; DB[key][R.id] = [...(DB[key][R.id] || []), it].slice(-(isLock ? 30 : 24)); dirty = true; bcast(R, { t: m.t, item: it }); break; }
      case 'gear': { P.g = cleanGear(P, m.g); bcast(R, { t: 'meta', id: P.id, name: P.name, color: P.color, b: P.b ? 1 : 0, g: P.g }); send(ws, { t: 'gear', g: P.g }); break; }
      case 'name': { P.name = cleanName(m.name); if (COLOR_RE.test(m.color)) P.color = m.color; bcast(R, { t: 'meta', id: P.id, name: P.name, color: P.color, b: P.b ? 1 : 0, g: P.g || {} }); break; }
    }
  });
  ws.on('close', () => { if (P) CODES.delete(P.code); leave(); });
  ws.on('error', () => {});
});

/* Gửi vị trí theo lô 10 lần/giây, đếm người & mõ mỗi 2 giây */
setInterval(() => {
  for (const r of rooms.values()) {
    const l = []; for (const p of r.players.values()) if (p.dirty) { p.dirty = false; l.push([p.id, ...p.s]); }
    if (l.length) bcast(r, { t: 's', l });
  }
}, 100);
setInterval(() => {
  const rl = roomList();
  for (const r of rooms.values()) bcast(r, { t: 'count', online, rooms: rl, mo: DB.mo[r.id] || 0, moGlobal: DB.moGlobal });
}, 2000);
setInterval(() => { wss.clients.forEach(ws => { if (!ws.alive) return ws.terminate(); ws.alive = false; try { ws.ping(); } catch (e) {} }); }, 30000);
process.on('SIGTERM', () => { try { fs.writeFileSync(DATA_FILE, JSON.stringify(DB)); } catch (e) {} process.exit(0); });

server.listen(PORT, () => console.log(`Chùa Tâm An đang mở cửa tại http://localhost:${PORT}  (WebSocket: /ws)`));
module.exports = { clean };
