"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  ShieldAlert,
  Sliders,
  Gauge,
  Activity,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function Chapter7() {
  // Image gallery state for the section containing images
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imagesList = [
    "https://images.openai.com/static-rsc-4/zwIXLrmw3uQUw8yi6nilZ5gKPoot027HFWPIGR-9XoEghCYNXZ5TgsqAuBWBQWoaxvngXVfnNoqKz9zhwWx_by-RryMkTSQiaaJQCGCOvRQ_B2auIB4Ja1wVT1KyoGcWofUkKY_lXdbr9WVRfPonRu7IZhIjMIcPHtcxFjeC4d-0VLIAnXMnM5SKAt_P-HbL?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/7jI43R6bBShj16cgLlysd8hsBmQ02wcqFptdvyIPL-_l02a2IQTG6KPQAxTwi43jCPUMS4qA6tH9A3XfKIt367ly_32Ivs97q232zGydmM1b-wPjnX4yUV4gMX-Jy_Vw6pAbc_sde5_xEKP_gfK5YtcrKWKYwIUdq6-mNPzHZBX7F2xrqQXtgkVtYwtg4fqB?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/CKSZ4D0yxz_ZZxhOdZ-0mK6_bwcWduL5VqiFRWEya43KzG4-4NL7fca7setnRynjeV66Mxzw4hPFxYD8DkduJtGr3IH-GrG_vMHGGKrEd_uqqCqXJOmmQ9h33QPpFDBrQUG-Eh2496GZm8PTgVg_d5_u0g_as-TZhGCzh7cjAkz787MuwpdSi6fxrGbqTFQo?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/AhFNLRRw8vDEgtI3DUOSap_9I8O24VP_0KwOM-d4b0gjJbVaeIAMigyybeRK8A92aN1me_2DYddZfXDfHYtIMLLc1ifINEykONmMd2_imEiU2oOvMM3xjO7WfQldU7Fx7Jh2O3jB_T054XhQR7e_W0aaE9EW_HybLAwpSy3h7OcUJ8VBpAireNtm7iVPL-uI?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/sj4tybXjl8pH16DH1NVXtd2dOsMoVuNdj7sBOonzlfOsxBqxG3LemQ0kdUHeuUT9O4UgrWsYovMj60giY2Haul0GuX8VWW9Nd2xMDTassWt_Op8n5FSKvyP4oya6GxMpb5N_-urMbHIoO4dOP6rt0gTrK45RizYdXdagchIHRfhEafpkY_XX0Hwepefy85fN?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/HwMj2JfiXN2J0rtpOtHfZ6lMQY0n95_P58qvd7OJCh3H0fW3EWQOE4fp50zqVO684dz7WhkzNfwvaOMJQpVPB9vSRlbsjY2tuuV67nBJW5envrOUZmjRTU6MqwW2Yzd8YK4JLTnJ7T0k5h1SPpUVj50cdXjK_htaE4SDyBwGa9pbhAKWsAg0Gn8xt2Qc99J8?purpose=fullsize",
  ];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + imagesList.length) % imagesList.length,
    );
  };

  const systemParts = [
    "Chemical Tank",
    "Dosing Pump (Metering Pump)",
    "Suction Line",
    "Foot Valve",
    "Injection Valve",
    "Non-Return Valve (NRV)",
    "Calibration Column (بڑے پلانٹس میں)",
  ];

  const chemicalsTable = [
    { chemical: "Antiscalant", use: "Scale روکنا" },
    { chemical: "SMBS", use: "Chlorine ختم کرنا" },
    { chemical: "Hydrochloric Acid", use: "pH کم کرنا" },
    { chemical: "Sulfuric Acid", use: "pH کم کرنا" },
    { chemical: "Sodium Hydroxide", use: "pH بڑھانا" },
    { chemical: "Citric Acid", use: "CIP Cleaning (معدنی اسکیل ہٹانے کے لیے)" },
    { chemical: "Sodium Hydroxide (CIP)", use: "نامیاتی آلودگی ہٹانے کے لیے" },
  ];

  const issuesTable = [
    { issue: "Dosing Pump بند", result: "کیمیکل شامل نہیں ہوگا" },
    { issue: "Antiscalant ختم", result: "Membrane پر Scale بنے گا" },
    { issue: "SMBS ختم", result: "Chlorine Membrane کو نقصان پہنچا سکتی ہے" },
    { issue: "Acid زیادہ", result: "pH بہت کم ہو جائے گا" },
    { issue: "Caustic زیادہ", result: "pH بہت زیادہ ہو جائے گا" },
    { issue: "انجیکشن لائن بند", result: "کیمیکل پانی میں شامل نہیں ہوگا" },
  ];

  const dailyChecks = [
    "Chemical Tank کا لیول",
    "Dosing Pump چل रही ہے یا نہیں",
    "Injection Point بند تو نہیں",
    "pH",
    "ORP (اگر موجود ہو)",
    "Chemical Leakage",
    "Dosing Pump کی آواز اور اسٹروک",
  ];

  const interviewQAs = [
    {
      q: "سوال 1: Antiscalant کا بنیادی کام کیا ہے؟",
      a: "ممبرین پر معدنی اسکیل (Scale) بننے سے روکنا۔",
    },
    {
      q: "سوال 2: SMBS کیوں استعمال کیا جاتا ہے؟",
      a: "پانی میں موجود باقی ماندہ کلورین کو ختم کرنے کے لیے تاکہ RO Membrane محفوظ رہے۔",
    },
    {
      q: "سوال 3: اگر Dosing Pump بند ہو جائے تو سب سے پہلے کیا مسئلہ پیدا ہو سکتا ہے؟",
      a: "استعمال ہونے والے کیمیکل کے مطابق مسئلہ پیدا ہوگا۔ مثال کے طور پر Antiscalant بند ہونے پر Scaling شروع ہو سکتی ہے، جبکہ SMBS بند ہونے پر کلورین ممبرین کو نقصان پہنچا سکتی ہے۔",
    },
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

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-100" />
              <span>سبق نمبر 7</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white mb-12">
              Chemical Dosing System
            </h1>

            <h2 className="max-w-3xl text-xl sm:text-3xl font-bold text-cyan-50 leading-relaxed">
              کیمیکل ڈوزنگ سسٹم
            </h2>
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
          <p className="text-lg sm:text-xl font-bold text-slate-700 leading-loose">
            <span className="text-cyan-600 font-sans font-extrabold">
              یہ سبق صنعتی (Industrial) RO پلانٹس کا سب سے اہم سبق ہے۔
            </span>{" "}
            بہت سے لوگ سمجھتے ہیں کہ RO پلانٹ صرف فلٹر اور ممبرین سے چلتا ہے،
            لیکن حقیقت یہ ہے کہ اگر کیمیکل ڈوزنگ درست نہ ہو تو مہنگی RO ممبرین
            چند ہی مہینوں میں خراب ہو سکتی ہے۔
          </p>
        </motion.div>

        {/* Section 1 */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <FlaskConical className="w-8 h-8 text-cyan-600" />
            <span>1۔ Chemical Dosing System کیا ہے؟</span>
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 font-medium mb-6 leading-relaxed">
              کیمیکل ڈوزنگ سسٹم ایسا نظام ہے جو پانی میں{" "}
              <strong className="text-cyan-700">
                مخصوص مقدار (Accurate Quantity)
              </strong>{" "}
              میں کیمیکل شامل کرتا ہے تاکہ:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "RO Membrane محفوظ رہے۔",
                "اسکیل (Scale) نہ بنے۔",
                "کلورین ختم ہو جائے۔",
                "pH مطلوبہ حد میں رہے۔",
                "جراثیم کی افزائش کم ہو۔",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-cyan-50/60 px-4 py-3 rounded-xl border border-cyan-100 text-slate-700 font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Parts & Images Carousel / Collage */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-cyan-600" />
            <span>2۔ Chemical Dosing System کے حصے</span>
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
                    alt="Chemical Dosing System"
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

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 font-medium mb-4">
              ایک مکمل ڈوزنگ سسٹم میں عموماً یہ حصے ہوتے ہیں:
            </p>
            <div className="space-y-3">
              {systemParts.map((part, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200"
                >
                  <span className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 font-sans font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-800 text-base">
                    {part}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Chemical Tank */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            3۔ Chemical Tank
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              یہ وہ ٹینک ہے جس میں کیمیکل محلول (Chemical Solution) تیار کیا
              جاتا ہے۔
            </p>
            <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
              <h4 className="font-bold text-cyan-900 mb-2">عام مٹیریل:</h4>
              <ul className="list-disc list-inside text-slate-700 font-medium space-y-1">
                <li>HDPE</li>
                <li>PVC</li>
              </ul>
            </div>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 space-y-2">
              <h4 className="font-bold text-amber-900">احتیاط:</h4>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> مختلف
                کیمیکلز کو ایک ہی ٹینک میں نہ ملائیں۔
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ٹینک پر
                کیمیکل کا نام ضرور لکھیں۔
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Dosing Pump */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            4۔ Dosing Pump (Metering Pump)
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              یہ ایک خاص پمپ ہوتا ہے جو بہت کم مقدار میں بھی انتہائی درستگی سے
              کیمیکل شامل کرتا ہے۔
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">
                عام اکائی: LPH (Liter Per Hour)
              </h4>
              <p className="text-slate-600 font-medium">
                مثال: 2 LPH, 5 LPH, 10 LPH
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <h4 className="font-bold text-rose-900 mb-2">
                  اگر پمپ زیادہ کیمیکل دے:
                </h4>
                <p className="text-slate-700 font-medium">
                  ❌ پانی کا معیار متاثر ہو سکتا ہے۔
                  <br />❌ غیر ضروری کیمیکل خرچ ہوگا۔
                </p>
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <h4 className="font-bold text-amber-900 mb-2">
                  اگر کم کیمیکل دے:
                </h4>
                <p className="text-slate-700 font-medium">
                  ❌ Membrane پر Scale بن سکتا ہے۔
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Antiscalant */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            5۔ Antiscalant
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Antiscalant کیا ہے؟
              </h3>
              <p className="text-slate-700 font-medium">
                یہ ایک ایسا کیمیکل ہے جو{" "}
                <strong className="text-slate-900">Scale</strong> بننے سے روکتا
                ہے۔
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Scale کیا ہے؟
              </h3>
              <p className="text-slate-700 font-medium mb-2">
                جب پانی میں موجود Calcium, Magnesium, Silica, Barium, Strontium
                زیادہ مقدار میں ہوں تو یہ ممبرین پر سفید تہہ جما دیتے ہیں۔ اسی
                تہہ کو <strong className="text-cyan-700">Scale</strong> کہتے
                ہیں۔
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Antiscalant کیا کرتا ہے؟
              </h3>
              <p className="text-slate-700 font-medium">
                یہ ان نمکیات کو ممبرین پر چپکنے نہیں دیتا۔
              </p>
            </div>
            <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
              <h3 className="text-xl font-bold text-rose-900 mb-2">
                اگر Antiscalant نہ ڈالیں:
              </h3>
              <ul className="list-disc list-inside text-slate-700 font-bold space-y-1">
                <li>Pressure بڑھ جائے گا۔</li>
                <li>Flow کم ہو جائے گا۔</li>
                <li>Membrane جلد خراب ہو جائے گی۔</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: SMBS */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            6۔ Sodium Metabisulfite (SMBS)
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              مکمل نام:{" "}
              <strong className="text-cyan-700">Sodium Metabisulfite</strong>{" "}
              (مختصر نام: <strong className="text-cyan-700">SMBS</strong>)
            </p>
            <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
              <h4 className="font-bold text-cyan-900 mb-1">کام:</h4>
              <p className="text-slate-700 font-medium">
                یہ پانی میں موجود{" "}
                <strong className="text-slate-900">Chlorine</strong> کو ختم کرتا
                ہے۔
              </p>
            </div>
            <p className="text-slate-700 font-medium">
              یاد کریں: Carbon Filter کلورین ختم کرتا ہے، لیکن اگر کچھ کلورین
              پھر بھی باقی رہ جائے تو SMBS اسے ختم کر دیتا ہے۔
            </p>
            <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100 text-rose-900 font-bold">
              اگر SMBS نہ ڈالیں: کلورین Membrane کو نقصان پہنچا سکتی ہے۔
            </div>
          </div>
        </section>

        {/* Section 7: Acid Dosing */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            7۔ Acid Dosing
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              اگر پانی کا pH زیادہ ہو تو Scale جلد بنتا ہے۔ اسی لیے Acid شامل
              کیا جاتا ہے۔
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">عام Acid:</h4>
              <ul className="list-disc list-inside text-slate-700 font-medium space-y-1">
                <li>Hydrochloric Acid (HCl)</li>
                <li>Sulfuric Acid (H₂SO₄)</li>
              </ul>
            </div>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 space-y-2">
              <h4 className="font-bold text-amber-900">
                احتیاط (تیزاب انتہائی احتیاط سے استعمال کریں):
              </h4>
              <ul className="list-disc list-inside text-slate-700 font-bold space-y-1">
                <li>دستانے پہنیں۔</li>
                <li>حفاظتی چشمہ استعمال کریں۔</li>
                <li>
                  ہمیشہ{" "}
                  <strong className="text-rose-600">
                    تیزاب کو پانی میں شامل کریں
                  </strong>
                  ، پانی کو تیزاب میں نہ ڈالیں۔
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 & 9: Caustic Dosing & pH Control */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              8۔ Caustic Dosing
            </h2>
            <p className="text-slate-700 font-medium">
              عام طور پر{" "}
              <strong className="text-cyan-700">Sodium Hydroxide (NaOH)</strong>{" "}
              استعمال ہوتا ہے۔ اگر پانی کا pH بہت کم ہو تو Caustic ڈال کر pH
              بڑھایا جاتا ہے۔
            </p>
            <div className="bg-cyan-50/50 p-3 rounded-xl border border-cyan-100 font-bold text-cyan-900 text-sm">
              استعمال: pH Adjustment, CIP Cleaning, بعض صنعتی پلانٹس
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              9۔ pH Control
            </h2>
            <p className="text-slate-700 font-medium">
              RO Membrane ایک مخصوص pH رینج (تقریباً{" "}
              <strong className="text-cyan-700">6.5 سے 8.5</strong>) میں بہترین
              کام کرتی ہے۔
            </p>
            <div className="text-sm font-bold text-slate-700 space-y-1">
              <div>❌ اگر pH زیادہ ہو: Scaling بڑھ سکتی ہے۔</div>
              <div>
                ❌ اگر pH بہت کم ہو: پائپ، پمپ یا دیگر آلات پر منفی اثر پڑ سکتا
                ہے۔
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: ORP Control */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            10۔ ORP Control
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <p className="text-lg text-slate-700 font-medium">
              ORP کا مطلب ہے:{" "}
              <strong className="text-cyan-700">
                Oxidation Reduction Potential
              </strong>
              ۔ یہ بتاتا ہے کہ پانی میں جراثیم کش صلاحیت کتنی ہے۔
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-1">
                کہاں استعمال ہوتا ہے؟
              </h4>
              <p className="text-slate-600 font-medium">
                Ozone System اور Chlorination System میں۔ اگر ORP کم ہو تو
                جراثیم کشی مناسب نہیں ہو رہی۔
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 & 12: Dosing Pump Setting & Calibration */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">
              11۔ Dosing Pump کی سیٹنگ
            </h2>
            <p className="text-slate-700 font-medium">
              فرض کریں پلانٹ کی پیداوار 1000 LPH ہے اور Antiscalant کی ضرورت 3
              ppm ہے، تو انجینئر حساب لگا کر پمپ کو سیٹ کرتا ہے۔
            </p>
            <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100 text-cyan-900 font-bold text-sm">
              نوٹ: اصل سیٹنگ ہمیشہ کیمیکل سپلائر کی ہدایات اور لیبارٹری رپورٹ کے
              مطابق ہوتی ہے۔
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">
              12۔ Calibration
            </h2>
            <p className="text-slate-700 font-medium">
              بڑے پلانٹس میں وقتاً فوقتاً Dosing Pump کو چیک کیا جاتا ہے جسے{" "}
              <strong className="text-cyan-700">Calibration</strong> کہتے ہیں۔
            </p>
            <div className="text-emerald-700 font-bold text-sm space-y-1">
              <div>✔ صحیح مقدار میں کیمیکل شامل ہوگا۔</div>
              <div>✔ کیمیکل ضائع نہیں ہوگا۔</div>
            </div>
          </div>
        </section>

        {/* Section 13: Chemicals Table */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            13۔ عام استعمال ہونے والے کیمیکلز
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-cyan-50 text-cyan-900 border-b border-cyan-200">
                  <th className="p-3 font-bold">کیمیکل</th>
                  <th className="p-3 font-bold">کام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {chemicalsTable.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-bold text-cyan-700">
                      {item.chemical}
                    </td>
                    <td className="p-3">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 14: Issues Table */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            14۔ عام خرابیاں اور ان کے اثرات
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-rose-50 text-rose-900 border-b border-rose-200">
                  <th className="p-3 font-bold">مسئلہ</th>
                  <th className="p-3 font-bold">نتیجہ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {issuesTable.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-bold text-rose-700">
                      {item.issue}
                    </td>
                    <td className="p-3">{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Practical Example */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-14 text-right"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-cyan-400">
            ایک عملی مثال
          </h2>
          <p className="text-slate-300 font-medium text-lg mb-4">
            فرض کریں ایک RO پلانٹ میں Feed Water کی Hardness زیادہ ہے۔ اگر آپ
            Antiscalant شامل نہیں کریں گے تو چند ہفتوں میں:
          </p>
          <ul className="list-disc list-inside text-slate-200 font-bold space-y-2 mb-6">
            <li>Membrane پر سفید اسکیل جمنا شروع ہو جائے گا۔</li>
            <li>High Pressure بڑھ جائے گا۔</li>
            <li>Permeate Flow کم ہو جائے گا۔</li>
            <li>بجلی کا خرچ بڑھ جائے گا۔</li>
            <li>
              آخرکار Membrane کی صفائی (CIP) یا تبدیلی کی ضرورت پڑ سکتی ہے۔
            </li>
          </ul>
        </motion.section>

        {/* Daily Checks Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-600 via-sky-600 to-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14 text-right"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
            روزانہ آپریٹر کیا چیک کرے؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dailyChecks.map((check, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 font-bold text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
                <span>{check}</span>
              </div>
            ))}
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
          className="bg-cyan-50 border-r-4 border-cyan-600 rounded-2xl p-6 sm:p-8 shadow-sm border border-cyan-100"
        >
          <h3 className="text-xl font-extrabold text-cyan-900 mb-2">
            استاد کی اہم نصیحت
          </h3>
          <p className="text-cyan-950 font-medium text-lg leading-relaxed">
            بہت سے نئے آپریٹر صرف پمپ، فلٹر اور ممبرین پر توجہ دیتے ہیں، لیکن
            تجربہ کار آپریٹر جانتے ہیں کہ{" "}
            <strong className="text-cyan-700">
              RO Membrane کی لمبی عمر کا راز صحیح Pretreatment اور درست Chemical
              Dosing میں ہے۔
            </strong>{" "}
            اگر کیمیکل صحیح مقدار اور صحیح وقت پر استعمال ہوں تو ممبرین کی
            کارکردگی بہتر رہتی ہے، صفائی کی ضرورت کم پڑتی ہے اور پلانٹ زیادہ
            قابلِ اعتماد طریقے سے چلتا ہے۔
          </p>
        </motion.div>
      </article>
    </div>
  );
}
