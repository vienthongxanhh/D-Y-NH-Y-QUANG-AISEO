const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /const specificationsData[\s\S]*?\]\n  \};/m;

const newSpecs = `const specificationsData: Record<string, { param: string, value: string }[]> = {
    singlemode: [
      { param: "Chủng loại", value: "Singlemode (OS1/OS2) 9/125µm" },
      { param: "Kiểu sợi", value: "Simplex hoặc Duplex" },
      { param: "Loại đầu nối", value: "SC, LC, FC, ST (Chuẩn UPC/APC)" },
      { param: "Vỏ cáp", value: "PVC hoặc LSZH chống cháy, màu vàng đặc trưng" },
      { param: "Độ suy hao (Insertion Loss)", value: "≤ 0.2 dB" },
      { param: "Độ phản xạ (Return Loss)", value: "UPC ≥ 50 dB, APC ≥ 60 dB" },
      { param: "Đường kính cáp", value: "2.0mm, 3.0mm" },
      { param: "Lực căng tối đa", value: "≥ 90 N" },
      { param: "Bán kính uốn cong", value: "≥ 30 mm" },
      { param: "Nhiệt độ hoạt động", value: "-40°C đến +75°C" }
    ],
    multimode: [
      { param: "Chủng loại", value: "Multimode (OM2, OM3, OM4) 50/125µm" },
      { param: "Tốc độ truyền tải", value: "1Gbps (OM2), 10Gbps (OM3), 40/100Gbps (OM4)" },
      { param: "Loại đầu nối", value: "SC, LC, ST, MTRJ (Chuẩn UPC)" },
      { param: "Vỏ cáp", value: "PVC / LSZH (Cam, Xanh Aqua, Tím)" },
      { param: "Băng thông", value: "500 MHz.km (OM2), 2000 MHz.km (OM3)" },
      { param: "Độ suy hao (Insertion Loss)", value: "≤ 0.25 dB" },
      { param: "Đường kính vỏ", value: "2.0mm, 3.0mm" },
      { param: "Lực chịu kéo", value: "Tiêu chuẩn ≥ 90 N" },
      { param: "Ứng dụng", value: "Kết nối thiết bị mạng nội bộ, Switch, Router cao tốc" },
      { param: "Nhiệt độ bảo quản", value: "-40°C đến +85°C" }
    ],
    outdoor: [
      { param: "Chủng loại", value: "Dây nhảy quang Singlemode/Multimode chuyên dụng ngoài trời" },
      { param: "Đặc tính vỏ", value: "Lớp vỏ PE đen dày dặn, chống tia UV, chống thấm nước IP67" },
      { param: "Gia cường", value: "Có cáp treo kim loại hoặc dây Kevlar chịu lực căng cao" },
      { param: "Số lõi quang", value: "1, 2, 4, 8, 12, 24 FO tuỳ chọn" },
      { param: "Độ suy hao", value: "Ổn định ≤ 0.3 dB ngay điều kiện khắc nghiệt" },
      { param: "Đường kính cáp", value: "Lên tới 5.0mm - 7.0mm" },
      { param: "Tuổi thọ", value: "Trên 15 năm ngoài trời" },
      { param: "Môi trường áp dụng", value: "Trạm BTS, hệ thống camera đường phố, kết nối toà nhà liên khu" },
      { param: "Nhiệt độ", value: "-40°C đến +85°C, chống đóng băng" }
    ],
    dachien: [
      { param: "Ứng dụng", value: "Dùng cho quân sự, phát sóng lưu động, triển khai nhanh" },
      { param: "Cấu tạo rulo", value: "Tích hợp cuộn rulo quấn/thả cáp tiện lợi, tay cầm thép" },
      { param: "Đặc tính cáp", value: "Chống va đập, chống đứt, chịu lực đè quá tải" },
      { param: "Vỏ bảo vệ", value: "TPU siêu đàn hồi, kháng hóa chất" },
      { param: "Trọng lượng", value: "Nhẹ, tích hợp xe đẩy" },
      { param: "Chiều dài có sẵn", value: "100m, 200m, 300m, 500m" }
    ]
  };`;

code = code.replace(regex, newSpecs);
fs.writeFileSync('src/App.tsx', code);
console.log('Replaced specs table');
