# Chùa Tâm An v2 — Hướng dẫn chạy và đưa lên mạng

Chùa trực tuyến có **chánh điện 3D** (khi máy không có WebGL thì tự chuyển sang **ảnh 2D**), nhiều người cùng vào một lúc. Có thể **đăng nhập Google/Facebook** (tùy chọn) hoặc vào nhanh không tài khoản; hoạt động lễ Phật cơ bản miễn phí. Tên gọi lưu trên máy; tài khoản OAuth lưu tối thiểu trên máy chủ.

## 1. Chạy thử trên máy

**Cách nhanh nhất (một mình, không cần cài gì):** bấm đúp `index.html`. Trang chạy ở chế độ ngoại tuyến, có các bạn đạo "ảo" ngồi thiền cho đỡ vắng.

**Có nhiều người cùng vào (cần Node.js 18 trở lên):**
```bash
cd server
npm install
npm start          # mở http://localhost:8080
```
Mở thêm vài tab hoặc vài máy trong cùng mạng (`http://<IP-máy>:8080`) để thấy nhau.

**Chạy bằng Docker:**
```bash
docker build -t chua-tam-an .
docker run -p 8080:8080 chua-tam-an
```

## 2. Đưa lên Render.com (miễn phí)
1. Đưa cả thư mục này lên một kho GitHub.
2. Vào https://render.com, chọn **New → Web Service** rồi chọn kho vừa đưa lên.
3. Ở mục **Runtime**, chọn **Docker**. Render tự đọc `Dockerfile` (hoặc dùng **New → Blueprint** để Render đọc `render.yaml`).
4. Mục **Health Check Path** điền `/health`. Bấm **Create**, chờ vài phút là có địa chỉ dạng `https://chua-tam-an.onrender.com`.
5. Gói miễn phí sẽ "ngủ" sau khoảng 15 phút không có ai vào. Người vào đầu tiên phải chờ chừng 30–60 giây để máy chủ thức dậy. Trong lúc đó trang vẫn chạy được một mình và tự kết nối lại khi máy chủ sẵn sàng.
6. Muốn giữ lời nguyện, hoa đăng, nến sau mỗi lần khởi động lại thì gắn **Disk** (gói trả phí) và đặt biến `DATA_FILE=/data/data.json`.

## 3. Fly.io / Railway
- **Fly.io:** chạy `fly launch` (nhận diện Dockerfile, cổng nội bộ 8080), rồi `fly deploy`.
- **Railway:** chọn New Project → Deploy from GitHub. Railway tự dùng Dockerfile và tự cấp biến `PORT`.

## 4. Mở file trên máy nhưng vẫn nối vào máy chủ
Trong `index.html`, trước dòng `<script src="app.js">`, thêm:
```html
<script>window.CHUA_SERVER = 'wss://chua-tam-an.onrender.com/ws';</script>
```
Hoặc thêm vào địa chỉ: `index.html?server=wss://.../ws`.

## 5. Các tham số hữu ích trên địa chỉ
| Tham số | Ý nghĩa |
|---|---|
| `?mode=2d` | Ép dùng giao diện ảnh 2D (máy yếu hoặc không có WebGL) |
| `?q=low` / `medium` / `high` | Chất lượng đồ họa 3D (điện thoại mặc định là `low`) |
| `?nointro=1` | Bỏ đoạn phim mở đầu |
| `?room=2` | Vào thẳng Chùa 2 |
| `?noguide=1` | Bỏ phần hướng dẫn lần đầu |

Trong ⚙️ Cài đặt cũng có: chất lượng hình, đổi chùa (1/2/3), đổi tên và màu áo, xem lại hướng dẫn, bật hoặc tắt phim mở đầu.

## 6. Máy chủ
- Một tệp duy nhất là `server/server.js`, dùng thư viện `ws`. Tệp này vừa phục vụ trang web vừa nhận kết nối WebSocket ở `/ws`.
- Có 3 phòng (Chùa 1/2/3), mỗi phòng tối đa 50 người.
- Dùng chung giữa mọi người: số tiếng mõ, hoa đăng (theo phòng), Tường nến, lời cầu nguyện, cá phóng sinh (toàn chùa), và giờ tụng kinh chung lúc 19:00 hằng ngày.
- Trò chuyện có lọc lời thô tục và giới hạn tốc độ gửi.
- `GET /api/stats` trả về số người đang vào; `GET /health` để kiểm tra máy chủ.

## 7. Bản quyền
- three.js: giấy phép MIT.
- Phông chữ Be Vietnam Pro và Cormorant Garamond: giấy phép SIL OFL, kèm sẵn trong thư mục `fonts/`.
- Mọi ảnh nền và kết cấu bề mặt đều do dự án tự tạo bằng AI, không lấy của trang nào khác. Chữ tiếng Việt (hoành phi, câu đối) được vẽ bằng mã.
- Âm thanh (mõ, chuông, nước, gió…) được tổng hợp bằng Web Audio, không dùng tệp ghi âm.

## 9. Đăng nhập Google / Facebook (tùy chọn)

Giữ **Vào nhanh** (không tài khoản). Khi cấu hình đủ biến môi trường, màn hình bắt đầu hiện nút **Đăng nhập Google** (to nhất, trên cùng), rồi **Facebook**, rồi vào nhanh. Google One Tap hiện khi trình duyệt hỗ trợ.

### Biến môi trường (chỉ trên máy chủ — không ghi vào zip/client)

| Biến | Ý nghĩa |
|---|---|
| `GOOGLE_CLIENT_ID` | Client ID OAuth 2.0 (Google Cloud) |
| `GOOGLE_CLIENT_SECRET` | Client Secret |
| `FACEBOOK_APP_ID` | App ID (Facebook Developers) |
| `FACEBOOK_APP_SECRET` | App Secret |
| `SESSION_SECRET` | Chuỗi ngẫu nhiên dài ≥32 ký tự (ký cookie phiên) |
| `PUBLIC_URL` | URL công khai, vd `https://ten-mien.com` (không có `/` cuối) |
| `AUTH_MOCK=1` | Chỉ để kiểm thử — giả lập OAuth (không dùng production) |

Thiếu khóa nào thì **ẩn** nút tương ứng. Không bao giờ đưa secret vào `config.json` hay mã client.

### Google Cloud Console
1. Tạo dự án → **APIs & Services → Credentials → Create OAuth client ID** (Web application).
2. **Authorized JavaScript origins:** `https://ten-mien.com` (và `http://localhost:8080` khi thử).
3. **Authorized redirect URIs:** `https://ten-mien.com/api/auth/callback/google`
4. Bật **Google Identity Services** (One Tap dùng cùng Client ID).
5. Màn hình đồng ý OAuth: thêm miền, email hỗ trợ.

### Facebook Developers
1. Tạo ứng dụng → thêm sản phẩm **Facebook Login**.
2. **Valid OAuth Redirect URIs:** `https://ten-mien.com/api/auth/callback/facebook`
3. Bật email + public_profile. Điền **Privacy Policy URL** (trang chùa hoặc ghi chú riêng) — Facebook yêu cầu khi xét duyệt.
4. Thêm miền ứng dụng trùng `PUBLIC_URL`.

### Gộp ví khi đăng nhập lần đầu
- Máy đã có mã ví `TA…` (vào nhanh) → lần đầu đăng nhập **gộp** xu, đồ đã mua, hội viên, điểm danh, bàn thờ vào ví tài khoản.
- Cùng tài khoản trên máy khác → cùng biệt danh và ví.
- Gộp đã ghi nhật ký; ví đã gộp không gộp lại (chống lạm dụng).

### Trình duyệt trong ứng dụng (Facebook / Zalo…)
Google OAuth thường bị chặn trong webview. Trang sẽ hiện gợi ý **«Mở bằng Chrome/Safari để đăng nhập Google»** kèm nút chép đường dẫn. Đăng nhập Facebook vẫn dùng được trong webview.

### Xóa tài khoản / quyền riêng tư
Trong ⚙️ Cài đặt → Tài khoản: đăng xuất hoặc **Xóa tài khoản** (xóa PII; xu theo mã ví vẫn giữ). Chùa chỉ lưu: mã nhà cung cấp, tên hiển thị, ảnh đại diện, email (nếu được cấp).

### Admin
Tab **Tài khoản** trong `/admin`: tìm theo tên/email/ví, xem nhà cung cấp đã liên kết và nhật ký gộp ví.

## 8. Ủng hộ duy trì Chùa Tâm An online (xu công đức)

Mọi hoạt động lễ Phật cơ bản (thắp hương, thả đèn thường, lễ Phật, gõ mõ, ngồi thiền…) **luôn miễn phí**. Phần ủng hộ dùng **xu**:

| Việc | Cách tính | Có cần duyệt? |
|---|---|---|
| **Nạp xu** (chuyển khoản) | 1 xu = 1.000đ (sửa ở `xu.rate`) | **Có** — chỉ việc nạp xu cần bạn xác nhận |
| Bỏ xu vào **hòm công đức** | trừ xu ngay, tên tự lên **Bảng công đức** (xếp theo tổng xu, cao xuống thấp), có hiệu ứng đồng xu rơi vào hòm | Không |
| **Vật phẩm loại đặc biệt** (hoa đăng, trầm hương, sen vàng, đèn cầu an) | trừ xu, hiện cho mọi người, có tên, tự hết hạn | Không |
| **Bảng cầu an / cầu siêu** | trừ xu, ghi tên lên bảng trong chánh điện N ngày | Không |
| **Hội viên** (tháng) | trừ xu; phòng thiền riêng, huy hiệu 🪷, không hiện ô tài trợ | Không |

Mỗi máy có một **mã ví** (TA + 10 ký tự). Đăng nhập Google/Facebook gắn ví vào tài khoản và đồng bộ trên mọi máy; vào nhanh vẫn dùng được không cần đăng nhập.

Mọi giá, gói xu, số ngày… nằm trong **`server/config.json`** (sửa xong khởi động lại máy chủ).

### 8.1 Chế độ mặc định: duyệt tay
1. Thông tin tài khoản nhận tiền nằm ở mục `vietqr` trong `server/config.json` (`bankId` = mã BIN/VietQR của ngân hàng, `bankName`, `accountNo`, `accountName` không dấu IN HOA). Đổi tài khoản thì sửa ở đây.
2. Khung **Nạp xu** hiện 3 tab:
   - **VietQR (khuyên dùng)** — mã động tạo bởi `img.vietqr.io`, có sẵn **số tiền** và **nội dung CK = mã đơn CTA…**. Nếu ảnh không tải được, khung tự chuyển sang mã tĩnh.
   - **Mã tĩnh ngân hàng** và **MoMo** — ảnh trong `assets/pay/` (khai báo ở `vietqr.staticQr`). Mã tĩnh không có số tiền/nội dung, nên khung hướng dẫn người nạp **tự nhập số tiền và gõ mã CTA… vào ô nội dung / lời nhắn**.
3. Đặt biến môi trường **`ADMIN_PASSWORD`** (mật khẩu đủ dài). Không đặt thì trang quản trị bị khóa.
4. Mở `https://<tên-miền>/admin` (tên đăng nhập gì cũng được, mật khẩu = `ADMIN_PASSWORD`). Tab **Nạp xu chờ duyệt**: đối chiếu sao kê theo **mã CTA…** và **số tiền** → bấm **Xác nhận** (xu vào ví ngay) hoặc **Từ chối**. Có thêm tab **Tiêu xu**, **Giới thiệu bạn bè** và thống kê (tiền đã nhận 24h/7/30 ngày, xu đã bán/đã tiêu/còn trong ví…).
5. Lần nạp chưa thanh toán tự hết hạn sau `orderMinutes` phút (mặc định 30).

### 8.2 Tùy chọn: PayOS tự xác nhận
1. Đăng ký tại **https://my.payos.vn**, tạo **kênh thanh toán** gắn tài khoản ngân hàng, lấy 3 khóa: **Client ID**, **API Key**, **Checksum Key**.
2. Trên Render → dịch vụ → **Environment**, thêm:
   - `PAYOS_CLIENT_ID`, `PAYOS_API_KEY`, `PAYOS_CHECKSUM_KEY`
   - `PUBLIC_URL` = `https://<tên-miền>` (dùng làm đường quay về sau thanh toán)
3. Trong my.payos.vn, đặt **Webhook URL** = `https://<tên-miền>/api/payos/webhook`.
4. Khởi động lại. Nhật ký sẽ ghi “chế độ PayOS (tự xác nhận)”. Mã QR do PayOS cấp; khi tiền vào, webhook (đã kiểm chữ ký HMAC-SHA256) cộng xu tự động; trang cũng tự hỏi lại trạng thái đơn để dự phòng. Trang /admin vẫn dùng được để xem và xác nhận tay khi cần.

### 8.3 Giới thiệu bạn bè
- Mỗi ví có link riêng `https://<tên-miền>/?ref=MÃ` (mục **Giới thiệu bạn bè**: chép link, chia sẻ Facebook, gửi qua Zalo, đếm số bạn đã mời).
- Người giới thiệu được **20 xu** (`referral.reward` hoặc biến `REFERRAL_REWARD`) khi tài khoản **mới** được mời **nạp xu lần đầu và được duyệt** (`referral.trigger` / `REFERRAL_TRIGGER` = `first_topup`, mặc định). Có thể đổi sang `join` (thưởng ngay khi bạn mới vào, có chặn trùng theo thiết bị + IP).
- Chống gian lận: không tự giới thiệu, mỗi ví chỉ một người giới thiệu, không giới thiệu vòng, chỉ tính ví mới (≤ `newAccountDays` ngày, chưa nạp/tiêu), giới hạn tốc độ theo IP; thưởng chỉ trả một lần cho mỗi ví.

### 8.4 Nhà tài trợ và kênh
- `sponsors.bepchay` / `sponsors.thuvien`: danh sách `{ "name", "text", "url", "logo" }` (mặc định trống → không hiện gì; hội viên không thấy).
- `social.youtube`, `social.facebook`: điền link thì hiện nút ở màn hình đầu và phần Cài đặt.

### 8.5 Lưu dữ liệu — QUAN TRỌNG
Ví xu, lần nạp, bảng công đức nằm trong tệp `DATA_FILE` (mặc định `server/data.json`). **Gói miễn phí của Render xóa ổ đĩa mỗi lần khởi động lại/đăng bản mới** → sẽ mất xu của mọi người. Khi đã nhận tiền thật, hãy dùng gói có **Persistent Disk** (ví dụ gắn ở `/var/data`) và đặt `DATA_FILE=/var/data/data.json`, đồng thời thỉnh thoảng sao lưu tệp này.

### 8.6 Biến môi trường khác
- `PAY_TEST=1` — hiện nút “Giả lập đã nhận” để thử luồng nạp (**không bật khi chạy thật**).
- `ORDER_RATE` — số lần tạo lệnh nạp tối đa mỗi IP trong 10 phút (mặc định 10).
- `WALLET_RATE` — số ví mới tối đa mỗi IP trong 1 giờ (mặc định 30; nhiều người dùng chung mạng thì tăng lên).
- `CONFIG_FILE` — đường dẫn config khác nếu cần.

### 8.7 Lễ vật tự cháy hết và giới hạn số lượng
Mục `offerings` trong `server/config.json` (máy chủ gửi xuống cho mọi người, nên chỉ cần sửa một chỗ):
- `incense.lifeMin` (mặc định 20 phút) — nhang cháy ngắn dần rồi tàn; `incense.capSticks` — số nén tối đa mỗi bát hương/đỉnh hương (cũ nhất tàn trước).
- `candle.lifeMin` (60 phút), `candle.cap` — nến trên tường nến.
- `lotusLamp.lifeMin`, `lotusLamp.cap` — đèn hoa sen ở hồ sen (trôi rồi mờ dần).
- `lantern.lifeMin`, `lantern.cap` — hoa đăng trên hồ hoa đăng.
- `premiumCap` — số vật phẩm đặc biệt hiển thị tối đa cho mỗi loại (mới nhất ưu tiên; vật phẩm đặc biệt sống theo số ngày đã mua và không bị lễ vật thường đẩy ra).
Lễ vật không bao giờ bị chặn: khi một người dâng quá nhanh, máy chủ vẫn cho người đó thấy lễ vật của mình nhưng không phát lại cho cả chùa.

## 9. Tối ưu tải trang
- Lần đầu ~2 MB (trước ~6,2 MB), lần sau gần như 0 nhờ bộ nhớ đệm; máy chủ tự nén br/gzip và gắn ETag.
- Chất lượng hình tự điều chỉnh theo máy (`?q=low|high` để ép).
- Mã nguồn ở `source/` (zip): sửa trong `source/src`, chạy `npm i && python3 build.py` để tạo lại `app.js`.
- Mã được chia chunk (esbuild `--splitting`, ES module trong `js/`): trang chỉ tải `js/main.js` + phần dùng chung; các khu mới (Lưu niệm, Cầu tình duyên, Nhà Tổ, Vườn La Hán, Tháp Xá Lợi) và nội dung Thư viện mở rộng (Lịch sử Phật pháp, Truyện hay) là chunk riêng, chỉ tải khi người chơi đi tới gần (≈38 m) hoặc mở bảng; khu ở xa (>70 m) được ẩn để đỡ tốn GPU. `app.js` (1 tệp) vẫn được tạo cho chế độ mở file:// và trình duyệt cũ.

## 10. Hòm thư góp ý (📮 trong menu "Thêm")
- Thư người dùng gửi được lưu trên máy chủ (`data.json`) và xem/đánh dấu đã đọc/xóa ở **/admin → 📮 Hòm thư**. Giới hạn 5 thư/giờ mỗi IP, tối đa 500 thư (thư cũ nhất tự xóa).
- Email chủ chùa **chưa được đặt** (`contactEmail` trong `server/config.json` đang để trống). Khi muốn nhận thư qua email, đặt sau:
  - `CONTACT_EMAIL=<email nhận>` (biến môi trường, ưu tiên) hoặc điền `contactEmail` trong `server/config.json`;
  - `SMTP_USER=<địa chỉ Gmail gửi>` và `SMTP_PASS=<App Password 16 ký tự>` (Google Account → Bảo mật → Xác minh 2 bước → Mật khẩu ứng dụng). Mặc định dùng `smtp.gmail.com:465` (SMTPS); đổi bằng `SMTP_HOST`, `SMTP_PORT` nếu dùng dịch vụ khác.
  - Chưa đặt đủ các biến này thì thư vẫn được lưu và hiển thị trong /admin như bình thường.

## 11. Truyện hay (Thư viện → 📜 Truyện hay)
- 8 truyện có sẵn (nhân quả, tiền thân, thiền sư) kể lại bằng lời văn riêng, đọc chữ lớn hoặc bấm 🔊 để nghe (giọng tiếng Việt của máy).
- Chủ chùa thêm/sửa/xóa truyện tại **/admin → 📚 Truyện hay** (tiêu đề, loại, nội dung, ảnh tùy chọn – ảnh tự thu nhỏ ≤720 px). Truyện lưu ở `server/stories.json` (đổi đường dẫn bằng biến `STORIES_FILE`; nên đặt trên ổ lưu trữ bền như `data.json`), hiện ngay trong Thư viện, không cần sửa mã, kèm nhãn **Mới** trong 30 ngày.

## 12. Khu mới
- **Bàn thờ gia tiên (Nhà Tổ, sau Chánh điện)**: mỗi ví một bàn thờ; ảnh được thu nhỏ trên máy người dùng (≤240×320, JPEG ≤~80 KB) trước khi gửi; máy chủ chỉ nhận JPEG. Đường dẫn chia sẻ `?bantho=<mã>` cho người thân xem (chỉ xem, được thắp hương/dâng hoa/quả). Khung thếp vàng, ngũ quả, đèn sen mở bằng vật phẩm `giatien` (20 xu/30 ngày). Có nút "Xóa bàn thờ của tôi".
- **Cây bồ đề chung**: bộ đếm toàn chùa (`DB.bode`), cộng khi công đức, thắp hương, treo nguyện – tối đa 1 lượt/phút mỗi ví (hoặc mỗi kết nối). Cây lớn theo 8 giai đoạn (0, 30, 100, 300, 800, 2000, 5000, 12000), hiệu ứng nở hoa khi qua mốc.
- **Gác chuông**: tiếng chuông phát cho cả chùa kèm lời nguyện tùy chọn (≤60 ký tự); mỗi người 1 tiếng/6 giây, cả chùa tối đa 20 tiếng/phút.
- **Vườn La Hán** (sau Chánh điện, phía đông): 18 tượng đá low-poly gộp 1 lưới; đến gần tượng sẽ mở câu chuyện, có đọc to, tiến độ x/18 và huy hiệu.
- **Tháp Xá Lợi** (sau Chánh điện, phía tây): đi vòng theo chiều kim đồng hồ để đếm vòng nhiễu tháp; niệm Phật bằng giọng đọc của máy (không tải tệp âm thanh).

## 13. Nút Facebook fanpage / YouTube
- Sửa trong `/admin` → tab **🔗 Fanpage · YouTube** (ghi thẳng vào `server/config.json` → `social.facebook`, `social.youtube`), hoặc sửa tay file config rồi khởi động lại.
- Chỉ nhận link `https://` của facebook.com / fb.com / youtube.com / youtu.be. Để trống → nút tự ẩn (góc trên màn hình chùa và màn hình vào chùa). Mặc định fanpage: https://www.facebook.com/Tamantu.oficiall (YouTube chưa điền).

## 14. Chọn phòng & Bạn đạo
- Bấm ô tên phòng ở góc trái trên → bảng **Chọn phòng** (số người ước chừng x/tối đa, Làm mới, Bạn đạo).
- Người mới tự vào phòng đông nhất còn chỗ; tất cả đầy thì tự mở phòng mới.
- Sức chứa mỗi phòng: `roomMax` trong `server/config.json` (mặc định 50), hoặc biến môi trường `ROOM_MAX` (ưu tiên).
- **Bạn đạo**: mỗi người online có mã 5 ký tự; nhập mã hoặc đúng tên để vào cùng phòng; link mời dạng `https://<tên-miền>/?ban=MÃ`. Mã đổi mỗi lần vào chùa, không lưu.

## 15. Nhân vật & trang phục
- Nhân vật chibi dựng bằng code (không dùng mô hình ngoài), hình học/vật liệu dùng chung cho mọi người chơi.
- Ô trang phục: `ao`, `non`, `toc`, `chuoi`, `giay`, `tay`. Thêm món mới trong `config.json → shop` với `kind` là một trong các ô trên và `val` là mã màu; mọi người cùng phòng đều thấy.
