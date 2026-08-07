"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Droplets,
  FileText,
  Wrench,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "صفحہ اول (Home)",
      icon: Droplets,
      href: "/",
    },
    {
      label: "چیپٹر 1: RO پلانٹ کا تعارف",
      icon: FileText,
      href: "/chapter1",
    },
    {
      label: "چیپٹر 2: خام پانی سے صاف پانی تک پانی کا پورا سفر",
      icon: FileText,
      href: "/chapter2",
    },
    {
      label: "چیپٹر 3: ہر مشین اور اس کا کام",
      icon: FileText,
      href: "/chapter3",
    },
    {
      label: "چیپٹر 4: RO پلانٹ میں استعمال ہونے والے والوز (Valves)",
      icon: FileText,
      href: "/chapter4",
    },
    {
      label:
        "چیپٹر 5: RO پلانٹ میں استعمال ہونے والے انسٹرومنٹس (Instruments)",
      icon: FileText,
      href: "/chapter5",
    },
    {
      label:
        "چیپٹر 6: RO Membrane، Housing، Spiral Wound، Permeate، Reject، Recovery اور Flux",
      icon: FileText,
      href: "/chapter6",
    },
    {
      label: "چیپٹر 7: کیمیکل ڈوزنگ سسٹم",
      icon: FileText,
      href: "/chapter7",
    },
    {
      label: "چیپٹر 8: CIP (Cleaning in Place)",
      icon: FileText,
      href: "/chapter8",
    },
    {
      label:
        "چیپٹر 9: RO Plant Troubleshooting (خرابیوں کی تشخیص)",
      icon: FileText,
      href: "/chapter9",
    },
  ];

  return (
    <>
      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}

      <header className="relative z-40 w-full border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              LOGO / BRAND
          ===================================================== */}

          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 text-slate-950 shadow-md shadow-cyan-400/30 transition-transform group-hover:scale-105">
              <Droplets className="h-6 w-6 fill-current" />
            </div>

            <div className="min-w-0">
              <span className="block truncate text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                RO Plant Urdu
              </span>

              <span className="block truncate font-sans text-[10px] tracking-wide text-cyan-300 sm:text-xs">
                آر او پلانٹ کی مکمل اردو گائیڈ
              </span>
            </div>
          </Link>

          {/* =====================================================
              HAMBURGER BUTTON
          ===================================================== */}

          <button
            onClick={() => setIsOpen(true)}
            className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300 transition-all hover:bg-cyan-500/20 active:scale-95"
            aria-label="Open Navigation Menu"
          >
            <span className="hidden font-sans text-sm font-bold text-cyan-200 sm:inline">
              Menu
            </span>

            <Menu className="h-6 w-6 text-cyan-300" />
          </button>
        </div>
      </header>

      {/* =========================================================
          RIGHT SLIDE-IN SIDEBAR
      ========================================================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* =====================================================
                BACKDROP
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 cursor-pointer bg-slate-950/70 backdrop-blur-sm"
            />

            {/* =====================================================
                SIDEBAR
            ===================================================== */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-dvh
                w-[min(92vw,24rem)]
                flex-col
                overflow-hidden
                border-l
                border-cyan-500/20
                bg-slate-900
                text-white
                shadow-2xl
              "
            >

              {/* ===================================================
                  SIDEBAR HEADER
              =================================================== */}

              <div className="shrink-0 border-b border-slate-800 bg-slate-950">

                <div className="flex min-h-[76px] items-center gap-2 px-4 sm:gap-3 sm:px-5">

                  {/* =================================================
                      TITLE
                      💧 نیویگیشن مینو
                  ================================================= */}

                  <div className="flex shrink-0 items-center gap-2">

                    <Droplets className="h-6 w-6 shrink-0 text-cyan-400" />

                    <h2 className="whitespace-nowrap text-lg font-bold text-white sm:text-xl">
                      نیویگیشن مینو
                    </h2>

                  </div>


                  {/* =================================================
                      TECHNICIAN ANIMATION AREA

                      This uses the available middle space.
                      It automatically shrinks on smaller screens.
                  ================================================= */}

                  <div className="relative min-w-0 flex-1 overflow-hidden">

                    {/* Walking area */}

                    <div className="relative mx-auto h-14 w-full max-w-[100px] sm:max-w-[125px]">

                      {/* Ground */}

                      <div
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-[2px]
                          w-[85%]
                          -translate-x-1/2
                          rounded-full
                          bg-gradient-to-r
                          from-transparent
                          via-cyan-400/60
                          to-transparent
                        "
                      />

                      {/* =================================================
                          WALKING TECHNICIAN
                      ================================================= */}

                      <motion.div
                        className="absolute bottom-[4px] left-0 h-12 w-8"
                        animate={{
                          x: [0, 92, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >

                        {/* =============================================
                            BODY BOUNCE
                        ============================================= */}

                        <motion.div
                          className="relative h-full w-full"
                          animate={{
                            y: [0, -2, 0, -2, 0],
                          }}
                          transition={{
                            duration: 0.45,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >

                          {/* =========================================
                              HELMET
                          ========================================= */}

                          <div className="absolute left-[8px] top-0 h-[9px] w-[22px]">

                            <div className="absolute left-[3px] top-0 h-[7px] w-[17px] rounded-t-full bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-500 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />

                            <div className="absolute bottom-0 left-0 h-[3px] w-[22px] rounded-full bg-amber-400" />

                            <div className="absolute left-[7px] top-[2px] h-[2px] w-[6px] rounded-full bg-white/80" />

                          </div>


                          {/* =========================================
                              FACE
                          ========================================= */}

                          <div className="absolute left-[10px] top-[9px] h-[16px] w-[17px] rounded-b-[7px] rounded-t-[5px] bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">

                            {/* Hair */}

                            <div className="absolute -top-[1px] left-[1px] h-[4px] w-[6px] rounded-full bg-slate-800" />

                            {/* Eyes */}

                            <div className="absolute left-[3px] top-[5px] h-[2px] w-[2px] rounded-full bg-slate-900" />

                            <div className="absolute right-[3px] top-[5px] h-[2px] w-[2px] rounded-full bg-slate-900" />

                            {/* Smile */}

                            <div className="absolute bottom-[3px] left-[6px] h-[2px] w-[5px] rounded-full border-b border-slate-700" />

                          </div>


                          {/* =========================================
                              BODY
                          ========================================= */}

                          <div className="absolute left-[8px] top-[24px] h-[19px] w-[23px] rounded-[5px] bg-gradient-to-b from-cyan-400 via-cyan-500 to-blue-700 shadow-[0_2px_6px_rgba(6,182,212,0.4)]">

                            {/* Collar */}

                            <div className="absolute left-[7px] top-0 h-[5px] w-[8px] rounded-b-full bg-white/30" />

                            {/* Safety stripe */}

                            <div className="absolute left-0 top-[7px] h-[2px] w-full bg-emerald-300/90" />

                            {/* Pocket */}

                            <div className="absolute right-[3px] top-[10px] h-[5px] w-[5px] rounded-sm border border-cyan-100/70" />

                          </div>


                          {/* =========================================
                              LEFT ARM
                          ========================================= */}

                          <motion.div
                            className="absolute left-[5px] top-[25px] h-[14px] w-[5px] origin-top rounded-full bg-orange-200"
                            animate={{
                              rotate: [25, -25, 25],
                            }}
                            transition={{
                              duration: 0.38,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />


                          {/* =========================================
                              RIGHT ARM
                          ========================================= */}

                          <motion.div
                            className="absolute left-[29px] top-[25px] h-[14px] w-[5px] origin-top rounded-full bg-orange-200"
                            animate={{
                              rotate: [-25, 25, -25],
                            }}
                            transition={{
                              duration: 0.38,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >

                            {/* Wrench */}

                            <motion.div
                              className="absolute -right-[8px] top-[9px]"
                              animate={{
                                rotate: [-30, 30, -30],
                              }}
                              transition={{
                                duration: 0.32,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <Wrench className="h-4 w-4 text-slate-200 drop-shadow-[0_0_5px_rgba(148,163,184,0.8)]" />
                            </motion.div>

                          </motion.div>


                          {/* =========================================
                              LEFT LEG
                          ========================================= */}

                          <motion.div
                            className="absolute left-[11px] top-[41px] h-[9px] w-[5px] origin-top rounded-full bg-blue-800"
                            animate={{
                              rotate: [28, -28, 28],
                            }}
                            transition={{
                              duration: 0.25,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="absolute -bottom-[2px] -left-[3px] h-[5px] w-[9px] rounded-[2px] bg-slate-950" />
                          </motion.div>


                          {/* =========================================
                              RIGHT LEG
                          ========================================= */}

                          <motion.div
                            className="absolute left-[22px] top-[41px] h-[9px] w-[5px] origin-top rounded-full bg-blue-800"
                            animate={{
                              rotate: [-28, 28, -28],
                            }}
                            transition={{
                              duration: 0.25,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="absolute -bottom-[2px] -left-[3px] h-[5px] w-[9px] rounded-[2px] bg-slate-950" />
                          </motion.div>

                        </motion.div>
                      </motion.div>

                    </div>
                  </div>


                  {/* =================================================
                      CLOSE BUTTON
                      ✕
                  ================================================= */}

                  <button
                    onClick={() => setIsOpen(false)}
                    className="
                      shrink-0
                      cursor-pointer
                      rounded-lg
                      bg-slate-800
                      p-2
                      text-slate-300
                      transition-colors
                      hover:bg-slate-700
                      hover:text-white
                    "
                    aria-label="Close Navigation Menu"
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>
              </div>


              {/* ===================================================
                  NAVIGATION LINKS
              =================================================== */}

              <div className="min-h-0 flex-1 overflow-y-auto">

                <nav className="space-y-3 p-4 sm:p-6">

                  {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          rounded-xl
                          border
                          border-transparent
                          px-4
                          py-3
                          font-semibold
                          text-slate-200
                          transition-all
                          duration-200
                          hover:border-cyan-500/20
                          hover:bg-cyan-500/10
                          hover:text-cyan-300
                        "
                      >

                        <div className="shrink-0 rounded-lg bg-slate-800 p-2 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-400">

                          <Icon className="h-5 w-5" />

                        </div>

                        <span className="text-sm leading-snug sm:text-base">
                          {item.label}
                        </span>

                      </Link>
                    );
                  })}

                </nav>

              </div>


              {/* ===================================================
                  FOOTER
              =================================================== */}

              <div className="shrink-0 border-t border-slate-800 bg-slate-950 px-4 py-4 text-center text-xs text-slate-400 sm:p-6 sm:text-sm">

                <p>© 2026 RO Plant Urdu</p>

                <p className="mt-1 font-sans text-[10px] text-cyan-400 sm:text-xs">
                  Pure Water Training & Technical Guide
                </p>

              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
