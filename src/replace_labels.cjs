const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/useState\('rack'\)/g, "useState('singlemode')");

code = code.replace(
  /\{\s*id:\s*'rack',\s*name:\s*'Tủ Đứng \(Floor\)',\s*icon:\s*Server\s*\}/,
  "{ id: 'singlemode', name: 'Singlemode (SM)', icon: Box }"
);
code = code.replace(
  /\{\s*id:\s*'wall',\s*name:\s*'Treo Tường \(Wall mount\)',\s*icon:\s*Box\s*\}/,
  "{ id: 'multimode', name: 'Multimode (OM)', icon: Server }"
);
code = code.replace(
  /\{\s*id:\s*'server',\s*name:\s*'Data Center Rack',\s*icon:\s*Layers\s*\}/,
  "{ id: 'outdoor', name: 'Ngoài Trời (Outdoor)', icon: CloudLightning }"
);
code = code.replace(
  /\{\s*id:\s*'outdoor',\s*name:\s*'Ngoài Trời \(Outdoor\)',\s*icon:\s*CloudLightning\s*\}/,
  "{ id: 'dachien', name: 'Dã Chiến/Rulo', icon: Layers }"
);

code = code.replace(/Cấu Hình Chi Tiết Từng Loại Tủ/g, "Cấu Hình Chi Tiết Từng Dòng Cáp");
code = code.replace(/So Sánh Trọng Tải Vỏ Tủ/g, "So Sánh Tiêu Chuẩn Cáp");
code = code.replace(/SO SÁNH TỦ MAXTEL VÀ TỦ GIÁ RẺ/g, "SO SÁNH CÁP MAXTEL VÀ CÁP GIÁ RẺ");
code = code.replace(/Độ dày thép trụ/g, "Chất lượng lõi quang");
code = code.replace(/Thép chỉ từ 0\.8mm/g, "Lõi quang tạp chất, suy hao cao (>0.5dB).");
code = code.replace(/Thép chịu lực siêu chắc/g, "Lõi thạch anh tinh khiết, suy hao cực thấp (≤ 0.2dB).");
code = code.replace(/Lớp sơn tủ chống tĩnh điện/g, "Cấu tạo vỏ cáp bảo vệ");
code = code.replace(/Sơn bóng thông thường/g, "Vỏ nhựa tái chế, dễ mục nát, dễ cháy lan khi chập điện.");
code = code.replace(/Sơn tĩnh điện tạo sần/g, "Vỏ nhựa LSZH/PE nguyên sinh, chống cháy lan, siêu đàn hồi.");
code = code.replace(/Độ chuẩn xác thanh đột lỗ U/g, "Đầu bấm (Connector)");
code = code.replace(/Lỗ bị lệch, lắp thiết/g, "Đầu gốm tái chế, không khít, dễ gãy chân tiếp xúc.");
code = code.replace(/Đột lỗ CNC bằng máy/g, "Đầu gốm Ceramic chuẩn xác, đúc sẵn nhà máy nguyên khối.");
code = code.replace(/Khóa an toàn/g, "Chứng nhận đo lường");
code = code.replace(/Ổ khóa gia công lỏng lẻo/g, "Không có tem mác kiểm định, trôi nổi.");
code = code.replace(/Khóa lẫy bật cao cấp/g, "Đầy đủ chứng chỉ Vinacontrol, đo test từng sợi cáp.");

code = code.replace(/Mua tủ rack/gi, "Mua cáp quang");
code = code.replace(/Bạn Cần Tư Vấn Tủ Rack/g, "Bạn Cần Tư Vấn Cáp Quang");
code = code.replace(/Gửi yêu cầu báo giá.*tủ rack/g, "Gửi yêu cầu báo giá dự án cáp");
code = code.replace(/Tủ Mạng Cao Cấp/g, "Vật Tư Quang Cao Cấp");

code = code.replace(/DÀNH CHO TRUNG TÂM DỮ LIỆU/g, "DÀNH CHO DỰ ÁN VIỄN THÔNG");
code = code.replace(/Bảo Hành 5 Năm/g, "Bảo Hành Suy Hao Trọn Đời");
code = code.replace(/Bảo hành gỉ sét/g, "Bảo hành suy hao, nứt gãy");


fs.writeFileSync('src/App.tsx', code);
console.log('Final text replacements mapped');
