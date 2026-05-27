const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /const products = \[[\s\S]*?\];/m;

const newProducts = `[
    {
      id: 1,
      title: "Dây Nhảy Quang Singlemode SC-SC UPC",
      category: "singlemode",
      cap: "3m, 5m, 10m",
      desc: "Dây nhảy tiêu chuẩn, lõi sợi quang OS2 cho kết nối suy hao điểm-nối-điểm cực thấp.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["OS2", "SC-SC"]
    },
    {
      id: 2,
      title: "Dây Nhảy Quang Multimode OM3 LC-LC",
      category: "multimode",
      cap: "1.5m, 10m",
      desc: "Lõi 50/125um truyền dẫn 10Gbps ổn định cho tủ quang switch trung tâm.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["OM3", "10Gbps"]
    },
    {
      id: 3,
      title: "Dây Nhảy Quang Ngoài Trời 2 Core Lõi Treo",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Lớp sơn bọc ngoài PE cách điện, chống nước và tia UV trọn đời, giằng gia cường thép.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["Outdoor", "Thép", "IP67"]
    },
    {
      id: 4,
      title: "Dây Cáp Quang Rulo Quân Sự Dã Chiến",
      category: "dachien",
      cap: "Cuộn 500m",
      desc: "Có khả năng cuộn rulo linh hoạt, bọc TPU chống xe tải lăn qua, thu nhặt dã chiến.",
      img: "https://vienthongxanh.vn/wp-content/uploads/2021/04/day-nhay-quang.jpg",
      tags: ["Rulo", "4FO"]
    }
  ];`;

code = code.replace(regex, "const products = " + newProducts);

// Unsafe replaces removed

fs.writeFileSync('src/App.tsx', code);
console.log('Array replaced');
