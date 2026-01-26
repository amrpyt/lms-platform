import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctorData } from "@/lib/data";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">تواصل معنا</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              نحن هنا لمساعدتك والإجابة على استفساراتك حول الكورسات والمنصة التعليمية.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Contact Info */}
              <div className="flex-1 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">معلومات التواصل</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">البريد الإلكتروني</p>
                        <p className="text-xl font-bold text-slate-900">{doctorData.social.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">رقم الهاتف</p>
                        <p className="text-xl font-bold text-slate-900" dir="ltr">{doctorData.social.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">الموقع</p>
                        <p className="text-xl font-bold text-slate-900">القاهرة، جمهورية مصر العربية</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">تابعنا على</h2>
                  <div className="flex gap-4 flex-row-reverse justify-end">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-700 hover:shadow-lg hover:border-blue-50 transition-all">
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-blue-900 rounded-[2rem] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Clock size={24} className="text-blue-400" />
                      ساعات العمل
                    </h3>
                    <p className="opacity-80 text-lg">من السبت إلى الخميس: 9 صباحاً - 9 مساءً</p>
                    <p className="opacity-80 text-lg">الجمعة: عطلة أسبوعية</p>
                  </div>
                  <MessageCircle size={120} className="absolute bottom-[-20%] left-[-10%] text-white/5" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1 bg-white border border-slate-100 p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">أرسل لنا رسالة</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 mr-2">الاسم الكامل</label>
                      <Input placeholder="أدخل اسمك" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 mr-2">البريد الإلكتروني</label>
                      <Input placeholder="email@example.com" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all text-right" dir="ltr" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 mr-2">الموضوع</label>
                    <Input placeholder="كيف يمكننا مساعدتك؟" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 mr-2">الرسالة</label>
                    <Textarea placeholder="اكتب استفسارك هنا..." className="min-h-[160px] rounded-[2rem] bg-slate-50 border-slate-100 focus:bg-white transition-all py-4" />
                  </div>

                  <Button className="w-full h-16 bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-100 flex items-center gap-3">
                    <Send size={20} />
                    إرسال الرسالة
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
