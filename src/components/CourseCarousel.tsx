"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, MoveLeft } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(Math.abs(scrollLeft) / (clientWidth * 0.85)); // Adjusted for mobile width
    setActiveIndex(index);
    if (Math.abs(scrollLeft) > 10) setHasScrolled(true);
  };

  return (
    <div className="relative group w-full">
      {/* Scroll Gradient Hints (Desktop) */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>

      {/* Swipe Hint (Mobile) */}
      {!hasScrolled && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          className="absolute -top-12 left-4 flex items-center gap-2 text-blue-600/60 font-black text-xs lg:hidden z-20"
        >
          اسحب لليسار <MoveLeft size={14} />
        </motion.div>
      )}

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-5 lg:gap-10 pb-8 px-4 lg:px-0 -mx-4 lg:mx-0 cursor-grab active:cursor-grabbing"
      >
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.8, 
              type: "spring",
              bounce: 0.2
            }}
            whileHover={{ y: -8 }}
            className="min-w-[82vw] sm:min-w-[400px] lg:min-w-[calc(33.333%-1.7rem)] snap-center first:mr-4 last:ml-4 lg:first:mr-0 lg:last:ml-0"
          >
            <Link href={`/courses/${course.slug}`} className="h-full block">
              <Card className="overflow-hidden border border-slate-100 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)] transition-all duration-500 bg-white flex flex-col rounded-[2rem] lg:rounded-[3rem] h-full cursor-pointer group">
                {/* Image Section - More compact on mobile */}
                <div className="h-48 lg:h-72 bg-slate-100 relative overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-3 lg:top-6 right-3 lg:right-6 bg-white/95 text-blue-700 hover:bg-white border-none px-3 lg:px-5 py-1 lg:py-2 font-black shadow-lg rounded-lg lg:rounded-2xl text-[10px] lg:text-sm">
                    {course.category}
                  </Badge>
                  <div className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 flex items-center gap-1.5 text-white text-[9px] lg:text-sm font-black bg-black/50 backdrop-blur-md px-3 lg:px-5 py-1 lg:py-2 rounded-lg lg:rounded-2xl shadow-lg">
                    <Clock size={12} className="lg:w-4 lg:h-4" />
                    {course.duration}
                  </div>
                </div>

                {/* Content Section - Compact padding */}
                <CardHeader className="pt-6 lg:pt-10 px-6 lg:px-10 pb-3 lg:pb-6">
                  <div className="flex justify-between items-center mb-3 lg:mb-6">
                    <div className="flex items-center gap-1 text-amber-500 font-black">
                      <Star size={16} fill="currentColor" className="lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-lg text-slate-700">{course.rating}</span>
                    </div>
                    <span className="text-xl lg:text-3xl font-black text-blue-700">${course.price}</span>
                  </div>
                  <CardTitle className="text-lg lg:text-3xl text-slate-900 mb-2 lg:mb-4 font-black leading-tight group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm lg:text-lg text-slate-500 leading-relaxed line-clamp-2 font-medium">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pt-1 px-6 lg:px-10">
                  <div className="flex items-center text-[10px] lg:text-sm text-slate-400 font-black gap-4 border-t border-slate-50 pt-4 lg:pt-8">
                    <div className="flex items-center gap-2 uppercase tracking-widest">
                      <Users size={14} className="text-blue-700/60 lg:w-[18px] lg:h-[18px]" />
                      <span>{course.students.toLocaleString("ar-EG")} طالب</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pb-6 lg:pb-10 pt-4 lg:pt-6 px-6 lg:px-10">
                  <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white h-12 lg:h-18 text-base lg:text-xl font-black rounded-xl lg:rounded-[1.5rem] transition-all shadow-lg active:scale-95">
                    ابدأ الآن
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots (Scroll Hint) */}
      <div className="flex justify-center gap-2 mt-2 lg:hidden">
        {courses.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
