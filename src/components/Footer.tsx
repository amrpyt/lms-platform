import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">د. <span className="text-blue-700">زياد مهنا</span></h3>
            <p className="text-slate-600 text-lg leading-relaxed font-normal mb-8">
              المنصة التعليمية الرائدة المخصصة لتمكين طلاب الطب عبر محتوى علمي متطور وأسلوب تعليمي مبتكر.
            </p>
            <div className="flex space-x-5 space-x-reverse">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-slate-400 hover:text-blue-700 hover:shadow-lg transition-all border border-slate-100">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {["الرئيسية", "الكورسات", "عن الدكتور", "تواصل معنا"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-slate-600 hover:text-blue-700 text-base font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-6">الدعم والمساعدة</h4>
            <ul className="space-y-4">
              {["الأسئلة الشائعة", "سياسة الخصوصية", "شروط الخدمة", "مركز المساعدة"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-slate-600 hover:text-blue-700 text-base font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 space-x-reverse group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm border border-slate-100">
                  <Mail size={18} />
                </div>
                <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">contact@drzeyad.com</span>
              </li>
              <li className="flex items-center space-x-4 space-x-reverse group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm border border-slate-100">
                  <Phone size={18} />
                </div>
                <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors" dir="ltr">+20 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 font-medium">
          <p className="text-base text-center md:text-right">© {new Date().getFullYear()} د. زياد مهنا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-sm">المنصة تعمل بكفاءة عالية</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
