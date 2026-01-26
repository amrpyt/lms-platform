import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, GraduationCap, Users, Award, PlayCircle, Star, Clock, Sparkles, BookOpen, ArrowLeft } from "lucide-react";
import { courses, doctorData } from "@/lib/data";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

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
              <div className="flex-[1.2] text-center z-10 order-2 lg:order-2 flex flex-col items-center">
                <div className="inline-flex items-center gap-3 mb-8 bg-blue-600/5 text-blue-700 px-5 py-2 rounded-full text-xs lg:text-sm font-black tracking-widest uppercase border border-blue-100/50 shadow-sm">
                   <Sparkles size={16} className="text-blue-600 animate-pulse" />
                   المنصة الأولى للتعليم الطبي في مصر
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[5.2rem] font-black text-slate-900 leading-[1.1] mb-8 lg:mb-12 tracking-tight">
                  أتقن مسيرتك <br className="hidden lg:block" /> الطبية مع <br className="hidden md:block lg:hidden" />
                  <span className="text-blue-700 relative inline-block">
                    {doctorData.name}
                    <div className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-2 lg:h-3 bg-blue-100 -z-10 rounded-full opacity-60"></div>
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium opacity-90 mx-auto">
                  حوّل طريقة فهمك للطب. انضم لآلاف الطلاب في رحلة تعليمية مبتكرة تجمع بين العمق العلمي والتبسيط البصري الفائق.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link href="/courses" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-10 h-14 lg:h-16 text-lg lg:text-xl font-bold rounded-full transition-all shadow-[0_15px_30px_-8px_rgba(30,58,138,0.35)] w-full active:scale-[0.98] hover:shadow-[0_20px_40px_-8px_rgba(30,58,138,0.45)]">
                      استكشف الكورسات
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-2 border-slate-200 text-slate-600 hover:bg-slate-50 px-8 h-14 lg:h-16 text-lg lg:text-xl font-bold rounded-full transition-all w-full sm:w-auto active:scale-[0.98] bg-white hover:border-slate-300">
                    <PlayCircle className="ml-2 w-5 h-5 lg:w-6 lg:h-6" /> شاهد العرض
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 opacity-60">
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> معتمد دولياً
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> جودة مضمونة
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> دعم 24/7
                   </div>
                </div>
              </div>

              {/* Image Side - Fixed aspect and controlled size */}
              <div className="flex-1 relative w-full max-w-[320px] md:max-w-xl lg:max-w-none order-1 lg:order-1 flex justify-center">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[550px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(30,58,138,0.25)] border-[10px] lg:border-[16px] border-white ring-1 ring-slate-100 group">
                  <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctorData.name}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                  
                   <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md py-3 px-6 rounded-2xl shadow-xl flex items-center gap-3 border border-white hidden md:flex">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-[10px] font-black text-slate-700 uppercase tracking-wider">متاح الآن للتسجيل</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-6 lg:p-8 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 z-20">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="bg-blue-600 p-3 lg:p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                      <GraduationCap size={28} className="lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <p className="text-3xl lg:text-5xl font-black text-slate-900 leading-none">5,000+</p>
                      <p className="text-[10px] lg:text-xs text-slate-500 font-black mt-2 uppercase tracking-widest">طالب متميز</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-4 lg:-left-12 bg-white p-4 lg:p-6 rounded-[2rem] shadow-2xl border border-white z-20 hidden md:block">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-xl inline-block mb-1">
                    <Award size={24} />
                  </div>
                  <p className="text-xs lg:text-sm font-black text-slate-800">خبير معتمد</p>
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
              {doctorData.stats.map((stat, index) => (
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
        <section id="courses" className="py-28 lg:py-40 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 lg:mb-28">
              <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest">محتوى حصري</Badge>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">الكورسات المميزة</h2>
              <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                وحدات تعليمية مصممة بعناية فائقة لتوفير فهم عميق ومعرفة عملية حقيقية في مختلف التخصصات الطبية الحيوية.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {featuredCourses.map((course) => (
                <Link href={`/courses/${course.slug}`} key={course.id} className="h-full">
                  <Card className="overflow-hidden border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(30,58,138,0.15)] hover:-translate-y-4 transition-all duration-500 bg-white flex flex-col rounded-[3rem] h-full cursor-pointer group">
                    <div className="h-64 lg:h-72 bg-slate-100 relative overflow-hidden">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Badge className="absolute top-6 right-6 bg-white/95 text-blue-700 hover:bg-white border-none px-5 py-2 font-black shadow-lg rounded-2xl">
                        {course.category}
                      </Badge>
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white text-sm font-black bg-black/50 backdrop-blur-md px-5 py-2 rounded-2xl shadow-lg">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                    </div>
                    <CardHeader className="pt-10 px-10">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-1.5 text-amber-500 font-black">
                          <Star size={20} fill="currentColor" />
                          <span className="text-lg text-slate-700">{course.rating}</span>
                        </div>
                        <span className="text-3xl font-black text-blue-700">${course.price}</span>
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl text-slate-900 mb-4 font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight">{course.title}</CardTitle>
                      <CardDescription className="text-lg text-slate-500 leading-relaxed line-clamp-2 font-medium">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-4 px-10">
                      <div className="flex items-center text-sm text-slate-400 font-black gap-5 border-t border-slate-50 pt-8">
                        <div className="flex items-center gap-2 uppercase tracking-widest">
                          <Users size={18} className="text-blue-700/60" />
                          <span>{course.students.toLocaleString("ar-EG")} طالب</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pb-10 pt-6 px-10">
                      <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white h-16 lg:h-18 text-xl font-black rounded-[1.5rem] transition-all shadow-xl active:scale-95">
                        ابدأ الآن
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-24">
              <Link href="/courses">
                <Button variant="link" className="text-blue-700 font-black text-2xl hover:no-underline hover:text-blue-800 transition-all flex items-center mx-auto group gap-4">
                  مشاهدة جميع الكورسات <span className="group-hover:translate-x-[-12px] transition-transform duration-300 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full">←</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 lg:py-48 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
              <div className="flex-1 relative order-2 lg:order-2 w-full max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-8 lg:border-[16px] border-white transform lg:rotate-3 transition-transform hover:rotate-0 duration-1000">
                   <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctorData.name}
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
              </div>

              <div className="flex-1 order-1 lg:order-1 text-center lg:text-right">
                 <div className="inline-block mb-6 bg-slate-900 text-white px-6 py-2 rounded-2xl text-sm font-black uppercase tracking-widest">خلف الكواليس</div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">تعرف على المحاضر <br /> <span className="text-blue-700">{doctorData.name}</span></h2>
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-medium opacity-90">
                  {doctorData.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {doctorData.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-5 justify-center lg:justify-start lg:flex-row-reverse bg-slate-50 p-5 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                      <span className="text-lg text-slate-800 font-black group-hover:text-blue-700 transition-colors">{item}</span>
                      <div className="bg-emerald-100 p-2.5 rounded-2xl shrink-0 text-emerald-600 shadow-sm shadow-emerald-100">
                        <CheckCircle2 size={24} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Link href="/about">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white px-12 h-20 text-xl font-black rounded-3xl shadow-[0_20px_40px_-10px_rgba(30,58,138,0.3)] active:scale-95 transition-all">
                      اقرأ السيرة الذاتية الكاملة
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
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tighter">هل أنت مستعد لبدء <br className="md:hidden" /> رحلتك الطبية اليوم؟</h2>
            <p className="text-blue-100/90 text-xl lg:text-2xl mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              انضم إلى مجتمع الدكتور زياد التعليمي اليوم واحصل على وصول فوري إلى مئات الساعات من المحتوى الطبي الحصري وعالي الجودة.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-14 h-20 text-2xl font-black rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] w-full active:scale-95 transition-all">
                  انضم الآن مجاناً
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-14 h-20 text-2xl font-black rounded-[3rem] backdrop-blur-sm w-full active:scale-95 transition-all">
                  تواصل للاستفسارات
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
