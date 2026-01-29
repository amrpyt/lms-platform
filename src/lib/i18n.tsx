"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "ar" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
  isArabic: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Arabic translations
const ar = {
  // Navbar
  "nav.home": "الرئيسية",
  "nav.courses": "الكورسات",
  "nav.about": "عن الدكتور",
  "nav.contact": "تواصل معنا",
  "nav.dashboard": "لوحة التحكم",
  "nav.startLearning": "ابدأ التعلم",
  "nav.startLearningNow": "ابدأ التعلم الآن",

  // Hero Section
  "hero.badge": "المنصة الأولى للتعليم الطبي في مصر",
  "hero.title1": "أتقن مسيرتك",
  "hero.title2": "الطبية مع",
  "hero.description": "حوّل طريقة فهمك للطب. انضم لآلاف الطلاب في رحلة تعليمية مبتكرة تجمع بين العمق العلمي والتبسيط البصري الفائق.",
  "hero.exploreCourses": "استكشف الكورسات",
  "hero.watchDemo": "شاهد العرض",
  "hero.certified": "معتمد دولياً",
  "hero.quality": "جودة مضمونة",
  "hero.support": "دعم 24/7",
  "hero.availableNow": "متاح الآن للتسجيل",
  "hero.excellentStudent": "طالب متميز",
  "hero.certifiedExpert": "خبير معتمد",

  // Stats
  "stats.activeStudents": "طالب نشط",
  "stats.courseEnrollments": "تسجيل في الكورسات",
  "stats.yearsExperience": "سنوات خبرة",
  "stats.successRate": "نسبة النجاح",

  // Courses Section
  "courses.badge": "محتوى حصري",
  "courses.title": "الكورسات المميزة",
  "courses.description": "وحدات تعليمية مصممة بعناية فائقة لتوفير فهم عميق ومعرفة عملية حقيقية.",
  "courses.viewAll": "مشاهدة جميع الكورسات",
  "courses.students": "طالب",
  "courses.reviews": "تقييم",
  "courses.hours": "ساعة",
  "courses.lessons": "درس",
  "courses.enrollNow": "سجل الآن",
  "courses.addToFavorites": "أضف للمفضلة",
  "courses.free": "مجاني",
  "courses.locked": "مقفل",
  "courses.searchPlaceholder": "ابحث عن الكورسات...",
  "courses.allCategories": "جميع التخصصات",
  "courses.allLevels": "جميع المستويات",
  "courses.clearFilters": "مسح الفلاتر",
  "courses.noResults": "لم يتم العثور على نتائج",
  "courses.noResultsDesc": "جرب تعديل معايير البحث",
  "courses.showAll": "عرض الكل",
  "courses.featured": "مميز",
  "courses.discount": "خصم",
  "courses.lifetimeAccess": "وصول مدى الحياة",
  "courses.certificate": "شهادة إتمام",
  "courses.technicalSupport": "دعم فني",
  "courses.freeUpdates": "تحديثات مجانية",
  "courses.whatYouWillLearn": "ماذا ستتعلم",
  "courses.requirements": "المتطلبات المسبقة",
  "courses.curriculum": "المنهج الدراسي",
  "courses.instructor": "المحاضر",
  "courses.relatedCourses": "كورسات مشابهة",
  "courses.overview": "نظرة عامة",
  "courses.suggestCourse": "اقترح كورس جديد",
  "courses.notFound": "لم تجد ما تبحث عنه؟",

  // About Section
  "about.badge": "خلف الكواليس",
  "about.title": "تعرف على المحاضر",
  "about.readFullBio": "اقرأ السيرة الذاتية الكاملة",
  "about.myStory": "قصتي",
  "about.achievements": "الإنجازات والشهادات",
  "about.philosophy": "فلسفتي في التعليم",

  // CTA Section
  "cta.title": "هل أنت مستعد لبدء رحلتك الطبية اليوم؟",
  "cta.description": "انضم إلى مجتمع الدكتور زياد التعليمي اليوم واحصل على وصول فوري إلى مئات الساعات من المحتوى الطبي الحصري وعالي الجودة.",
  "cta.joinNow": "انضم الآن مجاناً",
  "cta.contactUs": "تواصل للاستفسارات",

  // Footer
  "footer.description": "المنصة التعليمية الرائدة المخصصة لتمكين طلاب الطب عبر محتوى علمي متطور وأسلوب تعليمي مبتكر.",
  "footer.quickLinks": "روابط سريعة",
  "footer.support": "الدعم والمساعدة",
  "footer.faq": "الأسئلة الشائعة",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "شروط الخدمة",
  "footer.helpCenter": "مركز المساعدة",
  "footer.contactUs": "تواصل معنا",
  "footer.copyright": "جميع الحقوق محفوظة.",
  "footer.status": "المنصة تعمل بكفاءة عالية",

  // Contact Page
  "contact.title": "تواصل معنا",
  "contact.subtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في رحلتك التعليمية",
  "contact.name": "الاسم الكامل",
  "contact.email": "البريد الإلكتروني",
  "contact.subject": "الموضوع",
  "contact.message": "رسالتك",
  "contact.send": "إرسال الرسالة",
  "contact.generalInquiry": "استفسار عام",
  "contact.technicalSupport": "دعم فني",
  "contact.courseSuggestion": "اقتراح كورس",
  "contact.partnership": "شراكة وتعاون",
  "contact.info": "معلومات التواصل",
  "contact.workingHours": "ساعات العمل",
  "contact.workingHoursValue": "الأحد - الخميس: 9 صباحاً - 5 مساءً",
  "contact.address": "العنوان",
  "contact.addressValue": "القاهرة، مصر",
  "contact.faqTitle": "الأسئلة الشائعة",

  // Dashboard
  "dashboard.welcome": "مرحباً بك",
  "dashboard.myCourses": "كورساتي",
  "dashboard.progress": "تقدمي",
  "dashboard.certificates": "شهاداتي",
  "dashboard.settings": "الإعدادات",
  "dashboard.continueLearning": "أكمل التعلم",
  "dashboard.noCourses": "لم تسجل في أي كورس بعد",
  "dashboard.browseCourses": "تصفح الكورسات",

  // Levels
  "level.beginner": "مبتدئ",
  "level.intermediate": "متوسط",
  "level.advanced": "متقدم",

  // Categories
  "category.anatomy": "تشريح",
  "category.biochemistry": "كيمياء حيوية",
  "category.physiology": "فيزيولوجيا",
  "category.cardiology": "أمراض قلب",

  // Common
  "common.dr": "د.",
  "common.readMore": "اقرأ المزيد",
  "common.learnMore": "اعرف المزيد",
  "common.viewDetails": "عرض التفاصيل",
  "common.back": "رجوع",
  "common.home": "الرئيسية",
};

// English translations
const en = {
  // Navbar
  "nav.home": "Home",
  "nav.courses": "Courses",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.dashboard": "Dashboard",
  "nav.startLearning": "Start Learning",
  "nav.startLearningNow": "Start Learning Now",

  // Hero Section
  "hero.badge": "Egypt's #1 Medical Education Platform",
  "hero.title1": "Master Your",
  "hero.title2": "Medical Journey with",
  "hero.description": "Transform your understanding of medicine. Join thousands of students on an innovative learning journey combining scientific depth with exceptional visual clarity.",
  "hero.exploreCourses": "Explore Courses",
  "hero.watchDemo": "Watch Demo",
  "hero.certified": "Internationally Certified",
  "hero.quality": "Guaranteed Quality",
  "hero.support": "24/7 Support",
  "hero.availableNow": "Available for Registration",
  "hero.excellentStudent": "Excellent Students",
  "hero.certifiedExpert": "Certified Expert",

  // Stats
  "stats.activeStudents": "Active Students",
  "stats.courseEnrollments": "Course Enrollments",
  "stats.yearsExperience": "Years Experience",
  "stats.successRate": "Success Rate",

  // Courses Section
  "courses.badge": "Exclusive Content",
  "courses.title": "Featured Courses",
  "courses.description": "Meticulously designed learning modules to provide deep understanding and practical real-world knowledge.",
  "courses.viewAll": "View All Courses",
  "courses.students": "students",
  "courses.reviews": "reviews",
  "courses.hours": "hours",
  "courses.lessons": "lessons",
  "courses.enrollNow": "Enroll Now",
  "courses.addToFavorites": "Add to Favorites",
  "courses.free": "Free",
  "courses.locked": "Locked",
  "courses.searchPlaceholder": "Search for courses...",
  "courses.allCategories": "All Categories",
  "courses.allLevels": "All Levels",
  "courses.clearFilters": "Clear Filters",
  "courses.noResults": "No results found",
  "courses.noResultsDesc": "Try adjusting your search criteria",
  "courses.showAll": "Show All",
  "courses.featured": "Featured",
  "courses.discount": "OFF",
  "courses.lifetimeAccess": "Lifetime Access",
  "courses.certificate": "Certificate of Completion",
  "courses.technicalSupport": "Technical Support",
  "courses.freeUpdates": "Free Updates",
  "courses.whatYouWillLearn": "What You'll Learn",
  "courses.requirements": "Requirements",
  "courses.curriculum": "Curriculum",
  "courses.instructor": "Instructor",
  "courses.relatedCourses": "Related Courses",
  "courses.overview": "Overview",
  "courses.suggestCourse": "Suggest a Course",
  "courses.notFound": "Can't find what you're looking for?",

  // About Section
  "about.badge": "Behind the Scenes",
  "about.title": "Meet Your Instructor",
  "about.readFullBio": "Read Full Biography",
  "about.myStory": "My Story",
  "about.achievements": "Achievements & Certifications",
  "about.philosophy": "My Teaching Philosophy",

  // CTA Section
  "cta.title": "Ready to Start Your Medical Journey Today?",
  "cta.description": "Join Dr. Zeyad's educational community today and get instant access to hundreds of hours of exclusive, high-quality medical content.",
  "cta.joinNow": "Join Now for Free",
  "cta.contactUs": "Contact for Inquiries",

  // Footer
  "footer.description": "The leading educational platform dedicated to empowering medical students through advanced scientific content and innovative teaching methods.",
  "footer.quickLinks": "Quick Links",
  "footer.support": "Support & Help",
  "footer.faq": "FAQ",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.helpCenter": "Help Center",
  "footer.contactUs": "Contact Us",
  "footer.copyright": "All rights reserved.",
  "footer.status": "Platform running smoothly",

  // Contact Page
  "contact.title": "Contact Us",
  "contact.subtitle": "We're here to answer your questions and help you on your educational journey",
  "contact.name": "Full Name",
  "contact.email": "Email Address",
  "contact.subject": "Subject",
  "contact.message": "Your Message",
  "contact.send": "Send Message",
  "contact.generalInquiry": "General Inquiry",
  "contact.technicalSupport": "Technical Support",
  "contact.courseSuggestion": "Course Suggestion",
  "contact.partnership": "Partnership & Collaboration",
  "contact.info": "Contact Information",
  "contact.workingHours": "Working Hours",
  "contact.workingHoursValue": "Sunday - Thursday: 9 AM - 5 PM",
  "contact.address": "Address",
  "contact.addressValue": "Cairo, Egypt",
  "contact.faqTitle": "Frequently Asked Questions",

  // Dashboard
  "dashboard.welcome": "Welcome",
  "dashboard.myCourses": "My Courses",
  "dashboard.progress": "My Progress",
  "dashboard.certificates": "My Certificates",
  "dashboard.settings": "Settings",
  "dashboard.continueLearning": "Continue Learning",
  "dashboard.noCourses": "You haven't enrolled in any courses yet",
  "dashboard.browseCourses": "Browse Courses",

  // Levels
  "level.beginner": "Beginner",
  "level.intermediate": "Intermediate",
  "level.advanced": "Advanced",

  // Categories
  "category.anatomy": "Anatomy",
  "category.biochemistry": "Biochemistry",
  "category.physiology": "Physiology",
  "category.cardiology": "Cardiology",

  // Common
  "common.dr": "Dr.",
  "common.readMore": "Read More",
  "common.learnMore": "Learn More",
  "common.viewDetails": "View Details",
  "common.back": "Back",
  "common.home": "Home",
};

const translations: Record<Locale, Record<string, string>> = { ar, en };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "ar" || savedLocale === "en")) {
      setLocaleState(savedLocale);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document direction and lang
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = locale;
      // Save to localStorage
      localStorage.setItem("locale", locale);
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    t,
    dir: locale === "ar" ? "rtl" : "ltr",
    isArabic: locale === "ar",
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ ...value, locale: "ar", dir: "rtl", isArabic: true }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export { translations };
