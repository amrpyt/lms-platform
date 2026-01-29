"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCourse, getDoctorData } from "@/lib/data";
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
  FileText, 
  ShieldCheck,
  Lock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, locale, isArabic } = useI18n();
  
  const course = getCourse(slug, locale);
  const doctor = getDoctorData(locale);

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
                    <span>{course.rating} ({course.reviews} {t("courses.reviews")})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-blue-400" />
                    <span>{course.students.toLocaleString(locale === "ar" ? "ar-EG" : "en-US")} {isArabic ? "طالب مسجل" : "enrolled students"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-emerald-400" />
                    <span>{course.duration} {isArabic ? "من المحتوى" : "of content"}</span>
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
                    <p className="text-sm text-slate-400">{isArabic ? "بواسطة المحاضر" : "Instructor"}</p>
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
                      {isArabic ? "معاينة هذا الكورس" : "Preview this course"}
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
                      {t("courses.enrollNow")}
                    </Button>
                    <p className="text-center text-sm text-slate-500 mb-8">
                      {isArabic ? "ضمان استرداد الأموال لمدة 30 يومًا" : "30-day money-back guarantee"}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">{isArabic ? "يشتمل الكورس على:" : "This course includes:"}</h4>
                      {[
                        { icon: PlayCircle, text: isArabic ? `${course.duration} فيديو عند الطلب` : `${course.duration} on-demand video` },
                        { icon: FileText, text: isArabic ? `${course.lessons} درساً مفصلاً` : `${course.lessons} detailed lessons` },
                        { icon: Globe, text: t("courses.lifetimeAccess") },
                        { icon: ShieldCheck, text: t("courses.certificate") },
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
                <h2 className="text-2xl font-bold text-slate-900 mb-8">{t("courses.whatYouWillLearn")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {course.whatYouWillLearn?.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-1" />
                      <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("courses.overview")}</h2>
                <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>{course.fullDescription}</p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{t("courses.curriculum")}</h2>
                <div className="flex items-center justify-between mb-4 text-sm text-slate-500 font-medium">
                  <div className="flex gap-4">
                    <span>{course.curriculum?.length} {isArabic ? "وحدات" : "sections"}</span>
                    <span>{course.lessons} {t("courses.lessons")}</span>
                  </div>
                  <span>{isArabic ? "المدة الإجمالية:" : "Total duration:"} {course.duration}</span>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {course.curriculum?.map((section: any, idx: number) => (
                    <AccordionItem 
                      key={idx} 
                      value={`section-${idx}`}
                      className="border border-slate-100 rounded-2xl overflow-hidden px-6"
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className={`flex items-center gap-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                          <span className="text-xl font-bold text-slate-900">{section.title}</span>
                          <span className="text-sm text-slate-500 font-medium">({section.lessons.length} {isArabic ? "دروس" : "lessons"})</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-4">
                          {section.lessons.map((lesson: any, lIdx: number) => (
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
                                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                                    {t("courses.free")}
                                  </span>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-8">{t("courses.instructor")}</h2>
                <div className={`flex flex-col md:flex-row gap-8 items-center md:items-start`}>
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white shrink-0">
                    <Image
                      src="/Gemini_Generated_Image_g7lm4og7lm4og7lm.png"
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-700 font-bold mb-4">{doctor.title}</p>
                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">12,000+ {isArabic ? "طالب" : "students"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PlayCircle size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">25 {isArabic ? "كورس متاح" : "courses"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={18} className="text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">4.9 {isArabic ? "تقييم عام" : "rating"}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-normal">
                      {doctor.bio}
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
