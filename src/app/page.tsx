"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, GraduationCap, Users, Award, PlayCircle, Sparkles } from "lucide-react";
import { getDoctorData, getCourses } from "@/lib/data";
import CourseCarousel from "@/components/CourseCarousel";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t, locale, isArabic } = useI18n();
  const doctor = getDoctorData(locale);
  const allCourses = getCourses(locale);
  const featuredCourses = allCourses.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Elite Layout */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Content Side */}
              <div className={`flex-[1.2] text-center z-10 flex flex-col items-center ${isArabic ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                <div className="inline-flex items-center gap-3 mb-8 bg-blue-600/5 text-blue-700 px-5 py-2 rounded-full text-xs lg:text-sm font-black tracking-widest uppercase border border-blue-100/50 shadow-sm">
                   <Sparkles size={16} className="text-blue-600 animate-pulse" />
                   {t("hero.badge")}
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[5.2rem] font-black text-slate-900 leading-[1.1] mb-8 lg:mb-12 tracking-tight">
                  {t("hero.title1")} <br className="hidden lg:block" /> {t("hero.title2")} <br className="hidden md:block lg:hidden" />
                  <span className="text-blue-700 relative inline-block">
                    {doctor.name}
                    <div className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-2 lg:h-3 bg-blue-100 -z-10 rounded-full opacity-60"></div>
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium opacity-90 mx-auto">
                  {t("hero.description")}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link href="/courses" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-10 h-14 lg:h-16 text-lg lg:text-xl font-bold rounded-full transition-all shadow-[0_15px_30px_-8px_rgba(30,58,138,0.35)] w-full active:scale-[0.98] hover:shadow-[0_20px_40px_-8px_rgba(30,58,138,0.45)]">
                      {t("hero.exploreCourses")}
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-2 border-slate-200 text-slate-600 hover:bg-slate-50 px-8 h-14 lg:h-16 text-lg lg:text-xl font-bold rounded-full transition-all w-full sm:w-auto active:scale-[0.98] bg-white hover:border-slate-300">
                    <PlayCircle className={`w-5 h-5 lg:w-6 lg:h-6 ${isArabic ? 'ml-2' : 'mr-2'}`} /> {t("hero.watchDemo")}
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 opacity-60">
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> {t("hero.certified")}
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> {t("hero.quality")}
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> {t("hero.support")}
                   </div>
                </div>
              </div>

              {/* Image Side - Fixed aspect and controlled size */}
              <div className={`flex-1 relative w-full max-w-[320px] md:max-w-xl lg:max-w-none flex justify-center ${isArabic ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[550px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(30,58,138,0.25)] border-[10px] lg:border-[16px] border-white ring-1 ring-slate-100 group">
                  <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctor.name}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                </div>
                
                {/* Floating Badge - Available for Registration (Top Left of image) */}
                <div className={`absolute top-4 lg:top-8 ${isArabic ? 'right-0 lg:-right-4' : 'left-0 lg:-left-4'} glass-floating py-3 px-5 lg:py-4 lg:px-6 rounded-2xl flex items-center gap-3 z-20 hidden md:flex float-animation`}>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
                  <p className="text-[10px] lg:text-xs font-black text-slate-700 uppercase tracking-wider">{t("hero.availableNow")}</p>
                </div>

                {/* Floating Badge - Certified Expert (Top Right outside image) */}
                <div className={`absolute top-20 lg:top-28 ${isArabic ? '-left-4 lg:-left-20' : '-right-4 lg:-right-20'} glass-floating p-4 lg:p-5 rounded-2xl lg:rounded-3xl z-20 hidden md:block float-animation-delayed`}>
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 p-2.5 lg:p-3 rounded-xl inline-flex items-center justify-center mb-2 shadow-sm">
                    <Award size={22} className="lg:w-6 lg:h-6" />
                  </div>
                  <p className="text-xs lg:text-sm font-black text-slate-800">{t("hero.certifiedExpert")}</p>
                </div>
                
                {/* Floating Stats - Students Count (Bottom Left outside image) */}
                <div className={`absolute -bottom-4 lg:-bottom-10 ${isArabic ? '-right-2 lg:-right-16' : '-left-2 lg:-left-16'} glass-floating p-5 lg:p-6 rounded-2xl lg:rounded-3xl z-20 float-animation-slow`}>
                  <div className="flex items-center gap-4 lg:gap-5">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 lg:p-4 rounded-xl lg:rounded-2xl text-white shadow-lg shadow-blue-200/50">
                      <GraduationCap size={24} className="lg:w-7 lg:h-7" />
                    </div>
                    <div>
                      <p className="text-2xl lg:text-4xl font-black text-slate-900 leading-none">5,000+</p>
                      <p className="text-[9px] lg:text-[11px] text-slate-500 font-bold mt-1.5 uppercase tracking-widest">{t("hero.excellentStudent")}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <section className="py-10 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-xl font-black tracking-widest uppercase">University of Cairo</span>
               <span className="text-xl font-black tracking-widest uppercase">Ain Shams Medicine</span>
               <span className="text-xl font-black tracking-widest uppercase">CME Accredited</span>
               <span className="text-xl font-black tracking-widest uppercase">Egypt Syndicate</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {doctor.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-6 bg-slate-50 w-20 h-20 flex items-center justify-center rounded-[2rem] text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-200">
                     <Users size={32} strokeWidth={2.5} />
                  </div>
                  <p className="text-4xl lg:text-6xl font-black text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-[10px] lg:text-xs text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-16 lg:py-40 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-28">
              <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest">{t("courses.badge")}</Badge>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{t("courses.title")}</h2>
              <div className="w-16 lg:w-24 h-1.5 lg:h-2 bg-blue-600 rounded-full mx-auto mb-6 lg:mb-8"></div>
              <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                {t("courses.description")}
              </p>
            </div>
            
            <CourseCarousel courses={featuredCourses} />
            
            <div className="text-center mt-16 lg:mt-24">
              <Link href="/courses">
                <Button variant="link" className="text-blue-700 font-black text-xl lg:text-2xl hover:no-underline hover:text-blue-800 transition-all flex items-center mx-auto group gap-4">
                  {t("courses.viewAll")} <span className={`${isArabic ? 'group-hover:translate-x-[-8px] lg:group-hover:translate-x-[-12px]' : 'group-hover:translate-x-[8px] lg:group-hover:translate-x-[12px]'} transition-transform duration-300 bg-blue-50 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-lg lg:text-xl`}>{isArabic ? '←' : '→'}</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 lg:py-48 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
              <div className={`flex-1 relative w-full max-w-md lg:max-w-none ${isArabic ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                <div className={`relative aspect-[4/5] rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-8 lg:border-[16px] border-white transform ${isArabic ? 'lg:rotate-3' : 'lg:-rotate-3'} transition-transform hover:rotate-0 duration-1000`}>
                   <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctor.name}
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <div className={`absolute -top-20 ${isArabic ? '-left-20' : '-right-20'} w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70`}></div>
              </div>

              <div className={`flex-1 text-center ${isArabic ? 'order-1 lg:order-1 lg:text-right' : 'order-1 lg:order-2 lg:text-left'}`}>
                 <div className="inline-block mb-6 bg-slate-900 text-white px-6 py-2 rounded-2xl text-sm font-black uppercase tracking-widest">{t("about.badge")}</div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">{t("about.title")} <br /> <span className="text-blue-700">{doctor.name}</span></h2>
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-medium opacity-90">
                  {doctor.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {doctor.achievements.map((item, i) => (
                    <div key={i} className={`flex items-center gap-5 ${isArabic ? 'justify-center lg:justify-start lg:flex-row-reverse' : 'justify-center lg:justify-start'} bg-slate-50 p-5 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group`}>
                      <span className="text-lg text-slate-800 font-black group-hover:text-blue-700 transition-colors">{item}</span>
                      <div className="bg-emerald-100 p-2.5 rounded-2xl shrink-0 text-emerald-600 shadow-sm shadow-emerald-100">
                        <CheckCircle2 size={24} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`flex ${isArabic ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                  <Link href="/about">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white px-12 h-20 text-xl font-black rounded-3xl shadow-[0_20px_40px_-10px_rgba(30,58,138,0.3)] active:scale-95 transition-all">
                      {t("about.readFullBio")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[150px]"></div>
           </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tighter">{t("cta.title")}</h2>
            <p className="text-blue-100/90 text-xl lg:text-2xl mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-14 h-20 text-2xl font-black rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] w-full active:scale-95 transition-all">
                  {t("cta.joinNow")}
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-14 h-20 text-2xl font-black rounded-[3rem] backdrop-blur-sm w-full active:scale-95 transition-all">
                  {t("cta.contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
