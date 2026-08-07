'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const machinesData = [
  {
    num: "1",
    title: "Raw Water Tank (خام پانی کا ٹینک)",
    tag: "ذخیرہ کاری",
    intro:
      "یہ RO پلانٹ کا پہلا آلہ ہوتا ہے۔ تمام خام پانی پہلے اسی ٹینک میں جمع کیا جاتا ہے۔",
    sources: ["بور (Bore Water)", "میونسپل سپلائی", "دریا", "نہر", "کنواں"],
    functions: [
      "خام پانی کو ذخیرہ کرنا",
      "مسلسل پانی مہیا کرنا",
      "پانی کے بہاؤ کو متوازن رکھنا",
    ],
    materials: ["HDPE", "FRP", "Stainless Steel (SS304 یا SS316)"],
    parts: [
      "Inlet Pipe",
      "Outlet Pipe",
      "Drain Valve",
      "Overflow Pipe",
      "Vent Pipe",
      "Level Indicator",
    ],
    faults: [
      "ٹینک میں مٹی جمع ہونا",
      "کائی (Algae) بن جانا",
      "لیکیج",
      "لیول سوئچ خراب ہونا",
    ],
  },
  {
    num: "2",
    title: "Raw Water Pump",
    tag: "پمپنگ",
    intro:
      "یہ پلانٹ کا پہلا پمپ ہوتا ہے۔ یہ پانی کو ٹینک سے اٹھا کر فلٹرز میں بھیجتا ہے۔",
    functions: ["پانی کو مطلوبہ Flow کے ساتھ آگے بھیجنا"],
    extraInfo: { title: "عام قسم", value: "Centrifugal Pump" },
    impact: ["پلانٹ رک جائے گا۔", "فلٹرز تک پانی نہیں پہنچے گا۔"],
    dailyChecks: ["آواز", "وائبریشن", "لیکیج", "موٹر گرم تو نہیں؟"],
  },
  {
    num: "3",
    title: "Multimedia Sand Filter",
    tag: "ابتدائی فلٹریشن",
    intro:
      "یہ پلانٹ کا پہلا فلٹر ہے جو پانی سے موٹی مٹی اور ریت کو الگ کرتا ہے۔",
    layers: ["Anthracite", "Fine Sand", "Coarse Sand", "Gravel"],
    functions: ["مٹی", "ریت", "زنگ", "Suspended Solids (معلق ذرات)"],
    consequences: [
      "اگر Backwash نہ کریں تو فلٹر بند ہونا شروع ہو جائے گا۔",
      "Pressure Drop بڑھ جائے گا۔",
    ],
    operatorTips: [
      "Inlet Pressure اور Outlet Pressure کا معائنہ کریں۔",
      "اگر دباؤ کا فرق زیادہ ہو جائے تو Backwash کی جائے۔",
    ],
  },
  {
    num: "4",
    title: "Activated Carbon Filter",
    tag: "کیمیائی فلٹریشن",
    intro: "یہ کالے رنگ کے Activated Carbon سے بھرا ہوتا ہے۔",
    functions: ["Chlorine", "Smell (بدبو)", "Colour (رنگ)", "Organic Matter"],
    warning:
      "کلورین RO Membrane کو شدید نقصان پہنچاتی ہے۔ اسی لیے Carbon Filter کا صحیح کام کرنا انتہائی ضروری ہے۔",
    impact: ["اگر یہ خراب ہو جائے تو RO Membrane جلد تباہ ہو سکتی ہے۔"],
  },
  {
    num: "5",
    title: "Water Softener (واٹر سافٹنر)",
    tag: "سختی کا خاتمہ",
    note: "ہر پلانٹ میں ضروری نہیں",
    intro:
      "یہ پانی کی Hardness (سختی) کو کم کرتا ہے، خاص طور پر Calcium اور Magnesium کو۔",
    inside: "Resin Beads",
    process:
      "Resin پانی سے Calcium اور Magnesium کو پکڑ لیتی ہے اور بدلے میں Sodium چھوڑ دیتی ہے۔",
    maintenance: "Salt (Brine) سے Regeneration کی جاتی ہے۔",
    impact: ["اگر یہ کام نہ کرے تو Membrane پر Scale (پپڑی) بن جائے گی۔"],
  },
  {
    num: "6",
    title: "Micron Cartridge Filter",
    tag: "باریک فلٹریشن",
    badge: "RO Membrane کا Bodyguard",
    sizes: ["5 Micron", "1 Micron"],
    functions: ["باریک سے باریک ذرات کو روکنا"],
    consequences: ["اگر بند ہو جائے تو Pressure اور Flow کم ہو جائے گا۔"],
    replacement: "جب Pressure Drop زیادہ ہو جائے یا کارتوس گندا ہو جائے۔",
  },
  {
    num: "7",
    title: "Chemical Dosing System",
    tag: "کیمیکل ڈوزنگ",
    intro: "یہ پلانٹ کی لمبی عمر کے لیے ایک انتہائی اہم حصہ ہے۔",
    components: ["Chemical Tank", "Dosing Pump", "Injection Point"],
    chemicals: [
      { name: "Antiscalant", purpose: "Membrane پر Scale بننے سے روکتا ہے۔" },
      {
        name: "Sodium Metabisulfite (SMBS)",
        purpose: "کلورین کو ختم کرتا ہے۔",
      },
      { name: "Acid", purpose: "pH کم کرنے کے لیے" },
      { name: "Alkali", purpose: "pH بڑھانے کے لیے" },
    ],
    impact: [
      "اگر Dosing بند ہو جائے تو Scale بننا شروع ہو جائے گا اور Membrane جلد خراب ہوگی۔",
    ],
  },
  {
    num: "8",
    title: "High Pressure Pump",
    tag: "ہائی پریشر",
    intro: "یہ RO پلانٹ کا سب سے طاقتور اور مرکزی پمپ ہوتا ہے۔",
    functions: [
      "پانی کو انتہائی زیادہ Pressure کے ساتھ Membrane میں داخل کرنا۔",
    ],
    specs: "عام Pressure: 8–20 Bar (چھوٹے و درمیانے پلانٹس)",
    impact: ["اگر یہ خراب ہو جائے تو پورا RO سسٹم بند ہو جائے گا۔"],
    dailyChecks: ["Pressure", "Noise (آواز)", "Seal Leakage", "Motor Current"],
  },
  {
    num: "9",
    title: "RO Membrane (آر او ممبرین)",
    tag: "مرکزی فلٹریشن",
    badge: "پلانٹ کا دل",
    intro: "یہ پورے پلانٹ کا سب سے اہم اور حساس ترین حصہ ہے۔",
    functions: [
      "Salts (نمکیات)",
      "Bacteria (بیکٹیریا)",
      "Viruses (وائرس)",
      "Heavy Metals",
      "Dissolved Solids (حل شدہ ٹھوس مادے)",
    ],
    outputs: [
      { type: "Permeate", desc: "خالص اور صاف پانی" },
      { type: "Reject", desc: "گاربیج اور زیادہ نمکیات والا پانی" },
    ],
    impact: [
      "اگر Membrane خراب ہو جائے تو TDS بڑھ جائے گا اور پانی کا معیار بگڑ جائے گا۔",
    ],
  },
  {
    num: "10",
    title: "UV Sterilizer",
    tag: "جراثیم کشی",
    note: "ہر پلانٹ میں ضروری نہیں",
    intro:
      "Ultraviolet Light کے ذریعے بیکٹیریا، وائرس اور دیگر جراثیم کو غیر فعال (Inactivate) کرتا ہے۔",
    importantNote: "یہ TDS یا حل شدہ نمکیات کو کم نہیں کرتا۔",
  },
  {
    num: "11",
    title: "Ozone System",
    tag: "اوزونیشن",
    intro: "زیادہ تر تجارتی اور منرل واٹر بوتلنگ پلانٹس میں استعمال ہوتا ہے۔",
    functions: [
      "پانی کو طویل عرصے تک جراثیم سے محفوظ رکھنا۔",
      "Storage Tank کے اندر Bacteria اور کائی کو بڑھنے سے روکنا۔",
    ],
  },
  {
    num: "12",
    title: "Product Water Tank",
    tag: "پروڈکٹ ٹینک",
    intro:
      "یہ آر او پروسیس کے بعد حاصل ہونے والے بالکل صاف پانی کا ذخیرہ کرنے کا آخری ٹینک ہے۔",
    destinations: [
      "Filling Machine",
      "Bottle Line",
      "Water Cooler",
      "براہِ راست صارف",
    ],
    precautions: [
      "ٹینک کو ہمیشہ مکمل صاف رکھیں۔",
      "ڈھکن ہر وقت بند رکھیں۔",
      "وقتاً فوقتاً کیمیائی Sanitization کریں۔",
    ],
  },
];

const summaryData = [
  { item: "Raw Water Tank", role: "خام پانی ذخیرہ کرنا" },
  { item: "Raw Water Pump", role: "پانی کو آگے بھیجنا" },
  { item: "Sand Filter", role: "مٹی اور ریت نکالنا" },
  { item: "Carbon Filter", role: "کلورین، بدبو اور رنگ ختم کرنا" },
  { item: "Water Softener", role: "سختی کم کرنا" },
  { item: "Cartridge Filter", role: "باریک ذرات روکنا" },
  { item: "Chemical Dosing", role: "کیمیکل شامل کرنا" },
  { item: "High Pressure Pump", role: "ممبرین کے لیے زیادہ دباؤ پیدا کرنا" },
  { item: "RO Membrane", role: "پانی کو صاف کرنا (نمکیات نکالنا)" },
  { item: "UV Sterilizer", role: "جراثیم کو غیر فعال کرنا" },
  { item: "Ozone System", role: "پانی کو محفوظ رکھنا" },
  { item: "Product Water Tank", role: "صاف پانی ذخیرہ کرنا" },
];

// Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Chapter3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-urdu dir-rtl px-4 py-8 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Chapter Header */}
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative z-10 text-center mb-12 max-w-4xl mx-auto px-4"
>
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10 text-center relative overflow-hidden"
  >
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl -z-0"
    />

    <div className="relative z-10">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
        <BookOpen className="w-4 h-4 text-cyan-100" />
        <span>  آر او واٹر ٹیکنالوجی نصاب  </span>
      </span>
      <h2 className="text-xl sm:text-3xl font-extrabold mb-4 leading-tight">
        سبق نمبر 3
      </h2>
      <h1 className="text-4xl sm:text-4xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
        ہر مشین اور اس کا کام
      </h1>
      <p className="text-white-600 text-base md:text-lg py-2 max-w-2xl mx-auto font-medium leading-relaxed">
        Every Machine and Its Function — آر او پلانٹ کے تمام اجزاء، ان کی
        کارکردگی اور حفاظت کی مکمل تفصیل
      </p>
    </div>
  </motion.div>
</motion.div>

      {/* Main Grid: Machines */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {machinesData.map((m) => (
          <motion.div
            key={m.num}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden"
          >
            {/* Top accent strip */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500" />

            {/* Header / Title */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white font-bold text-lg shadow-md">
                  {m.num}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-cyan-900">
                  {m.title}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {m.badge && (
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-200 shadow-sm">
                    {m.badge}
                  </span>
                )}
                <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                  {m.tag}
                </span>
              </div>
            </div>

            {/* Intro & Notes */}
            {m.intro && (
              <p className="text-slate-700 text-base mb-4 leading-relaxed font-normal">
                {m.intro}
              </p>
            )}
            {m.note && (
              <p className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg mb-4 inline-block shadow-sm">
                ⚠️ {m.note}
              </p>
            )}
            {m.importantNote && (
              <p className="text-xs font-semibold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-lg mb-4 inline-block shadow-sm">
                ℹ️ {m.importantNote}
              </p>
            )}
            {m.inside && (
              <p className="text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg mb-4 inline-block ml-2 font-medium">
                🔹 اندرونی حصہ:{" "}
                <span className="text-cyan-700 font-mono font-bold">
                  {m.inside}
                </span>
              </p>
            )}
            {m.process && (
              <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4 leading-relaxed">
                🔄 <strong className="text-cyan-800">طریقہ کار:</strong>{" "}
                {m.process}
              </p>
            )}
            {m.maintenance && (
              <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg mb-4 inline-block">
                🔧 دیکھ بھال: {m.maintenance}
              </p>
            )}
            {m.replacement && (
              <p className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg mb-4 inline-block">
                🔄 تبدیلی: {m.replacement}
              </p>
            )}
            {m.specs && (
              <p className="text-xs text-cyan-900 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-lg mb-4 inline-block font-mono font-bold">
                ⚡ {m.specs}
              </p>
            )}
            {m.extraInfo && (
              <p className="text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg mb-4 inline-block">
                💡 {m.extraInfo.title}:{" "}
                <span className="text-cyan-700 font-bold">
                  {m.extraInfo.value}
                </span>
              </p>
            )}

            {/* Content Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Functions / Tasks */}
              {m.functions && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    کارکردگی و ذمہ داری:
                  </h3>
                  <ul className="space-y-1.5 text-slate-700 text-sm">
                    {m.functions.map((fn, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">
                          ✔
                        </span>
                        <span>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Water Sources */}
              {m.sources && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    پانی کا ذریعہ:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.sources.map((src, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 shadow-sm"
                      >
                        • {src}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Layers (Sand Filter) */}
              {m.layers && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    اندرونی تہہ بندی (اوپر سے نیچے):
                  </h3>
                  <div className="flex flex-col gap-1 text-xs text-slate-700">
                    {m.layers.map((layer, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-slate-400 font-bold">
                          {idx + 1}.
                        </span>
                        <span className="font-mono text-cyan-800 font-semibold">
                          {layer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {m.sizes && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    دستیاب سائز:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.sizes.map((sz, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-100 text-cyan-900 border border-cyan-300 px-2.5 py-1 rounded-md text-xs font-mono font-bold shadow-sm"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Destinations */}
              {m.destinations && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    پانی کی منزل:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.destinations.map((dst, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 shadow-sm"
                      >
                        • {dst}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {m.materials && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    کھیپ کا مٹیریل (Materials):
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 shadow-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Components / Materials / Parts */}
              {m.parts && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    اہم لاحقے (Accessories):
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.parts.map((pt, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 px-2 py-0.5 rounded text-xs border border-slate-200 shadow-sm font-mono"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dosing Components */}
              {m.components && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    سسٹم کے اجزاء:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.components.map((cp, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 shadow-sm"
                      >
                        {cp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Chemicals (Dosing System) */}
              {m.chemicals && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 col-span-1 md:col-span-2">
                  <h3 className="text-sm font-bold text-cyan-900 mb-3">
                    استعمال ہونے والے کیمیکلز:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {m.chemicals.map((chem, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm"
                      >
                        <span className="text-cyan-800 font-bold text-sm block">
                          {chem.name}
                        </span>
                        <span className="text-slate-600 text-xs font-normal">
                          {chem.purpose}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Output Types (Membrane) */}
              {m.outputs && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    اخراجی پانی کی اقسام:
                  </h3>
                  <div className="space-y-2">
                    {m.outputs.map((out, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-white p-2 rounded-lg text-xs border border-slate-200 shadow-sm"
                      >
                        <span className="font-bold text-emerald-700">
                          {out.type}
                        </span>
                        <span className="text-slate-700 font-medium">
                          {out.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Operator Tips */}
              {m.operatorTips && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-cyan-900 mb-2">
                    آپریٹر کے لیے ہدایات:
                  </h3>
                  <ul className="space-y-1 text-slate-700 text-xs list-disc list-inside">
                    {m.operatorTips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Precautions */}
              {m.precautions && (
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <h3 className="text-sm font-bold text-emerald-800 mb-2">
                    احتیاطی تدابیر:
                  </h3>
                  <ul className="space-y-1 text-slate-700 text-xs list-disc list-inside">
                    {m.precautions.map((prc, idx) => (
                      <li key={idx}>{prc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Faults / Daily Checks */}
              {m.faults && (
                <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                  <h3 className="text-sm font-bold text-rose-800 mb-2">
                    عام خرابیاں:
                  </h3>
                  <ul className="space-y-1 text-rose-900 text-xs list-disc list-inside">
                    {m.faults.map((fl, idx) => (
                      <li key={idx}>{fl}</li>
                    ))}
                  </ul>
                </div>
              )}

              {m.dailyChecks && (
                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <h3 className="text-sm font-bold text-emerald-800 mb-2">
                    روزانہ کا معائنہ:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {m.dailyChecks.map((chk, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md text-xs font-semibold shadow-sm"
                      >
                        ✔ {chk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Impact / Consequences / Critical Alerts */}
            {(m.impact || m.warning || m.consequences) && (
              <div className="mt-4 bg-rose-50 border border-rose-200 p-3.5 rounded-xl text-xs text-rose-800 space-y-1.5 shadow-sm">
                {m.warning && <p className="font-bold">{m.warning}</p>}
                {m.impact &&
                  m.impact.map((imp, idx) => (
                    <p
                      key={idx}
                      className="flex items-center gap-1.5 font-medium"
                    >
                      <span>⚠️</span> {imp}
                    </p>
                  ))}
                {m.consequences &&
                  m.consequences.map((cq, idx) => (
                    <p
                      key={idx}
                      className="flex items-center gap-1.5 font-medium"
                    >
                      <span>🛑</span> {cq}
                    </p>
                  ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Chapter Summary Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md"
      >
        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center border-b border-slate-100 pb-4">
          پورے پلانٹ کا خلاصہ
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-slate-700 border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-cyan-50 text-cyan-900 border-b border-cyan-100">
                <th className="py-3 px-4 font-bold text-right">آلہ</th>
                <th className="py-3 px-4 font-bold text-right">بنیادی کام</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {summaryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-bold text-slate-800">
                    {row.item}
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">
                    {row.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Teacher's Master Advice (Cause and Effect Section) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-12 bg-gradient-to-br from-cyan-900 via-sky-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4 border-b border-cyan-700/50 pb-3">
          <span className="text-2xl">💡</span>
          <h2 className="text-2xl font-bold text-cyan-200">
            استاد کی ایک اہم نصیحت
          </h2>
        </div>
        <p className="text-cyan-50 text-base md:text-lg leading-relaxed mb-6 font-normal">
          ایک کامیاب RO آپریٹر صرف یہ نہیں جانتا کہ کون سا آلہ کیا کرتا ہے، بلکہ
          یہ بھی جانتا ہے کہ اگر یہ آلہ کام کرنا بند کر دے تو اگلے آلے پر کیا
          اثر پڑے گا۔
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/30">
            <span className="text-amber-300 font-bold block mb-1">
              Sand Filter میں خرابی:
            </span>
            <p className="text-slate-200">
              اگر Sand Filter صحیح کام نہ کرے تو Cartridge Filter جلد بند ہو
              جائے گا۔
            </p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/30">
            <span className="text-amber-300 font-bold block mb-1">
              Carbon Filter میں خرابی:
            </span>
            <p className="text-slate-200">
              اگر Carbon Filter کلورین نہ ہٹائے تو RO Membrane کو شدید نقصان
              پہنچ سکتا ہے۔
            </p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/30">
            <span className="text-amber-300 font-bold block mb-1">
              Chemical Dosing میں کمی:
            </span>
            <p className="text-slate-200">
              اگر Chemical Dosing System اینٹی اسکیلنٹ نہ دے تو Membrane پر
              اسکیل جم جائے گا۔
            </p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/30">
            <span className="text-amber-300 font-bold block mb-1">
              High Pressure Pump میں کمی:
            </span>
            <p className="text-slate-200">
              اگر High Pressure Pump مطلوبہ دباؤ نہ دے تو RO Membrane مناسب
              مقدار میں صاف پانی پیدا نہیں کر سکے گی۔
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-cyan-700/50 text-center">
          <p className="text-cyan-200 font-bold text-base md:text-lg">
            یہی{" "}
            <span className="underline decoration-cyan-400 underline-offset-4">
              "Cause and Effect"
            </span>{" "}
            (وجہ اور نتیجہ) سمجھنا ایک عام آپریٹر اور ایک ماہر RO ٹیکنیشن میں
            فرق پیدا کرتا ہے۔
          </p>
        </div>
      </motion.div>
    </div>
  );
}