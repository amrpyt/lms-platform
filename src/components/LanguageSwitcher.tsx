"use client";

import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { locale, setLocale, isArabic } = useI18n();

  const toggleLanguage = () => {
    setLocale(isArabic ? "en" : "ar");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-slate-600 hover:text-blue-700 hover:bg-white/80 rounded-2xl h-11 w-11 transition-all border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md"
      title={isArabic ? "Switch to English" : "التحويل للعربية"}
    >
      <div className="relative flex items-center justify-center">
        <Globe size={20} />
        <span className="absolute -bottom-1 -right-1 text-[8px] font-black bg-blue-100 text-blue-700 px-1 rounded">
          {isArabic ? "EN" : "ع"}
        </span>
      </div>
    </Button>
  );
}
