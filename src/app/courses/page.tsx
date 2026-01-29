"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Users, Clock, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { getCourses, getCategories, getLevels } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function CoursesPage() {
  const { t, locale, isArabic } = useI18n();
  const courses = getCourses(locale);
  const categoryList = getCategories(locale);
  const levelList = getLevels(locale);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "استكشف الكورسات الطبية" : "Explore Medical Courses"}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              {isArabic 
                ? `أكثر من ${courses.length} كورس متخصص في مختلف التخصصات الطبية، مصممة لمساعدتك على التفوق`
                : `More than ${courses.length} specialized courses in various medical fields, designed to help you excel`
              }
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder={t("courses.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full h-14 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl ${isArabic ? 'pr-14 pl-6' : 'pl-14 pr-6'}`}
              />
              <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 ${isArabic ? 'right-5' : 'left-5'}`} />
            </div>
          </div>
        </section>

        {/* Filters & Results */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-slate-600 font-medium">
                  {isArabic ? (
                    <>عرض <span className="text-blue-700 font-bold">{filteredCourses.length}</span> كورس</>
                  ) : (
                    <>Showing <span className="text-blue-700 font-bold">{filteredCourses.length}</span> courses</>
                  )}
                </span>
                <Button
                  variant="outline"
                  className="md:hidden flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} />
                  {isArabic ? "الفلاتر" : "Filters"}
                  <ChevronDown size={16} className={showFilters ? "rotate-180" : ""} />
                </Button>
              </div>

              <div className={`flex flex-wrap gap-3 ${showFilters ? "flex" : "hidden md:flex"}`}>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t("courses.allCategories")}</option>
                  {categoryList.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                {/* Level Filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t("courses.allLevels")}</option>
                  {levelList.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>

                {(selectedCategory !== "all" || selectedLevel !== "all" || searchQuery) && (
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedLevel("all");
                      setSearchQuery("");
                    }}
                  >
                    {t("courses.clearFilters")}
                  </Button>
                )}
              </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <Link href={`/courses/${course.slug}`} key={course.id}>
                    <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group cursor-pointer rounded-2xl flex flex-col">
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <Badge className={`absolute top-3 ${isArabic ? 'right-3' : 'left-3'} bg-white/95 text-blue-700 hover:bg-white border-none font-bold shadow-sm`}>
                          {course.category}
                        </Badge>

                        {/* Duration */}
                        <div className={`absolute bottom-3 ${isArabic ? 'left-3' : 'right-3'} flex items-center gap-1.5 text-white text-sm font-medium`}>
                          <Clock size={14} />
                          {course.duration}
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm font-bold text-slate-700">{course.rating}</span>
                          </div>
                          <Badge variant="outline" className="text-xs font-medium border-slate-200">
                            {course.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-slate-900 font-bold leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                          {course.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0 pb-3 flex-grow">
                        <CardDescription className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                          {course.description}
                        </CardDescription>
                      </CardContent>

                      <CardFooter className="pt-0 pb-5 flex items-center justify-between border-t border-slate-100 mt-auto">
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                          <Users size={14} />
                          <span>{course.students.toLocaleString(locale === "ar" ? "ar-EG" : "en-US")} {t("courses.students")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {course.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">
                              ${course.originalPrice}
                            </span>
                          )}
                          <span className="text-xl font-bold text-blue-700">${course.price}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("courses.noResults")}</h3>
                <p className="text-slate-500 mb-6">{t("courses.noResultsDesc")}</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                    setSearchQuery("");
                  }}
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                >
                  {t("courses.showAll")}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
