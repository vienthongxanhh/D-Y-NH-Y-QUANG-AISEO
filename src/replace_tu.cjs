const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/<span className="text-\[10px\] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Tủ giá rẻ<\/span>/g, '<span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Cáp giá rẻ</span>');

code = code.replace(/<span className="text-\[10px\] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">TỦ MAXTEL \(Chuẩn Dự án\)<\/span>/g, '<span className="text-[10px] sm:text-xs font-bold text-brand-400 uppercase tracking-wider">CÁP MAXTEL (Chuẩn Dự án)</span>');

code = code.replace(/<span className="text-white font-medium text-sm border border-white\/30 px-3 py-1 rounded-full bg-black\/40 shadow-sm">Xem chi tiết Tủ<\/span>/g, '<span className="text-white font-medium text-sm border border-white/30 px-3 py-1 rounded-full bg-black/40 shadow-sm">Xem chi tiết Cáp</span>');

code = code.replace(/<p className="text-brand-50">Chuyên viên dự án của Maxtel sẽ gọi lại tư vấn cấu hình tủ và gửi báo giá trong 5 phút nữa.<\/p>/g, '<p className="text-brand-50">Chuyên viên dự án của Maxtel sẽ gọi lại tư vấn cấu hình cáp quang và gửi báo giá trong 5 phút nữa.</p>');

code = code.replace(/<button onClick=\{\(\) => setShowModal\(false\)\} className="mt-6 text-brand-500 font-semibold underline">Gửi yêu cầu hoặc nhu cầu thiết kế Tủ thêm<\/button>/g, '<button onClick={() => setShowModal(false)} className="mt-6 text-brand-500 font-semibold underline">Gửi yêu cầu hoặc nhu cầu thiết kế cáp quang bổ sung</button>');

code = code.replace(/<li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Bảo hành tủ lên tới 3 năm<\/a><\/li>/g, '<li><a href="#" className="inline-block py-1 hover:text-brand-400 text-slate-300 transition-colors">Bảo hành lỗi suy hao trọn đời</a></li>');


fs.writeFileSync('src/App.tsx', code);
console.log("All 'tủ' replaced successfully.");
