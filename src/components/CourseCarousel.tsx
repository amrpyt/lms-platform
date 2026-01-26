"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, ArrowLeft, ArrowRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(Math.abs(scrollLeft) / (clientWidth * 0.9));
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full py-4">
      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:flex absolute -top-20 left-0 gap-3">
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
        >
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 lg:gap-8 pb-10 px-4 lg:px-0 -mx-4 lg:mx-0 cursor-grab active:cursor-grabbing"
      >
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[88vw] md:min-w-[420px] lg:min-w-[380px] snap-center group/card"
          >
            <Link href={`/courses/${course.slug}`} className="block h-full">
              <div className="relative bg-white rounded-[2.5rem] p-3 h-full border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-30px_rgba(30,58,138,0.2)] transition-all duration-700 overflow-hidden flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-60 md:h-64 rounded-[2rem] overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white border-white/20 px-4 py-1.5 rounded-xl font-bold text-[10px] uppercase tracking-wider">
                    {course.category}
                  </Badge>

                  {/* Rating Float */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-black text-slate-800">{course.rating}</span>
                  </div>

                  {/* Duration Overlay */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/90 text-xs font-bold">
                    <Clock size={14} className="text-blue-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.1em]">
                      <Users size={14} className="text-blue-600/50" />
                      <span>{course.students.toLocaleString("ar-EG")} طالب</span>
                    </div>
                    <span className="text-2xl font-black text-blue-700">${course.price}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight group-hover/card:text-blue-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 mb-6 mb-auto">
                    {course.description}
                  </p>

                  <Button className="w-full bg-slate-900 group-hover/card:bg-blue-700 text-white h-14 rounded-2xl text-lg font-black transition-all duration-300 shadow-lg shadow-slate-200 group-hover/card:shadow-blue-200">
                    ابدأ التعلم الآن
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Modern Progress Bar (Custom Scroll Hint) */}
      <div className="flex items-center justify-center gap-4 lg:hidden">
        <div className="flex gap-1.5 items-center">
          {courses.map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                width: activeIndex === i ? 24 : 8,
                backgroundColor: activeIndex === i ? "#1d4ed8" : "#e2e8f0"
              }}
              className="h-2 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
