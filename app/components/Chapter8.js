"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chapter8() {
  const images = [
    {
      src: "https://images.openai.com/static-rsc-4/FioITdKF3XpyT8SQDqOnNUvKKE3aXlzq5syumMvx5GB_vrxnUJo6tNntsejJDYtT5AcEerHrsyefZ0XAJ4jRKLQpgdxy8z7GWK1K1NY2Aqob5LNmE7a4KiUa-0VtuIuVAT2d6Uh1l2xINvR18UpzdtpR7TXv1PGyhLaFDSSCq4VraYjPj7bp8QIDwekv4rEa?purpose=fullsize",
      alt: "RO Plant CIP System Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/9NhnvH2L31TjjbQo1Olp5jys8hJmTVyvUjQkNIV0ySb-BdwBbSoiU8z92IRjNmvZYUE26bfZXjCK3_maaDRXQVDLamzENjrQT_jyDSDGxKmd7AiS6_7AorLswr2Sw9ef9vIZQT7TpdMxWpip5B7tbAkk0LL1lxs5p5_-9Vix9xBg8JSxvvH8OYK2Rc_rMUCt?purpose=fullsize",
      alt: "RO Plant CIP System Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/OMTqmKnXpVul4vvxfxNScru3a_jZ6-GtG86is4J2nCS3PYNZmTtTN5XIhzahignQq9vm_XH680GyD62Lotqnkdw2AT5g0aLvCLnNdDv9RwiAJHK4WkArihVlTrvtmTjGpKuap73pvmB39VF_SlIMsDrLddsHfqv2gzHmT0girl1dSMdEypy3MppwKGxLXjW3?purpose=fullsize",
      alt: "RO Plant CIP System Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/a72ZyWjtlbYAnmORmpO4KyIFVzXw2qV8PJoh40Uep61URn19XRJmFbbTciKYaVzM9N6PHDfVGgHm0aeMDuAhWlEs9O2iVTiMh-dyLQ5GQPrmp8MEA23cTot6wj1BBRl_NNQo-77Yt0EiAsv9RwFQZpH3PXXnaC9MRIxVfqFgCIINFa_Mau6rSypyOjSxNqYO?purpose=fullsize",
      alt: "RO Plant CIP System Image 4"
    },
    {
      src: "https://images.openai.com/static-rsc-4/kHZvf4bfomTFYWEQLH1wOg7lcqrk2fDqsaUeCI6aluPkDlPeOHGs3VOlGsFjxOyXeba5ce5i8sL5HeplpwcbhE5EQDyKPWddFm64RIm7z99R8xoDG8PX89il9lLejGT58-KH9Cq1FdQwAvT1sri7A89ftqSiBToCKElDjOho5c4clLH21aKi9T-Nc3t8qmnG?purpose=fullsize",
      alt: "RO Plant CIP System Image 5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
              سبق نمبر 8
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-normal max-w-4xl">
              CIP (Cleaning in Place) <span className="font-normal text-2xl md:text-3xl">(آر او ممبرین کی صفائی)</span>
            </h1>
          </div>
        </div>

        {/* Callout / Warning Box */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white border-r-4 border-cyan-500 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3"
        >
          <p className="text-xl sm:text-2xl leading-relaxed text-slate-800 font-bold">
            CIP (Cleaning in Place) RO پلانٹ کے اہم ترین مینٹیننس کاموں میں سے ایک ہے۔
          </p>
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            اگر ممبرین کو وقت پر اور صحیح طریقے سے صاف نہ کیا جائے تو اس کی کارکردگی کم ہو جاتی ہے، توانائی کا خرچ بڑھ جاتا ہے، اور آخرکار نئی ممبرین لگانے کی ضرورت پڑ سکتی ہے۔
          </p>
        </motion.div>

        {/* Section 1: What is CIP */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">1۔ CIP کیا ہے؟</h2>
          <p className="text-lg text-slate-700 font-medium"><strong className="text-cyan-700">CIP = Cleaning in Place</strong></p>
          <p className="text-lg text-slate-700 font-medium">اردو میں: <strong className="text-slate-900">"بغیر ممبرین کو پلانٹ سے نکالے، اسی کی جگہ پر اس کی صفائی کرنا۔"</strong></p>
          <p className="text-base text-slate-700 leading-relaxed">اس طریقے میں ممبرین کو ہاؤسنگ سے نکالنے کی ضرورت نہیں پڑتی، بلکہ صفائی کا محلول (Cleaning Solution) ایک الگ سسٹم کے ذریعے ممبرین کے اندر گردش (Circulation) کرتا ہے۔</p>
        </section>

        {/* Section 2: Why CIP is needed */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">2۔ CIP کی ضرورت کیوں پڑتی ہے؟</h2>
          <p className="text-lg text-slate-700 font-medium">وقت کے ساتھ ممبرین پر مختلف قسم کی تہیں جم جاتی ہیں، جیسے:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pr-4 text-base">
            <li>کیلشیم اور میگنیشیم کا اسکیل (Scale)</li>
            <li>مٹی اور باریک ذرات (Suspended Solids)</li>
            <li>نامیاتی مادے (Organic Fouling)</li>
            <li>بیکٹیریا اور کائی (Biofouling)</li>
            <li>آئرن یا مینگنیز کی تہہ</li>
          </ul>
          <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100 text-rose-950 text-base space-y-2 mt-4">
            <p className="font-bold">❌ صاف پانی کم بنتا ہے۔</p>
            <p className="font-bold">❌ پریشر بڑھ جاتا ہے۔</p>
            <p className="font-bold">❌ TDS خراب ہو سکتا ہے۔</p>
            <p className="font-bold">❌ بجلی کا خرچ بڑھ جاتا ہے۔</p>
          </div>
        </section>

        {/* Section 4: CIP System Components (Carousel for Desktop, Collage for Mobile) */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">4۔ CIP System کے حصے</h2>

          {/* Desktop View: Sliding Image Carousel */}
          <div className="hidden md:block relative w-full h-[450px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>

            {/* Carousel Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors shadow-lg"
              aria-label="Previous Slide"
            >
              ❯
            </button>
            <button
              onClick={nextSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors shadow-lg"
              aria-label="Next Slide"
            >
              ❮
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-cyan-400 w-6' : 'bg-slate-600'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View: Dynamic Collage Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm ${
                  idx === 0 ? 'col-span-2 h-48' : 'h-36'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-slate-700 font-medium mt-6">ایک عام CIP سسٹم میں یہ حصے ہوتے ہیں:</p>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 font-medium pr-4 text-base">
            <li><strong className="text-slate-900">CIP Tank:</strong> صفائی کا محلول تیار کرنے کے لیے۔</li>
            <li><strong className="text-slate-900">CIP Pump:</strong> محلول کو ممبرین کے اندر گردش کراتا ہے۔</li>
            <li><strong className="text-slate-900">Heater:</strong> کیمیکلز کو نیم گرم پانی میں بہتر کام کرنے کے لیے (تقریباً 25–35°C)۔</li>
            <li><strong className="text-slate-900">Hose اور Valves:</strong> صفائی کے دوران محلول کو صحیح راستے سے گزارنے کے لیے۔</li>
          </ol>
        </section>

        {/* Section 3: When to clean */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">3۔ Membrane کو کب صاف کرنا چاہیے؟</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-cyan-700 text-lg">Permeate Flow میں کمی</h3>
              <p className="text-slate-700 text-base">مثلاً پہلے 1000 LPH پانی بنتا تھا، اب صرف 800 LPH بن رہا ہے۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-cyan-700 text-lg">Pressure میں اضافہ</h3>
              <p className="text-slate-700 text-base">High Pressure Pump کو زیادہ پریشر درکار ہوتا ہے۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-cyan-700 text-lg">Pressure Drop میں اضافہ</h3>
              <p className="text-slate-700 text-base">ممبرین کے اندر رکاوٹ بڑھنے لگتی ہے۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-cyan-700 text-lg">Salt Rejection میں خرابی</h3>
              <p className="text-slate-700 text-base">پہلے TDS 10 ppm تھا، جو اب بڑھ کر 30 ppm ہو گیا۔</p>
            </div>
          </div>
          <blockquote className="border-r-4 border-cyan-500 pr-4 text-cyan-800 text-base italic font-medium mt-4">
            بہترین طریقہ یہ ہے کہ ریڈنگز کی بنیاد پر فیصلہ کیا جائے، صرف وقت کی بنیاد پر نہیں۔
          </blockquote>
        </section>

        {/* Section 5: Acid vs Alkaline Cleaning */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">5 الف۔ Acid Cleaning</h2>
            <p className="text-lg text-slate-700"><strong className="text-slate-900">مقصد:</strong> معدنی اسکیل ختم کرنا (جیسے Calcium Carbonate، Metal Oxides)</p>
            <p className="text-lg text-slate-700"><strong className="text-slate-900">عام کیمیکل:</strong> Citric Acid یا کم ارتکاز والا Hydrochloric Acid (کمپنی کی ہدایات کے مطابق)</p>
          </section>

          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">5 ب۔ Alkaline Cleaning</h2>
            <p className="text-lg text-slate-700"><strong className="text-slate-900">مقصد:</strong> نامیاتی مادے، تیل، چکنائی اور Biofouling کو ختم کرنا۔</p>
            <p className="text-lg text-slate-700"><strong className="text-slate-900">عام کیمیکل:</strong> Sodium Hydroxide (NaOH) یا خصوصی Alkaline Cleaner</p>
          </section>
        </div>

        <div className="bg-cyan-50 p-5 rounded-2xl border border-cyan-100 text-center text-cyan-900 font-bold text-lg">
          💡 یاد رکھنے کا آسان طریقہ: Acid = Mineral Scale | Alkaline = Organic Dirt
        </div>

        {/* Section 6: Step by Step CIP */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">6۔ CIP کا مرحلہ وار طریقہ</h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 font-medium pr-4 text-base">
            <li>پلانٹ بند کریں۔</li>
            <li>ممبرین کو Feed Water سے الگ کریں۔</li>
            <li>CIP Tank میں مطلوبہ مقدار میں پانی بھریں۔</li>
            <li>کمپنی کی ہدایات کے مطابق کیمیکل شامل کریں۔</li>
            <li>CIP Pump چلائیں۔</li>
            <li>Cleaning Solution کو ممبرین میں گردش کرائیں۔</li>
            <li>ضرورت ہو تو محلول کو کچھ وقت کے لیے ممبرین میں رہنے دیں (Soaking)۔</li>
            <li>صفائی کے بعد صاف پانی سے اچھی طرح Flush کریں تاکہ کیمیکل مکمل طور پر نکل جائیں۔</li>
            <li>پلانٹ دوبارہ چلائیں اور تمام ریڈنگز چیک کریں۔</li>
          </ol>
        </section>

        {/* Section 7: Post Cleaning Table */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">7۔ Cleaning کے بعد کیا چیک کریں؟</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-cyan-200 bg-cyan-50 text-cyan-900">
                  <th className="py-4 px-4 font-bold">پیرامیٹر</th>
                  <th className="py-4 px-4 font-bold">صفائی سے پہلے</th>
                  <th className="py-4 px-4 font-bold">صفائی کے بعد</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium text-base">
                <tr><td className="py-4 px-4 font-bold text-slate-900">Feed Pressure</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Pressure Drop</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Permeate Flow</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Reject Flow</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Product TDS</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
                <tr><td className="py-4 px-4 font-bold text-slate-900">Conductivity</td><td className="py-4 px-4">✔</td><td className="py-4 px-4">✔</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8 & 9: Common Mistakes & Safety */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">8۔ عام غلطیاں</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-base pr-2">
              <li>ضرورت سے زیادہ طاقتور کیمیکل استعمال کرنا۔</li>
              <li>بہت گرم پانی استعمال کرنا۔</li>
              <li>کیمیکل کو اچھی طرح Flush نہ کرنا۔</li>
              <li>غلط Acid یا غلط Alkaline Cleaner استعمال کرنا۔</li>
              <li>بہت زیادہ پریشر پر CIP کرنا (CIP ہمیشہ کم پریشر پر کی جاتی ہے)۔</li>
            </ul>
          </section>

          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">9۔ حفاظتی احتیاطیں</h2>
            <ul className="list-disc list-inside space-y-2 text-emerald-800 font-bold text-base pr-2">
              <li>✔ دستانے اور حفاظتی چشمہ پہنیں۔</li>
              <li>✔ کیمیکل جلد پر نہ لگنے دیں۔</li>
              <li>✔ اچھی ہوا دار جگہ پر کام کریں۔</li>
              <li>✔ کیمیکلز کو آپس میں نہ ملائیں۔</li>
              <li>✔ کیمیکل ہمیشہ لیبل والے برتن میں رکھیں۔</li>
            </ul>
          </section>
        </div>

        {/* Section 10 & Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">10۔ اگر CIP سے بھی مسئلہ حل نہ ہو؟</h2>
            <p className="text-lg text-slate-700">ممکنہ وجوہات:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-base pr-2">
              <li>Membrane مستقل طور پر خراب ہو چکی ہے۔</li>
              <li>ممبرین میں سوراخ آ گیا ہے۔</li>
              <li>کلورین نے ممبرین کو نقصان پہنچایا ہے۔</li>
              <li>ممبرین کی عمر پوری ہو چکی ہے۔ (تبدیل کرنا پڑے گی)</li>
            </ul>
          </section>

          <section className="space-y-4 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">CIP کا خلاصہ</h2>
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 text-sm space-y-2 text-center font-bold">
              <p>پلانٹ بند کریں ↓</p>
              <p>Cleaning Solution تیار کریں ↓</p>
              <p>CIP Pump سے گردش کرائیں ↓</p>
              <p>Soaking کریں ↓</p>
              <p>صاف پانی سے Flush کریں ↓</p>
              <p>پلانٹ دوبارہ چلائیں</p>
            </div>
          </section>
        </div>

        {/* Interview Q&A */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">انٹرویو سوالات</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 1: CIP کی مکمل شکل کیا ہے؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: Cleaning in Place</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 2: Acid Cleaning کب کی جاتی ہے؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: جب ممبرین پر معدنی اسکیل (Mineral Scale) جمع ہو جائے۔</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg">سوال 3: Alkaline Cleaning کب کی جاتی ہے؟</h3>
              <p className="text-slate-700 text-base mt-2 font-medium">جواب: جب ممبرین پر نامیاتی مادے، تیل، چکنائی یا Biofouling جمع ہو جائے۔</p>
            </div>
          </div>
        </section>

        {/* Instructor Advice */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-cyan-50 border-r-4 border-cyan-600 p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-sm border border-cyan-100"
        >
          <h3 className="text-2xl font-extrabold text-cyan-900">استاد کی اہم نصیحت</h3>
          <p className="text-cyan-950 leading-relaxed text-lg font-medium">
            ایک ماہر RO آپریٹر <strong className="text-cyan-700">ہر مسئلے پر فوراً CIP نہیں کرتا۔</strong> پہلے وہ ریڈنگز، پانی کے معیار، پری ٹریٹمنٹ، کیمیکل ڈوزنگ اور آپریٹنگ حالات کا جائزہ لیتا ہے۔ اگر واقعی ممبرین پر اسکیل یا فاؤلنگ کی علامات ہوں، تب مناسب قسم کی CIP کی جاتی ہے۔ غیر ضروری صفائی بھی ممبرین کی عمر کم کر سکتی ہے۔
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}