import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
});

export const metadata: Metadata = {
  title: "د. زياد مهنا | منصة الكورسات الطبية",
  description: "المنصة التعليمية الرائدة للدكتور زياد مهنا لتبسيط العلوم الطبية ومساعدة الطلاب على التفوق.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${ibmPlexArabic.variable} font-sans antialiased overflow-x-hidden`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
