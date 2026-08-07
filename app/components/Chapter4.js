'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Chapter4() {
  // Image datasets for each valve section
  const ballValveImages = [
    {
      src: "https://images.openai.com/static-rsc-4/Z3CAzI7BdEFeJ8UY4Fy3F3MJZE84emz9ynITHcw0gyFNfg2grE484A2Tu1kyobl-43iiFhBlNtYs-taZaNdyr-iuaxsrxSIWAoX7qudMz3-FsO_SdE0uFcMse91oAIL92Re0NZ4G-MZ-dWC60KFPYfg-yZAQluuOhgUHoA7a4Nx9KmSeooKLWXGfd0pmQ89Q?purpose=fullsize",
      alt: "Ball Valve Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/Kfi61H7AjSsc1t8xvFqUOIFcHj2Gqs2JvRGbYWy7_MMxiXVlKMYkaTWpssnZ5uEMEkhDgVZb-KS8a6U90bRlhE3f_yCA7nLp-7LrmkatHya4UdtI4QL7Q2YLdFYpwU935FWhf7NVkLGVLHGqp5-XGdbYqPFMR_AmOLMkSO81vWvdk2Bpbvrk1iMCenxfpqdh?purpose=fullsize",
      alt: "Ball Valve Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/71dL7i58Y7AYvTU3uMqnEhUWFiSGqZ5b6Hb7VomYo1FcsdnxbPkMmFUSJTua4A1-QVau_MY1X3RmxTMqw3IXmzKwh6apDGfxe9sCR5_XP1igOrK4I3m_ipR71JlXnR7VblUbfEx-V1YPfItbAfuArAwe2jhCyVOCxDu6r3iSQBfqOilveHbR20BPY6k38K0_?purpose=fullsize",
      alt: "Ball Valve Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/zVO7GtxUK3x4IZ-Uvt6Ugx2inMKkojpzlFmJSzYagV4pwMTs1bTL8qT9uSagxnURXFCPVLNsd7b0kIn7REp8YmvTz0VZwUC-OJosdGzfnux4qZi1cdTsUJifs2GhPowrNd3Ba-A9Qxoe4hveaHVmd488LIFumoakDXgYcxs78OLqxG8i2QT3IKbskIw0Gsx6?purpose=fullsize",
      alt: "Ball Valve Image 4"
    },
    {
      src: "https://images.openai.com/static-rsc-4/9OJTqCw3SU-mmUmjmI4azoYQ0lmYxb8PrHTYxcfvTbp1ac3XlWgIPwldGA8ikYZ_8CZAcLSqnqQqt5OZ8nK5wP4pEx3IEQF_ZLYov_K5SXaya_aGAxGeRg7Pab9lR-zznNGVoRWC0uZhsGWoHMV-euCls1Q1DA5IUMVXp5DrTl1yiYaxrQVKYAmCefkDCZmB?purpose=fullsize",
      alt: "Ball Valve Image 5"
    },
    {
      src: "https://images.openai.com/static-rsc-4/XKkUVzegdiqBsdn3HTI64S5rOGLHDk-cidY8kCdlVbZjwavYG1FCbjjqgGty1VeZk1NeL3eAt9geBlf73F_tW3YItn0BWu5pqMeihYU3FiIDIUdT4MQr2K5Q_YdVirld2XaFNO9969dD7bzJVdloaVydd3h8a5Y9BlWy_vF0KIx2TQoRb57BNz7z_j2XTijG?purpose=fullsize",
      alt: "Ball Valve Image 6"
    }
  ];

  const butterflyValveImages = [
    {
      src: "https://images.openai.com/static-rsc-4/sfCxt7qJM_mtLAyOsjJc5OAWxPh8dGQjI_ZAQp4weMM_9-pFcm6MIFVTJyCANIcsx29Pp1Ei1fLMqaAWgkrMw9YEoT0O_IelolNQ9Mtn6qhLWsk9bmyH4kajOwxLQSAKp1JQezdVf3NEN3mesr3B5oimRz4QnU3V_Yz_nKf5sIEvnQTdtp2ucJsI1ygC_l03?purpose=fullsize",
      alt: "Butterfly Valve Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/t3G1W14xgSlh_mD_x6nqMOaiZnoWLs7CJ31kfvazhwelQWkWu0-596XYEbJQLQ8PY_NxJt2zN1HZeTbB_JqXk17Z6zHZzotAYINqBZFqDTY7eNmINno90eEYpOQaurF3F5xzxua_zpjxuVbYToJnO1afMA7QkQfrjcqDsnlcb1F50jrQa6_T3akRbfRBLviu?purpose=fullsize",
      alt: "Butterfly Valve Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/RwYMoOq5VcQk5OjDT8HhS2yh58bg5wVvhXPdVjESSZW8u-r_ComnZIBWAS5XcjzcQN5ra9hC885PKrsO9QCJqjOK8EFH866jfOBPollNKZyS9_Xsx0us0Ii-jbY07--piiN6ssIL1GqoH9MX4TOhB8TF6wVm9j8-NHQAcYboF_BQKZR40u6PunMaJtaWhQZY?purpose=fullsize",
      alt: "Butterfly Valve Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/etTWUrGfHEQIfXvOYZ2NdqB3gGpuuC8tdbZEfIyJ4B983yi--fBF_B4Ys9Fff9V7qNMCC0Y0CRJpXSLS9BIMhILY4jIIu6fmO_-zZl5zgWfSDuoSHGXOrGF6kB9SYYOl39bXVDtMJfDsYiOKsPHeDBzX2C9ITu0Clhpc-LfVL3P_xa4rMsvF7YX4B_GudLla?purpose=fullsize",
      alt: "Butterfly Valve Image 4"
    },
    {
      src: "https://images.openai.com/static-rsc-4/m591hG3LUONY5y1TWWMOuS379JaNMAmcwyitX7TODNpJCf7xJ5ZWe0XKhzu8vPJUMuujdxSD0UTRL1DBHSxEMQl9PbCozCtYvGfeBUtfWOVRuD2cWXSsj0VXM4rYYrTFPrMf-gufkBW1-9bH-y14HigFqnluafaLPG7xuteNoHZdaNO34UeIV8ktDZynolyr?purpose=fullsize",
      alt: "Butterfly Valve Image 5"
    }
  ];

  const checkValveImages = [
    {
      src: "https://images.openai.com/static-rsc-4/4FisiIRv6q2U3pdLSpfZqrvKuCuZkUx--BdODbQaUb6BDdsSbs7olRFVACy5tgzZGgDnPhEUdEIuEQh46Q-Je6hl7cGjbZtQHiAFP6qqhXtqMzkeilj-BdZ0-ZB3kjvyuwoCx7zq17DUqcIxqGCxfrqBRxnR5aX7W7w_EGhdCtul25j0BwSDeQ3t5uR6Tt2j?purpose=fullsize",
      alt: "Check Valve Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/-LxADr5xgvr6TAKKG9ETf1N5jbo-bJSV3qGxF2EpKgzVBaSWUg_Y8qaOCRS7x9S_O8ZLYwl180X1-xSG_pnI8lgaBUqY78ySQj2CyERNzthsNPCUBqoHlNF8X06_QhoK-TtW_stDJ1Ml8mdHpeyIeHyKSCw8LRd_C45FlAnxOp9ZXU58ItljhqOzzKUcGP0t?purpose=fullsize",
      alt: "Check Valve Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/lYrhzOtp2_ecaA77IeHRjno38dBjS-ldZ4CMYQGTYV5mRqvaJb4CsTxl436BpfT9P8WNnPCkoVBbE2roT9G386pTZPsAiYpvQJ_EvQHnja9MY1sIG0WzYnkdvL9TPwdYnECSfjm-MKrdYLMWjAJ9laqgpIzao58DkeJ6PWM9q6KCbk_MucvuBKdYo9kjALw7?purpose=fullsize",
      alt: "Check Valve Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/8nZ3PlQ5OX0FSfpnHcUGSfxK6gGqv-3uqvLq7D1gZFsryxfHhEUlHuTx110mMOUgNZv5Fm0-n3sp7PeDOeBJHpz6gDZ67KqdFntRPH8C3981xA6daXAc2R2Z3FrftVkzXtBRVB6IOwHrh9EJI-LeOjyb4YQBbBCz_jRxuKhrohm2V18uuY60WNiwO3lzGWKi?purpose=fullsize",
      alt: "Check Valve Image 4"
    },
    {
      src: "https://images.openai.com/static-rsc-4/XQTwW__JJCGvC_1qrj0RpOL02qnwLgMozH2OcwQ5rLES05dldy5GvVKHPRWMwihCsgHn3fQtsQCeBATNt9KRsl5fWwNjGymZAqgk-9A2uQQzSYk87lXIh5QKxRTf_k9xHGaHE8OJbc1R31lagxdu2BhsZoYzfkUiuM2jFi1gn6q6Zx2Y1Te2YN3DpxlcE8Rw?purpose=fullsize",
      alt: "Check Valve Image 5"
    }
  ];

  const solenoidValveImages = [
    {
      src: "https://images.openai.com/static-rsc-4/hfwchKKBuGJSk8H8KkIfFXUW7bMR57TPQ75v_p9NJWynwMrYk8kGx_trMLP0Erm-IHh5uMq4n8uy3qeoALR6pz6NHp8oe77XbvvrTNW1-jtEL6hZEzxGzn6CBzBWIE3yOH5fo0orrvbEKZb3ZehRnls-A8__fQ1PxmiFbMBOqlBM-4g3kjc3frw8kStHQ1_9?purpose=fullsize",
      alt: "Solenoid Valve Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/gpaxTxGcpRNH0Fe1wYC80zrQT4Ku7Ig30848crWIyXKgZBGkBUKaMjIdIQCEdaiL6KkqOMK_7XyT_fRSEVuF8lU9HDd3-otBVd0ghm1V8XXaSVSwrMXoI8kQJ2_DXC6F9qwHVEOVo-cCCmzPHwaNQBwz7rZKmoaTMhYhqtF1bHrOjA_Blhnnd0b9HQCbK7og?purpose=fullsize",
      alt: "Solenoid Valve Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/WCM9aGFaMIlitxhvtQwHnjRVTGJ1bYAPtcqYPcfFq6p-lXh5lIxVccxJTPV_oK3PcvD-uQdwwgAXyoXEPdue7BLWH4yNRoAIQvzYu4XH0GC0bTHgKGI3F5YY0b7KpGslbZvu8KBtidIEMmu__cU1-TR-Si8SAA7H9Vfw-RJPcfnwulHZkaZowrvHUC3iB7VX?purpose=fullsize",
      alt: "Solenoid Valve Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/BDwX-lk7OeZCCoLHJcDft_lWROpKshXmOsfCs69tXAydDSU-rLX6HazH5MZgdUChWMVe-3eH1gYNOx4LFYX0IbLNfeIpYi3SgGVUF2uC7SN4kShdWF8fGnNo6mylZiDOR3W-2PVWf1P4E7lA2NIz6669cAd7lPFCdvEPjPbHHnfsWg5LnQIlQe2-0N4K_Q1e?purpose=fullsize",
      alt: "Solenoid Valve Image 4"
    },
    {
      src: "https://images.openai.com/static-rsc-4/2pw5xMusHRUqR6gxa7cwS0o5llvuGfGiXdOPf1Gc1mZ9YXoOvpZqlIErb2JocJRJnuW3PrEuBniHTmmALXHgz1HcUXPbwHxYLKq3obuz9Xe3LxSZGI7L-MiRaFmzAJjRM8_zjUK-yT08e9k5_dcEV_M8kczAHGkYOxhbGnkypPbJbv5l4jc95Casp9yg-ytz?purpose=fullsize",
      alt: "Solenoid Valve Image 5"
    }
  ];

  const prvImages = [
    {
      src: "https://images.openai.com/static-rsc-4/9dLEzE9nLzyLmH24HFaTJ5H9hka2ymRfnyt6MWMvmLOartq4qD1ybNgzZuJKJ3Xgzpg4-an0h9qVAA-TgYcThCK5wJ0rmCTwOUuRQef5xdvKAgmLDW7LnOrncIcAjL8vT0fcvvAe9haP7Jj1czIGo_rRPKwPBbrUEuqp8g60HTDrD1LhLfjc52u61HRzQKem?purpose=fullsize",
      alt: "Pressure Relief Valve Image 1"
    },
    {
      src: "https://images.openai.com/static-rsc-4/n09quPibQBQR-4kotdHdRuU47EzXJgG3iGssxZW-_SupB26fd1uTKeW143Ljkgvg7DBy6KYEndN2PSRrsYzIaW6U6D0YIfXE-nJwx0ukEWr3gcOWg4vAy0TYTj_VONaIom_D-4O8B2503q_OjWdzpLLx30YXru-rSA30t-OqLONV5KZ03w6dVqI-xe2b646z?purpose=fullsize",
      alt: "Pressure Relief Valve Image 2"
    },
    {
      src: "https://images.openai.com/static-rsc-4/ttiL_HiliLJa3Ap7BIJr_EY-PeJCLWg4jBGYJbxfTb02F2JwkYqI8seXoHt3vMHUm8RT9SAzKBHLHivIFnXYMl6fr5qC_i2fEmdoiZ20ihLTwUDVXAj0UT1UYAOouLihp_agT6S4aR8MMSfisthRqQhlyfNXd179cuU20vd0JoNZcjla32xDm7JhbMLt7HR4?purpose=fullsize",
      alt: "Pressure Relief Valve Image 3"
    },
    {
      src: "https://images.openai.com/static-rsc-4/cBVCo0Uw2gDQ9Hkb8EmaCX63m2kGVCp2DxSLd5y_uNqihQY7ZcPyOtnvA1O2l38hawxaHDkOVivvfH5T0SiyiQYYKAY1Z_d47w3udZLc4rzSVm_1DWC2PY-yyK5WigKKQ_ny5yaHABxhIv6d6e8b7H5BAUili5TCX-E7onA-enwLOayLUCMBNDTK0bz9MJOX?purpose=fullsize",
      alt: "Pressure Relief Valve Image 4"
    }
  ];

  // Separate states for each carousel
  const [ballIdx, setBallIdx] = useState(0);
  const [butterflyIdx, setButterflyIdx] = useState(0);
  const [checkIdx, setCheckIdx] = useState(0);
  const [solenoidIdx, setSolenoidIdx] = useState(0);
  const [prvIdx, setPrvIdx] = useState(0);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-900 font-sans px-4 py-8 md:px-12 lg:px-24 selection:bg-teal-500 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header Section (Fixed Closing Tags & Structure) */}
        <div className="relative border-b border-slate-200 pb-6 text-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-600 text-white p-8 shadow-md">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl -z-0"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-100" />
              <span>آر او پلانٹ کی مکمل اردو گائیڈ</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              سبق نمبر 4
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              RO پلانٹ میں استعمال ہونے والے والوز <span className="text-cyan-200 font-normal text-2xl md:text-3xl">(Valves)</span>
            </h2>
          </div>
        </div>

        {/* Callout Box */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white border-r-4 border-teal-500 p-6 rounded-2xl shadow-sm border border-slate-200 space-y-2"
        >
          <p className="text-lg leading-relaxed text-slate-900 font-semibold">
            ایک اچھا RO آپریٹر مشینوں کے ساتھ ساتھ والوز (Valves) کو بھی اچھی طرح جانتا ہے!
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            کیونکہ روزمرہ آپریشن، مینٹیننس اور خرابیوں کی تشخیص میں انہی کا سب سے زیادہ استعمال ہوتا ہے۔
          </p>
        </motion.div>

        {/* Section: What is a Valve */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">Valve کیا ہوتا ہے؟</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong className="text-slate-900">Valve</strong> ایک ایسا آلہ ہے جو پائپ کے اندر پانی کے بہاؤ (Flow) کو <strong className="text-slate-900">شروع (Start)، بند (Stop)، کم (Throttle)، زیادہ (Regulate)</strong> یا <strong className="text-slate-900">ایک ہی سمت (One-way)</strong> میں رکھنے کے لیے استعمال ہوتا ہے۔
          </p>
          <blockquote className="border-r-2 border-teal-500 pr-3 text-teal-700 font-medium text-sm italic">
            "Valve پانی کے بہاؤ کا دروازہ (Gate) ہوتا ہے۔"
          </blockquote>
        </section>

        {/* 1. Ball Valve */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">1۔ Ball Valve (بال والو)</h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full h-[380px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={ballIdx}
                src={ballValveImages[ballIdx].src}
                alt={ballValveImages[ballIdx].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>
            <button
              onClick={() => setBallIdx((prev) => (prev - 1 + ballValveImages.length) % ballValveImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              onClick={() => setBallIdx((prev) => (prev + 1) % ballValveImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Next"
            >
              ❯
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {ballValveImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBallIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${ballIdx === i ? 'bg-teal-400 w-6' : 'bg-slate-600'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {ballValveImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm ${idx === 0 ? 'col-span-2 h-44' : 'h-32'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-slate-700 text-sm mt-4">
            <h3 className="font-bold text-slate-900">تعارف اور کام</h3>
            <p>Ball Valve کے اندر سوراخ والی ایک دھاتی یا PVC کی گیند ہوتی ہے۔ ہینڈل 90 ڈگری گھومنے پر راستہ کھل یا بند ہوجاتا ہے۔</p>
            <p><strong className="text-slate-900">شناخت:</strong> ہینڈل پائپ کے متوازی (Parallel) ہو تو کھلا، عمودی (Perpendicular) ہو تو بند۔</p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-semibold text-teal-600 block mb-1">فائدے:</span>
                <p className="text-xs text-slate-600">✔ جلدی کھلتا/بند ہوتا ہے، لیکیج کم ہوتی ہے، استعمال میں آسان ہے۔</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-semibold text-rose-600 block mb-1">نقصانات و خرابیاں:</span>
                <p className="text-xs text-slate-600">✘ مستقل Flow کنٹرول کے لیے موزوں نہیں۔ ہینڈل جام یا سیل لیکیج ہو سکتی ہے۔</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Butterfly Valve */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">2۔ Butterfly Valve (بٹر فلائی والو)</h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full h-[380px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={butterflyIdx}
                src={butterflyValveImages[butterflyIdx].src}
                alt={butterflyValveImages[butterflyIdx].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>
            <button
              onClick={() => setButterflyIdx((prev) => (prev - 1 + butterflyValveImages.length) % butterflyValveImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              onClick={() => setButterflyIdx((prev) => (prev + 1) % butterflyValveImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Next"
            >
              ❯
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {butterflyValveImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setButterflyIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${butterflyIdx === i ? 'bg-teal-400 w-6' : 'bg-slate-600'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {butterflyValveImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm ${idx === 0 ? 'col-span-2 h-44' : 'h-32'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-slate-700 text-sm mt-4">
            <h3 className="font-bold text-slate-900">تعارف اور استعمال</h3>
            <p>درمیان میں تتلی نما گول پلیٹ ہوتی ہے۔ بڑے قطر (Large Diameter) والی پائپ لائنوں جیسے سینڈ فلٹر، کاربن فلٹر اور بڑی مین لائنوں پر پانی کنٹرول کرنے کے لیے استعمال ہوتا ہے۔</p>
            <p className="text-xs text-slate-600"><strong className="text-slate-900">فائدے:</strong> ہلکا وزن، کم قیمت، بڑے سائز میں باآسانی دستیاب۔</p>
          </div>
        </section>

        {/* 3. Check Valve (NRV) */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">3۔ Check Valve (NRV - Non-Return Valve)</h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full h-[380px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={checkIdx}
                src={checkValveImages[checkIdx].src}
                alt={checkValveImages[checkIdx].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>
            <button
              onClick={() => setCheckIdx((prev) => (prev - 1 + checkValveImages.length) % checkValveImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              onClick={() => setCheckIdx((prev) => (prev + 1) % checkValveImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Next"
            >
              ❯
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {checkValveImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCheckIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${checkIdx === i ? 'bg-teal-400 w-6' : 'bg-slate-600'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {checkValveImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm ${idx === 0 ? 'col-span-2 h-44' : 'h-32'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-slate-700 text-sm mt-4">
            <h3 className="font-bold text-slate-900">تعارف اور کام</h3>
            <p>یہ ایک خودکار (Automatic) والو ہے جس کا کوئی ہینڈل نہیں۔ یہ پانی کو صرف ایک سمت میں گزرنے دیتا ہے اور پمپ کے بعد بیک فلو (Backflow) روکتا ہے۔</p>
            <p className="text-xs text-rose-600 font-medium">⚠️ اگر نہ لگایا جائے تو پانی واپس آ سکتا ہے اور پمپ الٹی سمت میں گھوم کر خراب ہو سکتا ہے۔</p>
          </div>
        </section>

        {/* 4. Solenoid Valve */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">4۔ Solenoid Valve (سولینائیڈ والو)</h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full h-[380px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={solenoidIdx}
                src={solenoidValveImages[solenoidIdx].src}
                alt={solenoidValveImages[solenoidIdx].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>
            <button
              onClick={() => setSolenoidIdx((prev) => (prev - 1 + solenoidValveImages.length) % solenoidValveImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              onClick={() => setSolenoidIdx((prev) => (prev + 1) % solenoidValveImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Next"
            >
              ❯
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {solenoidValveImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSolenoidIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${solenoidIdx === i ? 'bg-teal-400 w-6' : 'bg-slate-600'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {solenoidValveImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm ${idx === 0 ? 'col-span-2 h-44' : 'h-32'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-slate-700 text-sm mt-4">
            <h3 className="font-bold text-slate-900">تعارف اور استعمال</h3>
            <p>یہ بجلی سے چلنے والا خودکار والو ہے جس کے اوپر کوائل (Coil) لگی ہوتی ہے۔ آٹومیٹک پلانٹس، آٹو فلش سسٹمز اور کیمیکل ڈوزنگ میں کثرت سے استعمال ہوتا ہے۔</p>
          </div>
        </section>

        {/* 5. Pressure Relief Valve (PRV) */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">5۔ Pressure Relief Valve (PRV)</h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full h-[380px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={prvIdx}
                src={prvImages[prvIdx].src}
                alt={prvImages[prvIdx].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>
            <button
              onClick={() => setPrvIdx((prev) => (prev - 1 + prvImages.length) % prvImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              onClick={() => setPrvIdx((prev) => (prev + 1) % prvImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-teal-500 hover:text-white text-white p-3 rounded-full border border-slate-700 transition-colors shadow-lg"
              aria-label="Next"
            >
              ❯
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
              {prvImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPrvIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${prvIdx === i ? 'bg-teal-400 w-6' : 'bg-slate-600'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {prvImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm ${idx === 0 ? 'col-span-2 h-44' : 'h-32'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 text-slate-700 text-sm mt-4">
            <h3 className="font-bold text-slate-900">حفاظتی والو (Safety Valve)</h3>
            <p>سسٹم میں پریشر حد سے زیادہ بڑھ جانے پر یہ خود کھل جاتا ہے اور اضافی پریشر خارج کر کے پائپ، ممبرین اور پمپ کو پھٹنے سے بچاتا ہے۔</p>
          </div>
        </section>

        {/* Summary Table Section */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">تمام والوز کا خلاصہ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-teal-700 text-sm bg-slate-50">
                  <th className="py-3 px-4">والو</th>
                  <th className="py-3 px-4">کنٹرول</th>
                  <th className="py-3 px-4">ہاتھ سے یا خودکار؟</th>
                  <th className="py-3 px-4">بنیادی کام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                <tr><td className="py-3 px-4 font-semibold text-slate-900">Ball Valve</td><td className="py-3 px-4">On / Off</td><td className="py-3 px-4">ہاتھ سے</td><td className="py-3 px-4">پانی کھولنا یا بند کرنا</td></tr>
                <tr><td className="py-3 px-4 font-semibold text-slate-900">Butterfly Valve</td><td className="py-3 px-4">On / Off + Flow</td><td className="py-3 px-4">ہاتھ سے</td><td className="py-3 px-4">بڑی پائپ لائنوں میں بہاؤ کنٹرول</td></tr>
                <tr><td className="py-3 px-4 font-semibold text-slate-900">Check Valve (NRV)</td><td className="py-3 px-4">One Way</td><td className="py-3 px-4">خودکار</td><td className="py-3 px-4">پانی کو واپس آنے سے روکنا</td></tr>
                <tr><td className="py-3 px-4 font-semibold text-slate-900">Solenoid Valve</td><td className="py-3 px-4">On / Off</td><td className="py-3 px-4">بجلی سے</td><td className="py-3 px-4">خودکار کھولنا اور بند کرنا</td></tr>
                <tr><td className="py-3 px-4 font-semibold text-slate-900">Pressure Relief Valve</td><td className="py-3 px-4">Safety</td><td className="py-3 px-4">خودکار</td><td className="py-3 px-4">زیادہ پریشر خارج کرنا</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Example */}
        <section className="space-y-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">ایک عملی مثال</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pr-4">
            <li>آپ <strong className="text-slate-900">Ball Valve</strong> کھولتے ہیں، تو را واٹر ٹینک سے پانی پمپ کی طرف جاتا ہے۔</li>
            <li>پانی <strong className="text-slate-900">Check Valve (NRV)</strong> سے گزرتا ہے جو اسے واپس نہیں آنے دیتا۔</li>
            <li><strong className="text-slate-900">High Pressure Pump</strong> پانی کو دباؤ سے ممبرین کی طرف بھیجتا ہے۔</li>
            <li>پریشر زیادہ ہونے پر <strong className="text-slate-900">Pressure Relief Valve</strong> سسٹم کو بچا لیتا ہے۔</li>
            <li>آٹومیٹک پلانٹ میں <strong className="text-slate-900">Solenoid Valve</strong> PLC کے حکم پر کام کرتا ہے۔</li>
          </ol>
        </section>

        {/* Interview Q&A */}
        <section className="space-y-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-teal-600">انٹرویو سوالات</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm">سوال 1: کیا Ball Valve کو 45° پر رکھ کر Flow کنٹرول کیا جا سکتا ہے؟</h3>
              <p className="text-slate-600 text-xs mt-1">جواب: عارضی طور پر کیا جا سکتا ہے، لیکن مسلسل Flow Control کے لیے Ball Valve بہترین انتخاب نہیں۔</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm">سوال 2: Check Valve کو NRV کیوں کہتے ہیں؟</h3>
              <p className="text-slate-600 text-xs mt-1">جواب: کیونکہ یہ پانی کو صرف ایک سمت میں جانے دیتا ہے اور واپس آنے (Non-Return) سے روکتا ہے۔</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm">سوال 3: RO پلانٹ میں سب سے اہم حفاظتی والو کون سا ہے؟</h3>
              <p className="text-slate-600 text-xs mt-1">جواب: پریشر ریلیف والو (PRV)۔</p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}