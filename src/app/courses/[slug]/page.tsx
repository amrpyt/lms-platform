"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Star, 
  PlayCircle, 
  Globe, 
  Award, 
  FileText, 
  ShieldCheck,
  ChevronRight,
  Lock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Course Header / Hero */}
        <section className="bg-slate-900 text-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-blue-600 hover:bg-blue-600 border-none px-3 py-1 font-bold">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-white border-white/30 px-3 py-1">
                    {course.level}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium mb-8">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-amber-400 fill-amber-400" />
                    <span>{course.rating} ({course.reviews} تقييم)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-blue-400" />
                    <span>{course.students.toLocaleString("ar-EG")} طالب مسجل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-emerald-400" />
                    <span>{course.duration} من المحتوى</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <Image
                      src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                      alt="Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">بواسطة المحاضر</p>
                    <p className="font-bold text-lg">{course.instructor}</p>
                  </div>
                </div>
              </div>

              {/* Pricing Card (Desktop Sidebar style) */}
              <div className="lg:w-96 shrink-0">
                <Card className="sticky top-24 overflow-hidden border-none shadow-2xl bg-white text-slate-900">
                  <div className="aspect-video relative group cursor-pointer">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/50 transition-all">
                      <div className="bg-white rounded-full p-4 text-blue-900 shadow-xl scale-110">
                        <PlayCircle size={32} />
                      </div>
                    </div>
                    <p className="absolute bottom-4 w-full text-center text-white font-bold text-sm">
                      معاينة هذا الكورس
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold text-slate-900">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-xl text-slate-400 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                    <Button className="w-full h-14 bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold rounded-xl mb-4 shadow-lg shadow-blue-100">
                      اشترك الآن
                    </Button>
                    <p className="text-center text-sm text-slate-500 mb-8">
                      ضمان استرداد الأموال لمدة 30 يومًا
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">يشتمل الكورس على:</h4>
                      {[
                        { icon: PlayCircle, text: `${course.duration} فيديو عند الطلب` },
                        { icon: FileText, text: `${course.lessons} درساً مفصلاً` },
                        { icon: Globe, text: "وصول كامل مدى الحياة" },
                        { icon: ShieldCheck, text: "شهادة إتمام معتمدة" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                          <item.icon size={18} className="text-blue-700" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:w-[calc(100%-24rem)]">
              {/* What you'll learn */}
              <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50/50 mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">ماذا ستتعلم في هذا الكورس؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    "فهم شامل للمفاهيم الأساسية والمتقدمة",
                    "القدرة على الربط بين النظرية والتطبيق السريري",
                    "إتقان تقنيات التشخيص الحديثة",
                    "الاستعداد الكامل للامتحانات المهنية والجامعية",
                    "تحليل حالات طبية واقعية ومعقدة",
                    "بناء قاعدة معرفية قوية لممارستك المستقبلية"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-1" />
                      <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">الوصف</h2>
                <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>{course.fullDescription}</p>
                  <p>تم تصميم هذا البرنامج التدريبي ليكون رحلة تعليمية متكاملة، حيث نبدأ من الأساسيات وننتقل تدريجياً نحو المواضيع الأكثر تعقيداً، مع توفير كافة الأدوات والمواد العلمية التي يحتاجها الطالب للتميز.</p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">المنهج الدراسي</h2>
                <div className="flex items-center justify-between mb-4 text-sm text-slate-500 font-medium">
                  <div className="flex gap-4">
                    <span>{course.curriculum.length} وحدات</span>
                    <span>{course.lessons} درساً</span>
                  </div>
                  <span>المدة الإجمالية: {course.duration}</span>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {course.curriculum.map((section, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`section-${idx}`}
                      className="border border-slate-100 rounded-2xl overflow-hidden px-6"
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className="flex items-center gap-4 text-right">
                          <span className="text-xl font-bold text-slate-900">{section.title}</span>
                          <span className="text-sm text-slate-500 font-medium">({section.lessons.length} دروس)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-4">
                          {section.lessons.map((lesson, lIdx) => (
                            <div key={lIdx} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group">
                              <div className="flex items-center gap-4">
                                {lesson.free ? (
                                  <PlayCircle size={20} className="text-blue-700" />
                                ) : (
                                  <Lock size={20} className="text-slate-300" />
                                )}
                                <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-4">
                                {lesson.free && (
                                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">معاينة مجانية</span>
                                )}
                                <span className="text-sm text-slate-400">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Instructor */}
              <div className="p-8 border border-slate-100 rounded-[2rem] bg-white shadow-xl shadow-slate-100/50">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">عن المحاضر</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white shrink-0">
                    <Image
                      src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                      alt="Dr. Zeyad Mohanna"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">د. زياد مهنا</h3>
                    <p className="text-blue-700 font-bold mb-4">أخصائي معتمد ومحاضر دولي</p>
                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">12,000+ طالب</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PlayCircle size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">25 كورس متاح</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">4.9 تقييم عام</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-normal">
                      كرس الدكتور زياد مهنا حياته المهنية لتبسيط التعليم الطبي المعقد وتحويله إلى رحلة ممتعة وملهمة. بخبرته الواسعة، استطاع مساعدة آلاف الطلاب على الوصول لأهدافهم الأكاديمية والمهنية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
