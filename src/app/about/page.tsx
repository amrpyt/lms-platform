"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDoctorData } from "@/lib/data";
import { Award, BookOpen, GraduationCap, Microscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function AboutPage() {
  const { t, locale, isArabic } = useI18n();
  const doctor = getDoctorData(locale);

  const iconsAr: Record<string, any> = {
    "أخصائي معتمد دولياً": Award,
    "محاضر في كبرى الجامعات": GraduationCap,
    "مؤلف سلسلة كتب طبية رائدة": BookOpen,
    "تربوي مبتكر وحائز على جوائز": Microscope,
  };

  const iconsEn: Record<string, any> = {
    "Internationally Certified Specialist": Award,
    "Lecturer at Top Universities": GraduationCap,
    "Author of Leading Medical Book Series": BookOpen,
    "Award-Winning Innovative Educator": Microscope,
  };

  const icons = isArabic ? iconsAr : iconsEn;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className={`flex-1 relative ${isArabic ? 'order-1' : 'order-2 lg:order-1'}`}>
                <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctor.name}
                    fill
                    className="object-cover scale-110"
                    priority
                  />
                </div>
                {/* Decoration */}
                <div className={`absolute -bottom-10 ${isArabic ? '-left-10' : '-right-10'} w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10`}></div>
              </div>
              
              <div className={`flex-1 text-center ${isArabic ? 'lg:text-right order-2' : 'lg:text-left order-1 lg:order-2'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">{doctor.name}</h1>
                <p className="text-xl text-blue-700 font-bold mb-8">{doctor.title}</p>
                <div className={`flex justify-center gap-4 mb-10 ${isArabic ? 'lg:justify-start flex-row-reverse' : 'lg:justify-start'}`}>
                  <a href={doctor.social?.facebook || "#"} className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:text-blue-600 transition-all border border-slate-100"><Facebook size={24} /></a>
                  <a href={doctor.social?.twitter || "#"} className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:text-blue-400 transition-all border border-slate-100"><Twitter size={24} /></a>
                  <a href={doctor.social?.instagram || "#"} className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:text-pink-600 transition-all border border-slate-100"><Instagram size={24} /></a>
                  <a href={doctor.social?.linkedin || "#"} className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:text-blue-800 transition-all border border-slate-100"><Linkedin size={24} /></a>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-normal">
                  {doctor.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Achievements */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className={`text-3xl font-bold text-slate-900 mb-12 relative inline-block`}>
                  {t("about.achievements")}
                  <span className={`absolute bottom-[-10px] ${isArabic ? 'right-0' : 'left-0'} w-20 h-1.5 bg-blue-700 rounded-full`}></span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {doctor.achievements.map((item, i) => {
                    const Icon = icons[item] || Award;
                    return (
                      <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                          <Icon size={24} />
                        </div>
                        <p className="font-bold text-slate-900 leading-snug">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className={`text-3xl font-bold text-slate-900 mb-12 relative inline-block`}>
                  {t("about.philosophy")}
                  <span className={`absolute bottom-[-10px] ${isArabic ? 'right-0' : 'left-0'} w-20 h-1.5 bg-blue-700 rounded-full`}></span>
                </h2>
                <div className="bg-blue-900 text-white p-10 rounded-[3rem] relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <span className="text-6xl font-serif opacity-30 block mb-4">"</span>
                    <p className="text-2xl font-medium leading-relaxed mb-8 italic">
                      {isArabic 
                        ? "التعليم الطبي لا ينبغي أن يكون عبئاً من الحفظ الصم، بل هو رحلة لاستكشاف روعة التصميم الحيوي والقدرة على إنقاذ الأرواح من خلال الفهم العميق."
                        : "Medical education shouldn't be a burden of rote memorization, but a journey to explore the magnificence of biological design and the ability to save lives through deep understanding."
                      }
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-0.5 bg-blue-400"></div>
                      <span className="font-bold text-blue-300">{doctor.name}</span>
                    </div>
                  </div>
                  <div className={`absolute top-[-20%] ${isArabic ? 'right-[-10%]' : 'left-[-10%]'} w-64 h-64 bg-white/5 rounded-full blur-3xl`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-12 text-center">
              {doctor.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight">{stat.value}</p>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px] md:text-xs lg:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center overflow-hidden">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {isArabic ? "هل أنت مستعد لبدء رحلتك العلمية؟" : "Ready to start your scientific journey?"}
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              {isArabic 
                ? "انضم إلى آلاف الطلاب الذين غيروا طريقتهم في فهم الطب وتعلمه."
                : "Join thousands of students who have transformed the way they understand and learn medicine."
              }
            </p>
            <Link href="/courses">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-12 h-16 text-xl font-bold rounded-2xl">
                {isArabic ? "تصفح الكورسات المتاحة" : "Browse Available Courses"}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
