import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Noto_Nastaliq_Urdu, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-nastaliq",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Zohaib Farooq | آر او پلانٹ \\ RO Plant Urdu",
  description: "آر او پلانٹ کی مکمل انسٹالیشن، آپریشن اور ٹربل شوٹنگ گائیڈ",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ur"
      dir="rtl"
      className={`${nastaliq.variable} ${jakarta.variable}`}
    >
      <body
        className="font-urdu min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-200 selection:text-cyan-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}