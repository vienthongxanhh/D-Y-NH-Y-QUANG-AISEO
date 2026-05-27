const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace standard states
code = code.replace(/useState\('rack'\)/g, "useState('singlemode')");

code = code.replace(/Tủ Rack Maxtel - Tủ Mạng Chính Hãng/g, "Dây Nhảy Quang Maxtel - Chính Hãng");

// Replace products
const newProducts = `[
    // --- Singlemode ---
    {
      id: 1,
      title: "Dây nhảy quang LC LC UPC/APC Singlemode MAXTEL",
      category: "singlemode",
      cap: "SM 9/125",
      desc: "Chuyên dụng cho các hệ thống quang cần truyền tải khoảng cách xa, chuẩn kết nối LC-LC.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["LC-LC", "Singlemode", "Giá sỉ"]
    },
    {
      id: 2,
      title: "Dây nhảy quang SC LC APC Singlemode MAXTEL",
      category: "singlemode",
      cap: "SM 9/125",
      desc: "Thay thế cáp truyền tải cho modem quang, tương thích tốt với các chuẩn GPON.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["SC-LC", "APC"]
    },
    {
      id: 3,
      title: "Dây nhảy quang SC SC UPC/APC Singlemode MAXTEL",
      category: "singlemode",
      cap: "SM 9/125",
      desc: "Kết nối trạm chính, tổng đài và tủ rack viễn thông.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["SC-SC", "Sẵn hàng"]
    },
    // --- Multimode ---
    {
      id: 4,
      title: "Dây nhảy quang OM3 SC SC UPC MAXTEL Duplex",
      category: "multimode",
      cap: "OM3 50/125",
      desc: "Chuẩn giao tiếp SC/UPC, thích hợp ở môi trường nội bộ cường độ cao lên tới 10Gbps.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["OM3", "SC-SC"]
    },
    {
      id: 5,
      title: "Dây nhảy quang OM3 SC LC UPC MAXTEL Duplex",
      category: "multimode",
      cap: "OM3 10Gbps",
      desc: "Dây nhảy chuyển đổi LC-SC đa mode tốc độ cao, bọc LSZH chống cháy.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["OM3", "LSZH"]
    },
    {
      id: 6,
      title: "Dây nhảy quang OM3 LC LC UPC MAXTEL Duplex",
      category: "multimode",
      cap: "OM3 LC-LC",
      desc: "Kết nối siêu tốc 10G chuyên dùng cho Server, Switch quang chuyên tải.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["LC-LC", "Duplex"]
    },
    {
      id: 7,
      title: "Dây nhảy quang Multimode OM4 40G Maxtel",
      category: "multimode",
      cap: "OM4",
      desc: "Dây nhảy tốc độ siêu khủng lên tới 40Gbps/100Gbps.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["40G", "100G"]
    },
    // --- Outdoor ---
    {
      id: 8,
      title: "Dây nhảy quang LC SC SM MAXTEL Duplex Ngoài Trời",
      category: "outdoor",
      cap: "Outdoor",
      desc: "Vỏ bọc PE đen dày siêu chịu lực và chống thấm nước chuẩn IP67.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["LC-SC", "PE"]
    },
    {
      id: 9,
      title: "Dây nhảy quang LC LC SM MAXTEL Duplex Ngoài Trời",
      category: "outdoor",
      cap: "Outdoor",
      desc: "Chống tia UV, dùng cho cáp thả camera đường phố, BTS điện lực.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["Chống tia UV", "LC-LC"]
    },
    {
      id: 10,
      title: "Dây nhảy quang SC SC SM MAXTEL Duplex Ngoài Trời",
      category: "outdoor",
      cap: "Outdoor",
      desc: "Quang Duplex SM SC-SC cực kỳ rắn chắc cho treo ngoài trời chịu bão.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["SC-SC", "Duplex"]
    },
    // --- Dã Chiến ---
    {
      id: 11,
      title: "Dây nhảy quang dã chiến 4LCU/4LCU Singlemode Maxtel",
      category: "dachien",
      cap: "Dã chiến / MPO",
      desc: "Thiết kế cuộn rulo chống cắn, kéo rải quang lưu động quân sự, truyền hình sự kiện 4-Core.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["Rulo", "4FO"]
    }
  ]`;
code = code.replace(/const products = \\[\s*\/\/ --- Lắp Rack ---[\s\S]*?\\];/m, "const products = " + newProducts + ";");


const newFilters = `[
              { id: 'singlemode', name: 'Singlemode (SM)' },
              { id: 'multimode', name: 'Multimode (OM2/OM3)' },
              { id: 'outdoor', name: 'Dây Ngoài Trời (Outdoor)' },
              { id: 'dachien', name: 'Dã Chiến / Rulo' },
            ]`;

code = code.replace(/\[\s*\{\s*id:\s*'rack'[\s\S]*?\}\s*\](?!;)/m, newFilters);

const newSpecs = `{
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
      { param: "Độ suy hao", value: "Ổn định ≤ 0.3 dB ngay cả điều kiện khắc nghiệt" },
      { param: "Đường kính cáp", value: "Lên tới 5.0mm - 7.0mm" },
      { param: "Tuổi thọ", value: "Trên 15 năm ngoài trời" },
      { param: "Môi trường áp dụng", value: "Trạm BTS, hệ thống camera đường phố, kết nối toà nhà liên khu" },
      { param: "Nhiệt độ hoạt động", value: "-40°C đến +85°C, chống chịu đóng băng" }
    ],
    dachien: [
      { param: "Ứng dụng", value: "Dùng cho quân sự, phát sóng truyền hình lưu động, triển khai nhanh" },
      { param: "Cấu tạo rulo", value: "Tích hợp cuộn rulo quấn/thả cáp tiện lợi, tay cầm thép" },
      { param: "Đặc tính cáp", value: "Chống va đập mạnh, chống cứa đứt, chịu lực xe đè quá tải" },
      { param: "Vỏ bảo vệ", value: "TPU siêu đàn hồi, kháng hóa chất, chịu ma sát tốt" },
      { param: "Khả năng tái dụng", value: "Rất cao, dễ dàng cuộn lại sau khi thi công dã chiến" },
      { param: "Lực tải kéo", value: "Lên đến 1500 N - 2000 N" },
      { param: "Trọng lượng", value: "Nhẹ, tích hợp xe đẩy với cáp cuộn lớn" },
      { param: "Nhiệt độ siêu khắc nghiệt", value: "-55°C đến +85°C" },
      { param: "Chiều dài có sẵn", value: "100m, 200m, 300m, 500m (Khách hàng tuỳ chọn)" }
    ]
  }`;

code = code.replace(/const specificationsData: Record<string, \\{ param: string, value: string \\}\\[\\]> = \\{[\\s\\S]*?^  \\};/m, "const specificationsData: Record<string, { param: string, value: string }[]> = " + newSpecs + ";");


// Some text replacements in hero and text:
code = code.replace(/Tủ Rack Mạng Cao Cấp Nhất Phân Khúc/g, "Dây Nhảy Quang Tiêu Chuẩn Cao Cấp");
code = code.replace(/TỦ RACK - TỦ SERVER/g, "DÂY NHẢY QUANG");
code = code.replace(/Lựa chọn tủ mạng số 1 của các công trình công nghệ, văn phòng và Data Center\. Khung thép SPCC chịu tải siêu trường siêu cường, nước sơn tĩnh điện xướt độc quyền siêu bền vững\./g, "Lựa chọn dây nhảy quang số 1 của các công trình viễn thông, mạng nội bộ và Data Center. Lõi cáp nguyên chất, đầu bấm đúc sẵn độ suy hao siêu thấp, tín hiệu truyền tải tốc độ cao và bền bỉ theo thời gian.");
code = code.replace(/Nhận Tư Vấn & Báo Giá Tủ Rack/g, "Nhận Tư Vấn & Báo Giá Dây Nhảy Quang");
code = code.replace(/Hơn <strong(.*?)>2,500\+<\/strong> nhà thầu hạ tầng tin dùng tủ mạng Maxtel/g, "Hơn <strong$1>2,500+</strong> nhà thầu viễn thông tin dùng dây nhảy quang Maxtel");
code = code.replace(/Danh Mục Dòng Tủ Mạng/g, "Danh Mục Các Dòng Dây Nhảy Quang");
code = code.replace(/Sản xuất đầy đủ mẫu mã tủ rack công nghiệp, tủ rack văn phòng, treo tường theo đơn đặt hàng dự án\./g, "Cung cấp đầy đủ chủng loại dây nhảy quang nội bộ, ngoài trời, singlemode và multimode với đầu nối tuỳ chọn theo dự án.");
code = code.replace(/Banner Tủ Rack Maxtel/g, "Banner Dây Nhảy Quang Maxtel");
code = code.replace(/Phóng to ảnh mẫu tủ rack/g, "Phóng to ảnh mẫu dây nhảy quang");

code = code.replace(/Cấu Trúc Tủ Rack Tối Ưu Nhất/g, "Cấu Trúc Cáp Quang Tối Ưu Nhất");
code = code.replace(/VÌ SAO TỦ RACK MAXTEL LẠI ĐƯỢC CHỨNG NHẬN ISO/g, "VÌ SAO DÂY NHẢY QUANG MAXTEL LẠI ĐƯỢC CHỨNG NHẬN ISO");

const newFeatTabs = `[
                { 
                  icon: Shield, 
                  title: "Lõi Sợi Quang Tinh Khiết", 
                  desc: "Kính thạch anh tinh khiết, lõi siêu mảnh giúp ánh sáng truyền đi với độ suy hao tối thiểu, đảm bảo tín hiệu xa." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Đầu Nối Chuẩn Xác (UPC/APC)", 
                  desc: "Bề mặt tiếp xúc gia công gốm Ceramic, độ bóng cao giúp giảm phản xạ ánh sáng (Return loss) vượt trội." 
                },
                { 
                  icon: Zap, 
                  title: "Vỏ LSZH Chống Cháy & Bền Bỉ", 
                  desc: "Kháng dung môi, chống cháy lan, sinh ít khói độc (LSZH), kết dính linh hoạt chống nứt gãy sụt khi uốn cong." 
                }
              ]`;

code = code.replace(/\\[\s*\\{\s*icon: Shield(?!(Check))[\s\S]*?\\}\s*\\]\.map\(\(feat, idx\)/m, newFeatTabs + ".map((feat, idx)");


const newFeatModal = `[
                     {
                       title: "Lõi Sợi Quang Tinh Khiết",
                       desc: "Chi tiết hình ảnh sợi quang tinh khiết truyền tín hiệu không thất thoát.",
                       icon: Shield,
                       image: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg"
                     },
                     {
                       title: "Đầu Nối Chuẩn Xác (UPC/APC)",
                       desc: "Đầu cắm chuẩn SC/LC/FC UPC/APC đúc sẵn chắc chắn với tiêu chuẩn suy hao siêu thấp.",
                       icon: ShieldCheck,
                       image: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg"
                     },
                     {
                       title: "Vỏ LSZH Chống Cháy & Bền Bỉ",
                       desc: "Chất liệu vỏ linh hoạt, bền chắc, chịu lực căng khi thi công cáp tại Data Center.",
                       icon: Zap,
                       image: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg"
                     }
                   ]`;
code = code.replace(/\\[\s*\\{\s*title: "Thép Cán Nguội Dày"[\s\S]*?\\}\s*\\]\.map\(\(content, idx\)/m, newFeatModal + ".map((content, idx)");


code = code.replace(/thiết bị tủ Rack và quang/g, "vật tư thiết bị quang");
code = code.replace(/tủ mạng Maxtel/g, "dây nhảy quang Maxtel");
code = code.replace(/tủ rack/gi, "dây nhảy quang");
code = code.replace(/Tủ Rack/g, "Dây Nhảy Quang");
code = code.replace(/Tủ Mạng/g, "Dây Nhảy Quang");
code = code.replace(/Tủ Server/g, "Dây Nhảy Quang");
code = code.replace(/https:\/\/maxtel\.vn\/wp-content\/uploads\/2026\/05\/banner-tu-rack\.png/g, "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg");

fs.writeFileSync('src/App.tsx', code);
console.log('Done!');
