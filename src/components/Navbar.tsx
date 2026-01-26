"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, LayoutDashboard, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الكورسات", href: "/courses" },
    { name: "عن الدكتور", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 py-2 shadow-sm" 
          : "bg-transparent py-4 lg:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Right side (RTL) */}
          <div className="flex-shrink-0 z-[110]">
            <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                د. <span className="text-blue-700">زياد مهنا</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu - Center - More compact */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse bg-slate-100/50 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm lg:text-base font-bold transition-all px-5 py-2 rounded-xl",
                  isActive(link.href) 
                    ? "bg-white text-blue-700 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons - Left side (RTL) */}
          <div className="flex items-center gap-2 lg:gap-4 shrink-0 z-[110]">
            <div className="hidden md:flex items-center gap-3">
              <Link href="/dashboard" title="لوحة التحكم">
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-700 hover:bg-white/80 rounded-2xl h-11 w-11 transition-all border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md">
                  <LayoutDashboard size={22} />
                </Button>
              </Link>
            </div>

            <Link href="/courses" className="hidden sm:block">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 h-11 lg:h-12 text-sm lg:text-base font-black rounded-2xl transition-all shadow-lg active:scale-95">
                ابدأ التعلم
              </Button>
            </Link>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="text-slate-600 rounded-2xl h-11 w-11 bg-slate-100">
                  <User size={22} />
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-blue-700 focus:outline-none p-2 h-11 w-11 flex items-center justify-center rounded-2xl bg-slate-100 transition-all active:scale-90"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-500 ease-in-out transform origin-top z-[90] overflow-hidden",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 pt-6 pb-10 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center justify-between px-6 py-5 rounded-[1.5rem] font-black text-xl transition-all",
                isActive(link.href) 
                  ? "bg-blue-700 text-white shadow-xl" 
                  : "text-slate-700 hover:bg-slate-50"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
