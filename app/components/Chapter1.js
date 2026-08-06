"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Droplets,
  Layers,
  Zap,
  Activity,
  ShieldAlert,
  GraduationCap,
} from "lucide-react";

export default function Chapter1() {
  const equipmentList = [
    { id: 1, name: "Raw Water Tank", desc: "خام پانی کو ذخیرہ کرتا ہے۔" },
    {
      id: 2,
      name: "Raw Water Pump",
      desc: "پانی کو پورے سسٹم میں آگے دھکیلتا ہے۔",
    },
    {
      id: 3,
      name: "Multimedia Sand Filter",
      desc: "ریت، مٹی، زنگ اور بڑے ذرات نکالتا ہے۔",
    },
    {
      id: 4,
      name: "Activated Carbon Filter",
      desc: "کلورین، بدبو، رنگ اور نامیاتی مادے کم کرتا ہے۔",
    },
    {
      id: 5,
      name: "Water Softener (اگر ضرورت ہو)",
      desc: "سختی (Hardness) کم کرتا ہے۔",
    },
    {
      id: 6,
      name: "Micron Cartridge Filter",
      desc: "بہت باریک ذرات (مثلاً 5 مائیکرون) کو روکتا ہے۔",
    },
    {
      id: 7,
      name: "Chemical Dosing Pump",
      desc: "اینٹی اسکیلنٹ یا دیگر کیمیکل پانی میں شامل کرتا ہے۔",
    },
    {
      id: 8,
      name: "High Pressure Pump",
      desc: "ممبرین کے لیے مطلوبہ زیادہ دباؤ پیدا کرتا ہے۔",
    },
    { id: 9, name: "RO Membrane Housing", desc: "ممبرین کو محفوظ رکھتا ہے۔" },
    {
      id: 10,
      name: "RO Membrane",
      desc: "پانی کو صاف کرتی ہے اور نمکیات، بیکٹیریا اور دیگر آلودگیاں بڑی حد تک الگ کرتی ہے۔",
    },
    { id: 11, name: "Flow Meter", desc: "پانی کے بہاؤ کی مقدار بتاتا ہے۔" },
    {
      id: 12,
      name: "Pressure Gauge",
      desc: "مختلف مقامات پر پانی کا دباؤ دکھاتا ہے۔",
    },
    {
      id: 13,
      name: "Conductivity/TDS Meter",
      desc: "پانی میں گھلے ہوئے نمکیات کی مقدار ظاہر کرتا ہے۔",
    },
    { id: 14, name: "Product Water Tank", desc: "صاف پانی ذخیرہ کرتا ہے۔" },
    {
      id: 15,
      name: "UV Sterilizer (اختیاری)",
      desc: "بیکٹیریا اور جراثیم کو غیر فعال کرتا ہے۔",
    },
    {
      id: 16,
      name: "Ozone Generator (اختیاری)",
      desc: "ذخیرہ شدہ پانی کو جراثیم سے محفوظ رکھنے میں مدد دیتا ہے۔",
    },
  ];

  const detailedItems = [
    {
      id: "1",
      title: "1۔ Raw Water Tank",
      subtitle: "پلانٹ کا پہلا حصہ",
      example:
        "اگر پانی بور، کنویں یا میونسپل لائن سے آرہا ہے تو پہلے اسے اس ٹینک میں جمع کیا جاتا ہے۔",
      points: ["پانی ذخیرہ کرنا۔", "پمپ کو مسلسل پانی مہیا کرنا۔"],
      icon: Droplets,
      gradient: "from-blue-500 to-cyan-500",
      border: "border-cyan-200",
    },
    {
      id: "2",
      title: "2۔ Raw Water Pump",
      subtitle: "پلانٹ کا دل (Heart)",
      example: "اگر پمپ نہ ہو تو پانی آگے نہیں جائے گا۔",
      points: ["پانی کو فلٹرز کی طرف بھیجنا۔"],
      icon: Zap,
      gradient: "from-cyan-500 to-teal-500",
      border: "border-teal-200",
    },
    {
      id: "3",
      title: "3۔ Multimedia Sand Filter",
      subtitle: "میڈیا پر مشتمل فلٹر",
      example:
        "اس میں مختلف سائز کی ریت اور فلٹر میڈیا ہوتے ہیں۔ اگر یہ نہ ہو تو اگلے فلٹر جلدی بند ہو جائیں گے۔",
      points: ["مٹی", "ریت", "زنگ", "معلق ذرات (Suspended Solids)"],
      icon: Layers,
      gradient: "from-amber-500 to-orange-500",
      border: "border-amber-200",
    },
    {
      id: "4",
      title: "4۔ Activated Carbon Filter",
      subtitle: "کالے کاربن کا استعمال",
      example:
        "کلورین RO ممبرین کو نقصان پہنچا سکتی ہے، اس لیے اسے پہلے ہی ہٹایا جاتا ہے۔",
      points: ["کلورین", "بدبو", "رنگ", "نامیاتی مادے (Organic Matter)"],
      icon: ShieldAlert,
      gradient: "from-slate-600 to-slate-800",
      border: "border-slate-200",
    },
    {
      id: "5",
      title: "5۔ Water Softener",
      subtitle: "سخت پانی کا علاج (اختیاری)",
      example:
        "اگر پانی سخت ہو (Hard Water) تو یہ استعمال کیا جاتا ہے۔ یہی سختی بعد میں ممبرین پر اسکیل (Scale) بناتی ہے۔",
      points: [
        "کیلشیم (Calcium) کم کرتا ہے",
        "میگنیشیم (Magnesium) کم کرتا ہے",
      ],
      icon: Activity,
      gradient: "from-purple-500 to-indigo-500",
      border: "border-purple-200",
    },
    {
      id: "6",
      title: "6۔ Micron Cartridge Filter",
      subtitle: "آخری حفاظتی فلٹر",
      example:
        "عام طور پر 5 Micron یا 1 Micron کا استعمال ہوتا ہے۔ اس کے بعد پانی تقریباً تمام باریک ذرات سے پاک ہو جاتا ہے۔",
      points: ["انتہائی باریک ذرات کو روکنا"],
      icon: Layers,
      gradient: "from-teal-500 to-emerald-500",
      border: "border-emerald-200",
    },
    {
      id: "7",
      title: "7۔ High Pressure Pump",
      subtitle: "سب سے طاقتور پمپ",
      example:
        "یہ پانی کو اتنے زیادہ دباؤ سے ممبرین میں داخل کرتا ہے کہ صرف پانی کے سالمات ممبرین سے گزر سکیں۔",
      points: ["ممبرین کے لیے مطلوبہ دباؤ پیدا کرنا"],
      icon: Zap,
      gradient: "from-rose-500 to-red-500",
      border: "border-rose-200",
    },
    {
      id: "8",
      title: "8۔ RO Membrane",
      subtitle: "پلانٹ کا اہم ترین حصہ",
      example:
        "یہ پانی سے نمکیات، بیکٹیریا، وائرس اور بھاری دھاتیں بڑی حد تک الگ کرتی ہے۔",
      points: [
        "نمکیات (Salts)",
        "بیکٹیریا اور وائرس",
        "بھاری دھاتیں",
        "زیادہ تر آلودگیاں",
      ],
      icon: Sparkles,
      gradient: "from-emerald-500 to-cyan-500",
      border: "border-emerald-200",
    },
    {
      id: "9",
      title: "9۔ Product Water Tank",
      subtitle: "صاف پانی کا ذخیرہ",
      example:
        "صاف پانی یہاں جمع ہوتا ہے۔ بعد میں یہی پانی بوتلوں میں بھرا جاتا ہے، کولر میں جاتا ہے یا استعمال کے لیے بھیجا جاتا ہے۔",
      points: ["صاف پانی محفوظ رکھنا"],
      icon: Droplets,
      gradient: "from-cyan-600 to-blue-600",
      border: "border-cyan-200",
    },
  ];

  const flowSteps = [
    "Raw Water Tank",
    "Raw Water Pump",
    "Sand Filter",
    "Carbon Filter",
    "Softener (اگر ہو)",
    "Cartridge Filter",
    "High Pressure Pump",
    "RO Membrane",
    "Product Water Tank",
  ];

  const homeworkList = [
    "Raw Water Tank",
    "Raw Water Pump",
    "Multimedia Sand Filter",
    "Activated Carbon Filter",
    "Water Softener",
    "Cartridge Filter",
    "High Pressure Pump",
    "RO Membrane",
    "Product Water Tank",
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
          className="bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl -z-0"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-100" />
              <span>آر او پلانٹ کی مکمل اردو گائیڈ </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              سبق نمبر 1
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              ایک چھوٹے RO پلانٹ میں استعمال ہونے والے آلات اور ان کے کام
            </h2>
          </div>
        </motion.div>

        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-r-4 border-cyan-500 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm border border-slate-200"
        >
          <p className="text-lg sm:text-xl font-bold text-slate-700 leading-relaxed">
            فرض کریں ہمیں روزانہ{" "}
            <span className="text-cyan-600 font-sans font-extrabold">500</span> سے{" "}
            <span className="text-cyan-600 font-sans font-extrabold">5000</span>{" "}
            لیٹر صاف پانی بنانا ہے۔ ایسے چھوٹے RO پلانٹ میں عموماً درج ذیل آلات
            استعمال ہوتے ہیں۔
          </p>
        </motion.div>

        {/* Equipment Animated Table / Cards */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-cyan-600" />
            <span>آلات کی مکمل فہرست اور کام</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipmentList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex items-start gap-4"
              >
                <span className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 font-sans font-bold flex items-center justify-center shrink-0 text-base border border-cyan-200">
                  {item.id}
                </span>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-cyan-700 font-sans tracking-wide leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-slate-600 font-medium text-base mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-right mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              اب ہر آلے کو آسان مثال سے سمجھیں
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full mt-3" />
          </motion.div>

          <div className="space-y-8">
            {detailedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border ${item.border} shadow-sm relative overflow-hidden`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md shrink-0`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-sm font-bold text-cyan-600">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 mb-5 border border-slate-200/60">
                    <span className="text-sm font-bold text-cyan-700 block mb-1">
                      مثال / وضاحت:
                    </span>
                    <p className="text-slate-700 font-medium text-lg leading-relaxed">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-bold text-cyan-700 block mb-3">
                      اہم نکات / کام:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.points.map((pt, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-cyan-50/60 px-4 py-2.5 rounded-xl border border-cyan-100 text-slate-700 font-bold text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Formula & Sequence Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 text-right"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Sparkles className="w-7 h-7 text-amber-300" />
            </div>
            <h2 className="text-3xl font-extrabold">یاد رکھنے کا آسان فارمولا</h2>
          </div>

          <p className="text-xl font-bold text-cyan-50 mb-8">
            پانی کا مکمل سفر:
          </p>

          {/* Step Flow Cards */}
          <div className="flex flex-wrap items-center justify-start gap-3 dir-rtl">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center gap-2"
              >
                <div className="bg-white text-cyan-900 border border-cyan-200 px-4 py-3 rounded-xl font-bold font-sans text-sm sm:text-base shadow-sm">
                  {step}
                </div>
                {idx < flowSteps.length - 1 && (
                  <ArrowLeft className="w-5 h-5 text-cyan-100 shrink-0 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Homework Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-relaxed">
                آپ کا ہوم ورک
              </h2>
              <p className="text-slate-600 font-medium text-sm leading-normal">
                مندرجہ ذیل باتوں کو دہرائیں۔ 
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-sans font-bold flex items-center justify-center text-sm border border-emerald-200">
                  1
                </span>
                <span>
                  درج ذیل آلات کے نام انگریزی اور اردو دونوں میں یاد کریں:
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {homeworkList.map((hw) => (
                  <div
                    key={hw}
                    className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 font-sans text-sm font-bold text-cyan-700 text-center shadow-2xs"
                  >
                    {hw}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-sans font-bold flex items-center justify-center text-sm border border-emerald-200">
                  2
                </span>
                <span>اہم ترین نقطہ:</span>
              </h4>
              <p className="text-slate-700 font-medium text-lg leading-relaxed pr-9">
                یہ بھی یاد کریں کہ ان میں سے{" "}
                <strong className="text-emerald-600">RO Membrane</strong> پلانٹ کا
                سب سے اہم حصہ ہے، جبکہ{" "}
                <strong className="text-cyan-600">High Pressure Pump</strong> وہ
                دباؤ پیدا کرتا ہے جس کے بغیر RO عمل ممکن نہیں۔
              </p>
            </div>
          </div>
        </motion.section>
      </article>
    </div>
  );
}