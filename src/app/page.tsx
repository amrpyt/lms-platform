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
        {/* Hero Section - High End Implementation */}
        <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 bg-white">
          {/* Advanced Background Design */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
              
              {/* Content Side */}
              <div className="text-center lg:text-right z-10 order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 mb-8 bg-blue-600/5 text-blue-700 px-6 py-2.5 rounded-full text-xs lg:text-sm font-black tracking-widest uppercase border border-blue-100/50 shadow-sm">
                   <Sparkles size={16} className="text-blue-600 animate-pulse" />
                   المنصة الأولى للتعليم الطبي في مصر
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 leading-[1.05] mb-8 lg:mb-12 tracking-tighter">
                  أتقن مسيرتك <br className="hidden lg:block" /> الطبية مع <br className="hidden md:block lg:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 relative inline-block">
                    {doctorData.name}
                    <svg className="absolute -bottom-3 lg:-bottom-5 left-0 w-full h-4 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto lg:ml-auto lg:mr-0 leading-relaxed font-medium opacity-90 lg:pl-16">
                  حوّل طريقة فهمك للطب. انضم لآلاف الطلاب في رحلة تعليمية مبتكرة تجمع بين العمق العلمي والتبسيط البصري الفائق.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start lg:flex-row-reverse mb-16">
                  <Link href="/courses" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-12 h-20 text-2xl font-black rounded-[2rem] transition-all shadow-[0_25px_50px_-12px_rgba(30,58,138,0.5)] w-full active:scale-95">
                      استكشف الكورسات
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-[3px] border-slate-100 text-slate-800 hover:bg-white hover:border-blue-700 hover:text-blue-700 px-12 h-20 text-2xl font-black rounded-[2rem] transition-all w-full sm:w-auto active:scale-95 bg-white shadow-xl shadow-slate-100">
                    شاهد العرض <PlayCircle className="mr-3 w-8 h-8" />
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-10 opacity-60">
                   <div className="flex items-center gap-3 font-black text-slate-500 text-sm tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> معتمد دولياً
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-sm tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> جودة مضمونة
                   </div>
                   <div className="flex items-center gap-3 font-black text-slate-500 text-sm tracking-widest uppercase">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> دعم 24/7
                   </div>
                </div>
              </div>

              {/* Image Side - Strictly Controlled Size on Desktop */}
              <div className="relative w-full order-1 lg:order-2 flex justify-center items-center">
                <div className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-square group">
                  <div className="relative w-full h-full rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.2)] border-[10px] lg:border-[20px] border-white ring-1 ring-slate-100">
                    <Image
                      src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                      alt={doctorData.name}
                      fill
                      className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                      priority
                    />
                  </div>
                  
                  {/* Floating Card 1: Students */}
                  <div className="absolute -bottom-10 -right-6 lg:-right-12 bg-white/90 backdrop-blur-xl p-5 lg:p-7 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white animate-in slide-in-from-right-16 duration-1000 delay-300 z-20">
                    <div className="flex items-center gap-5">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                        <Users size={28} />
                      </div>
                      <div>
                        <p className="text-3xl lg:text-4xl font-black text-slate-900 leading-none">5,000+</p>
                        <p className="text-[10px] lg:text-xs text-slate-500 font-black mt-2 uppercase tracking-widest">طالب متميز</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 2: Live Status */}
                  <div className="absolute top-12 -left-6 lg:-left-16 bg-white/80 backdrop-blur-xl py-4 px-7 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-white animate-in slide-in-from-left-16 duration-1000 delay-500 z-20">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></span>
                    </span>
                    <p className="text-xs lg:text-sm font-black text-slate-800 uppercase tracking-tight">متاح الآن للتسجيل</p>
                  </div>

                  {/* Floating Card 3: Experience */}
                  <div className="absolute -top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white hidden lg:flex items-center gap-3 animate-in slide-in-from-top-8 duration-700 delay-700 z-20">
                    <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
                      <Award size={20} />
                    </div>
                    <p className="text-sm font-bold text-slate-700">10+ سنوات خبرة</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brand Bar / Trust Bar */}
        <section className="py-12 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-2xl font-black tracking-tighter">UNIVERSITY OF CAIRO</span>
               <span className="text-2xl font-black tracking-tighter">AIN SHAMS MEDICINE</span>
               <span className="text-2xl font-black tracking-tighter">EGYPT MEDICAL SYNDICATE</span>
               <span className="text-2xl font-black tracking-tighter">CME ACCREDITED</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-28 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {doctorData.stats.map((stat, index) => (
                <div key={index} className="relative group p-10 rounded-[3rem] border border-slate-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-500">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 bg-white w-24 h-24 flex items-center justify-center rounded-[2rem] text-blue-700 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white transition-all duration-500">
                       <Users size={36} strokeWidth={2.5} />
                    </div>
                    <p className="text-4xl lg:text-6xl font-black text-slate-900 mb-3 tracking-tighter">{stat.value}</p>
                    <p className="text-xs lg:text-sm text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24 lg:mb-32">
              <Badge className="mb-6 bg-blue-700 text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-200">اختر مسارك التعليمي</Badge>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">أحدث الكورسات المتاحة</h2>
              <div className="w-32 h-2.5 bg-blue-600 rounded-full mx-auto mb-10 shadow-lg shadow-blue-100"></div>
              <p className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                محتوى علمي متميز، تم إعداده بعناية فائقة لضمان أعلى درجات الاستيعاب والتميز الأكاديمي.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {featuredCourses.map((course) => (
                <Link href={`/courses/${course.slug}`} key={course.id} className="h-full group">
                  <Card className="overflow-hidden border-none shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_60px_100px_-30px_rgba(30,58,138,0.25)] hover:-translate-y-6 transition-all duration-700 bg-white flex flex-col rounded-[3.5rem] h-full cursor-pointer relative">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/20 rounded-[3.5rem] transition-colors duration-700"></div>
                    <div className="h-64 lg:h-80 bg-slate-100 relative overflow-hidden">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <Badge className="absolute top-8 right-8 bg-blue-700 text-white border-none px-6 py-2.5 font-black shadow-2xl rounded-2xl text-sm">
                        {course.category}
                      </Badge>
                      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white text-base font-black bg-white/10 backdrop-blur-xl px-6 py-2.5 rounded-2xl border border-white/20 shadow-2xl">
                        <Clock size={18} className="text-blue-400" />
                        {course.duration}
                      </div>
                    </div>
                    <CardHeader className="pt-12 px-12 pb-6">
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-xl font-black border border-amber-100 shadow-sm">
                          <Star size={18} fill="currentColor" />
                          <span className="text-lg">{course.rating}</span>
                        </div>
                        <span className="text-4xl font-black text-blue-700 tracking-tighter">${course.price}</span>
                      </div>
                      <CardTitle className="text-3xl lg:text-4xl text-slate-900 mb-6 font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight">{course.title}</CardTitle>
                      <CardDescription className="text-xl text-slate-500 leading-relaxed line-clamp-3 font-medium opacity-80">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-4 px-12 pb-10">
                      <div className="flex items-center text-sm text-slate-400 font-black gap-6 border-t border-slate-50 pt-10">
                        <div className="flex items-center gap-3 uppercase tracking-[0.15em] opacity-60">
                          <Users size={20} className="text-blue-700" />
                          <span>{course.students.toLocaleString("ar-EG")} طالب مسجل</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pb-12 pt-0 px-12">
                      <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white h-20 text-2xl font-black rounded-[2rem] transition-all shadow-xl active:scale-95 group-hover:shadow-blue-200">
                        ابدأ التعلم الآن
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-32">
              <Link href="/courses">
                <Button variant="link" className="text-blue-700 font-black text-3xl hover:no-underline hover:text-blue-800 transition-all flex items-center mx-auto group gap-6">
                  مشاهدة جميع الكورسات 
                  <span className="group-hover:translate-x-[-15px] transition-transform duration-500 bg-white shadow-xl w-16 h-16 flex items-center justify-center rounded-[1.5rem] border border-slate-100">
                    <ArrowLeft size={32} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 lg:py-56 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
              <div className="relative w-full order-2 lg:order-2 flex justify-center items-center">
                <div className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-[4/5] rounded-[5rem] lg:rounded-[8rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] lg:border-[24px] border-white transform lg:rotate-3">
                   <Image
                    src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                    alt={doctorData.name}
                    fill
                    className="object-cover scale-110"
                  />
                </div>
              </div>
              <div className="text-center lg:text-right order-1 lg:order-1">
                 <div className="inline-flex items-center gap-3 mb-8 bg-slate-900 text-white px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl">
                   <BookOpen size={18} className="text-blue-400" />
                   نبذة عن المحاضر
                 </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 leading-tight tracking-tight">تعرف على <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">{doctorData.name}</span></h2>
                <p className="text-2xl lg:text-3xl text-slate-600 mb-12 leading-relaxed font-medium opacity-90 lg:pl-12 italic">
                  "{doctorData.bio}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  {doctorData.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-6 justify-center lg:justify-start lg:flex-row-reverse bg-slate-50 p-7 rounded-[2.5rem] border border-slate-100 hover:bg-white transition-all duration-500 group">
                      <span className="text-xl text-slate-800 font-black group-hover:text-blue-700 transition-colors">{item}</span>
                      <div className="bg-emerald-100 p-3.5 rounded-[1.2rem] shrink-0 text-emerald-600">
                        <CheckCircle2 size={28} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Link href="/about">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white px-14 h-24 text-2xl font-black rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(30,58,138,0.4)] active:scale-95 transition-all">
                      اقرأ السيرة الذاتية الكاملة
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-slate-900 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white mb-12 leading-[1] tracking-tighter drop-shadow-2xl">هل أنت مستعد <br /> للقمة؟</h2>
            <p className="text-blue-100/80 text-2xl lg:text-3xl mb-20 leading-relaxed max-w-4xl mx-auto font-medium opacity-90">
              انضم إلى النخبة من طلاب الطب. احصل على الأدوات، المعرفة، والثقة التي تحتاجها للتميز في مستقبلك المهني.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 px-16 h-24 text-3xl font-black rounded-[3rem] shadow-[0_30px_70px_-15px_rgba(255,255,255,0.4)] w-full active:scale-95 transition-all">
                  سجل الآن مجاناً
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-[3px] border-white/20 text-white hover:bg-white/10 px-16 h-24 text-3xl font-black rounded-[3rem] backdrop-blur-xl w-full active:scale-95 transition-all">
                  تحدث معنا
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
