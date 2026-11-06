/* Gửi thư báo qua SMTP (SMTPS cổng 465, ví dụ smtp.gmail.com với App Password) – không cần thư viện ngoài.
   Chỉ chạy khi có đủ biến môi trường SMTP_USER, SMTP_PASS và địa chỉ nhận (CONTACT_EMAIL hoặc contactEmail trong config.json). */
const tls = require('tls');
module.exports = function sendMail({ to, subject, text }) {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com', port = +process.env.SMTP_PORT || 465, user = process.env.SMTP_USER, pass = process.env.SMTP_PASS;
  if (!user || !pass || !to) return Promise.resolve(false);
  const b64 = s => Buffer.from(s, 'utf8').toString('base64');
  const body = ['From: "Chua Tam An" <' + user + '>', 'To: <' + to + '>', 'Subject: =?UTF-8?B?' + b64(subject) + '?=', 'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', b64(text).replace(/.{76}/g, '$&\r\n')].join('\r\n');
  const steps = ['EHLO chuataman', 'AUTH LOGIN', b64(user), b64(pass), 'MAIL FROM:<' + user + '>', 'RCPT TO:<' + to + '>', 'DATA', body + '\r\n.', 'QUIT'];
  return new Promise(ok => { let i = -1, buf = ''; const s = tls.connect(port, host, { servername: host }); const done = v => { try { s.end(); } catch (e) {} ok(v); };
    s.setTimeout(15000, () => done(false)); s.on('error', () => done(false));
    s.on('data', d => { buf += d; const lines = buf.split('\r\n'); const last = lines[lines.length - 2]; if (!last || /^\d{3}-/.test(last)) return; buf = ''; const code = +last.slice(0, 3);
      if (code >= 400) return done(false); if (++i >= steps.length) return done(true); if (i === steps.length - 1) { s.write(steps[i] + '\r\n'); return done(true); } s.write(steps[i] + '\r\n'); }); });
};
