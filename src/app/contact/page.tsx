"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDoctorData } from "@/lib/data";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t, locale, isArabic } = useI18n();
  const doctor = getDoctorData(locale);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              {t("contact.subtitle")}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Contact Info */}
              <div className={`flex-1 space-y-12 ${isArabic ? 'order-1' : 'order-2 lg:order-1'}`}>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">{t("contact.info")}</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">{t("contact.email")}</p>
                        <p className="text-xl font-bold text-slate-900">{doctor.social?.email || "contact@drzeyad.com"}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">{isArabic ? "رقم الهاتف" : "Phone"}</p>
                        <p className="text-xl font-bold text-slate-900" dir="ltr">{doctor.social?.phone || "+20 123 456 7890"}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">{t("contact.address")}</p>
                        <p className="text-xl font-bold text-slate-900">{t("contact.addressValue")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">{isArabic ? "تابعنا على" : "Follow Us"}</h2>
                  <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
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
                      {t("contact.workingHours")}
                    </h3>
                    <p className="opacity-80 text-lg">{t("contact.workingHoursValue")}</p>
                    <p className="opacity-80 text-lg">{isArabic ? "الجمعة: عطلة أسبوعية" : "Friday: Weekly Holiday"}</p>
                  </div>
                  <MessageCircle size={120} className={`absolute bottom-[-20%] ${isArabic ? 'left-[-10%]' : 'right-[-10%]'} text-white/5`} />
                </div>
              </div>

              {/* Contact Form */}
              <div className={`flex-1 bg-white border border-slate-100 p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-100 ${isArabic ? 'order-2' : 'order-1 lg:order-2'}`}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">{isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-sm font-bold text-slate-700 ${isArabic ? 'mr-2' : 'ml-2'}`}>{t("contact.name")}</label>
                      <Input placeholder={isArabic ? "أدخل اسمك" : "Enter your name"} className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-bold text-slate-700 ${isArabic ? 'mr-2' : 'ml-2'}`}>{t("contact.email")}</label>
                      <Input placeholder="email@example.com" className={`h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all ${isArabic ? 'text-right' : 'text-left'}`} dir="ltr" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-bold text-slate-700 ${isArabic ? 'mr-2' : 'ml-2'}`}>{t("contact.subject")}</label>
                    <Input placeholder={isArabic ? "كيف يمكننا مساعدتك؟" : "How can we help you?"} className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-bold text-slate-700 ${isArabic ? 'mr-2' : 'ml-2'}`}>{t("contact.message")}</label>
                    <Textarea placeholder={isArabic ? "اكتب استفسارك هنا..." : "Write your message here..."} className="min-h-[160px] rounded-[2rem] bg-slate-50 border-slate-100 focus:bg-white transition-all py-4" />
                  </div>

                  <Button className="w-full h-16 bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-100 flex items-center gap-3 justify-center">
                    <Send size={20} />
                    {t("contact.send")}
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
