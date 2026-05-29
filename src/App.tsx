/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Server, Wrench, CheckCircle2, Phone, Mail, ChevronRight, Star, Clock, ArrowRight, Menu, X, Check, Box, CloudLightning, Layers, Award, Shield } from 'lucide-react';
import { NetworkBackground } from './components/NetworkBackground';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('singlemode');
  const [activeSpecFilter, setActiveSpecFilter] = useState('singlemode');
  const [activeFeature, setActiveFeature] = useState(0);

  const specificationsData: Record<string, { param: string, value: string }[]> = {
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
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    // Singlemode
    {
      id: 1,
      title: "Dây Nhảy Quang Singlemode SC-SC UPC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Dây nhảy tiêu chuẩn, lõi sợi quang OS2 cho kết nối suy hao điểm-nối-điểm cực thấp.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-LCUPC-LCAPC-2.jpg",
      tags: ["OS2", "SC-SC"]
    },
    {
      id: 2,
      title: "Dây Nhảy Quang Singlemode SC-LC UPC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Chuyển tiếp tín hiệu từ cổng SC sang LC chuẩn xác, không suy hao.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCAPC-LCAPC-1.jpg",
      tags: ["SC-LC", "UPC"]
    },
    {
      id: 3,
      title: "Dây Nhảy Quang Singlemode LC-LC UPC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Chuẩn cắm LC nhỏ gọn chuyên dụng cho server, switch SFP cao cấp.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCUPC-SCAPC-5.jpg",
      tags: ["LC-LC", "SFP"]
    },
    {
      id: 4,
      title: "Dây Nhảy Quang Singlemode SC-SC APC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Đầu vát APC màu xanh lá chuyên phục vụ mạng lõi GPON, FTTH.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg",
      tags: ["APC", "FTTH"]
    },
    {
      id: 5,
      title: "Dây Nhảy Quang Singlemode SC-LC APC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Dây nhảy cho thiết bị viễn thông đòi hỏi suy hao phản xạ Return Loss cao.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg",
      tags: ["SC-LC", "APC"]
    },
    {
      id: 6,
      title: "Dây Nhảy Quang Singlemode LC-LC APC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Chuyên dụng cho các mạng quang hoạt động công suất quang (dBm) lớn.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["LC-LC", "APC"]
    },
    {
      id: 7,
      title: "Dây Nhảy Quang Singlemode FC-FC UPC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Đầu cắm vặn ren chắc chắn phù hợp môi trường rung lắc mạnh.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["FC-FC", "Trục ren"]
    },
    {
      id: 8,
      title: "Dây Nhảy Quang Singlemode FC-SC UPC",
      category: "singlemode",
      cap: "1m-30m",
      desc: "Kết nối ODF (chuẩn FC) sang thiết bị đầu cuối quang Modem/Switch (SC).",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-OM3-SC-SC-UPC-MAXTEL-Duplex.jpg",
      tags: ["FC-SC", "Odf sang switch"]
    },

    // Multimode
    {
      id: 9,
      title: "Dây Nhảy Quang Multimode OM2 SC-SC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Lõi 50/125um truyền dẫn 1Gbps ổn định ở thiết bị khoảng cách ngắn.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-LCUPC-LCAPC-2.jpg",
      tags: ["OM2", "1Gbps"]
    },
    {
      id: 10,
      title: "Dây Nhảy Quang Multimode OM2 LC-LC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Sợi quang OM2 vỏ cáp cam dễ nhận biết, đạt chuẩn chống cháy.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCAPC-LCAPC-1.jpg",
      tags: ["Vỏ cam", "OM2"]
    },
    {
      id: 11,
      title: "Dây Nhảy Quang Multimode OM3 SC-SC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Truyền tín hiệu bước sóng 850nm, băng thông cực nhanh lên 10Gbps.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCUPC-SCAPC-5.jpg",
      tags: ["OM3", "SC-SC"]
    },
    {
      id: 12,
      title: "Dây Nhảy Quang Multimode OM3 LC-LC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Lõi 50/125um truyền dẫn 10Gbps cực nhanh và ổn định giữa các switch trung tâm.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg",
      tags: ["OM3", "10Gbps"]
    },
    {
      id: 13,
      title: "Dây Nhảy Quang Multimode OM3 SC-LC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Dây nhảy OM3 cao cấp chuyển đổi cổng giao tiếp giữa mạng lõi.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg",
      tags: ["OM3", "Xanh Aqua"]
    },
    {
      id: 14,
      title: "Dây Nhảy Quang Multimode OM4 LC-LC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Hỗ trợ truyền hình ảnh/dữ liệu 40G/100G vô cùng mạnh mẽ.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["OM4", "40Gbps"]
    },
    {
      id: 15,
      title: "Dây Nhảy Quang Multimode OM4 SC-SC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Sản phẩm chiến lược thay thế cho hạ tầng OM3 cần nâng cấp.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["OM4", "SC-SC"]
    },
    {
      id: 16,
      title: "Dây Nhảy Quang Multimode OM5 LC-LC",
      category: "multimode",
      cap: "1m-30m",
      desc: "Công nghệ WDM hiện đại nhất OM5 - hỗ trợ màu xanh chuối Lime Green.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-OM3-SC-SC-UPC-MAXTEL-Duplex.jpg",
      tags: ["OM5", "100+Gbps"]
    },

    // Outdoor
    {
      id: 17,
      title: "Dây Nhảy Quang Ngoài Trời 2 Core (SC-SC)",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Thiết kế Outdoor chuyên biệt kết hợp cáp 2 Core và đầu connector đúc SC/UPC.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-LCUPC-LCAPC-2.jpg",
      tags: ["2FO", "Outdoor"]
    },
    {
      id: 18,
      title: "Dây Nhảy Quang Ngoài Trời 2 Core (LC-LC)",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Sợi bảo vệ vỏ cứng, chống đứt chuyên dụng kéo xa chuẩn LC-LC.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCAPC-LCAPC-1.jpg",
      tags: ["Outdoor LC", "Vỏ PE"]
    },
    {
      id: 19,
      title: "Dây Nhảy Quang Ngoài Trời 4 Core Lõi Treo",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Líp dây thép chịu gia cường 4 sợi lõi liên thông trung tâm viễn thông.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCUPC-SCAPC-5.jpg",
      tags: ["4FO", "Lõi Treo"]
    },
    {
      id: 20,
      title: "Dây Nhảy Quang Ngoài Trời 1 Core (PE)",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Chuyên kéo Internet đến nhà xưởng độc lập (Bọc PE đen dày).",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg",
      tags: ["1 Core", "FTTH"]
    },
    {
      id: 21,
      title: "Dây Nhảy Quang Ngoài Trời 8 Core (Bọc M/A)",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Chống chuột cắn hoàn hảo có lớp bọc kim loại Armored (M/A).",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg",
      tags: ["8 Core", "Armored"]
    },
    {
      id: 22,
      title: "Dây Nhảy Ngoài Trời Duplex LC-SC Gãy Khúc",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Thiết kế đa dụng dễ lắp vào đầu chuyển đổi 2 chuẩn LC sang SC.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["Duplex", "Ngoài Trời"]
    },
    {
      id: 23,
      title: "Dây Quang Ngoài Trời Thép Chịu Lực FC-FC",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Sử dụng cho dàn Camera trên mỏ quặng, trục xoắn chống đứt tuyệt đối.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["Cam IP", "FC-FC"]
    },
    {
      id: 24,
      title: "Dây Quang Ngoài Trời Kháng Nước IP67",
      category: "outdoor",
      cap: "Tuỳ chọn",
      desc: "Đầu đúc khối bảo vệ bởi vòng zon cao su, chịu ngập úng không nhiễm ẩm vào lõi.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-OM3-SC-SC-UPC-MAXTEL-Duplex.jpg",
      tags: ["IP67", "Kháng Nước"]
    },

    // Dachien
    {
      id: 25,
      title: "Cáp Quang Rulo Dã Chiến 4Core (SC-SC)",
      category: "dachien",
      cap: "100m-500m",
      desc: "Cáp 4 lõi bọc sợi đan xoắn trong cuộn rulo tay cầm kéo nhả chuyên ghi hình truyền hình.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-LCUPC-LCAPC-2.jpg",
      tags: ["Rulo", "Truyền Hình"]
    },
    {
      id: 26,
      title: "Cáp Quang Rulo Dã Chiến 4Core (LC-LC)",
      category: "dachien",
      cap: "100m-500m",
      desc: "Cuộn rút nhanh, cắm thẳng vào máy quay trực tiếp. Lớp vỏ siêu đàn hồi TPU.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCAPC-LCAPC-1.jpg",
      tags: ["Rulo", "LC-LC"]
    },
    {
      id: 27,
      title: "Dây Cáp Quang Rulo Quân Sự 2Core 200m",
      category: "dachien",
      cap: "200m",
      desc: "Màu sắc ngụy trang an toàn, không dễ quan sát, độ bền kéo cực mạnh.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCUPC-SCAPC-5.jpg",
      tags: ["Quân sự", "2FO"]
    },
    {
      id: 28,
      title: "Cáp Quang Rulo Dã Chiến 8Core 500m",
      category: "dachien",
      cap: "500m",
      desc: "Trục quay kích thước lớn khung kim loại chống lật đỗ lăn, xe cứu hộ viễn thông.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg",
      tags: ["8FO", "500m"]
    },
    {
      id: 29,
      title: "Cáp Quang Rulo Bọc Nhựa TPU 4Core",
      category: "dachien",
      cap: "Tuỳ chọn",
      desc: "Chất liệu TPU kháng khuẩn, kháng hóa chất rêu mốc, kéo ở băng tuyết, bùn đất dễ tẩy rửa.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg",
      tags: ["TPU", "Siêu bền"]
    },
    {
      id: 30,
      title: "Cuộn Dây Quang Dã Chiến (Connector MPO)",
      category: "dachien",
      cap: "Tuỳ chọn",
      desc: "Sử dụng đầu nối MPO tiết kiệm không gian với luồng tín hiệu băng thông khổng lồ.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["MPO", "Băng thông"]
    },
    {
      id: 31,
      title: "Trục Cáp Quang Dã Chiến Bọc Thép 4Core 300m",
      category: "dachien",
      cap: "300m",
      desc: "Khu vực địa hình hiểm trở có sự cắn phá của thú, cáp bọc vỏ thép lò xo bên trong.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg",
      tags: ["Bọc thép", "Lò xo"]
    },
    {
      id: 32,
      title: "Cáp Quang Rulo Kéo Lại 2Core (SC-APC) 1000m",
      category: "dachien",
      cap: "1000m",
      desc: "Cuộn rulo dung lượng khủng 1km có hệ dây hãm tốc chuyên lắp đầu GPON tạm thời.",
      img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-OM3-SC-SC-UPC-MAXTEL-Duplex.jpg",
      tags: ["1000m", "SC-APC"]
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeFilter);

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white scroll-smooth pb-20 sm:pb-0 relative">
      <NetworkBackground />
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]  shadow-[0_0_10px_rgba(37,166,223,0.2)] py-3 md:py-4' : 'bg-[#0f172a]  md:bg-[#0f172a]   py-4 md:py-6 border-b border-brand-500/30 md:border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" alt="MAXTEL Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <a href="#features" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Đặc tính</a>
            <a href="#products" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Sản phẩm</a>
            <a href="#specifications" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Thông số</a>
            <a href="#contact-section" className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:text-brand-500">Báo giá</a>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]"
            >
              Nhận Báo Giá Ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            aria-label="Toggle menu"
            className="md:hidden p-3 text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#0f172a]  border-b border-brand-500/30 absolute w-full"
            >
              <div className="px-4 py-4 flex flex-col space-y-2">
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Đặc tính</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Sản phẩm</a>
                <a href="#specifications" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 text-base font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 rounded-lg transition-colors">Thông số kỹ thuật</a>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
                  className="w-full mt-4 bg-brand-600 text-white hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20 px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" /> Liên hệ tư vấn
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-96 h-96 bg-brand-800/40 rounded-full blur-2xl md:blur-3xl opacity-30 md:opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-96 h-96 bg-accent-500/10 rounded-full blur-2xl md:blur-3xl opacity-30 md:opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left bg-[#020617]/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/40 border border-brand-100 text-brand-500 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-glow-red"></span>
                Dây Nhảy Quang Tiêu Chuẩn Cao Cấp
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[1.75rem] xl:text-4xl 2xl:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight mb-4 lg:mb-6 uppercase">
                <span className="block mb-2 xl:mb-4 whitespace-nowrap text-gradient hover:animate-glow-red transition-all duration-300 cursor-default">DÂY NHẢY QUANG MAXTEL</span>
              </h1>
              <p className="text-base sm:text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                Lựa chọn dây nhảy quang số 1 của các công trình viễn thông, mạng nội bộ và Data Center. Lõi cáp nguyên chất, đầu bấm đúc sẵn độ suy hao siêu thấp, tín hiệu truyền tải tốc độ cao và bền bỉ theo thời gian.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-4 sm:px-0">
                <button 
                  onClick={scrollToContact}
                  className="w-full sm:w-auto whitespace-nowrap bg-brand-600 hover:bg-blue-600 text-white px-2 py-4 sm:px-6 lg:px-8 lg:py-4 rounded-xl sm:rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,166,223,0.4)] shadow-brand-500/20"
                >
                  Nhận Tư Vấn & Báo Giá <ArrowRight className="w-5 h-5 shrink-0" />
                </button>
                <a 
                  href="#products"
                  className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 px-6 py-4 lg:px-8 lg:py-4 rounded-xl sm:rounded-full font-bold text-base sm:text-lg transition-all bg-brand-600 hover:bg-blue-600 text-white border border-brand-500/50 shadow-[0_0_20px_rgba(37,166,223,0.4)] shadow-brand-500/20"
                >
                  Xem Bảng Giá / SP
                </a>
              </div>
              
              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-brand-50">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-brand-800/40 border-2 border-white flex items-center justify-center shadow-sm text-white font-bold text-xs" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img='+(i+10)+')', backgroundSize: 'cover'}} />
                  ))}
                </div>
                <p>Hơn <strong>2,500+</strong> nhà thầu viễn thông tin dùng dây nhảy quang Maxtel</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-10"
            >
              <div className="rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-brand-100 to-white shadow-2xl relative">
                <div className="absolute top-4 right-4 bg-[#0f172a]  px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-accent-600 text-xs sm:text-sm shadow-sm z-20 flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current pt-0.5" /> 4.9/5 Excellent Quality
                </div>
                {/* Product Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-inner aspect-[4/3] sm:aspect-auto sm:h-[450px] relative flex md:flex-col items-center justify-center border border-brand-500/40 p-4">
                  <img 
                    src="https://maxtel.vn/wp-content/uploads/2026/05/day-nhay-quang.png" 
                    fetchPriority="high" 
                    loading="eager" 
                    alt="Banner Dây Nhảy Quang Maxtel" 
                    className="absolute inset-0 w-full h-full object-contain cursor-pointer transition-transform duration-700 hover:scale-105 p-6" 
                    onClick={() => setSelectedImage("https://maxtel.vn/wp-content/uploads/2026/05/day-nhay-quang.png")}
                  />
                  
                  {/* Overlay for zoom hint */}
                  <div className="absolute inset-0 bg-brand-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="text-white font-medium text-sm border border-white/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">Phóng to ảnh mẫu dây nhảy quang</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section id="products" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase"><span className="animate-pulse">Danh Mục Các Dòng Dây Nhảy Quang Maxtel</span></h2>
            <p className="inline-block mt-2 text-xl sm:text-2xl md:text-4xl leading-tight font-extrabold tracking-tight text-accent-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-full bg-[#0f172a]/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30">
              Đầy đủ chủng loại - Chuẩn xác hạ tầng
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">Cung cấp đầy đủ chủng loại dây nhảy quang nội bộ, ngoài trời, singlemode và multimode với đầu nối tuỳ chọn theo dự án.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {[
              { id: 'singlemode', name: 'Singlemode (SM)' },
              { id: 'multimode', name: 'Multimode (OM2/OM3)' },
              { id: 'outdoor', name: 'Dây Ngoài Trời (Outdoor)' },
              { id: 'dachien', name: 'Dã Chiến / Rulo' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-3 sm:py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
                  activeFilter === filter.id 
                    ? 'bg-brand-600 text-white shadow-[0_0_10px_rgba(37,166,223,0.2)] shadow-brand-500/20 scale-105' 
                    : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] hover:bg-slate-800 border border-brand-500/30'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <motion.div layout className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-0 pb-8 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <AnimatePresence>
              {filteredProducts.map((prod) => (
                <motion.div 
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,166,223,0.15)] border border-brand-500/30 flex flex-col group cursor-pointer flex-none w-[80vw] sm:w-[340px] md:w-auto md:flex-1 snap-center"
                  onClick={scrollToContact}
                >
                  <div className="aspect-square relative overflow-hidden bg-white rounded-t-2xl p-4 flex items-center justify-center">
                    <img src={prod.img} loading="lazy" decoding="async" alt={prod.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-2" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                       <span className="bg-[#0f172a]/90 text-white text-xs font-bold px-2 py-1.5 rounded-lg border border-brand-500 shadow-sm">{prod.cap}</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col border-t border-brand-500/10">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-500 transition-colors uppercase leading-snug">{prod.title}</h3>
                    <p className="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">{prod.desc}</p>
                    
                    {/* Tags removed as requested */}

                    <div className="flex items-center justify-center pt-2 gap-2 border-t border-brand-500/20">
                      <button className="w-full text-brand-400 bg-brand-900/40 border border-brand-500/30 group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent px-3 py-2.5 text-sm font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                        TẢI BÁO GIÁ ĐẠI LÝ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-brand-500/30">
            <button onClick={scrollToContact} className="w-full sm:w-auto bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 font-bold px-8 py-3.5 rounded-xl sm:rounded-full inline-flex items-center justify-center gap-2 text-base transition-colors">
               Xem toàn bộ Catalogue Profile Maxtel <ChevronRight className="w-5 h-5"/>
            </button>
          </div>
        </div>
      </section>

      {/* Brands / Social Proof */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-brand-50 uppercase tracking-wider mb-6 md:mb-8">Maxtel vinh dự là nhà cung cấp vật tư thiết bị quang cho các công trình trọng điểm của:</p>
          
          <div className="relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {[
                { name: 'Viettel', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EF4444%22%3EViettel%3C/text%3E%3C/svg%3E', theme: 'border-red-500/30 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
                { name: 'VNPT', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVNPT%3C/text%3E%3C/svg%3E', theme: 'border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]' },
                { name: 'FPT Telecom', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23F97316%22%3EFPT Telecom%3C/text%3E%3C/svg%3E', theme: 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
                { name: 'Mobifone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%2322D3EE%22%3EMobifone%3C/text%3E%3C/svg%3E', theme: 'border-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
                { name: 'CMC', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23818CF8%22%3ECMC%3C/text%3E%3C/svg%3E', theme: 'border-indigo-400/30 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]' },
                { name: 'VinaPhone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVinaPhone%3C/text%3E%3C/svg%3E', theme: 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                { name: 'Samsung', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%232563EB%22%3ESAMSUNG%3C/text%3E%3C/svg%3E', theme: 'border-blue-600/30 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]' },
                { name: 'Vingroup', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EAB308%22%3EVINGROUP%3C/text%3E%3C/svg%3E', theme: 'border-yellow-600/30 hover:border-yellow-600 hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]' },
                // Duplicate items for infinite scroll
                { name: 'Viettel', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EF4444%22%3EViettel%3C/text%3E%3C/svg%3E', theme: 'border-red-500/30 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
                { name: 'VNPT', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVNPT%3C/text%3E%3C/svg%3E', theme: 'border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]' },
                { name: 'FPT Telecom', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23F97316%22%3EFPT Telecom%3C/text%3E%3C/svg%3E', theme: 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
                { name: 'Mobifone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%2322D3EE%22%3EMobifone%3C/text%3E%3C/svg%3E', theme: 'border-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
                { name: 'CMC', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23818CF8%22%3ECMC%3C/text%3E%3C/svg%3E', theme: 'border-indigo-400/30 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]' },
                { name: 'VinaPhone', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%233B82F6%22%3EVinaPhone%3C/text%3E%3C/svg%3E', theme: 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                { name: 'Samsung', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%232563EB%22%3ESAMSUNG%3C/text%3E%3C/svg%3E', theme: 'border-blue-600/30 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]' },
                { name: 'Vingroup', logo: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2228%22 font-weight=%22bold%22 fill=%22%23EAB308%22%3EVINGROUP%3C/text%3E%3C/svg%3E', theme: 'border-yellow-600/30 hover:border-yellow-600 hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]' },
              ].map((partner, idx) => (
                <div key={idx} className={`mx-3 px-4 py-2 sm:px-6 sm:py-3 rounded-xl border transition-all duration-300 bg-white/95 hover:bg-white flex items-center justify-center w-[120px] sm:w-[180px] h-[60px] sm:h-[80px] cursor-default inline-flex ${partner.theme}`}>
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain transition-transform hover:scale-105 filter drop-shadow-sm p-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section id="features" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 overflow-hidden">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Cấu Trúc Cáp Quang Tối Ưu Nhất</h2>
            <p className="inline-block mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug sm:leading-tight font-extrabold tracking-tight text-accent-500 bg-[#0f172a]/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30 text-center">
              VÌ SAO DÂY NHẢY QUANG MAXTEL LẠI ĐƯỢC CHỨNG NHẬN ISO?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Sidebar / Tabs */}
            <div 
              className="flex flex-row overflow-x-auto md:flex-col gap-2 sm:gap-3 md:w-64 lg:w-80 pb-4 md:pb-0 flex-shrink-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
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
              ].map((feat, idx, arr) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`px-5 py-3 md:py-4 md:px-6 rounded-xl text-sm transition-all text-left whitespace-nowrap md:whitespace-normal border flex flex-col gap-2 md:min-w-0 ${idx === arr.length - 1 ? 'md:mt-auto' : ''} ${
                    activeFeature === idx 
                      ? 'bg-brand-600/10 border-brand-500 shadow-[0_0_20px_rgba(37,166,223,0.15)] scale-[1.02]' 
                      : 'bg-[#0f172a] border-brand-500/20 hover:bg-slate-800 hover:border-brand-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeFeature === idx ? 'bg-brand-500/20' : 'bg-slate-800'}`}>
                      <feat.icon className={`w-5 h-5 flex-shrink-0 ${activeFeature === idx ? 'text-brand-400' : 'text-brand-500'}`} />
                    </div>
                    <span className={`font-bold text-base ${activeFeature === idx ? 'text-white' : 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]'}`}>{feat.title}</span>
                  </div>
                  <p className={`text-sm leading-relaxed hidden md:block mt-1 ${activeFeature === idx ? 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]' : 'text-slate-200'} `}>{feat.desc}</p>
                </button>
              ))}
            </div>

            {/* Feature Content Showcase */}
            <div className="md:flex-1 w-full relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] bg-brand-600/10 blur-[40px] md:blur-[80px] pointer-events-none rounded-full"></div>
              
               <div className="glass-panel relative rounded-2xl shadow-[0_0_30px_rgba(37,166,223,0.15)] overflow-hidden border border-brand-500/30 w-full z-10 bg-white group">
                 <AnimatePresence mode="wait">
                   {[
                     {
                       title: "Lõi Sợi Quang Tinh Khiết",
                       desc: "Chi tiết hình ảnh sợi quang tinh khiết truyền tín hiệu không thất thoát.",
                       icon: Shield,
                       image: "https://maxtel.vn/wp-content/uploads/2026/05/loi-soi-tinh-khiet.jpg"
                     },
                     {
                       title: "Đầu Nối Chuẩn Xác (UPC/APC)",
                       desc: "Đầu cắm chuẩn SC/LC/FC UPC/APC đúc sẵn chắc chắn với tiêu chuẩn suy hao siêu thấp.",
                       icon: ShieldCheck,
                       image: "https://maxtel.vn/wp-content/uploads/2026/05/dau-noi-chuan-uapc.png"
                     },
                     {
                       title: "Vỏ LSZH Chống Cháy & Bền Bỉ",
                       desc: "Chất liệu vỏ linh hoạt, bền chắc, chịu lực căng khi thi công cáp tại Data Center.",
                       icon: Zap,
                       image: "https://maxtel.vn/wp-content/uploads/2026/05/vo-lszh.png"
                     }
                   ].map((content, idx) => (
                     activeFeature === idx && (
                       <motion.div
                         key={idx}
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.3 }}
                         className="cursor-pointer bg-white w-full h-full flex"
                         onClick={() => setSelectedImage(content.image)}
                       >
                         {/* Image Background */}
                         <img src={content.image} loading="lazy" decoding="async" alt={content.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                       </motion.div>
                     )
                   ))}
                 </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Backdrop */}
      <section id="certifications" className="py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Uy tín & Đo Kiểm ISO</h2>
            <p className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-center">
              HỒ SƠ CHẤT LƯỢNG VÀ CHỨNG CHỈ DỰ ÁN
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
              Mọi sản phẩm dây nhảy quang Maxtel đều đạt kiểm định khắt khe của Vinacontrol, đầy đủ giấy tờ hợp quy, hợp chuẩn đo lường.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-2 sm:p-4 border border-brand-500/30 shadow-[0_0_30px_rgba(37,166,223,0.15)] max-w-5xl mx-auto relative group overflow-hidden">
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gradient-to-r from-brand-600/0 via-brand-500/10 to-brand-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></div>
             
             <div className="w-full bg-white rounded-xl sm:rounded-2xl border border-brand-500/20 overflow-hidden relative flex items-center justify-center group-hover:border-brand-500/40 transition-colors">
               <img src="https://maxtel.vn/wp-content/uploads/2026/05/giay-to111.jpg" loading="lazy" decoding="async" alt="dây nhảy quang Maxtel ISO Certification" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101 shadow-sm border border-slate-200" />
             </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Thông Số Kỹ Thuật dây nhảy quang</h2>
            <p className="inline-block mt-2 text-3xl leading-tight font-extrabold tracking-tight text-accent-500 bg-[#0f172a]/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(37,166,223,0.2)] border border-brand-500/30 sm:text-4xl">
              THÔNG SỐ KỸ THUẬT CHI TIẾT CÁC LOẠI
            </p>
            <p className="mt-4 text-lg text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">Bảng thông số kỹ thuật chuẩn EIA-310-D giúp kỹ sư dự toán mạng thiết kế dễ dàng.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Sidebar / Tabs */}
            <div 
              className="flex flex-row overflow-x-auto md:flex-col gap-2 sm:gap-3 md:w-56 lg:w-72 pb-4 md:pb-0 flex-shrink-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {[
                { id: 'singlemode', name: 'Singlemode (SM)', icon: Box },
                { id: 'multimode', name: 'Multimode (OM)', icon: Server },
                { id: 'dachien', name: 'Dã Chiến/Rulo', icon: Layers },
                { id: 'outdoor', name: 'Ngoài Trời (Outdoor)', icon: CloudLightning },
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveSpecFilter(filter.id)}
                  className={`px-5 py-3.5 md:py-4 md:px-6 rounded-xl text-sm font-semibold transition-all text-left whitespace-nowrap md:whitespace-normal border flex items-center gap-3 relative min-h-[48px] ${
                    activeSpecFilter === filter.id 
                      ? 'bg-brand-600 text-white border-brand-400 shadow-[0_0_20px_rgba(37,166,223,0.3)] shadow-brand-500/20' 
                      : 'bg-[#0f172a] text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] border-brand-500/30 hover:bg-slate-800 hover:border-brand-500/60'
                  }`}
                >
                  <filter.icon className={`w-5 h-5 flex-shrink-0 ${activeSpecFilter === filter.id ? 'text-white' : 'text-brand-400'}`} />
                  <span className="flex-1">{filter.name}</span>
                  <ChevronRight className={`w-4 h-4 hidden md:block transition-transform duration-300 ${activeSpecFilter === filter.id ? 'opacity-100 transform translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                </button>
              ))}
            </div>

            {/* Spec Table */}
            <div className="md:flex-1 w-full relative">
              {/* Optional background glow for table */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] bg-brand-600/10 blur-[40px] md:blur-[80px] pointer-events-none rounded-full"></div>
              
              <div className="glass-panel relative rounded-2xl shadow-[0_0_30px_rgba(37,166,223,0.15)] overflow-hidden border border-brand-500/30 w-full z-10 bg-[#0f172a] sm:bg-[#0f172a]/80 sm:backdrop-blur-md">
                 <div className="flex flex-col">
                   <div className="hidden md:grid md:grid-cols-5 bg-black/40 border-b border-brand-500/40">
                     <div className="py-4 px-6 text-sm font-bold text-white col-span-2 border-r border-brand-500/30">Hạng mục mô tả kỹ thuật</div>
                     <div className="py-4 px-6 text-sm font-bold text-brand-50 col-span-3">Nội dung kỹ thuật chi tiết</div>
                   </div>
                   <div className="max-h-[500px] overflow-y-auto">
                     <AnimatePresence mode="wait">
                       <motion.div
                          key={activeSpecFilter}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                       >
                         {specificationsData[activeSpecFilter].map((spec, index) => (
                           <div key={index} className="flex flex-col md:grid md:grid-cols-5 border-b last:border-b-0 border-brand-500/20 hover:bg-brand-900/20 transition-all duration-300 group">
                             <div className="py-3 px-4 md:px-6 md:py-4 text-sm font-semibold text-brand-50 bg-black/20 md:border-r border-brand-500/20 col-span-2 group-hover:text-brand-400 transition-colors flex items-center">
                               {spec.param}
                             </div>
                             <div className="py-3 px-4 md:px-6 md:py-4 text-sm text-slate-100 col-span-3 leading-relaxed flex items-center">
                               {spec.value}
                             </div>
                           </div>
                         ))}
                       </motion.div>
                     </AnimatePresence>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-12 md:py-24 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-brand-900/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-600/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">So Sánh Tiêu Chuẩn Cáp</h2>
            <p className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-center">
              SO SÁNH CÁP MAXTEL VÀ CÁP GIÁ RẺ
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4 pb-4">
            {[
              { 
                feature: "Chất lượng lõi quang (U)", 
                normal: "Lõi quang tạp chất, suy hao cao (>0.5dB). mỏng mảnh, dễ bị méo khi lắp switch nặng.", 
                maxtel: "Lõi thạch anh tinh khiết, suy hao cực thấp (≤ 0.2dB)., thanh tiêu chuẩn 1.5mm - 2.0mm." 
              },
              { 
                feature: "Cấu tạo vỏ cáp bảo vệ", 
                normal: "Vỏ nhựa tái chế, dễ mục nát, dễ cháy lan khi chập điện., dễ bong tróc, gây giật tê và rỉ sét mặt tiếp xúc.", 
                maxtel: "Vỏ nhựa LSZH/PE nguyên sinh, chống cháy lan, siêu đàn hồi. mịn đặc trưng, chống xước và tuyệt đối cách điện." 
              },
              { 
                feature: "Đầu bấm (Connector)", 
                normal: "Đầu gốm tái chế, không khít, dễ gãy chân tiếp xúc. bị khó khăn, bị chéo ốc.", 
                maxtel: "Đầu gốm Ceramic chuẩn xác, đúc sẵn nhà máy nguyên khối. tự động 100%, có in U index rõ nét để căn chỉnh." 
              },
              { 
                feature: "Phụ kiện đi kèm: Dây PDU & Quạt", 
                normal: "Ổ chia nguồn kém, quạt gây tiếng kêu lớn, quay chập chờn.", 
                maxtel: "Thanh nguồn PDU (6 - 12 ports) chuyên nghiệp chịu tải 32A, quạt công nghiệp bền bỉ." 
              },
              { 
                feature: "Đóng gói vận chuyển", 
                normal: "Chỉ lót nilon mỏng manh, nguy cơ va đập góc cạnh cao.", 
                maxtel: "Lót góc xốp cứng, đóng thùng carton dập logo tiêu chuẩn quy cách xuất khẩu." 
              }
            ].map((row, index) => (
              <div key={index} className="bg-[#0f172a] rounded-2xl border border-brand-500/20 overflow-hidden shadow-lg relative pb-1">
                <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-brand-500/50 to-accent-500/50 left-0"></div>
                <div className="bg-slate-800/80 p-3 border-b border-brand-500/30 text-center">
                  <h3 className="text-base font-bold text-white">{row.feature}</h3>
                </div>
                <div className="grid grid-cols-2 divide-x divide-brand-500/10">
                   <div className="p-4 flex flex-col items-center text-center gap-2 bg-slate-900/50">
                     <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Cáp giá rẻ</span>
                     <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 opacity-60" />
                     <p className="text-slate-400 text-xs sm:text-sm">{row.normal}</p>
                   </div>
                   <div className="p-4 flex flex-col items-center text-center gap-2 bg-brand-900/20 relative">
                     <span className="text-[10px] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">CÁP MAXTEL (Chuẩn Dự án)</span>
                     <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 drop-shadow-[0_0_5px_rgba(195,28,36,0.8)]" />
                     <p className="text-white text-xs sm:text-sm font-medium">{row.maxtel}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="min-w-[800px] w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,166,223,0.15)] border border-brand-500/20">
              {/* Header */}
              <div className="grid grid-cols-12 bg-[#0f172a] border-b border-brand-500/30">
                <div className="col-span-4 p-5 sm:p-6 flex items-center">
                  <span className="text-lg font-bold text-slate-300">Đặc Điểm</span>
                </div>
                <div className="col-span-4 p-5 sm:p-6 flex items-center justify-center border-l bg-slate-900 border-brand-500/10">
                  <span className="text-lg font-medium text-slate-400">dây nhảy quang Giá Rẻ, Chất Tôn Kém</span>
                </div>
                <div className="col-span-4 p-5 sm:p-6 flex items-center justify-center border-l border-brand-500/30 bg-brand-900/40 relative">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500 left-0"></div>
                  <span className="text-xl font-black text-brand-400 flex items-center gap-2 text-center">
                    <Award className="w-5 h-5 text-accent-500" /> dây nhảy quang MAXTEL VIP
                  </span>
                </div>
              </div>

              {/* Rows */}
              {[
                { 
                  feature: "Chất lượng lõi quang (U)", 
                  normal: "Lõi quang tạp chất, suy hao cao (>0.5dB). mỏng mảnh, dễ bị méo khi lắp switch nặng.", 
                  maxtel: "Lõi thạch anh tinh khiết, suy hao cực thấp (≤ 0.2dB)., thanh tiêu chuẩn 1.5mm - 2.0mm." 
                },
                { 
                  feature: "Cấu tạo vỏ cáp bảo vệ", 
                  normal: "Vỏ nhựa tái chế, dễ mục nát, dễ cháy lan khi chập điện., dễ bong tróc, gây giật tê và rỉ sét mặt tiếp xúc.", 
                  maxtel: "Vỏ nhựa LSZH/PE nguyên sinh, chống cháy lan, siêu đàn hồi. mịn đặc trưng, chống xước và tuyệt đối cách điện." 
                },
                { 
                  feature: "Đầu bấm (Connector)", 
                  normal: "Đầu gốm tái chế, không khít, dễ gãy chân tiếp xúc. bị khó khăn, bị chéo ốc.", 
                  maxtel: "Đầu gốm Ceramic chuẩn xác, đúc sẵn nhà máy nguyên khối. tự động 100%, có in U index rõ nét để căn chỉnh." 
                },
                { 
                  feature: "Phụ kiện đi kèm: Dây PDU & Quạt", 
                  normal: "Ổ chia nguồn kém, quạt gây tiếng kêu lớn, quay chập chờn.", 
                  maxtel: "Thanh nguồn PDU (6 - 12 ports) chuyên nghiệp chịu tải 32A, quạt công nghiệp bền bỉ." 
                },
                { 
                  feature: "Đóng gói vận chuyển", 
                  normal: "Chỉ lót nilon mỏng manh, nguy cơ va đập góc cạnh cao.", 
                  maxtel: "Lót góc xốp cứng, đóng thùng carton dập logo tiêu chuẩn quy cách xuất khẩu." 
                }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-12 border-b border-brand-500/10 last:border-b-0 hover:bg-slate-800/50 transition-colors ${index % 2 === 0 ? 'bg-[#020617]/50' : 'bg-[#0f172a]/50'}`}>
                  <div className="col-span-4 p-5 flex items-center">
                    <span className="text-base font-semibold text-white">{row.feature}</span>
                  </div>
                  <div className="col-span-4 p-5 flex items-center justify-center border-l bg-slate-900 border-brand-500/10">
                    <p className="text-slate-400 text-sm text-center flex flex-col items-center gap-2">
                       <X className="w-5 h-5 text-red-500 opacity-60" />
                       {row.normal}
                    </p>
                  </div>
                  <div className="col-span-4 p-5 flex items-center justify-center border-l border-brand-500/30 bg-brand-900/20">
                     <p className="text-white text-sm text-center flex flex-col items-center gap-2 font-medium">
                       <CheckCircle2 className="w-5 h-5 text-accent-500 drop-shadow-[0_0_5px_rgba(195,28,36,0.8)]" />
                       {row.maxtel}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Use Cases */}
      <section className="py-12 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a] opacity-30 bg-cover bg-center sm:mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Sự Hài Lòng Từ Thực Tế Phòng IT</h2>
            <p className="text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] text-lg">Hàng triệu doanh nghiệp đã nâng cấp hạ tầng viễn thông bằng dây nhảy quang Maxtel.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Anh Hoàng Quang", 
                role: "IT Manager - VietBank", 
                img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-LCUPC-LCAPC-2.jpg",
                text: "Là ngân hàng nên chúng tôi đặc biệt yêu cầu khắt khe thiết bị phòng phòng Data Center. dây nhảy quang Maxtel đáp ứng hoàn toàn mọi tiêu chuẩn khắt khe về độ suy hao tiếp xúc, truyền dẫn tín hiệu tốc độ cao cực kỳ ổn định." 
              },
              { 
                name: "Kỹ sư Huỳnh Sang", 
                role: "Chỉ Huy Phục Vụ Dự Án BĐS", 
                img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCAPC-LCAPC-1.jpg",
                text: "Tôi thi công hàng ngàn sợi dây nhảy quang LC-SC và phụ kiện quang phân khối vào mạng lõi các tòa nhà The Pride. Mọi thứ từ bao bì đóng gói chống sốc cho đến chất lượng gia công lõi quang của hãng Maxtel rất được chăm chút kỹ càng." 
              },
              { 
                name: "Chị Thu Hoa", 
                role: "Đại Lý Thiết Bị Viễn Thông", 
                img: "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2023/12/Day-nhay-quang-MAXTEL-Singlemode-SCUPC-SCAPC-5.jpg",
                text: "Cửa hàng tôi bây giờ chỉ phân phối dây nhảy quang hãng Maxtel vì cam kết bảo hành suy hao trọn đời, cung cấp đầy đủ giấy tờ CO, CQ cho dự án. Khách sỉ toàn mua số lượng lớn cực kỳ tin tưởng." 
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#0f172a]/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-500/20 flex flex-col shadow-[0_0_20px_rgba(37,166,223,0.1)] hover:border-brand-500/40 transition-colors">
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-200 text-base leading-relaxed mb-8 flex-1 italic relative">
                  <span className="text-4xl absolute -top-4 -left-2 text-brand-500/30 font-serif">"</span>
                  {t.text}
                  <span className="text-4xl absolute -bottom-6 right-0 text-brand-500/30 font-serif">"</span>
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                  <img src={t.img} loading="lazy" decoding="async" alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-500 object-cover" />
                  <div>
                    <div className="font-bold text-lg text-white">{t.name}</div>
                    <div className="text-sm text-brand-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2026/03/Anh-dai-dien-Day-nhay-quang-RM-FO-OM3-LCD-LCD-323065.jpg",
              "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/05/Day-nhay-quang-da-chien-4LCU4LCU-Singlemode-Maxtel-4.jpg",
              "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-OM2-SC-SC-Duplex-Ngoai-Troi.jpg",
              "https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2025/02/Day-nhay-quang-MAXTEL-Singlemode-LC-SC-Duplex-Ngoai-Troi.jpg"
            ].map((img, i) => (
               <div 
                 key={i} 
                 className="h-32 sm:h-48 rounded-xl overflow-hidden relative group cursor-pointer border border-brand-500/20 p-2 bg-white"
                 onClick={() => setSelectedImage(img)}
               >
                 <img src={img} loading="lazy" decoding="async" alt="Hình ảnh dây nhảy quang chụp tại kho thật" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-medium text-sm border border-white/30 px-3 py-1 rounded-full bg-black/40 shadow-sm">Xem chi tiết Cáp</span>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Lead Generation Form) */}
      <section id="contact-section" className="py-12 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0f172a]  rounded-3xl shadow-[0_0_20px_rgba(37,166,223,0.4)] overflow-hidden flex flex-col md:flex-row relative">
            <div className="md:w-5/12 bg-slate-800/80 backdrop-blur-md p-8 sm:p-10 text-white flex flex-col justify-between border-r border-slate-700/50">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">BÁO GIÁ ĐẠI LÝ LÊN TỚI 40%!</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">Xin hãy để lại thông tin để chúng tôi liên hệ tư vấn dòng dây nhảy quang phù hợp và gởi bảng báo giá VIP cho doanh nghiệp.</p>
                <div className="flex items-center space-x-3 mb-4 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Hỗ trợ cấp giấy tờ dự án trọn vẹn CO, CQ</span>
                </div>
                <div className="flex items-center space-x-3 mb-4 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Giao hàng trực tiếp trên phạm vi Toàn Quốc</span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm font-medium border-b border-slate-700/50 pb-3 sm:pb-4 min-h-[14px]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" /> <span>Chiết khấu cao nhất cho Đại lý, M&E</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-700/50 p-2.5 sm:p-3 rounded-full border border-brand-500/30">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] uppercase tracking-wider font-semibold">CSKH & BÁO GIÁ</p>
                    <p className="font-bold text-base sm:text-lg">0979.354.796</p>
                    <p className="font-bold text-base sm:text-lg">0973.497.685</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-7/12 p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-white drop-shadow-md mb-6">Đăng Ký Khảo Sát Dự Án / Báo Giá</h3>
              {showModal ? (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thông tin đã ghi nhận thành công!</h4>
                  <p className="text-brand-50">Chuyên viên dự án của Maxtel sẽ gọi lại tư vấn cấu hình cáp quang và gửi báo giá trong 5 phút nữa.</p>
                  <button onClick={() => setShowModal(false)} className="mt-6 text-brand-500 font-semibold underline">Gửi yêu cầu hoặc nhu cầu thiết kế cáp quang bổ sung</button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-brand-50 mb-1">Tên Anh/Chị *</label>
                    <input id="fullName" type="text" required className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500" placeholder="Ví dụ: Hoàng Văn Quang" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-50 mb-1">Số Zalo/Điện thoại để liên hệ *</label>
                    <input id="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500" placeholder="09xxxxxxxx" />
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-brand-50 mb-1">Yêu cầu cụ thể loại dây và chiều dài</label>
                    <textarea id="details" rows={3} className="w-full px-4 py-3 rounded-lg border border-brand-500/30 focus:ring-2 focus:ring-brand-500 outline-none transition bg-black/20 text-white placeholder:text-slate-500 resize-none" placeholder="Nhập yêu cầu: Ví dụ: dây nhảy quang OM3 LC-LC 10m số lượng,..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50 font-bold py-4 rounded-lg text-lg transition-transform transform hover:scale-[1.02] shadow-[0_0_15px_rgba(37,166,223,0.3)] shadow-accent-500/30 flex items-center justify-center gap-2 mt-4">
                    TẢI BẢNG BÁO GIÁ ZALO NGAY
                  </button>
                  <p className="text-xs text-center text-brand-50 mt-4 flex items-center justify-center gap-1"><Clock className="w-3 h-3"/> Cam kết bảo mật thông tin nội bộ của Đối tác</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)] py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" loading="lazy" decoding="async" alt="MAXTEL dây nhảy quang Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col gap-2 mt-4 mb-4 text-brand-50">
              <p className="font-bold text-white">CÔNG TY CỔ PHẦN MAXTEL VIỆT NAM</p>
              <p>Mã Số Thuế: 2500681449</p>
            </div>
            <p className="mb-4 text-slate-300 leading-relaxed">Nhà sản xuất hàng đầu Việt Nam về thiết bị vỏ viễn thông: dây nhảy quang/Dây Nhảy Quang, Hộp ODF bảo vệ các thiết bị trong Data Center, công trình Mạng viễn thông chuyên biệt.</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Phòng Kinh Doanh & Dự Án</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><div className="mt-1 bg-slate-800 p-1 rounded-md"><Phone className="w-4 h-4 text-brand-400"/></div> <span className="font-semibold text-white">0979.354.796 <br/> 0973.497.685</span></li>
              <li className="flex items-start gap-3"><div className="mt-1 bg-slate-800 p-1 rounded-md"><Mail className="w-4 h-4 text-brand-400"/></div> maxtel.vn@gmail.com</li>
              <li className="flex items-start gap-3 text-brand-50 leading-relaxed mt-4 pt-4 border-t border-brand-500/20">
                 <div className="mt-1 flex-shrink-0 text-brand-400 font-bold">&#8627;</div>
                 Trụ sở chính: Số 2, Ngõ 53 Phạm Tuấn Tài, Cầu Giấy, Hà Nội
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Cam kết dịch vụ & Chính Sách</h4>
            <ul className="space-y-4 md:space-y-3">
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Bảo hành lỗi suy hao trọn đời</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Lộ trình và Cước phí Vận Chuyển</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Thiết kế dây nhảy quang theo quy mô tùy biến</a></li>
              <li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Đăng ký làm Đại lý toàn quốc</a></li>
            </ul>
          </div>
          <div className="md:col-span-1 rounded-xl overflow-hidden h-40 md:h-full min-h-[160px] border border-brand-500/20 shadow-md">
            <iframe 
              src="https://maps.google.com/maps?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+MAXTEL+VI%E1%BB%86T+NAM&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nhà Máy dây nhảy quang Maxtel"
              className="w-full h-full object-cover filter brightness-90 contrast-125"
            ></iframe>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-500/30 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} dây nhảy quang Maxtel. All rights reserved.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Điều khoản thi công</a>
             <a href="#" className="hover:text-white transition-colors">Xác thực chứng từ QC</a>
          </div>
        </div>
      </footer>

      {/* Floating Zalo Button */}
      <a 
        href="https://zalo.me/0973497685" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-[60] w-12 h-12 sm:w-16 sm:h-16 bg-[#0068FF] rounded-full shadow-[0_0_20px_rgba(0,104,255,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(0,104,255,0.6)] transition-all flex items-center justify-center isolate border-2 border-white"
        aria-label="Liên hệ trực tiếp qua hộp chat Zalo"
      >
        <span className="font-extrabold text-white text-sm sm:text-lg mb-[1px] tracking-tight" style={{ fontFamily: 'sans-serif' }}>Zalo</span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-red-500 border-2 border-white"></span>
        </span>
      </a>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0f172a] border-t border-brand-500/40 z-50 sm:hidden flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <a href="tel:0973497685" className="flex-1 bg-[#1a8cc0] hover:bg-[#25a6df] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors text-sm">
          <Phone className="w-4 h-4"/> GỌI NGAY
        </a>
        <button onClick={scrollToContact} className="flex-1 bg-[#e0323a] hover:bg-[#c31c24] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors text-sm">
          NHẬN BÁO GIÁ
        </button>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Zoomed Product Display" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
