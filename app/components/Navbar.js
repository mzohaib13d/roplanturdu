"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, BookOpen, Wrench, PhoneCall, HelpCircle, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "صفحہ اول (Home)", icon: Droplets, href: "/" },
    { label: "چیپٹر 1: RO پلانٹ کا تعارف", icon: FileText, href: "/chapter1" },
    { label: "چیپٹر 2: خام پانی سے صاف پانی تک پانی کا پورا سفر", icon: FileText, href: "/chapter2" },
    { label: "موضوعات کی فہرست (Topics)", icon: BookOpen, href: "/#topics" },
    { label: "مسائل اور حل (Troubleshooting)", icon: Wrench, href: "/#troubleshooting" },
    { label: "سوالات و جوابات (FAQ)", icon: HelpCircle, href: "/#faq" },
    { label: "رابطہ کریں (Contact)", icon: PhoneCall, href: "/#contact" },
  ];

  return (
    <>
      {/* High-Contrast Oceanic Navbar */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-cyan-500/30 text-white shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand Name Link */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-400/30 group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white block leading-tight font-sans">
                RO Plant Urdu
              </span>
              <span className="text-xs text-cyan-300 font-sans tracking-wide block">
                آر او پلانٹ کی مکمل اردو گائیڈ
              </span>
            </div>
          </Link>

          {/* Top Right Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            aria-label="Open Navigation Menu"
          >
            <span className="text-sm font-bold font-sans hidden sm:inline text-cyan-200">
              Menu
            </span>
            <Menu className="w-6 h-6 text-cyan-300" />
          </button>
        </div>
      </header>

      {/* Right Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Sidebar from Right Side */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-slate-900 text-white z-50 shadow-2xl border-l border-cyan-500/20 flex flex-col justify-between"
            >
              <div>
                {/* Sidebar Header */}
                <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-xl font-bold text-white">نیویگیشن مینو</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="p-6 space-y-3">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 font-semibold transition-all duration-200 group border border-transparent hover:border-cyan-500/20"
                      >
                        <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-slate-800 bg-slate-950 text-center text-sm text-slate-400">
                <p>© 2026 RO Plant Urdu</p>
                <p className="mt-1 font-sans text-xs text-cyan-400">Pure Water Training & Technical Guide</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}