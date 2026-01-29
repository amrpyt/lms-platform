"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, LayoutDashboard, User } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, isArabic } = useI18n();
  
  // Sliding indicator state
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.courses"), href: "/courses" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  // Update indicator position
  const updateIndicator = useCallback(() => {
    const activeIndex = navLinks.findIndex(link => link.href === pathname);
    if (activeIndex !== -1 && linkRefs.current[activeIndex] && navContainerRef.current) {
      const activeLink = linkRefs.current[activeIndex];
      const container = navContainerRef.current;
      if (activeLink) {
        const containerRect = container.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setIndicatorStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [pathname, navLinks]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Update indicator on mount and path change
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50);
    return () => clearTimeout(timer);
  }, [pathname, updateIndicator]);

  // Update indicator on window resize
  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm" 
            : "bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-3 lg:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 z-[110]">
              <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap size={28} />
                </div>
                <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                  {isArabic ? (
                    <>د. <span className="text-blue-700">زياد مهنا</span></>
                  ) : (
                    <>Dr. <span className="text-blue-700">Zeyad Mohanna</span></>
                  )}
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu with Sliding Indicator */}
            <div 
              ref={navContainerRef}
              className={cn(
                "hidden md:flex items-center bg-slate-100/50 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/50 relative",
                isArabic ? "space-x-1 space-x-reverse" : "space-x-1"
              )}
            >
              {/* Sliding Indicator */}
              <div
                className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none z-0"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.width > 0 ? 1 : 0,
                }}
              />
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[index] = el; }}
                  className={cn(
                    "text-sm lg:text-base font-bold transition-colors duration-200 px-5 py-2 rounded-xl relative z-10",
                    isActive(link.href) 
                      ? "text-blue-700" 
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={cn(
              "flex items-center shrink-0 z-[110]",
              isArabic ? "gap-2 lg:gap-4" : "gap-2 lg:gap-4"
            )}>
              <div className="hidden md:flex items-center gap-3">
                <LanguageSwitcher />
                <Link href="/dashboard" title={t("nav.dashboard")}>
                  <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-700 hover:bg-white/80 rounded-2xl h-11 w-11 transition-all border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md">
                    <LayoutDashboard size={22} />
                  </Button>
                </Link>
              </div>

              <Link href="/courses" className="hidden sm:block">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 h-11 lg:h-12 text-sm lg:text-base font-black rounded-2xl transition-all shadow-lg active:scale-95">
                  {t("nav.startLearning")}
                </Button>
              </Link>

              {/* Mobile Actions */}
              <div className="md:hidden flex items-center gap-2">
                <LanguageSwitcher />
                <Link href="/dashboard">
                  <Button variant="ghost" size="icon" className="text-slate-600 rounded-full h-11 w-11 bg-slate-100">
                    <User size={22} />
                  </Button>
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-slate-600 hover:text-blue-700 focus:outline-none p-2 h-11 w-11 flex items-center justify-center rounded-2xl bg-slate-100 transition-all active:scale-90"
                  aria-label="Menu Toggle"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fixed positioning for stability */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out transform",
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center justify-between px-6 py-5 rounded-3xl font-black text-2xl transition-all border border-transparent",
                isActive(link.href) 
                  ? "bg-blue-50 text-blue-700 border-blue-100 shadow-sm" 
                  : "text-slate-700 hover:bg-slate-50"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span>{link.name}</span>
              {isActive(link.href) && <div className="w-3 h-3 bg-blue-700 rounded-full shadow-[0_0_10px_rgba(30,58,138,0.3)]"></div>}
            </Link>
          ))}
          
          <div className="mt-auto space-y-4">
             <Link href="/courses" className="block">
                <Button className="w-full h-18 text-xl font-black rounded-3xl bg-blue-700 hover:bg-blue-800 text-white shadow-xl shadow-blue-200/50">
                  {t("nav.startLearningNow")}
                </Button>
             </Link>
             <Link href="/dashboard" className="block">
                <Button variant="outline" className="w-full h-18 text-xl font-black rounded-3xl border-slate-200 text-slate-700">
                  {t("nav.dashboard")}
                </Button>
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
