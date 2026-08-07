"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Chapter9() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans px-4 py-12 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 text-center bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl -z-0"
          />
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 backdrop-blur-md">
              سبق نمبر 9
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-normal max-w-4xl">
              RO Plant Troubleshooting <span className="font-normal text-2xl md:text-3xl">(خرابیوں کی تشخیص)</span>
            </h1>
          </div>
        </div>

        {/* Callout / Warning Box */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white border-r-4 border-cyan-500 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3"
        >
          <p className="text-xl sm:text-2xl leading-relaxed text-slate-800 font-bold">
            یہ پورے کورس کا سب سے عملی (Practical) سبق ہے۔
          </p>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            ایک عام RO آپریٹر صرف ریڈنگز دیکھتا ہے، لیکن ایک ماہر RO ٹیکنیشن انہی ریڈنگز سے خرابی کی اصل وجہ تلاش کر لیتا ہے۔
          </p>
        </motion.div>

        {/* Section: What is Troubleshooting */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Troubleshooting کیا ہے؟</h2>
          <p className="text-lg text-slate-700 font-medium">Troubleshooting کا مطلب ہے:</p>
          <blockquote className="border-r-4 border-cyan-500 pr-4 text-cyan-800 font-bold italic text-lg">
            &quot;خرابی کی اصل وجہ تلاش کرنا اور اسے درست کرنا۔&quot;
          </blockquote>
          <p className="text-lg text-slate-700 font-medium mt-4">یاد رکھیں:</p>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-slate-800">
            <strong className="text-cyan-800 text-lg">علامت (Symptom) اور اصل وجہ (Root Cause) ایک جیسی نہیں ہوتیں۔</strong>
          </div>
          <p className="text-lg text-slate-700 font-medium mt-4">مثال:</p>
          <p className="text-base text-slate-700 leading-relaxed">صاف پانی کم بن रहा ہے، یہ <strong className="text-slate-900">علامت (Symptom)</strong> ہے۔ لیکن اصل وجہ ہو سکتی ہے:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pr-4 text-base">
            <li>Cartridge Filter بند ہو۔</li>
            <li>Membrane پر Scale ہو۔</li>
            <li>High Pressure Pump کمزور ہو۔</li>
            <li>Feed Water کم آ رہا ہو۔</li>
          </ul>
          <p className="text-cyan-800 text-base mt-4 font-bold">لہٰذا ہمیشہ <strong className="text-slate-900">اصل وجہ</strong> تلاش کریں۔</p>
        </section>

        {/* Problem 1 */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">مسئلہ نمبر 1: صاف پانی (Permeate) کم کیوں بنتا ہے؟</h2>
          <h3 className="text-xl font-bold text-slate-900">ممکنہ وجوہات</h3>
          
          <div className="space-y-4 mt-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">1۔ Feed Water کم آ رہا ہے۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-cyan-700">علامات:</strong> Flow Meter کم دکھائے گا، Feed Pressure کم ہوگا۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ Raw Water Pump چیک کریں، Raw Water Tank چیک کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">2۔ Cartridge Filter بند ہے۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-cyan-700">علامات:</strong> Pressure Drop بڑھ جائے گا۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ Cartridge تبدیل کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">3۔ Membrane پر Scale یا Fouling ہے۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-cyan-700">علامات:</strong> High Pressure بڑھ جائے گا، Flow کم ہو جائے گا۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ CIP کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">4۔ High Pressure Pump کمزور ہو گیا۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-cyan-700">علامات:</strong> Pressure مطلوبہ حد تک نہیں پہنچے گا۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ Pump کی سروس کریں۔</p>
            </div>
          </div>
        </section>

        {/* Problem 2 */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">مسئلہ نمبر 2: Product Water کا TDS بڑھ گیا</h2>
          <p className="text-lg text-slate-700 font-medium">یہ RO پلانٹ کی سب سے اہم خرابیوں میں سے ایک ہے۔</p>
          <h3 className="text-xl font-bold text-slate-900">ممکنہ وجوہات</h3>

          <div className="space-y-4 mt-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">1۔ Membrane خراب ہو گئی۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-cyan-700">علامات:</strong> TDS اچانک بڑھ جائے۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ Membrane چیک کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">2۔ Carbon Filter صحیح کام نہیں کر رہا۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-rose-600 font-bold">نتیجہ:</strong> کلورین Membrane کو نقصان پہنچا سکتی ہے۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ Carbon Filter تبدیل کریں، Residual Chlorine چیک کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">3۔ O-Ring خراب ہے۔</h4>
              <p className="text-slate-700 text-base"><strong className="text-rose-600 font-bold">نتیجہ:</strong> پانی Membrane کو بائی پاس (Bypass) کر سکتا ہے۔</p>
              <p className="text-cyan-800 text-base font-bold">✔ O-Ring تبدیل کریں۔</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-lg">4۔ Membrane غلط طریقے سے نصب کی گئی۔</h4>
              <p className="text-cyan-800 text-base font-bold">✔ دوبارہ صحیح انسٹال کریں۔</p>
            </div>
          </div>
        </section>

        {/* Problems 3 & 4 */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">مسئلہ نمبر 3: High Pressure کیوں بڑھ جاتا ہے؟</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-base pr-2">
              <li>Cartridge Filter بند</li>
              <li>Membrane پر Scale</li>
              <li>Reject Valve زیادہ بند</li>
              <li>Feed Water میں زیادہ Hardness</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-cyan-800 text-base font-bold">
              <p>✔ Cartridge تبدیل کریں۔</p>
              <p>✔ CIP کریں۔</p>
              <p>✔ Reject Flow چیک کریں۔</p>
              <p>✔ Antiscalant Dosing چیک کریں۔</p>
            </div>
          </section>

          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">مسئلہ نمبر 4: Feed Pressure کم کیوں ہو جاتا ہے؟</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-base pr-2">
              <li>Raw Water Tank خالی</li>
              <li>Raw Water Pump خراب</li>
              <li>Air Lock</li>
              <li>Suction Line لیک</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-cyan-800 text-base font-bold">
              <p>✔ پانی کی سپلائی چیک کریں۔</p>
              <p>✔ پمپ کی پرائمنگ (Priming) چیک کریں۔</p>
              <p>✔ لیکیج دور کریں۔</p>
            </div>
          </section>
        </div>

        {/* Problem 5: Pump Noise */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">مسئلہ نمبر 5: Pump شور کیوں کرتا ہے؟</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">وجہ نمبر 1: Bearing خراب</h3>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">وجہ نمبر 2: Cavitation</h3>
              <p className="text-slate-700 text-sm mt-2 font-medium">جب پمپ کو مطلوبہ مقدار میں پانی نہ ملے تو بخاراتی بلبلے بنتے اور پھٹتے ہیں، جس سے شور، کمپن اور امپیلر کو نقصان ہوتا ہے۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">وجہ نمبر 3: Air داخل ہو رہی ہے۔</h3>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">وجہ نمبر 4: Coupling خراب</h3>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-cyan-800 text-base font-bold">
            <p>✔ Bearing چیک کریں۔</p>
            <p>✔ Suction Line چیک کریں۔</p>
            <p>✔ Tank کا پانی چیک کریں۔</p>
            <p>✔ Air Leakage ختم کریں۔</p>
          </div>
        </section>

        {/* Problems 6, 7, 8, 9 */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-3 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">مسئلہ نمبر 6: Membrane جلدی خراب کیوں ہوتی ہے؟</h3>
            <p className="text-slate-700 text-base font-medium">وجوہات: خراب Pretreatment، خراب Carbon Filter (کلورین)، بند Antiscalant، غلط pH، بہت زیادہ Pressure یا CIP وقت پر نہ ہونا۔</p>
            <p className="text-cyan-800 text-base font-bold mt-2">✔ Pretreatment اور Chemical Dosing درست کریں۔ بروقت صفائی کریں۔</p>
          </section>

          <section className="space-y-3 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">مسئلہ نمبر 7: Pressure Drop زیادہ کیوں ہوتا ہے؟</h3>
            <p className="text-slate-700 text-base font-medium">وجوہات: Membrane Fouling، Scale، Cartridge بند۔</p>
            <p className="text-cyan-800 text-base font-bold mt-2">✔ CIP کریں اور Cartridge تبدیل کریں۔</p>
          </section>

          <section className="space-y-3 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">مسئلہ نمبر 8: Reject Water بہت زیادہ آ رہا ہے</h3>
            <p className="text-slate-700 text-base font-medium">وجوہات: Reject Valve زیادہ کھلا ہے، Recovery کم ہے، Pressure کم ہے۔</p>
            <p className="text-cyan-800 text-base font-bold mt-2">✔ Reject Valve سیٹ کریں، Pump Pressure چیک کریں۔</p>
          </section>

          <section className="space-y-3 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">مسئلہ نمبر 9: Product Water بالکل نہیں آ رہا</h3>
            <p className="text-slate-700 text-base font-medium">وجوہات: Pump بند، Valve بند، Membrane مکمل بند، Feed Water نہیں۔</p>
            <p className="text-cyan-800 text-base font-bold mt-2">✔ قدم بہ قدم چیک کریں۔</p>
          </section>
        </div>

        {/* Step-by-Step Operator Approach */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">ایک ماہر Operator خرابی کیسے تلاش کرتا ہے؟</h2>
          <p className="text-lg text-slate-700 font-medium">فرض کریں Product Water کم آ رہا ہے، وہ فوراً Membrane تبدیل نہیں کرےगा بلکہ یہ ترتیب اختیار کرے گا:</p>
          
          <div className="space-y-3 text-base font-medium">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 1:</strong> کیا Raw Water موجود ہے؟ (اگر نہیں تو پانی بحال کریں)
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 2:</strong> Pump چل رہا ہے؟ (اگر نہیں تو Pump چیک کریں)
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 3:</strong> Pressure درست ہے؟ (اگر نہیں تو Pump یا Filter چیک کریں)
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 4:</strong> Cartridge Filter بند تو نہیں؟ (اگر بند ہے تو تبدیل کریں)
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 5:</strong> Membrane کا Pressure Drop زیادہ ہے؟ (اگر ہاں تو CIP کریں)
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800">
              <strong className="text-cyan-700">Step 6:</strong> پھر بھی مسئلہ؟ (Membrane چیک کریں)
            </div>
          </div>
        </section>

        {/* Golden Rule */}
        <section className="bg-cyan-50 border border-cyan-100 p-6 sm:p-8 rounded-3xl space-y-4 text-center">
          <h2 className="text-2xl font-extrabold text-cyan-900">Troubleshooting کا سنہری اصول</h2>
          <p className="text-xl text-slate-900 font-bold">کبھی بھی &quot;مہنگے پارٹس پہلے نہ بدلیں۔&quot;</p>
          <p className="text-lg text-slate-700 font-medium">ہمیشہ سادہ اور سستی چیز پہلے چیک کریں (مثلاً Tank, Valve, Pump, Cartridge, Chemical, Pressure)</p>
          <p className="text-rose-600 text-base font-bold">❌ پہلے Membrane نہ بدلیں۔</p>
        </section>

        {/* Tables */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">روزانہ آپریٹر کی چیک لسٹ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-cyan-200 bg-cyan-50 text-cyan-900">
                  <th className="py-4 px-4 font-bold">چیز</th>
                  <th className="py-4 px-4 font-bold">کیا دیکھنا ہے؟</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium text-base">
                <tr><td className="py-4 px-4 font-bold text-slate-900">Raw Water Level</td><td className="py-4 px-4">ٹینک میں پانی</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Feed Pressure</td><td className="py-4 px-4">معمول کے مطابق ہے؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">High Pressure</td><td className="py-4 px-4">معمول کے مطابق ہے؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Product TDS</td><td className="py-4 px-4">بڑھ تو نہیں گیا؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Permeate Flow</td><td className="py-4 px-4">کم تو نہیں ہوا؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Reject Flow</td><td className="py-4 px-4">درست ہے؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Chemical Tank</td><td className="py-4 px-4">خالی تو نہیں؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Dosing Pump</td><td className="py-4 px-4">چل رہی ہے؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Leakages</td><td className="py-4 px-4">کہیں پانی تو نہیں نکل رہا؟</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Pump Noise</td><td className="py-4 px-4">غیر معمولی آواز تو نہیں؟</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">عام خرابی اور فوری حل</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-cyan-200 bg-cyan-50 text-cyan-900">
                  <th className="py-4 px-4 font-bold">خرابی</th>
                  <th className="py-4 px-4 font-bold">ممکنہ وجہ</th>
                  <th className="py-4 px-4 font-bold">پہلا قدم</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium text-base">
                <tr><td className="py-4 px-4 font-bold text-slate-900">صاف پانی کم</td><td className="py-4 px-4">Cartridge بند</td><td className="py-4 px-4">Cartridge چیک کریں</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">TDS زیادہ</td><td className="py-4 px-4">Membrane خراب یا Bypass</td><td className="py-4 px-4">Membrane اور O-Ring چیک کریں</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Pressure زیادہ</td><td className="py-4 px-4">Scale</td><td className="py-4 px-4">CIP کریں</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Pressure کم</td><td className="py-4 px-4">Pump کمزور</td><td className="py-4 px-4">Pump چیک کریں</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Pump شور</td><td className="py-4 px-4">Cavitation</td><td className="py-4 px-4">Feed Water اور Suction چیک کریں</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Membrane جلد خراب</td><td className="py-4 px-4">Pretreatment خراب</td><td className="py-4 px-4">Pretreatment درست کریں</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interview Q&A */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">انٹرویو سوالات</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 1: اگر Product Water کا TDS اچانک بڑھ جائے تو سب سے پہلے کیا چیک کریں گے؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: Product TDS کی تصدیق، Feed TDS، Membrane کی حالت، Carbon Filter اور Residual Chlorine، نیز O-Ring اور Membrane کی درست تنصیب۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 2: اگر High Pressure بڑھ جائے تو پہلی کارروائی کیا ہوگی؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: Cartridge Filter، Reject Flow اور Membrane پر Scale یا Fouling کی جانچ کریں۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 3: Pump شور کیوں کرتا ہے؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: Bearing خراب ہونے، Cavitation، Air Leakage یا Coupling کے مسئلے کی وجہ سے۔</p>
            </div>
          </div>
        </section>

        {/* Instructor Advice & Completion Badge */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-cyan-50 border-r-4 border-cyan-600 p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-sm border border-cyan-100"
        >
          <h3 className="text-2xl font-extrabold text-cyan-900">استاد کی اہم نصیحت</h3>
          <p className="text-cyan-950 leading-relaxed text-lg font-medium">
            RO پلانٹ میں <strong className="text-cyan-700">ہر ریڈنگ ایک کہانی سناتی ہے۔</strong> Pressure رکاوٹ بتاتا ہے، Flow پیداوار بتاتا ہے، TDS ممبرین کی تاثیر بتاتا ہے، اور pH/ORP کیمیکل ڈوزنگ بتاتے ہیں۔ ایک کامیاب RO ٹیکنیشن اندازے سے نہیں بلکہ ریڈنگز، مشاہدے اور منظم جانچ کی بنیاد پر فیصلہ کرتا ہے۔
          </p>
          <div className="pt-6 border-t border-cyan-200">
            <h2 className="text-3xl font-extrabold text-slate-900">🎓 مبارک ہو!</h2>
            <p className="text-slate-700 mt-3 text-lg font-medium">
              ان نو اسباق کے بعد آپ نے RO پلانٹ کی <strong className="text-cyan-700">بنیادی ساخت، مشینیں، والوز، انسٹرومنٹس، ممبرین، کیمیکل ڈوزنگ، CIP اور ٹربل شوٹنگ</strong> کی مضبوط بنیاد حاصل کر لی ہے۔
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}