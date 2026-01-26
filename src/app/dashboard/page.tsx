import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  PlayCircle, 
  Star, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { courses } from "@/lib/data";

export default function DashboardPage() {
  const enrolledCourses = courses.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-right w-full lg:w-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-none px-4 py-1 font-bold rounded-full">لوحة تحكم الطالب</Badge>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                مرحباً بك، <span className="text-blue-700">أحمد خالد</span> 👋
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                استكمل رحلتك التعليمية وتابع تقدمك في الكورسات الطبية.
              </p>
            </div>
            <div className="flex gap-4 w-full lg:w-auto">
               <Link href="/courses" className="flex-1 lg:flex-none">
                 <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 h-14 text-lg font-black rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-all">
                    استكشف كورسات جديدة
                 </Button>
               </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: "كورس مسجل", value: "02", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
                  { label: "دروس مكتملة", value: "15", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { label: "شهادات", value: "01", icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
                  { label: "ساعات دراسة", value: "24", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg, stat.color)}>
                      <stat.icon size={24} />
                    </div>
                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Enrolled Courses */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-900">كورساتي الحالية</h2>
                  <Link href="/courses" className="text-sm font-bold text-blue-700 hover:underline">عرض الكل</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-[2.5rem] group">
                      <div className="h-44 relative">
                        <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-slate-900/20"></div>
                        <Badge className="absolute top-4 right-4 bg-white/95 text-blue-700 border-none font-bold">
                           {course.category}
                        </Badge>
                      </div>
                      <CardHeader className="pt-6 px-8 text-right">
                        <CardTitle className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-8 pb-8">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold text-slate-400 uppercase">التقدم: 65%</span>
                           <span className="text-xs font-bold text-blue-700">12/18 درس</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                           <div className="bg-blue-600 h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                        </div>
                        <Button className="w-full h-12 bg-slate-900 hover:bg-blue-700 text-white font-bold rounded-xl active:scale-95 transition-all">
                           استكمال التعلم
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-right">
                <h2 className="text-2xl font-black text-slate-900 mb-8">آخر النشاطات</h2>
                <div className="space-y-6">
                  {[
                    { title: "أكملت درس 'فيزيولوجيا الأعصاب'", time: "منذ ساعتين", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
                    { title: "حصلت على تقييم 9/10 في اختبار التشريح", time: "أمس", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
                    { title: "بدأت كورس 'الكيمياء الحيوية السريرية'", time: "منذ يومين", icon: PlayCircle, color: "text-blue-500", bg: "bg-blue-50" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex-row-reverse">
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", item.bg, item.color)}>
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-800">{item.title}</p>
                        <p className="text-sm text-slate-400 font-medium">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8 text-right">
              
              {/* Profile Card */}
              <div className="bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                 <div className="relative z-10 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-xl">
                       <Image 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjBWQ3Br5ZwKNy5R3Tm570_WmawzYhHvc1r3ZDKC9llw6jEmp4P2ebgP1MR3vSiY0KlvfBmzhqgsPI8bd6B5ZRxlg3AxQCURw1CdDwKk72N79NXa0iNQSSM0H9v1lSt6F02RA0nEhgcsTJ6igFt0aPRPtUrrzkT8d0dTV64I2scngmmSuLBHY5G28eRx_y9AqkcDv4gBLV4QU8quZMN04e2iNYb1cniPGwhknyh5IEXpF1NqD88QCVMO_pz2tPoNmTCPWVUTSKPY" 
                          alt="Student Avatar" 
                          fill 
                          className="object-cover"
                       />
                    </div>
                    <h3 className="text-2xl font-black mb-1 text-center">أحمد خالد</h3>
                    <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-6 text-center">طالب طب - السنة الثالثة</p>
                    <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                    <Button className="w-full bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 rounded-xl h-12 font-bold transition-all backdrop-blur-sm">تعديل الملف الشخصي</Button>
                 </div>
                 {/* Abstract Decor */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>

              {/* Recommended for you */}
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-right">
                <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center justify-end gap-2">
                   <Sparkles size={20} className="text-blue-700" />
                   موصى به لك
                </h2>
                <div className="space-y-4">
                  {courses.slice(2, 4).map((course) => (
                    <Link href={`/courses/${course.slug}`} key={course.id} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100 group text-right flex-row-reverse">
                       <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                          <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                       </div>
                       <div className="flex-1">
                          <p className="font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-blue-700 transition-colors">{course.title}</p>
                          <p className="text-xs text-slate-400 font-bold mt-1">{course.category}</p>
                       </div>
                    </Link>
                  ))}
                </div>
                <Link href="/courses">
                  <Button variant="link" className="w-full mt-6 text-blue-700 font-black flex items-center justify-center gap-2 hover:no-underline flex-row-reverse">
                     <ArrowRight size={18} className="rotate-180" />
                     استعرض الكتالوج الكامل
                  </Button>
                </Link>
              </div>

              {/* Help & Support */}
              <div className="bg-emerald-50/50 p-8 rounded-[3rem] border border-emerald-100 text-right">
                <h2 className="text-xl font-black text-slate-900 mb-4">هل تحتاج مساعدة؟</h2>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                   فريق الدعم الفني متواجد لمساعدتك في أي وقت على مدار الساعة.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl h-12 shadow-lg shadow-emerald-100">
                     تحدث مع الدعم
                  </Button>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Utility for conditional classes
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
