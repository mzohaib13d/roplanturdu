"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, ArrowLeft, Lightbulb } from "lucide-react";

export default function UrduContent() {
  const topics = [
    { id: 1, title: "RO پلانٹ کیا ہے اور کیسے کام کرتا ہے؟" },
    { id: 2, title: "خام پانی (Raw Water) سے صاف پانی (Permeate) تک پورا فلو" },
    {
      id: 3,
      title: "ہر مشین اور اس کا کام",
      subItems: [
        "Raw Water Tank",
        "Raw Water Pump",
        "Multimedia Sand Filter",
        "Activated Carbon Filter",
        "Water Softener (اگر استعمال ہو)",
        "Micron Cartridge Filter",
        "Chemical Dosing System",
        "High Pressure Pump",
        "RO Membrane",
        "UV Sterilizer",
        "Ozone System",
        "Product Water Tank",
      ],
    },
    {
      id: 4,
      title: "استعمال ہونے والے تمام والوز",
      subItems: [
        "Ball Valve",
        "Butterfly Valve",
        "Check Valve (NRV)",
        "Solenoid Valve",
        "Pressure Relief Valve",
      ],
    },
    {
      id: 5,
      title: "تمام انسٹرومنٹس",
      subItems: [
        "Pressure Gauge",
        "Flow Meter",
        "Conductivity Meter",
        "TDS Meter",
        "pH Meter",
        "ORP Meter",
        "Turbidity Meter",
        "Pressure Switch",
        "Level Switch",
      ],
    },
    { id: 6, title: "RO ممبرین کیسے کام کرتی ہے؟" },
    {
      id: 7,
      title: "Recovery، Rejection، Flux، Permeate، Concentrate کی مکمل وضاحت",
    },
    {
      id: 8,
      title: "CIP (Cleaning in Place) کیا ہوتی ہے اور کیوں کی جاتی ہے؟",
    },
    { id: 9, title: "RO پلانٹ کے عام مسائل اور ان کے حل" },
    { id: 10, title: "روزانہ آپریٹر کو کن چیزوں کی نگرانی کرنی چاہیے؟" },
  ];

  const whyQuestions = [
    "سینڈ فلٹر پہلے کیوں لگایا جاتا ہے؟",
    "کاربن فلٹر اس کے بعد کیوں آتا ہے؟",
    "ہائی پریشر پمپ ممبرین سے پہلے کیوں ہوتا ہے؟",
    "اینٹی اسکیلنٹ کیوں ڈوز کیا جاتا ہے؟",
    "اگر SDI، TDS یا NTU زیادہ ہو تو کیا مسئلہ پیدا ہوتا ہے؟",
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 via-cyan-50/50 to-slate-100 min-h-screen py-12">
      <section
        className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-right"
        dir="rtl"
      >
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
            مکمل عملی اور فنی گائیڈ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            ہم درج ذیل تمام موضوعات کا احاطہ کریں گے
          </h1>
          <p className="text-cyan-50 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            آر او واٹر پیوریفیکیشن سسٹم کی بنیادی باتوں سے لے کر جدید تکنیکی
            آپریٹنگ اور ٹربل شوٹنگ تک۔
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div id="topics" className="space-y-6 mb-16">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-cyan-100/80 text-cyan-800 font-sans font-bold flex items-center justify-center shrink-0 text-lg shadow-inner">
                  {topic.id}
                </span>
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {topic.title}
                  </h2>

                  {/* Sub Items List if present */}
                  {topic.subItems && (
                    <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 dir-ltr text-right">
                      {topic.subItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-xl border border-slate-200/60 text-slate-800 font-sans text-sm font-semibold hover:border-cyan-400 hover:bg-white transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="w-full text-right">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practical Understanding Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50/90 via-teal-50/90 to-cyan-50/90 rounded-3xl p-8 sm:p-10 border border-emerald-200/80 shadow-md backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-relaxed">
                عملی اور "وجہ" پر مبنی تربیت
              </h2>
              <p className="text-slate-600 font-medium text-sm leading-normal">
                ہر مرحلے کے پیچھے کی اہم وجہ سمجھیں
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-800 font-bold mb-6 leading-relaxed">
            ہم صرف تعریفیں نہیں دیں گے بلکہ ہر حصے کے پیچھے کی وجہ بھی سمجھائیں
            گے، مثلاً:
          </p>

          <div className="space-y-4">
            {whyQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-white/90 rounded-xl p-4 sm:p-5 border border-emerald-100 shadow-sm flex items-center justify-between gap-4 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-lg font-bold text-slate-900">{q}</span>
                </div>
                <ArrowLeft className="w-5 h-5 text-emerald-500 shrink-0 hidden sm:block" />
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-200/80 text-center sm:text-right">
            <p className="text-lg sm:text-xl font-bold text-emerald-900 leading-relaxed">
              اس طرح آپ نہ صرف RO پلانٹ چلانا سیکھیں گے بلکہ خرابیوں کی تشخیص
              (Troubleshooting) بھی کر سکیں گے۔
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}