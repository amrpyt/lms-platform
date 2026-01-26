"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  rating: number;
  students: number;
  thumbnail: string;
}

export default function CourseCarousel({ courses }: { courses: Course[] }) {
  return (
    <div className="relative group">
      {/* Scroll Gradient Hints */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>

      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 lg:gap-10 pb-12 px-4 lg:px-0 -mx-4 lg:mx-0 cursor-grab active:cursor-grabbing">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              delay: index * 0.15, 
              duration: 1, 
              type: "spring",
              bounce: 0.3
            }}
            whileHover={{ y: -10 }}
            className="min-w-[85vw] sm:min-w-[450px] lg:min-w-[calc(33.333%-1.7rem)] snap-center first:mr-4 last:ml-4 lg:first:mr-0 lg:last:ml-0"
          >
            <Link href={`/courses/${course.slug}`} className="h-full block">
              <Card className="overflow-hidden border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.2)] transition-all duration-700 bg-white flex flex-col rounded-[2.5rem] lg:rounded-[3rem] h-full cursor-pointer group">
                <div className="h-56 lg:h-72 bg-slate-100 relative overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/95 text-blue-700 hover:bg-white border-none px-4 lg:px-5 py-1.5 lg:py-2 font-black shadow-lg rounded-xl lg:rounded-2xl text-xs lg:text-sm">
                    {course.category}
                  </Badge>
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 flex items-center gap-2 text-white text-[10px] lg:text-sm font-black bg-black/50 backdrop-blur-md px-4 lg:px-5 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl shadow-lg">
                    <Clock size={14} className="lg:w-4 lg:h-4" />
                    {course.duration}
                  </div>
                </div>
                <CardHeader className="pt-8 lg:pt-10 px-8 lg:px-10 pb-4 lg:pb-6">
                  <div className="flex justify-between items-center mb-4 lg:mb-6">
                    <div className="flex items-center gap-1.5 text-amber-500 font-black">
                      <Star size={18} fill="currentColor" />
                      <span className="text-base lg:text-lg text-slate-700">{course.rating}</span>
                    </div>
                    <span className="text-2xl lg:text-3xl font-black text-blue-700">${course.price}</span>
                  </div>
                  <CardTitle className="text-xl lg:text-3xl text-slate-900 mb-3 lg:mb-4 font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight">{course.title}</CardTitle>
                  <CardDescription className="text-base lg:text-lg text-slate-500 leading-relaxed line-clamp-2 font-medium">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2 px-8 lg:px-10">
                  <div className="flex items-center text-xs lg:text-sm text-slate-400 font-black gap-5 border-t border-slate-50 pt-6 lg:pt-8">
                    <div className="flex items-center gap-2 uppercase tracking-widest">
                      <Users size={16} className="text-blue-700/60" />
                      <span>{course.students.toLocaleString("ar-EG")} طالب</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pb-8 lg:pb-10 pt-4 lg:pt-6 px-8 lg:px-10">
                  <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white h-14 lg:h-18 text-lg lg:text-xl font-black rounded-2xl lg:rounded-[1.5rem] transition-all shadow-xl active:scale-95">
                    ابدأ الآن
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
