"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Sparkles,
  Droplets,
  Layers,
  Zap,
  Activity,
  ShieldAlert,
  GraduationCap,
  Filter,
  Flame,
  X,
  Menu,
  Info,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

export default function Class2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  // Sequence of stages for quick interaction
  const flowSteps = [
    "Raw Water Tank",
    "Raw Water Pump",
    "Sand Filter",
    "Carbon Filter",
    "Softener (اگر موجود ہو)",
    "Cartridge Filter",
    "High Pressure Pump",
    "RO Membrane",
    "Permeate Tank",
  ];

  // Stage-by-stage structured content mapping
  const stages = [
    {
      id: "1",
      title: "مرحلہ 1: Raw Water Tank",
      subtitle: "خام پانی کا ذخیرہ (Storage Tank)",
      sources: ["بور کا پانی", "میونسپل پانی", "نہر یا دریا کا پانی", "کنویں کا پانی"],
      tasks: ["پانی ذخیرہ کرنا", "پمپ کو مسلسل پانی مہیا کرنا"],
      fault: "ٹینک خالی ہو جائے تو پمپ Dry Running (بغیر پانی کے چلنا) کر سکتا ہے اور خراب ہو سکتا ہے۔",
      icon: Droplets,
      gradient: "from-blue-500 to-cyan-500",
      border: "border-cyan-200",
    },
    {
      id: "2",
      title: "مرحلہ 2: Raw Water Pump",
      subtitle: "پلانٹ کی شروعاتی طاقت",
      sources: [],
      tasks: ["پانی کو مطلوبہ رفتار سے آگے دھکیلنا"],
      fault: "پانی فلٹرز تک نہیں پہنچے گا اور پورا پلانٹ بند ہو جائے گا۔",
      icon: Zap,
      gradient: "from-cyan-500 to-teal-500",
      border: "border-teal-200",
    },
    {
      id: "3",
      title: "مرحلہ 3: Multimedia Sand Filter",
      subtitle: "پہلا فلٹریشن کا نظام",
      sources: ["Gravel (بجری)", "Sand (ریت)", "Anthracite (کوئلہ نما فلٹر میڈیا)"],
      tasks: [
        "مٹی الگ کرنا",
        "ریت اور زنگ نکالنا",
        "معلق ذرات (Suspended Solids) روکنا",
      ],
      fault: "Cartridge Filter جلدی بند ہو جائے گا اور RO Membrane خراب ہونے لگے گی۔",
      icon: Layers,
      gradient: "from-amber-500 to-orange-500",
      border: "border-amber-200",
    },
    {
      id: "4",
      title: "مرحلہ 4: Activated Carbon Filter",
      subtitle: "کیمیاوی صفائی اور کلورین کا خاتمہ",
      sources: [],
      tasks: [
        "کلورین کا خاتمہ",
        "بدبو اور رنگ دور کرنا",
        "نامیاتی مادے (Organic Matter) کم کرنا",
      ],
      fault: "Membrane جلد خراب ہو سکتی ہے اور TDS کم کرنے کی صلاحیت متاثر ہو سکتی ہے۔",
      importantNote:
        "کلورین RO Membrane کی دشمن ہوتی ہے۔ اگر کلورین ممبرین تک پہنچ جائے تو ممبرین مکمل طور پر خراب ہو سکتی ہے۔",
      icon: ShieldAlert,
      gradient: "from-slate-600 to-slate-800",
      border: "border-slate-300",
    },
    {
      id: "5",
      title: "مرحلہ 5: Water Softener (اگر موجود ہو)",
      subtitle: "سختی کم کرنے کا آلہ",
      sources: [],
      tasks: ["Calcium کم کرنا", "Magnesium کم کرنا"],
      fault:
        "ممبرین پر Scale (سفید سخت تہہ) بننا شروع ہو جائے گا (جیسے کیتلی میں سفید تہہ جم جاتی ہے)۔",
      icon: Activity,
      gradient: "from-purple-500 to-indigo-500",
      border: "border-purple-200",
    },
    {
      id: "6",
      title: "مرحلہ 6: Cartridge Filter",
      subtitle: "آخری حفاظتی فلٹر (5 یا 1 Micron)",
      sources: [],
      tasks: ["انتہائی باریک ذرات روکنا"],
      fault:
        "علامت: پریشر کم ہو جائے گا اور ہائی پریشر پمپ کو مطلوبہ پانی نہیں ملے گا۔",
      icon: Filter,
      gradient: "from-teal-500 to-emerald-500",
      border: "border-emerald-200",
    },
    {
      id: "7",
      title: "مرحلہ 7: High Pressure Pump",
      subtitle: "سب سے طاقتور پمپ (8 سے 20 بار دباؤ)",
      sources: [],
      tasks: ["پانی کو زیادہ دباؤ کے ساتھ ممبرین میں داخل کرنا"],
      fault: "ممبرین کام نہیں کرے گی اور پانی صاف نہیں ہوگا۔",
      icon: Flame,
      gradient: "from-rose-500 to-red-500",
      border: "border-rose-200",
    },
    {
      id: "8",
      title: "مرحلہ 8: RO Membrane",
      subtitle: "پلانٹ کا سب سے اہم اور مرکزی حصہ",
      sources: [],
      tasks: [
        "نمکیات (Salts) الگ کرنا",
        "بیکٹیریا اور وائرس نکالنا",
        "بھاری دھاتیں (Heavy Metals) روکنا",
        "زیادہ تر آلودگیاں خارج کرنا",
      ],
      fault: "پانی کا TDS زیادہ رہے گا اور صفائی کا عمل مکمل نہیں ہو سکے گا۔",
      outputs: [
        {
          name: "1. Permeate Water",
          type: "صاف پانی",
          desc: "یہ بالکل صاف پانی ہوتا ہے جو Product/Permeate Tank میں جاتا ہے۔",
        },
        {
          name: "2. Reject / Concentrate Water",
          type: "نمکیات والا پانی",
          desc: "اس میں زیادہ نمکیات، آلودگیاں اور اضافی معدنیات ہوتی ہیں۔ یہ Drain میں جاتا ہے یا ری سائیکل ہوتا ہے۔",
        },
      ],
      icon: Sparkles,
      gradient: "from-emerald-500 to-cyan-500",
      border: "border-emerald-200",
    },
  ];

  // Quick lookup table for failures
  const failureList = [
    { name: "Raw Water Pump", issue: "بند", impact: "پلانٹ بند" },
    { name: "Sand Filter", issue: "خراب", impact: "مٹی ممبرین تک پہنچے گی" },
    { name: "Carbon Filter", issue: "خراب", impact: "کلورین ممبرین خراب کرے گی" },
    { name: "Softener", issue: "خراب", impact: "Scale بنے گا" },
    { name: "Cartridge Filter", issue: "بند", impact: "پریشر کم ہوگا" },
    { name: "HP Pump", issue: "خراب", impact: "RO نہیں چلے گا" },
    { name: "Membrane", issue: "خراب", impact: "TDS زیادہ ہوگا" },
  ];

  // Key glossary definitions
  const termsList = [
    { term: "Raw Water", meaning: "خام پانی (غیر عمل شدہ)" },
    { term: "Feed Water", meaning: "ممبرین میں جانے والا پانی" },
    { term: "Permeate", meaning: "فلٹر شدہ صاف پانی" },
    { term: "Reject / Concentrate", meaning: "ضائع یا نمکیات والا پانی" },
    { term: "Recovery", meaning: "صاف پانی کی شرح (درصد)" },
    { term: "TDS", meaning: "گھلے ہوئے کل نمکیات (Total Dissolved Solids)" },
  ];

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-cyan-500 selection:text-white"
      dir="rtl"
    >
      {/* Sticky Header Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center text-white shadow-md">
                <Droplets className="w-6 h-6 animate-pulse" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                آر او واٹر گائیڈ
              </span>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#hero"
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                مرکزی صفحہ
              </a>
              <a
                href="#flow"
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                پانی کا فلو
              </a>
              <a
                href="#stages"
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                تفصیلی مراحل
              </a>
              <a
                href="#failures"
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                خرابیوں کا جدول
              </a>
              <a
                href="#homework"
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                ہوم ورک
              </a>
            </div>

            {/* Mobile Hamburger Menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden px-4 pt-2 pb-4 space-y-3"
            >
              <a
                href="#hero"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-cyan-600 py-1"
              >
                مرکزی صفحہ
              </a>
              <a
                href="#flow"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-cyan-600 py-1"
              >
                پانی کا فلو
              </a>
              <a
                href="#stages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-cyan-600 py-1"
              >
                تفصیلی مراحل
              </a>
              <a
                href="#failures"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-cyan-600 py-1"
              >
                خرابیوں کا جدول
              </a>
              <a
                href="#homework"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-cyan-600 py-1"
              >
                ہوم ورک
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <article className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-right">
        {/* Hero Section */}
        <motion.div
          id="hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-72 h-72 bg-white/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-100" />
              <span>آر او واٹر ٹیکنالوجی نصاب</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tight leading-tight">
              سبق نمبر 2
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              خام پانی (Raw Water) سے صاف پانی (Permeate) تک پانی کا پورا سفر
            </h2>
          </div>
        </motion.div>

        {/* Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-r-4 border-cyan-500 rounded-2xl p-6 sm:p-8 mb-12 shadow-xs border border-slate-200"
        >
          <p className="text-lg sm:text-xl font-bold text-slate-700 leading-relaxed">
            آج ہم یہ سیکھیں گے کہ پانی RO پلانٹ میں کس راستے سے گزرتا ہے، ہر آلہ
            کیا کام کرتا ہے، اور اگر کوئی آلہ خراب ہو جائے تو کیا مسئلہ پیدا ہوتا
            ہے۔
          </p>
        </motion.div>

        {/* Dynamic Water Flow Banner */}
        <motion.section
          id="flow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-700 via-sky-700 to-emerald-700 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-16 text-right relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Sparkles className="w-7 h-7 text-amber-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              پانی کا مکمل فلو (Water Flow Diagram)
            </h2>
          </div>

          <p className="text-lg font-bold text-cyan-100 mb-6">
            پانی کے سفر کو مرحلہ وار دیکھنے کے لیے کارڈز پر کلک کریں:
          </p>

          {/* Interactive Flow Bar */}
          <div className="flex flex-wrap items-center justify-start gap-3 mb-8">
            {flowSteps.map((step, idx) => {
              const isActive = activeStage === idx;
              return (
                <React.Fragment key={step}>
                  <motion.button
                    onClick={() => setActiveStage(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-3 rounded-xl font-extrabold text-sm sm:text-base border transition-all cursor-pointer shadow-xs ${
                      isActive
                        ? "bg-amber-400 text-slate-900 border-amber-300 shadow-md scale-105"
                        : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {step}
                  </motion.button>
                  {idx < flowSteps.length - 1 && (
                    <ArrowLeft className="w-4 h-4 text-cyan-200 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Highlight Info */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                منتخب کردہ مرحلہ ({activeStage + 1} از {flowSteps.length})
              </span>
              <span className="text-amber-300 font-bold text-sm">
                {flowSteps[activeStage]}
              </span>
            </div>
          </div>

          {/* Membrane Dual Output Split Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-extrabold mb-3 text-amber-300">
              RO ممبرین سے دو قسم کا پانی نکلتا ہے:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-extrabold text-emerald-300 block mb-1 text-base">
                  1۔ Permeate Water (صاف پانی)
                </span>
                <p className="text-sm text-cyan-50 font-medium">
                  یہ صاف ستھرا پانی ہوتا ہے جو Product Tank میں جمع ہوتا ہے۔
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-extrabold text-rose-300 block mb-1 text-base">
                  2۔ Reject / Concentrate Water (نمکیات والا پانی)
                </span>
                <p className="text-sm text-cyan-50 font-medium">
                  اس میں آلودگیاں اور اضافی نمکیات ہوتے ہیں جو ڈرین کیے جاتے
                  ہیں۔
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Detailed Stages List */}
        <section id="stages" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-right mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              تفصیلی مراحل، فلٹریشن کا عمل اور خرابی کا اثر
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full mt-3" />
          </motion.div>

          <div className="space-y-8">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border ${stage.border} shadow-xs relative overflow-hidden`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center text-white shadow-md shrink-0`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {stage.title}
                        </h3>
                        <span className="text-sm font-extrabold text-cyan-600">
                          {stage.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Water Sources list */}
                  {stage.sources.length > 0 && (
                    <div className="mb-5 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                      <span className="text-sm font-bold text-cyan-800 block mb-2">
                        پانی کا ذریعہ / میڈیا:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.sources.map((src, i) => (
                          <span
                            key={i}
                            className="bg-white px-3 py-1 rounded-lg border border-slate-200 text-slate-700 text-sm font-bold shadow-2xs"
                          >
                            • {src}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Operational Tasks */}
                  <div className="mb-5">
                    <span className="text-sm font-bold text-cyan-800 block mb-3">
                      بنیادی کام / فلٹریشن:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {stage.tasks.map((task, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-cyan-50/60 px-4 py-3 rounded-xl border border-cyan-100 text-slate-800 font-bold text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Technical Note */}
                  {stage.importantNote && (
                    <div className="mb-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                      <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-amber-900 text-sm font-bold leading-relaxed">
                        {stage.importantNote}
                      </p>
                    </div>
                  )}

                  {/* Output details for Membrane */}
                  {stage.outputs && (
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {stage.outputs.map((out, i) => (
                        <div
                          key={i}
                          className="bg-slate-50 p-4 rounded-2xl border border-slate-200"
                        >
                          <span className="text-cyan-800 font-extrabold block text-base">
                            {out.name} ({out.type})
                          </span>
                          <p className="text-slate-600 font-medium text-sm mt-1">
                            {out.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Failure Warning Box */}
                  <div className="bg-rose-50 border border-rose-200/80 rounded-2xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black text-rose-700 uppercase tracking-wide block">
                        اگر خرابی ہو تو:
                      </span>
                      <p className="text-rose-950 font-bold text-base leading-snug mt-0.5">
                        {stage.fault}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Practical Example Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 mb-16 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-7 h-7 text-amber-300" />
            <h3 className="text-2xl font-black">ایک عملی مثال (Recovery Rate)</h3>
          </div>
          <p className="text-lg font-bold leading-relaxed">
            فرض کریں: خام پانی ={" "}
            <span className="underline decoration-amber-300 font-extrabold">
              100 لیٹر
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20">
              <span className="block text-amber-200 text-sm font-bold">
                RO ممبرین سے حاصل شدہ صاف پانی:
              </span>
              <span className="text-2xl font-black">50 لیٹر Permeate Water</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20">
              <span className="block text-rose-200 text-sm font-bold">
                ضائع شدہ نمکیات والا پانی:
              </span>
              <span className="text-2xl font-black">50 لیٹر Reject Water</span>
            </div>
          </div>
          <p className="text-sm font-medium text-emerald-100 mt-4">
            پانی کی اس شرح اور فیصدی مقدار کو **Recovery** کہا جاتا ہے۔
          </p>
        </motion.section>

        {/* Failure Summary Table */}
        <section id="failures" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              خرابیوں کی مختصر فہرست (Quick Troubleshooting)
            </h3>
            <p className="text-slate-600 font-medium text-base">
              آلات کی خرابی اور اس کے فوراً پڑنے والے اثرات کا جدول:
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="py-4 px-6 font-black text-base">آلہ</th>
                    <th className="py-4 px-6 font-black text-base">خرابی</th>
                    <th className="py-4 px-6 font-black text-base">اثر</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                  {failureList.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="py-3.5 px-6 text-cyan-800 font-sans">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-6 text-rose-600">{row.issue}</td>
                      <td className="py-3.5 px-6 text-slate-800">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Glossary Terms Table */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              اہم اصطلاحات (Terms)
            </h3>
            <p className="text-slate-600 font-medium text-base">
              RO پلانٹ آپریٹنگ میں استعمال ہونے والے بنیادی الفاظ:
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="py-4 px-6 font-black text-base">
                      لفظ (English Term)
                    </th>
                    <th className="py-4 px-6 font-black text-base">
                      مطلب (Urdu Meaning)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                  {termsList.map((t, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="py-3.5 px-6 text-cyan-800 font-sans tracking-wide">
                        {t.term}
                      </td>
                      <td className="py-3.5 px-6 text-slate-800">{t.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Homework Box */}
        <motion.section
          id="homework"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                آج کا ہوم ورک
              </h2>
              <p className="text-slate-600 font-medium text-sm">
                یہ فلو زبانی یاد کریں اور ذہن نشین کریں:
              </p>
            </div>
          </div>

          <div className="bg-cyan-50/50 rounded-2xl p-6 border border-cyan-100 shadow-2xs">
            <p className="text-cyan-900 font-sans font-black text-base sm:text-lg text-center leading-relaxed dir-ltr">
              Raw Water Tank → Pump → Sand Filter → Carbon Filter → Softener →
              Cartridge Filter → High Pressure Pump → RO Membrane → Permeate Tank
            </p>
          </div>
        </motion.section>
      </article>
    </div>
  );
}