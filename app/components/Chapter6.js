"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Droplets,
  ShieldCheck,
  Activity,
  Layers,
  GraduationCap,
  Gauge,
} from "lucide-react";

export default function Chapter6() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imagesList = [
    "https://images.openai.com/static-rsc-4/BnnjJV7dcFUek5FgG_Ug4EiXfiX3F5B1sXI7TrkQIAG8wkSjceKcXebFH1q4MS-5E6FvpuSSfyf_b6Ki56hmaAXMObIN20MPOMpZJxflPd7vvdd9hOWaBSEIblonAjFdllUHy5m1AMI3bNb7Dc-bfk1uZxqDqQZjxjk5ZN56Ry3v2HrYaahsne74PFaWqOW3?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/A_pqvo0ZyqcLFZIAkQmuEy8l8y-5-IudHsgeHVKIIBbNVig3gNq9Z2v9fusSVdoUXzehMr0mF88MLhf-XNAgCTn07QYjDMQdEDuX0UCF5HysiMBjrbiWCkcdqJF_PAd_--PXjpxchgHNGa1wAuJxdhExCqeljeb2aJFRa_R2DaDkNoPGeBqMYnnqM3nwwBh4?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/FcRIrrq2HktgNUbLhQFcWvbJJq8iCDvtSxEUe3oXjX69U5A94PoMPMA-vXAbfDuWbGkXXMS83-BB51Y5YnoPn7A2psNm3G6YS4deGMIBtQiXPl-CiOZKQ0IYi5XubsxigwcDvw4Dr2RNq5XhFkv9LKCHt1D9USrb610O5IAlDOh1e-R7Acp3Go8w9KQ1I3oW?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/baanwghl4Dx0MhehuQVps3oonZA2KPkPtN4PfMyj9MyhR26mkeC3tkrQrabMlK0EOhaL7gun6e0u3i_nzl6cMjihV2CM3_y_lRFcRecT0KTGyCN_U3CCuxYBCDP09rk2TUJu0Lu_YCXxRbNYxuXZMZDXXIiUoDQ_8PhWBYkR8bMu63KxMXTpry1Q6hsMpwxH?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/OiNuEE2pxSvQcX8XGSrWM4Gdj4z6q-4vgCiQwem1iT0oWTo8aN8q5tR3W2kR2l98oI6uA_hnf7q8NFOuM_2cGqxdhxKcLE62hCPRpqN7eABvLgMHuFuYoImhLW-DbexdTAci622r9E753YngERPXOcET0V_MuQIK-wqdltn3oGB0Xnz6xDT9t0PG5_yZfAXv?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/rUmj_E9absrzdQDXu_CfjfuMQUkIvCWXB3meAP-eaO60hvy50xXpIfm1lp9YGW7iO-_WJ2YY5KNA74NXtg4X9G-ZKsjrO_1jB-y_Dgr93TV3wge657GKGS4hwZ-brBYIu4-h-803Kl73Dck7NQjCOFGPRuIuwZMsVk7rOX8n6nb5uFO_xPmZxInx97WGEUf1?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/Bl6rPsDvkMTaBF-1qpn_JhT79EgYQ1D3SyRkuyjPsQkWAsOqdOp6K7EB4BXT8s75MtLA8SN7OIvP8kXD7nkW_R90sFb0xl-DVaH_NivwyVL_jgVhRqoY2pLaq4k0UTgPZZ0m9xCo0RbIRWrPd27Pqsds8I2KuvSoNP9umJsj3aFyK2DXfN4Rb6zatLYarx_1?purpose=fullsize",
  ];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + imagesList.length) % imagesList.length,
    );
  };

  const termsTable = [
    { term: "Feed Water", meaning: "ممبرین میں داخل ہونے والا پانی" },
    { term: "Permeate", meaning: "صاف پانی" },
    { term: "Reject / Concentrate", meaning: "نمکیات والا ضائع پانی" },
    { term: "Recovery", meaning: "صاف پانی کی پیداوار کا فیصد" },
    { term: "Rejection", meaning: "نمکیات روکنے کی صلاحیت" },
    { term: "Flux", meaning: "ممبرین کی پیداواری رفتار" },
    { term: "Pressure Vessel", meaning: "ممبرین رکھنے کا مضبوط سلنڈر" },
    { term: "Spiral Wound", meaning: "لپٹی ہوئی ممبرین کا ڈیزائن" },
  ];

  const interviewQAs = [
    {
      q: "سوال 1: RO Membrane کا بنیادی کام کیا ہے؟",
      a: "پانی کے سالمات کو گزرنے دینا اور زیادہ تر نمکیات، بیکٹیریا، وائرس اور دیگر آلودگیوں کو روکنا۔",
    },
    {
      q: "سوال 2: Permeate اور Reject میں کیا فرق ہے؟",
      a: "Permeate صاف پانی ہوتا ہے، جبکہ Reject یا Concentrate وہ پانی ہوتا ہے جس میں زیادہ تر نمکیات اور آلودگیاں رہ جاتی ہیں۔",
    },
    {
      q: "سوال 3: Recovery زیادہ کرنے کا نقصان کیا ہے؟",
      a: "Recovery بہت زیادہ ہونے سے Membrane پر Scaling کا خطرہ بڑھ جاتا ہے، جس سے اس کی کارکردگی اور عمر کم ہو سکتی ہے۔",
    },
    {
      q: "سوال 4: اگر Product Water کا TDS اچانک بڑھ جائے تو سب سے پہلے کس چیز پر شک کریں گے؟",
      a: "سب سے پہلے RO Membrane کی حالت، پھر Carbon Filter (کلورین کے اخراج کے لیے)، اس کے بعد High Pressure Pump اور آپریٹنگ پریشر کی جانچ کریں گے۔",
    },
  ];

  const plantProtections = [
    { name: "Sand Filter", role: "مٹی روکتا ہے۔" },
    { name: "Carbon Filter", role: "کلورین روکتا ہے۔" },
    { name: "Softener", role: "سختی (Hardness) کم کرتا ہے۔" },
    { name: "Cartridge Filter", role: "باریک ذرات روکتا ہے۔" },
    { name: "Chemical Dosing System", role: "اسکیل بننے سے بچاتا ہے۔" },
    { name: "High Pressure Pump", role: "مطلوبہ دباؤ فراہم کرتا ہے۔" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <article
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-right"
        dir="rtl"
      >
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl -z-0"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-100" />
              <span> آر او واٹر ٹیکنالوجی نصاب </span>
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold mb-4 leading-tight">
              سبق نمبر 6
            </h2>
            <h1 className="text-4xl sm:text-4xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              RO Membrane کی اندرونی ساخت، Housing، Spiral Wound، Permeate،
              Reject، Recovery، Rejection اور Flux
            </h1>
          </div>
        </motion.div>

        {/* Highlight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-r-4 border-cyan-500 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm border border-slate-200"
        >
          <p className="text-lg sm:text-xl font-bold text-slate-700 leading-relaxed">
            <span className="text-cyan-600 font-sans font-extrabold">
              یہ پورے RO پلانٹ کا سب سے اہم سبق ہے۔
            </span>{" "}
            اگر آپ نے صرف یہ سبق اچھی طرح سمجھ لیا تو RO پلانٹ کا بنیادی اصول آپ
            کو ہمیشہ یاد رہے گا۔
          </p>
        </motion.div>

        {/* Section 1: Membrane & Images Carousel / Collage */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <Droplets className="w-8 h-8 text-cyan-600" />
            <span>1۔ RO Membrane کیا ہے؟</span>
          </h2>

          {/* Images Gallery Section */}
          <div className="mb-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              تصاویری گیلری
            </h3>

            {/* Desktop View Carousel */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group hidden sm:block">
              <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={imagesList[activeImageIndex]}
                    alt="RO Membrane Structure"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm shadow-lg z-10"
                  aria-label="Previous Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm shadow-lg z-10"
                  aria-label="Next Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider">
                  {activeImageIndex + 1} / {imagesList.length}
                </div>
              </div>
            </div>

            {/* Mobile View Collage (16:9 Grid) */}
            <div className="block sm:hidden">
              <span className="text-xs font-bold text-slate-500 block mb-3 uppercase tracking-wide">
                موبائل ویو - تصاویر کا کولاج (16:9)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {imagesList.map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100"
                  >
                    <img
                      src={imgUrl}
                      alt={`Collage ${imgIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              RO Membrane ایک{" "}
              <strong className="text-cyan-700">
                انتہائی باریک نیم نفوذ پذیر جھلی (Semi-Permeable Membrane)
              </strong>{" "}
              ہے۔
            </p>
            <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
              <h4 className="font-bold text-cyan-900 mb-1">
                Semi-Permeable کا مطلب ہے:
              </h4>
              <p className="text-slate-700 font-medium">
                یہ صرف پانی کے سالمات (Water Molecules) کو گزرنے دیتی ہے جبکہ
                زیادہ تر نمکیات، بیکٹیریا، وائرس اور دیگر آلودگیوں کو روک دیتی
                ہے۔
              </p>
            </div>
            <p className="text-slate-800 font-bold text-base">
              یہ پورے RO پلانٹ کا{" "}
              <span className="text-cyan-600">دل (Heart)</span> ہے۔
            </p>
          </div>
        </section>

        {/* Section 2: Semi-Permeable Principle */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            2۔ Semi-Permeable Membrane کیا ہوتی ہے؟
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              فرض کریں آپ کے پاس ایک باریک جالی ہے۔ اگر اس جالی کے سوراخ بہت
              چھوٹے ہوں تو پانی گزر جائے گا اور مٹی رک جائے گی۔
            </p>
            <p className="text-lg text-slate-700 font-medium">
              اب تصور کریں کہ اس جالی کے سوراخ اس سے بھی ہزاروں گنا چھوٹے ہوں،
              تب:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 flex items-center gap-3 font-bold text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>صرف پانی کے سالمات گزر سکتے ہیں۔</span>
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100 flex items-center gap-3 font-bold text-rose-900">
                <span>❌ نمکیات، بیکٹیریا اور وائرس رک جاتے ہیں۔</span>
              </div>
            </div>
            <p className="text-slate-700 font-medium pt-2">
              یہی RO Membrane کا بنیادی اصول ہے۔
            </p>
          </div>
        </section>

        {/* Section 3: Material */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            3۔ RO Membrane کس چیز سے بنتی ہے؟
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <p className="text-lg text-slate-700 font-medium">
              زیادہ تر جدید RO Membrane درج ذیل مٹیریل سے بنتی ہے:
            </p>
            <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-cyan-900 font-bold text-lg">
              Thin Film Composite (TFC)
            </div>
            <p className="text-slate-700 font-medium">
              اس کی کئی باریک تہیں (Layers) ہوتی ہیں۔ انہی تہوں کی وجہ سے یہ
              نمکیات کو روکنے کی اعلیٰ صلاحیت رکھتی ہے۔
            </p>
          </div>
        </section>

        {/* Section 4: Spiral Wound Membrane */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            4۔ Spiral Wound Membrane کیا ہے؟
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              سب سے زیادہ استعمال ہونے والی RO Membrane کو{" "}
              <strong className="text-cyan-700">Spiral Wound Membrane</strong>{" "}
              کہتے ہیں۔ اس میں کئی باریک جھلیاں اور اسپیسر شیٹس ایک دوسرے کے
              اوپر رکھی جاتی ہیں، پھر انہیں رول کی طرح لپیٹ دیا جاتا ہے۔ اسی لیے
              اسے Spiral Wound کہتے ہیں۔
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">
                اس ڈیزائن کے فائدے:
              </h4>
              <ul className="list-disc list-inside text-slate-700 font-bold space-y-1">
                <li>زیادہ فلٹریشن ایریا</li>
                <li>کم جگہ میں زیادہ پیداوار</li>
                <li>آسانی سے تبدیل کی جا سکتی ہے</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Membrane Housing */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            5۔ Membrane Housing (Pressure Vessel)
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              یہ ایک مضبوط سلنڈر نما (Cylinder-shaped) برتن ہوتا ہے۔ اسی کے اندر
              RO Membrane نصب کی جاتی ہے۔
            </p>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-1">
                یہ کیوں ضروری ہے؟
              </h4>
              <p className="text-slate-700 font-medium">
                High Pressure Pump پانی کو زیادہ دباؤ سے بھیجتا ہے۔ اگر Membrane
                کو مضبوط Housing میں نہ رکھا جائے تو وہ پھٹ سکتی ہے۔
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">عام مٹیریل:</h4>
              <ul className="list-disc list-inside text-slate-700 font-medium space-y-1">
                <li>FRP (Fiber Reinforced Plastic)</li>
                <li>Stainless Steel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: How it works & Permeate / Reject */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            6۔ RO Membrane کیسے کام کرتی ہے؟
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2 text-slate-700 font-medium">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                💧 پانی High Pressure Pump سے آتا ہے۔
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                ⬇️ Pressure Vessel میں داخل ہوتا ہے۔
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                ⬇️ Membrane تک پہنچتا ہے۔
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                ⬇️ پریشر کی وجہ سے پانی کے سالمات Membrane سے گزر جاتے ہیں اور
                آلودگیاں دوسری طرف رہ جاتی ہیں۔
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-cyan-50/60 p-5 rounded-2xl border border-cyan-100 space-y-3">
                <h3 className="text-xl font-extrabold text-cyan-900">
                  (A) Permeate
                </h3>
                <p className="text-cyan-950 font-medium">
                  یہ صاف پانی ہے۔ اس میں کم TDS، کم نمکیات اور صاف ذائقہ ہوتا
                  ہے۔ یہ Product Water Tank میں جاتا ہے۔
                </p>
              </div>
              <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100 space-y-3">
                <h3 className="text-xl font-extrabold text-rose-900">
                  (B) Reject یا Concentrate
                </h3>
                <p className="text-rose-950 font-medium">
                  یہ وہ پانی ہے جس میں زیادہ نمکیات، زیادہ TDS اور آلودگیاں جمع
                  ہو جاتی ہیں۔ یہ Drain میں جاتا ہے یا دوبارہ استعمال ہوتا ہے۔
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 & 8: Feed Water & Recovery */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              7۔ Feed Water کیا ہوتا ہے؟
            </h2>
            <p className="text-slate-700 font-medium">
              وہ پانی جو Membrane میں داخل ہو رہا ہوتا ہے اسے Feed Water کہتے
              ہیں۔
            </p>
            <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100 font-bold text-cyan-900 text-center">
              Feed Water = Permeate + Reject
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              8۔ Recovery کیا ہے؟
            </h2>
            <p className="text-slate-700 font-medium">
              Feed Water میں سے کتنے فیصد پانی صاف پانی (Permeate) میں تبدیل
              ہوا۔
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800 text-sm">
              فارمولا: Recovery (%) = (Permeate Flow ÷ Feed Flow) × 100
            </div>
            <div className="text-xs font-bold text-slate-600 space-y-1">
              <div>❌ بہت زیادہ Recovery (مثلاً 90%): Scale کا خطرہ۔</div>
              <div>✔ بہت کم Recovery (مثلاً 25%): پانی زیادہ ضائع ہوگا۔</div>
            </div>
          </div>
        </section>

        {/* Section 9 & 10: Rejection & Flux */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              9۔ Rejection کیا ہے؟
            </h2>
            <p className="text-slate-700 font-medium">
              Membrane نے کتنے فیصد نمکیات (Salts) کو روکا۔
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800 text-sm">
              فارمولا: Rejection (%) = [(Feed TDS − Permeate TDS) ÷ Feed TDS] ×
              100
            </div>
            <p className="text-cyan-700 font-bold text-sm">
              اچھی Membrane عام طور پر 95% سے 99% Rejection دیتی ہے۔
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              10۔ Flux کیا ہے؟
            </h2>
            <p className="text-slate-700 font-medium">
              ایک مخصوص وقت میں Membrane کے ایک مربع میٹر رقبے سے گزرنے والے صاف
              پانی کی مقدار۔ اکائی:{" "}
              <strong className="text-cyan-700">LMH</strong> (Liters per Square
              Meter per Hour)
            </p>
            <div className="text-sm font-bold text-slate-700 space-y-1">
              <div>
                📈 زیادہ Flux: زیادہ پانی لیکن ممبرین جلد خراب ہو سکتی ہے۔
              </div>
              <div>
                📉 کم Flux: ممبرین زیادہ دیر چلے گی لیکن پیداوار کم ہوگی۔
              </div>
            </div>
          </div>
        </section>

        {/* Section 11 & 12: Damage Causes & Symptoms */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">
              11۔ RO Membrane خراب کیوں ہوتی ہے؟
            </h2>
            <ul className="list-disc list-inside text-slate-700 font-bold space-y-1">
              <li>Scaling (کیلشیم اور میگنیشیم کی تہہ)</li>
              <li>Fouling (مٹی، کائی یا نامیاتی مادے)</li>
              <li>Chlorine Damage (کلورین کی موجودگی)</li>
              <li>High Pressure (ضرورت سے زیادہ دباؤ)</li>
              <li>Biofouling (بیکٹیریا اور جراثیم)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">
              12۔ Membrane خراب ہونے کی علامات
            </h2>
            <ul className="list-disc list-inside text-slate-700 font-bold space-y-1">
              <li>Product Water کا TDS بڑھ جانا</li>
              <li>Permeate Flow کم ہو جانا</li>
              <li>Pressure بڑھ جانا</li>
              <li>Reject Water زیادہ نکلना</li>
              <li>پانی کی پیداوار کم ہو جانا</li>
            </ul>
          </div>
        </section>

        {/* Process Flow Summary Box */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-14 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-cyan-400">
            پورے عمل کا خلاصہ
          </h2>
          <div className="max-w-md mx-auto space-y-3 text-lg font-bold">
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              Feed Water
            </div>
            <div>⬇️</div>
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              High Pressure Pump
            </div>
            <div>⬇️</div>
            <div className="bg-cyan-900/60 p-3 rounded-xl border border-cyan-700 text-cyan-300">
              RO Membrane
            </div>
            <div className="flex justify-around pt-2">
              <span>↙️</span>
              <span>↘️</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700 text-emerald-300 text-sm">
                Permeate (صاف پانی)
              </div>
              <div className="bg-rose-900/60 p-3 rounded-xl border border-rose-700 text-rose-300 text-sm">
                Reject (نمکیات والا پانی)
              </div>
            </div>
          </div>
        </motion.section>

        {/* Terms Table */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            اہم اصطلاحات
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-cyan-50 text-cyan-900 border-b border-cyan-200">
                  <th className="p-3 font-bold">اصطلاح</th>
                  <th className="p-3 font-bold">مطلب</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {termsTable.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-bold text-cyan-700">{item.term}</td>
                    <td className="p-3">{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Interview Q&A Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                انٹرویو سوالات
              </h2>
              <p className="text-slate-600 font-medium text-sm">
                آپریشنل مہارت کے لیے اہم سوالات۔
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {interviewQAs.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-sans font-bold flex items-center justify-center text-sm border border-emerald-200">
                    {idx + 1}
                  </span>
                  <span>{item.q}</span>
                </h4>
                <p className="text-slate-700 font-medium text-lg leading-relaxed pr-9">
                  <strong className="text-emerald-600">جواب:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Master's Advice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cyan-50 border-r-4 border-cyan-600 rounded-2xl p-6 sm:p-8 shadow-sm border border-cyan-100 space-y-4"
        >
          <h3 className="text-xl font-extrabold text-cyan-900">
            استاد کی اہم نصیحت
          </h3>
          <p className="text-cyan-950 font-medium text-lg leading-relaxed">
            RO پلانٹ میں ہر چیز آخرکار{" "}
            <strong className="text-cyan-700">RO Membrane کی حفاظت</strong> کے
            لیے ہوتی ہے۔
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {plantProtections.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 p-3 rounded-xl border border-cyan-200 font-bold text-slate-800 text-sm shadow-xs"
              >
                <span className="text-cyan-700">{item.name}:</span> {item.role}
              </div>
            ))}
          </div>
          <p className="text-cyan-950 font-medium text-lg leading-relaxed pt-2">
            یعنی پورا RO پلانٹ مل کر صرف ایک مقصد حاصل کرتا ہے:{" "}
            <strong className="text-cyan-700">
              RO Membrane کو محفوظ رکھنا اور اسے بہترین کارکردگی کے ساتھ صاف
              پانی بنانے کے قابل رکھنا۔
            </strong>
          </p>
        </motion.div>
      </article>
    </div>
  );
}
