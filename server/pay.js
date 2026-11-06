/* Xu · công đức · vật phẩm đặc biệt · bảng cầu an/cầu siêu · hội viên
 * Mọi thứ trong chùa tính bằng XU. Chỉ việc NẠP XU cần xác nhận; tiêu xu (bỏ hòm công đức, dâng vật phẩm, ghi bảng cầu an,
 *   đăng ký hội viên) được trừ ngay và có hiệu lực tức thì.
 * Nạp xu mặc định: DUYỆT TAY — người dùng chuyển khoản qua mã VietQR tĩnh (config.json) kèm mã đơn trong nội dung,
 *   đơn ở trạng thái "chờ"; chủ trang vào /admin (mật khẩu ADMIN_PASSWORD) bấm Xác nhận / Từ chối → xu vào ví.
 * Ví gắn với "mã của bạn" (TA + 10 ký tự) do máy người dùng tạo, lưu trên máy, có thể khôi phục bằng cách nhập lại mã.
 * Tùy chọn: nếu đặt đủ PAYOS_CLIENT_ID, PAYOS_API_KEY, PAYOS_CHECKSUM_KEY → tạo link/QR PayOS và tự xác nhận
 *   qua webhook /api/payos/webhook (kiểm chữ ký HMAC-SHA256), có hỏi lại trạng thái đơn làm dự phòng.
 * Hết hạn (vật phẩm, bảng cầu an, hội viên) luôn tự động. */
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');

module.exports = function installPay({ bodeAdd, DB, markDirty, bcastAll, clean, setMember, toWallet }) {
  const AUTH = require('./auth.js')({ DB, markDirty });

  const CFG_FILE = process.env.CONFIG_FILE || path.join(__dirname, 'config.json');
  let CFG = {}; try { CFG = JSON.parse(fs.readFileSync(CFG_FILE, 'utf8')); } catch (e) { console.warn('Không đọc được config.json:', e.message); }
  const ENV = process.env;
  const PAYOS = ENV.PAYOS_CLIENT_ID && ENV.PAYOS_API_KEY && ENV.PAYOS_CHECKSUM_KEY ? { id: ENV.PAYOS_CLIENT_ID, key: ENV.PAYOS_API_KEY, sum: ENV.PAYOS_CHECKSUM_KEY, base: ENV.PAYOS_API_BASE || 'https://api-merchant.payos.vn' } : null;
  const MODE = PAYOS ? 'payos' : 'manual';
  const TEST = ENV.PAY_TEST === '1'; // chỉ dùng khi thử trên máy: hiện nút "giả lập đã nhận tiền"
  const ADMIN_PW = ENV.ADMIN_PASSWORD || '';
  const isPH = v => !v || /^THAY_/.test(String(v));
  const vq = CFG.vietqr || {}; const VQ_READY = !isPH(vq.bankId) && !isPH(vq.accountNo);
  DB.orders = DB.orders || []; DB.premium = DB.premium || []; DB.pboard = DB.pboard || []; DB.members = DB.members || {}; DB.wallets = DB.wallets || {}; DB.spends = DB.spends || []; DB.checkins = DB.checkins || {}; DB.inv = DB.inv || {}; DB.altars = DB.altars || {}; DB.mail = DB.mail || []; DB.altars = DB.altars || {};
  console.log(`Công đức: chế độ ${MODE === 'payos' ? 'PayOS (tự xác nhận)' : 'duyệt tay (/admin)'}${VQ_READY || PAYOS ? '' : ' — CHƯA điền tài khoản VietQR trong config.json'}${ADMIN_PW ? '' : ' — CHƯA đặt ADMIN_PASSWORD'}`);

  const DAY = 864e5, now = () => Date.now();
  const strip = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  const fmt = n => (+n || 0).toLocaleString('vi-VN') + 'đ';
  const XU = Object.assign({ name: 'xu', icon: '🪙', rate: 1000, packs: [20, 50, 100, 200], min: 10, max: 50000 }, CFG.xu || {});
  const wallet = c => DB.wallets[c] || (DB.wallets[c] = { bal: 0, topup: 0, spent: 0, created: now() });
  const RF = Object.assign({ reward: 20, trigger: 'first_topup', newAccountDays: 3 }, CFG.referral || {});
  if (ENV.REFERRAL_REWARD) RF.reward = Math.max(0, +ENV.REFERRAL_REWARD || 0); if (ENV.REFERRAL_TRIGGER) RF.trigger = ENV.REFERRAL_TRIGGER === 'join' ? 'join' : 'first_topup';
  DB.refJoinKeys = DB.refJoinKeys || {}; DB.refLog = DB.refLog || [];
  function payReferral(w, code, why) { // trả thưởng cho người giới thiệu đúng một lần cho mỗi tài khoản được mời
    if (!w.ref || w.refPaid || !RF.reward) return; const r = wallet(w.ref); w.refPaid = now(); r.bal += RF.reward; r.refEarned = (r.refEarned || 0) + RF.reward;
    DB.refLog.push({ t: now(), ref: w.ref, invited: code, xu: RF.reward, why }); if (DB.refLog.length > 5000) DB.refLog = DB.refLog.slice(-5000);
    toWallet && toWallet(w.ref, { t: 'wallet', bal: r.bal, add: RF.reward, why: 'ref' }); markDirty(); }
  const ipOf = req => (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',').pop().trim(); // lấy IP do proxy (Render) ghi sau cùng, khó giả mạo hơn
  function claimRef(b, req) {
    const wc = String(b.wallet || ''), rc = String(b.ref || '').toUpperCase(), dev = String(b.device || '').slice(0, 40), ip = ipOf(req);
    if (!MEMBER_RE.test(wc) || !MEMBER_RE.test(rc)) throw new Error('Mã không hợp lệ');
    if (wc === rc) throw new Error('Không thể tự giới thiệu chính mình');
    if (!DB.wallets[rc]) throw new Error('Mã giới thiệu không tồn tại');
    const fresh = !DB.wallets[wc]; const w = wallet(wc);
    if (w.ref) return { ok: false, msg: 'Tài khoản đã có người giới thiệu' };
    if (!fresh && (w.topup || w.spent || now() - (w.created || 0) > RF.newAccountDays * DAY)) return { ok: false, msg: 'Chỉ áp dụng cho tài khoản mới' };
    if (wallet(rc).ref === wc) throw new Error('Không thể giới thiệu vòng'); // A mời B rồi B mời A
    const r = wallet(rc); if (r.ip && r.ip === ip && RF.trigger === 'join') throw new Error('Không thể tự giới thiệu chính mình');
    w.ref = rc; w.refAt = now(); w.ip = w.ip || ip; w.dev = w.dev || dev; markDirty();
    if (RF.trigger === 'join') { const k = ip + '|' + dev; if (!DB.refJoinKeys[k] && !DB.refJoinKeys[ip + '|' + rc]) { DB.refJoinKeys[k] = DB.refJoinKeys[ip + '|' + rc] = now(); payReferral(w, wc, 'join'); } else w.refPaid = -1; }
    return { ok: true, trigger: RF.trigger, reward: RF.reward };
  }
  function refStats(code) { let n = 0, paid = 0; for (const k in DB.wallets) { const w = DB.wallets[k]; if (w.ref === code) { n++; if (w.refPaid > 0) paid++; } } return { invited: n, rewarded: paid, earned: (DB.wallets[code] || {}).refEarned || 0 }; }
  const items = () => (CFG.items || []);
  const checkinCfg = () => Object.assign({ enabled: true, xu: 1, streakDays: 7, streakBonusXu: 5, streakBonusItem: 'tram' }, CFG.checkin || {});
  function vnDay(ms = Date.now()) { const d = new Date(ms + 7 * 3600e3); return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0'); }
  function prevVnDay(day) { const [y, m, d] = day.split('-').map(Number); const t = Date.UTC(y, m - 1, d) - 864e5; const x = new Date(t); return x.getUTCFullYear() + '-' + String(x.getUTCMonth() + 1).padStart(2, '0') + '-' + String(x.getUTCDate()).padStart(2, '0'); }
  function checkinOf(wc) { DB.checkins = DB.checkins || {}; return DB.checkins[wc] || { streak: 0, last: '', bonuses: [] }; }
  function doCheckin(wc, name) {
    const cfg = checkinCfg(); if (!cfg.enabled) throw Object.assign(new Error('Điểm danh đang tắt'), { code: 'off' });
    const day = vnDay(); let c = checkinOf(wc);
    if (c.last === day) return { already: true, day, streak: c.streak, awarded: 0, cfg, bal: (DB.wallets[wc] || { bal: 0 }).bal };
    const prev = prevVnDay(day);
    c.streak = (c.last === prev) ? (c.streak || 0) + 1 : 1;
    c.last = day;
    const w = DB.wallets[wc] || (DB.wallets[wc] = { bal: 0, spent: 0, created: now() });
    const awarded = Math.max(0, +cfg.xu || 0);
    if (awarded) { w.bal += awarded; DB.spends.push({ id: 'ci' + now().toString(36), t: now(), type: 'checkin', xu: awarded, name: name || '', wallet: wc, item: 'checkin', msg: 'Điểm danh ' + day, credit: 1 }); }
    let bonus = null;
    if (c.streak > 0 && c.streak % (cfg.streakDays || 7) === 0) {
      const bx = Math.max(0, +cfg.streakBonusXu || 0);
      if (bx) { w.bal += bx; DB.spends.push({ id: 'cb' + now().toString(36), t: now(), type: 'checkin', xu: bx, name: name || '', wallet: wc, item: 'checkin_bonus', msg: 'Chuỗi ' + c.streak + ' ngày', credit: 1 }); }
      const iid = cfg.streakBonusItem; const it = (CFG.items || []).find(i => i.id === iid);
      if (it) {
        DB.inv = DB.inv || {}; const inv = DB.inv[wc] || (DB.inv[wc] = {});
        const until = now() + (it.days || 1) * 864e5;
        inv[it.id] = Math.max(inv[it.id] || 0, until);
        bonus = { xu: bx, item: it.id, itemName: it.name, until };
      } else bonus = { xu: bx };
      c.bonuses = (c.bonuses || []).concat({ t: now(), streak: c.streak }).slice(-20);
    }
    DB.checkins[wc] = c; markDirty();
    return { ok: true, day, streak: c.streak, awarded, bonus, cfg, bal: w.bal };
  }

  const pub = o => ({ code: o.code, ref: o.ref, type: o.type, xu: o.xu, wallet: o.wallet, name: o.name, amount: o.amount, item: o.item, days: o.days, status: o.status, created: o.created, paidAt: o.paidAt || 0, expires: o.expires, mode: o.mode,
    pay: o.status === 'pending' ? payInfo(o) : null });
  function payInfo(o) {
    if (o.mode === 'payos' && o.payos) return { kind: 'payos', qrString: o.payos.qrCode, checkoutUrl: o.payos.checkoutUrl, bank: o.payos.bin, accountNo: o.payos.accountNumber, accountName: o.payos.accountName, note: o.payos.description || o.ref, amount: o.amount };
    if (!VQ_READY) return { kind: 'unset', note: o.ref, amount: o.amount };
    const url = `https://img.vietqr.io/image/${encodeURIComponent(vq.bankId)}-${encodeURIComponent(vq.accountNo)}-${encodeURIComponent(vq.template || 'compact2')}.png?amount=${o.amount}&addInfo=${encodeURIComponent(o.ref)}&accountName=${encodeURIComponent(vq.accountName || '')}`;
    return { kind: 'vietqr', qrUrl: url, bank: vq.bankName || vq.bankId, accountNo: vq.accountNo, accountName: vq.accountName, note: o.ref, amount: o.amount, alt: (vq.staticQr || []).filter(q => q && q.img).map(q => ({ id: q.id, label: q.label, img: q.img, app: q.app || '' })) };
  }
  const paidWithin = (wc, item, days) => { const t = now() - days * DAY; for (let i = DB.spends.length - 1; i >= 0 && DB.spends[i].t > t; i--) if (DB.spends[i].wallet === wc && DB.spends[i].item === item) return true; return !!(DB.members[wc] && DB.members[wc].until > now()); };
  const altPub = a => a && { sid: a.sid, name: a.name, years: a.years, photo: a.photo, frame: a.frame, den: a.den, qua: a.qua, hoa: a.hoa, offers: (a.offers || []).slice(-20), n: a.n || 0 };
  /* Truyện hay do chủ chùa thêm trong /admin: lưu riêng ở server/stories.json (sửa không cần đổi mã) */
  const sendMail = require('./mailer.js'); const STF = process.env.STORIES_FILE || path.join(__dirname, 'stories.json'); let STC = null;
  function stories() { if (!STC) { try { STC = JSON.parse(fs.readFileSync(STF, 'utf8')); } catch (e) { STC = []; } } return STC; }
  function saveStories(L) { STC = L; fs.writeFileSync(STF + '.tmp', JSON.stringify(L)); fs.renameSync(STF + '.tmp', STF); }
  async function altarApi(req, res, u) { let m;
    if ((m = u.match(/^\/api\/altar\/(TA[A-Z0-9]{10})$/))) { const a = DB.altars[m[1]]; return J(res, 200, { altar: a ? Object.assign(altPub(a), { prem: paidWithin(m[1], 'giatien', 30) }) : null, prem: paidWithin(m[1], 'giatien', 30) }); }
    if ((m = u.match(/^\/api\/altar\/v\/([a-z0-9]{12})$/))) { const a = Object.values(DB.altars).find(x => x.sid === m[1]); return a ? J(res, 200, { altar: altPub(a) }) : J(res, 404, { error: 'Bàn thờ không còn hoặc đường dẫn sai' }); }
    if (req.method !== 'POST') return J(res, 404, {});
    if (limited(req, 'al', 60, 600e3)) return J(res, 429, { error: 'Xin chậm lại một chút 🙏' });
    let b; try { b = await readBody(req, 140000); } catch (e) { return J(res, 413, { error: 'Dữ liệu quá lớn' }); }
    if ((m = u.match(/^\/api\/altar\/v\/([a-z0-9]{12})\/offer$/))) { const a = Object.values(DB.altars).find(x => x.sid === m[1]); if (!a) return J(res, 404, { error: 'Không thấy bàn thờ' });
      const kind = ['huong', 'hoa', 'qua'].includes(b.kind) ? b.kind : 'huong'; const by = clean(String(b.by || ''), 30).replace(/\*+/g, '').trim() || 'Người thân';
      a.offers = [...(a.offers || []), { kind, by, t: now() }].slice(-40); a.n = (a.n || 0) + 1; markDirty(); return J(res, 200, { altar: altPub(a) }); }
    const wc = String(b.wallet || ''); if (!MEMBER_RE.test(wc)) return J(res, 400, { error: 'Cần có ví (mã ví) để lập bàn thờ' });
    if (u === '/api/altar/delete') { delete DB.altars[wc]; markDirty(); return J(res, 200, { ok: true }); }
    if (u === '/api/altar') { const prem = paidWithin(wc, 'giatien', 30); const a = DB.altars[wc] || { sid: crypto.randomBytes(9).toString('base64').replace(/[^a-z0-9]/gi, '').toLowerCase().padEnd(12, '0').slice(0, 12), created: now(), offers: [] };
      const name = clean(String(b.name || ''), 40).trim(); if (!name) return J(res, 400, { error: 'Xin ghi tên người đã khuất' });
      const years = String(b.years || '').trim().slice(0, 24); if (years && !/^[0-9 ?\-–—/.()a-zA-Zàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ,]*$/i.test(years)) return J(res, 400, { error: 'Năm sinh – năm mất không hợp lệ' });
      if (b.photo !== undefined) { const ph = String(b.photo || ''); if (ph && !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(ph)) return J(res, 400, { error: 'Ảnh phải là JPEG' }); if (ph.length > 110000) return J(res, 400, { error: 'Ảnh quá lớn (tối đa khoảng 80 KB)' }); a.photo = ph; }
      a.name = name; a.years = years; a.frame = ['go', 'son', 'vang'].includes(b.frame) && (b.frame !== 'vang' || prem) ? b.frame : 'go'; a.den = b.den === 'sen' && prem ? 'sen' : ''; a.qua = b.qua === 'ngu' && prem ? 'ngu' : b.qua ? 'thuong' : ''; a.hoa = !!b.hoa; a.updated = now();
      DB.altars[wc] = a; markDirty(); return J(res, 200, { altar: Object.assign(altPub(a), { prem }) }); }
    return J(res, 404, {}); }
  /* ---------- cửa hàng lưu niệm (vật phẩm ảo, lưu theo ví) ---------- */
  const shopList = () => CFG.shop || [];
  function invOf(wc) { const t = now(); return (DB.inv[wc] || []).filter(x => !x.until || x.until > t); }
  function hasItem(wc, id) { return !!wc && invOf(wc).some(x => x.id === id); }
  function publicConfig() {
    return { mode: MODE, test: TEST, vietqrReady: VQ_READY, offerings: CFG.offerings || null, referral: { reward: RF.reward, trigger: RF.trigger }, xu: { name: XU.name, icon: XU.icon, rate: XU.rate, packs: XU.packs, min: XU.min, max: XU.max }, supportNote: CFG.supportNote, disclaimer: CFG.disclaimer, donate: CFG.donate, items: items().map(({ id, kind, icon, name, desc, price, days }) => ({ id, kind, icon, name, desc, price, days })), shop: shopList().map(({ file, ...x }) => Object.assign(x, { dl: !!file })),
      prayerBoard: CFG.prayerBoard, membership: CFG.membership, sponsors: { bepchay: (CFG.sponsors || {}).bepchay || [], thuvien: (CFG.sponsors || {}).thuvien || [] }, social: CFG.social || {}, orderMinutes: CFG.orderMinutes || 30, checkin: checkinCfg(), auth: (() => { try { const p = AUTH.providers(); return { google: !!p.google, facebook: !!p.facebook, oneTap: !!p.oneTap, googleClientId: p.googleClientId || '', mock: !!p.mock }; } catch (e) { return { google: false, facebook: false, oneTap: false }; } })() };
  }

  /* ---------- bảng công đức (cộng dồn theo tên, chỉ tính đơn đã xác nhận, không tính phí hội viên) ---------- */
  const nameScore = n => (n !== strip(n) ? 2 : 0) + (/[A-ZÀ-Ỹ]/.test(n) ? 1 : 0);
  function board() {
    const m = new Map();
    for (const o of DB.spends) { if (o.type === 'member') continue; const anon = !o.name || o.anon; const key = anon ? '~' : strip(o.name).toLowerCase().replace(/\s+/g, ' ').trim();
      const e = m.get(key) || { name: anon ? 'Phật tử ẩn danh' : o.name, total: 0, n: 0, last: 0 }; e.total += o.xu; e.n++; if (o.t > e.last) e.last = o.t; if (!anon && nameScore(o.name) > nameScore(e.name)) e.name = o.name; m.set(key, e); }
    return [...m.values()].sort((a, b) => b.total - a.total || a.last - b.last).slice(0, 200).map(({ name, total, n }) => ({ name, total, n }));
  }
  // vật phẩm đặc biệt: giữ đủ trong dữ liệu đến hết hạn; chỉ hiển thị N cái mới nhất mỗi loại (offerings.premiumCap) để cảnh luôn nhẹ
  const PCAP = Object.assign({ lantern: 12, incense: 9, lotus: 8, lamp: 8 }, (CFG.offerings || {}).premiumCap || {});
  const activePremium = () => { const by = {}; return DB.premium.filter(p => p.until > now()).sort((a, b) => b.t - a.t).filter(p => { const k = p.kind || p.item; by[k] = (by[k] || 0) + 1; return by[k] <= (PCAP[k] || 10); }).reverse(); };
  const activePB = () => DB.pboard.filter(p => p.until > now());
  function prune() { const t = now(); let ch = false;
    for (const o of DB.orders) if (o.status === 'pending' && t > o.expires + 2 * DAY) { o.status = 'expired'; ch = true; } // đơn duyệt tay vẫn giữ 2 ngày sau hạn để kịp đối soát
    const n1 = DB.premium.length, n2 = DB.pboard.length; DB.premium = DB.premium.filter(p => p.until > t - DAY); DB.pboard = DB.pboard.filter(p => p.until > t - DAY);
    if (ch || n1 !== DB.premium.length || n2 !== DB.pboard.length) markDirty();
    DB.orders = DB.orders.filter(o => o.status === 'paid' || t - o.created < 60 * DAY); if (DB.spends.length > 20000) DB.spends = DB.spends.slice(-20000); }
  setInterval(prune, 60000); prune();

  /* ---------- tạo đơn ---------- */
  const MEMBER_RE = /^TA[A-Z0-9]{10}$/;
  function newCode() { let c; do { c = Number(String(now()).slice(-9) + String(crypto.randomInt(0, 100)).padStart(2, '0')); } while (DB.orders.some(o => o.code === c)); return c; }
  const refOf = c => 'CTA' + c.toString(36).toUpperCase().slice(-6);
  async function createOrder(b, req) { // chỉ dùng cho NẠP XU
    const wc = String(b.wallet || ''); if (!MEMBER_RE.test(wc)) throw new Error('Mã ví không hợp lệ');
    const xu = Math.round(+b.xu || 0); if (!(xu >= XU.min && xu <= XU.max)) throw new Error(`Nạp từ ${XU.min} đến ${XU.max} ${XU.name}`);
    const name = clean(String(b.name || ''), 40).replace(/\*+/g, '').trim();
    const o = { code: newCode(), type: 'topup', wallet: wc, xu, amount: xu * XU.rate, name, created: now(), status: 'pending', mode: MODE }; { const w = wallet(wc); w.ip = w.ip || ipOf(req); }
    o.ref = refOf(o.code); o.expires = o.created + (CFG.orderMinutes || 30) * 60e3;
    if (PAYOS) {
      const base = ENV.PUBLIC_URL || ((req.headers['x-forwarded-proto'] || 'http') + '://' + req.headers.host);
      const body = { orderCode: o.code, amount: o.amount, description: o.ref, returnUrl: `${base}/?don=${o.code}`, cancelUrl: `${base}/?don=${o.code}&huy=1`, expiredAt: Math.floor(o.expires / 1000) };
      body.signature = hmac(`amount=${body.amount}&cancelUrl=${body.cancelUrl}&description=${body.description}&orderCode=${body.orderCode}&returnUrl=${body.returnUrl}`);
      const r = await payosFetch('/v2/payment-requests', { method: 'POST', body: JSON.stringify(body) });
      if (!r || r.code !== '00' || !r.data) throw new Error('PayOS chưa tạo được mã: ' + ((r && r.desc) || 'lỗi kết nối'));
      o.payos = { qrCode: r.data.qrCode, checkoutUrl: r.data.checkoutUrl, bin: r.data.bin, accountNumber: r.data.accountNumber, accountName: r.data.accountName, description: r.data.description, id: r.data.paymentLinkId };
    }
    DB.orders.push(o); markDirty(); return o;
  }

  /* ---------- xác nhận → thực hiện ---------- */
  function fulfill(o, by) { // xác nhận nạp xu
    if (o.status === 'paid') return false; o.status = 'paid'; o.paidAt = now(); o.by = by;
    const w = wallet(o.wallet); const first = !w.topup; w.bal += o.xu; w.topup += o.xu; if (first && RF.trigger === 'first_topup') payReferral(w, o.wallet, 'first_topup'); toWallet && toWallet(o.wallet, { t: 'wallet', bal: w.bal, add: o.xu, code: o.code });
    bcastAll({ t: 'order', code: o.code, status: 'paid' }); markDirty(); return true;
  }
  /* ---------- tiêu xu: trừ ngay, có hiệu lực ngay ---------- */
  function spend(b) {
    const wc = String(b.wallet || ''); if (!MEMBER_RE.test(wc)) throw new Error('Mã ví không hợp lệ');
    const type = String(b.type || ''); const anon = !!b.anon; let name = anon ? '' : clean(String(b.name || ''), 40).replace(/\*+/g, '').trim(); if (!anon && !name) name = 'Phật tử';
    const t = now(); const s = { id: 's' + t.toString(36) + crypto.randomInt(0, 1296).toString(36), type, wallet: wc, name, anon, t };
    if (type === 'donate') { const d = CFG.donate || {}; const x = Math.round(+b.xu || 0); if (!(x >= (d.min || 1) && x <= (d.max || 1e5))) throw new Error('Số xu không hợp lệ'); s.xu = x; }
    else if (type === 'item') { const it = items().find(i => i.id === b.item); if (!it) throw new Error('Không có vật phẩm này'); Object.assign(s, { item: it.id, kind: it.kind, xu: it.price, days: it.days || 1, msg: clean(String(b.msg || ''), 60) }); }
    else if (type === 'pboard') { const pb = CFG.prayerBoard || {}; const opt = (pb.options || [])[+b.opt || 0]; if (!opt) throw new Error('Chưa có lựa chọn');
      const names = String(b.names || '').split(/[\n,;]+/).map(x => clean(x, 40).replace(/\*+/g, '').trim()).filter(Boolean).slice(0, pb.maxNames || 6); if (!names.length) throw new Error('Xin ghi ít nhất một tên');
      Object.assign(s, { kind: b.kind === 'sieu' ? 'sieu' : 'an', names, xu: opt.price, days: opt.days }); }
    else if (type === 'shop') { const it = shopList().find(i => i.id === b.item); if (!it || it.real) throw new Error(it ? 'Hàng thật chưa mở bán' : 'Không có món này');
      if (!it.days && hasItem(wc, it.id)) throw new Error('Món này đã có trong Túi đồ'); Object.assign(s, { item: it.id, kind: it.kind, xu: it.price, days: it.days || 0 }); }
    else if (type === 'member') { const m = CFG.membership || {}; Object.assign(s, { xu: m.price, days: m.days || 30 }); }
    else throw new Error('Loại không hợp lệ');
    const w = wallet(wc); if (w.bal < s.xu) { const e = new Error(`Chưa đủ ${XU.name}: cần ${s.xu}, ví còn ${w.bal}`); e.need = s.xu - w.bal; throw e; }
    w.bal -= s.xu; w.spent += s.xu; DB.spends.push(s); if (type === 'donate' && bodeAdd) bodeAdd(wc);
    const disp = anon || !name ? 'Phật tử ẩn danh' : name;
    if (type === 'shop') { const L = DB.inv[wc] = (DB.inv[wc] || []).filter(x => !x.until || x.until > t); const ex = L.find(x => x.id === s.item);
      if (ex && s.days) ex.until = Math.max(ex.until, t) + s.days * DAY; else if (!ex) L.push({ id: s.item, t, until: s.days ? t + s.days * DAY : 0 }); }
    const svc = type === 'item' && ['thaydo', 'release', 'xinxam', 'tuvi', 'khoa', 'xamtd', 'giatien', 'kinhdich', 'amtra'].includes(s.kind);
    if (type === 'item' && !svc) { const p = { id: 'p' + s.id, kind: s.kind, item: s.item, name: disp, msg: s.msg || '', t, until: t + s.days * DAY }; DB.premium.push(p); bcastAll({ t: 'premium', item: p }); }
    if (type === 'pboard') { const p = { id: 'b' + s.id, kind: s.kind, names: s.names, by: disp, t, until: t + s.days * DAY }; DB.pboard.push(p); bcastAll({ t: 'pboard', item: p }); }
    if (type === 'member') { const m = DB.members[wc] = DB.members[wc] || { since: t, until: 0 }; m.until = Math.max(m.until, t) + s.days * DAY; setMember && setMember(wc, m.until); }
    if (type !== 'member' && type !== 'shop' && !svc) { bcastAll({ t: 'board', list: board().slice(0, 60) }); bcastAll({ t: 'donate', id: s.id, name: disp, xu: s.xu, type }); }
    toWallet && toWallet(wc, { t: 'wallet', bal: w.bal }); markDirty();
    return { bal: w.bal, spend: { id: s.id, type, xu: s.xu, name: disp }, inv: type === 'shop' ? invOf(wc) : undefined };
  }
  function reject(o, by) { if (o.status !== 'pending') return false; o.status = 'rejected'; o.by = by; o.doneAt = now(); bcastAll({ t: 'order', code: o.code, status: 'rejected' }); markDirty(); return true; }

  /* ---------- PayOS ---------- */
  function hmac(s) { return crypto.createHmac('sha256', PAYOS ? PAYOS.sum : '').update(s).digest('hex'); }
  function sigData(data, key) { // theo tài liệu payOS: sắp xếp key, null/undefined → "", mảng → JSON đã sắp key
    const str = Object.keys(data).sort().filter(k => data[k] !== undefined).map(k => { let v = data[k];
      if (Array.isArray(v)) v = JSON.stringify(v.map(e => Object.keys(e).sort().reduce((a, kk) => (a[kk] = e[kk], a), {})));
      if (v === null || v === undefined || v === 'null' || v === 'undefined') v = ''; return `${k}=${v}`; }).join('&');
    return crypto.createHmac('sha256', key).update(str).digest('hex'); }
  async function payosFetch(p, opt = {}) { try { const r = await fetch(PAYOS.base + p, Object.assign({ headers: { 'x-client-id': PAYOS.id, 'x-api-key': PAYOS.key, 'Content-Type': 'application/json' } }, opt)); return await r.json(); } catch (e) { console.warn('PayOS lỗi', e.message); return null; } }
  const lastCheck = new Map();
  async function checkPayos(o) { // dự phòng khi webhook chậm/mất
    if (!PAYOS || o.status !== 'pending') return; const t = now(); if (t - (lastCheck.get(o.code) || 0) < 5000) return; lastCheck.set(o.code, t);
    const r = await payosFetch('/v2/payment-requests/' + o.code); const st = r && r.data && r.data.status;
    if (st === 'PAID' && (r.data.amountPaid || r.data.amount) >= o.amount) fulfill(o, 'payos-poll'); else if (st === 'CANCELLED' || st === 'EXPIRED') { o.status = st === 'CANCELLED' ? 'cancelled' : 'expired'; markDirty(); }
  }
  if (PAYOS) setInterval(() => { const t = now(); DB.orders.filter(o => o.status === 'pending' && o.mode === 'payos' && t - o.created < 40 * 60e3).slice(-20).forEach(checkPayos); }, 60000);

  /* ---------- HTTP ---------- */
  const J = (res, code, o, h = {}) => { res.writeHead(code, Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, h)); res.end(JSON.stringify(o)); };
  const readBody = (req, max = 16384) => new Promise((ok, no) => { let s = ''; req.on('data', d => { s += d; if (s.length > max) { no(new Error('Quá lớn')); req.destroy(); } }); req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch (e) { no(new Error('JSON lỗi')); } }); });
  const hits = new Map(); function limited(req, key, per, ms) { const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',').pop().trim(); const k = key + ip; const t = now(); const a = (hits.get(k) || []).filter(x => t - x < ms); if (a.length >= per) return true; a.push(t); hits.set(k, a); return false; }
  function adminOk(req) { if (!ADMIN_PW) return false; const h = String(req.headers.authorization || ''); if (!h.startsWith('Basic ')) return false; const pw = Buffer.from(h.slice(6), 'base64').toString().split(':').slice(1).join(':');
    const a = crypto.createHash('sha256').update(pw).digest(), b = crypto.createHash('sha256').update(ADMIN_PW).digest(); return crypto.timingSafeEqual(a, b); }

  async function handle(req, res, u) {
    try {
      if (u.startsWith('/api/auth')) { const d = await AUTH.handle(req, res, u); if (d) return true; }
      if (u === '/api/config') return J(res, 200, publicConfig()), true;
      if (u === '/api/board') return J(res, 200, { list: board() }), true;
      if (u === '/api/world') return J(res, 200, { premium: activePremium(), pboard: activePB(), board: board().slice(0, 60) }), true;
      let m;
      /* ---- bàn thờ gia tiên online: mỗi ví 1 bàn thờ; ảnh nhỏ (JPEG ≤ 80 KB) do trình duyệt thu nhỏ; xem qua mã chia sẻ ngẫu nhiên ---- */
      if (u.startsWith('/api/altar')) return await altarApi(req, res, u), true;
      if (u === '/api/stories') return J(res, 200, { list: stories().map(x => Object.assign({}, x, { isNew: now() - (x.t || 0) < 30 * DAY })) }), true;
      if (u === '/api/contact' && req.method === 'POST') { if (limited(req, 'ct', 5, 3600e3)) return J(res, 429, { error: 'Bạn đã gửi nhiều thư, xin thử lại sau 🙏' }), true;
        let b; try { b = await readBody(req, 8000); } catch (e) { return J(res, 413, { error: 'Thư quá dài' }), true; }
        const msg = String(b.msg || '').trim().slice(0, 2000); if (msg.length < 3) return J(res, 400, { error: 'Xin viết nội dung thư' }), true;
        const it = { id: 'm' + now().toString(36) + crypto.randomInt(0, 1296).toString(36), t: now(), name: clean(String(b.name || ''), 40).trim() || 'Ẩn danh', contact: String(b.contact || '').trim().slice(0, 80), msg, read: false };
        DB.mail.push(it); if (DB.mail.length > 500) DB.mail.splice(0, DB.mail.length - 500); markDirty();
        const to = process.env.CONTACT_EMAIL || CFG.contactEmail || ''; if (to && /@/.test(to)) sendMail({ to, subject: 'Hòm thư Chùa Tâm An – ' + it.name, text: `Người gửi: ${it.name}\nLiên hệ: ${it.contact || '(không ghi)'}\nThời gian: ${new Date(it.t).toISOString()}\n\n${it.msg}` }).then(okk => { it.mailed = okk; markDirty(); });
        return J(res, 200, { ok: true }), true; }
      if ((m = u.match(/^\/api\/inv\/(TA[A-Z0-9]{10})$/))) return J(res, 200, { inv: invOf(m[1]) }), true;
      if ((m = u.match(/^\/api\/dl\/(TA[A-Z0-9]{10})\/([a-z0-9_]{1,24})$/))) { const it = shopList().find(i => i.id === m[2] && i.file);
        if (!it || !hasItem(m[1], it.id)) return J(res, 403, { error: 'Bạn chưa có món này trong Túi đồ' }), true;
        const fp = path.join(__dirname, 'shopfiles', path.basename(it.file)); if (!fs.existsSync(fp)) return J(res, 404, { error: 'Thiếu tệp' }), true;
        const ext = path.extname(fp).slice(1); res.writeHead(200, { 'Content-Type': { jpg: 'image/jpeg', png: 'image/png', mp3: 'audio/mpeg', ogg: 'audio/ogg' }[ext] || 'application/octet-stream', 'Content-Disposition': `attachment; filename="${path.basename(fp)}"`, 'Cache-Control': 'private, no-store' });
        fs.createReadStream(fp).pipe(res); return true; }
      if ((m = u.match(/^\/api\/wallet\/(TA[A-Z0-9]{10})$/))) { const w = DB.wallets[m[1]] || { bal: 0 }; if (DB.wallets[m[1]] && !w.ip) w.ip = ipOf(req); const mm = DB.members[m[1]]; return J(res, 200, { code: m[1], bal: w.bal, member: !!mm && mm.until > now(), until: mm ? mm.until : 0, refBy: w.ref || null, ref: refStats(m[1]) }), true; }
      if (u === '/api/wallet' && req.method === 'POST') { if (limited(req, 'w', +ENV.WALLET_RATE || 30, 3600e3)) return J(res, 429, { error: 'Thử lại sau' }), true; const b = await readBody(req); const wc = String(b.wallet || ''); if (!MEMBER_RE.test(wc)) return J(res, 400, { error: 'Mã không hợp lệ' }), true; const w = wallet(wc); w.ip = w.ip || ipOf(req); markDirty(); return J(res, 200, { bal: w.bal }), true; }
      if (u === '/api/ref/claim' && req.method === 'POST') { if (limited(req, 'r', 5, 3600e3)) return J(res, 429, { error: 'Thử lại sau' }), true; const b = await readBody(req); return J(res, 200, claimRef(b, req)), true; }
      
      if (u.startsWith('/api/checkin/') && req.method === 'GET') {
        const wc = decodeURIComponent(u.slice('/api/checkin/'.length)).toUpperCase();
        if (!/^TA[A-Z0-9]{10}$/.test(wc)) return J(res, 400, { error: 'Mã ví không hợp lệ' }), true;
        const c = checkinOf(wc); const cfg = checkinCfg(); const day = vnDay();
        return J(res, 200, { streak: c.streak || 0, last: c.last || '', today: c.last === day, cfg, bal: (DB.wallets[wc] || { bal: 0 }).bal }), true;
      }
      if (u === '/api/checkin' && req.method === 'POST') {
        if (limited(req, 'ci', 20, 600e3)) return J(res, 429, { error: 'Xin chậm lại một chút 🙏' }), true;
        const b = await readBody(req); const wc = String(b.wallet || '').toUpperCase();
        if (!/^TA[A-Z0-9]{10}$/.test(wc)) return J(res, 400, { error: 'Mã ví không hợp lệ' }), true;
        try { const r = doCheckin(wc, b.name); if (r.already) return J(res, 200, r), true; return J(res, 200, r), true; }
        catch (e) { return J(res, e.code === 'off' ? 400 : 400, { error: e.message }), true; }
      }
      if (u === '/admin/api/checkin' && req.method === 'GET') {
        if (!adminOk(req)) { res.writeHead(401); res.end(); return true; }
        const cfg = checkinCfg(); const list = Object.entries(DB.checkins || {}).map(([wallet, c]) => ({ wallet, streak: c.streak, last: c.last, bonuses: (c.bonuses || []).length })).sort((a, b) => b.streak - a.streak).slice(0, 200);
        return J(res, 200, { cfg, list }), true;
      }
      if (u === '/admin/api/checkin' && req.method === 'POST') {
        if (!adminOk(req)) { res.writeHead(401); res.end(); return true; }
        let b; try { b = JSON.parse(await readBody(req, 4096)); } catch (e) { return J(res, 400, { error: 'Dữ liệu sai' }), true; }
        CFG.checkin = {
          enabled: b.enabled !== false && b.enabled !== 'false' && b.enabled !== 0,
          xu: Math.max(0, Math.min(100, +b.xu || 1)),
          streakDays: Math.max(2, Math.min(30, +b.streakDays || 7)),
          streakBonusXu: Math.max(0, Math.min(500, +b.streakBonusXu || 5)),
          streakBonusItem: String(b.streakBonusItem || 'tram').slice(0, 24)
        };
        try { const disk = JSON.parse(fs.readFileSync(CFG_FILE, 'utf8')); disk.checkin = CFG.checkin; fs.writeFileSync(CFG_FILE + '.tmp', JSON.stringify(disk, null, 1)); fs.renameSync(CFG_FILE + '.tmp', CFG_FILE); } catch (e) { return J(res, 500, { error: 'Không ghi được config.json' }), true; }
        return J(res, 200, { ok: true, cfg: checkinCfg() }), true;
      }

      if (u === '/api/spend' && req.method === 'POST') { if (limited(req, 's', 40, 600e3)) return J(res, 429, { error: 'Xin chậm lại một chút 🙏' }), true;
        const b = await readBody(req); try { return J(res, 200, spend(b)), true; } catch (e) { return J(res, 400, { error: e.message, need: e.need || 0 }), true; } }
      if ((m = u.match(/^\/api\/member\/(TA[A-Z0-9]{10})$/))) { const mm = DB.members[m[1]]; return J(res, 200, { code: m[1], active: !!mm && mm.until > now(), until: mm ? mm.until : 0 }), true; }
      if (u === '/api/order' && req.method === 'POST') { if (limited(req, 'o', +ENV.ORDER_RATE || 10, 600e3)) return J(res, 429, { error: 'Bạn tạo hơi nhiều đơn, xin đợi ít phút rồi thử lại 🙏' }), true;
        const b = await readBody(req); const o = await createOrder(b, req); return J(res, 200, { order: pub(o) }), true; }
      if ((m = u.match(/^\/api\/order\/(\d{6,15})$/))) { const o = DB.orders.find(x => x.code === +m[1]); if (!o) return J(res, 404, { error: 'Không thấy đơn' }), true; await checkPayos(o); return J(res, 200, { order: pub(o) }), true; }
      if ((m = u.match(/^\/api\/order\/(\d{6,15})\/cancel$/)) && req.method === 'POST') { const o = DB.orders.find(x => x.code === +m[1]); if (o && o.status === 'pending') { o.status = 'cancelled'; markDirty(); } return J(res, 200, { ok: true }), true; }
      if ((m = u.match(/^\/api\/order\/(\d{6,15})\/test-pay$/)) && req.method === 'POST') { if (!TEST) return J(res, 403, { error: 'Chỉ dùng khi PAY_TEST=1' }), true; const o = DB.orders.find(x => x.code === +m[1]); if (!o) return J(res, 404, {}), true; fulfill(o, 'test'); return J(res, 200, { order: pub(o) }), true; }
      if (u === '/api/payos/webhook' && req.method === 'POST') { const b = await readBody(req);
        if (!PAYOS) return J(res, 200, { success: false, desc: 'PayOS chưa bật' }), true;
        if (!b || !b.data || !b.signature || sigData(b.data, PAYOS.sum) !== b.signature) { console.warn('Webhook PayOS sai chữ ký'); return J(res, 400, { success: false }), true; }
        const o = DB.orders.find(x => x.code === +b.data.orderCode);
        if (o && o.type === 'topup' && b.code === '00' && (b.data.code === '00' || b.data.code === undefined) && +b.data.amount >= o.amount) fulfill(o, 'payos-webhook');
        return J(res, 200, { success: true }), true; }
      if (u === '/admin' || u.startsWith('/admin/')) {
        if (!ADMIN_PW) { res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Trang quản trị đang tắt: hãy đặt biến môi trường ADMIN_PASSWORD rồi khởi động lại.'); return true; }
        if (!adminOk(req)) { if (limited(req, 'adm', 20, 600e3)) { res.writeHead(429); res.end('Thử lại sau'); return true; } res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Chua Tam An admin", charset="UTF-8"', 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Cần mật khẩu quản trị'); return true; }
        if (u === '/admin/api/orders') { const t = now(); const by = st => DB.orders.filter(o => o.status === st);
          const paid = by('paid'); const sum = (a, k = 'amount') => a.reduce((x, o) => x + (o[k] || 0), 0); const since = d => paid.filter(o => t - o.paidAt < d * DAY);
          const sp = k => sum(DB.spends.filter(x => x.type === k), 'xu');
          return J(res, 200, { mode: MODE, vietqrReady: VQ_READY, xuName: XU.name, rate: XU.rate,
            orders: DB.orders.slice(-300).reverse().map(o => Object.assign(pub(o), { by: o.by })),
            spends: DB.spends.slice(-100).reverse().map(x => ({ t: x.t, type: x.type, name: x.anon ? 'Ẩn danh' : x.name, xu: x.xu, wallet: x.wallet, item: x.item, names: x.names, kind: x.kind, msg: x.msg })),
            referral: { reward: RF.reward, trigger: RF.trigger, log: DB.refLog.slice(-100).reverse(),
              pending: Object.entries(DB.wallets).filter(([, w]) => w.ref && !w.refPaid).slice(-100).map(([k, w]) => ({ invited: k, ref: w.ref, at: w.refAt })),
              top: Object.entries(DB.wallets).filter(([, w]) => w.refEarned).sort((a, b2) => b2[1].refEarned - a[1].refEarned).slice(0, 20).map(([k, w]) => Object.assign({ code: k }, refStats(k))) },
            stats: { total: sum(paid), d1: sum(since(1)), d7: sum(since(7)), d30: sum(since(30)), nPaid: paid.length, nPending: by('pending').length, members: Object.values(DB.members).filter(mm => mm.until > t).length,
              xuSold: sum(paid, 'xu'), xuSpent: sum(DB.spends, 'xu'), xuLeft: Object.values(DB.wallets).reduce((x, w) => x + w.bal, 0), xuRef: DB.refLog.reduce((x, r) => x + r.xu, 0), nRef: Object.values(DB.wallets).filter(w => w.ref).length, byType: ['donate', 'item', 'pboard', 'member'].map(k => [k, sp(k)]) } }), true; }
        
        if (u === '/admin/api/accounts') {
          const q = require('url').parse(req.url, true).query || {};
          return J(res, 200, { list: AUTH.adminList(q.q || ''), mergeLog: (DB.mergeLog || []).slice(-50).reverse() }), true;
        }
        if (u === '/admin/api/social' && req.method === 'GET') return J(res, 200, CFG.social || {}), true;
        if (u === '/admin/api/social' && req.method === 'POST') { let b; try { b = JSON.parse(await readBody(req, 4096)); } catch (e) { return J(res, 400, { error: 'Dữ liệu sai' }), true; }
          const ok = (v, re) => { v = String(v || '').trim().slice(0, 300); if (!v) return ''; try { const x = new URL(v); return x.protocol === 'https:' && re.test(x.hostname) ? x.href : null; } catch (e) { return null; } };
          const fb = ok(b.facebook, /(^|\.)(facebook\.com|fb\.com)$/i), yt = ok(b.youtube, /(^|\.)(youtube\.com|youtu\.be)$/i); if (fb === null || yt === null) return J(res, 400, { error: 'Link không hợp lệ (cần https://facebook.com/… hoặc https://youtube.com/…)' }), true;
          CFG.social = { ...(CFG.social || {}), facebook: fb, youtube: yt };
          try { const disk = JSON.parse(fs.readFileSync(CFG_FILE, 'utf8')); disk.social = CFG.social; fs.writeFileSync(CFG_FILE + '.tmp', JSON.stringify(disk, null, 1)); fs.renameSync(CFG_FILE + '.tmp', CFG_FILE); } catch (e) { return J(res, 500, { error: 'Không ghi được config.json' }), true; }
          return J(res, 200, { ok: true, social: CFG.social }), true; }
        if (u === '/admin/api/mail') return J(res, 200, { list: DB.mail.slice().reverse(), mailOn: !!(process.env.SMTP_USER && process.env.SMTP_PASS && (process.env.CONTACT_EMAIL || CFG.contactEmail)) }), true;
        if ((m = u.match(/^\/admin\/api\/mail\/([a-z0-9]+)\/(read|del)$/)) && req.method === 'POST') { const i = DB.mail.findIndex(x => x.id === m[1]); if (i >= 0) { if (m[2] === 'del') DB.mail.splice(i, 1); else DB.mail[i].read = true; markDirty(); } return J(res, 200, { ok: true }), true; }
        if (u === '/admin/api/stories') { if (req.method !== 'POST') return J(res, 200, { list: stories() }), true;
          let b; try { b = await readBody(req, 400000); } catch (e) { return J(res, 413, { error: 'Quá lớn (ảnh tối đa ~250 KB)' }), true; }
          const title = String(b.title || '').trim().slice(0, 120), text = String(b.text || '').trim().slice(0, 20000); if (!title || text.length < 10) return J(res, 400, { error: 'Cần tiêu đề và nội dung' }), true;
          const img = String(b.img || ''); if (img && !/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(img)) return J(res, 400, { error: 'Ảnh phải là JPG/PNG/WebP' }), true;
          const L = stories(); let st = L.find(x => x.id === b.id); if (!st) { st = { id: 's' + now().toString(36), t: now() }; L.push(st); }
          Object.assign(st, { title, cat: ['nhanqua', 'tienthan', 'thiensu', 'khac'].includes(b.cat) ? b.cat : 'khac', text, img: b.img === undefined ? st.img || '' : img, upd: now() }); saveStories(L); return J(res, 200, { ok: true, story: st }), true; }
        if ((m = u.match(/^\/admin\/api\/stories\/([a-z0-9]+)\/del$/)) && req.method === 'POST') { saveStories(stories().filter(x => x.id !== m[1])); return J(res, 200, { ok: true }), true; }
        if ((m = u.match(/^\/admin\/api\/orders\/(\d+)\/(confirm|reject)$/)) && req.method === 'POST') { const o = DB.orders.find(x => x.code === +m[1]); if (!o) return J(res, 404, { error: 'Không thấy' }), true;
          const ok = m[2] === 'confirm' ? fulfill(o, 'admin') : reject(o, 'admin'); return J(res, 200, { ok, order: pub(o) }), true; }
        if (u === '/admin' || u === '/admin/') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Frame-Options': 'DENY' }); res.end(fs.readFileSync(path.join(__dirname, 'admin.html'))); return true; }
        res.writeHead(404); res.end(); return true;
      }
    } catch (e) { J(res, 400, { error: e.message || 'Lỗi' }); return true; }
    return false;
  }
  const isMember = c => MEMBER_RE.test(String(c || '')) && DB.members[c] && DB.members[c].until > now();
  return { hasItem, invOf, shopList, handle, board, activePremium, activePB, isMember, publicConfig, MODE, sigData, fulfill, spend, auth: AUTH };
};
