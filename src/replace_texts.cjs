const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
    'dây nhảy quang Maxtel 42U đáp ứng hoàn toàn mọi tiêu chuẩn khắt khe về độ ổn định, cửa đột lỗ tản nhiệt cực tốt.',
    'dây nhảy quang Maxtel đáp ứng hoàn toàn mọi tiêu chuẩn khắt khe về độ suy hao tiếp xúc, truyền dẫn tín hiệu tốc độ cao cực kỳ ổn định.'
);

code = code.replace(
    'Tôi lắp đặt hàng loạt dây nhảy quang treo tường 12U và thiết bị quang phân khối vào các tòa nhà The Pride. Mọi thứ từ hộp đóng thùng cho đến con ốc vít của hãng Maxtel rất được chăm chút kỹ càng.',
    'Tôi thi công hàng ngàn sợi dây nhảy quang LC-SC và phụ kiện quang phân khối vào mạng lõi các tòa nhà The Pride. Mọi thứ từ bao bì đóng gói chống sốc cho đến chất lượng gia công lõi quang của hãng Maxtel rất được chăm chút kỹ càng.'
);

code = code.replace(
    'Cửa hàng tôi bây giờ chỉ phân phối dây nhảy quang dây nhảy quang hãng Maxtel vì bảo hành 12 tháng tại nhà, chớp nhoáng phục vụ tận nơi. Khách sỉ toàn mua theo lốc cực kỳ tin tưởng.',
    'Cửa hàng tôi bây giờ chỉ phân phối dây nhảy quang hãng Maxtel vì cam kết bảo hành suy hao trọn đời, cung cấp đầy đủ giấy tờ CO, CQ cho dự án. Khách sỉ toàn mua số lượng lớn cực kỳ tin tưởng.'
);

code = code.replace(
    'Yêu cầu cụ thể dây nhảy quang loại mấy U',
    'Yêu cầu cụ thể loại dây và chiều dài'
);

code = code.replace(
    'Ví dụ dây nhảy quang 42U D1000 Server số lượng,...',
    'Ví dụ: dây nhảy quang OM3 LC-LC 10m số lượng,...'
);

code = code.replace(
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-12u-d600-dang-dung-mau-den-1000x1000.jpg"',
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg"'
);

code = code.replace(
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/mat-truoc-Tu-rack-15U-Maxtel-1-1000x1000.jpg"',
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg"'
);

code = code.replace(
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-27u-maxtel-1000x1000.jpg"',
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg"'
);

code = code.replace(
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-42u-mau-den-maxtel-1000x1000.jpg"',
    '"https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg"'
);

// One more place with "tủ" at 189
code = code.replace(
    'Lõi 50/125um truyền dẫn 10Gbps ổn định cho tủ quang switch trung tâm.',
    'Lõi 50/125um truyền dẫn 10Gbps cực nhanh và ổn định giữa các switch trung tâm.'
);

fs.writeFileSync('src/App.tsx', code);
console.log("Replaced text successfully");
