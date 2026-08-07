"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Gauge,
  Activity,
  Droplets,
  Zap,
  Sliders,
  ShieldAlert,
  GraduationCap,
  Layers,
  Search,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Chapter5() {
  // Image gallery states for each instrument section
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
  });

  const handleNextImage = (sectionId, totalImages) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [sectionId]: ((prev[sectionId] || 0) + 1) % totalImages,
    }));
  };

  const handlePrevImage = (sectionId, totalImages) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [sectionId]: ((prev[sectionId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const instrumentsList = [
    { id: 1, name: "Pressure Gauge (پریشر گیج)", desc: "پانی کا دباؤ ناپتا ہے۔" },
    { id: 2, name: "Flow Meter (فلو میٹر)", desc: "پانی کے بہاؤ کی مقدار دکھاتا ہے۔" },
    { id: 3, name: "TDS Meter (ٹی ڈی ایس میٹر)", desc: "پانی میں گھلے ہوئے نمکیات کی مقدار معلوم کرتا ہے۔" },
    { id: 4, name: "Conductivity Meter (کنڈکٹویٹی میٹر)", desc: "پانی کی برقی رو گزارنے کی صلاحیت ناپتا ہے۔" },
    { id: 5, name: "pH Meter", desc: "پانی کی تیزابیت یا الکلائن ہونے کو ناپتا ہے۔" },
    { id: 6, name: "ORP Meter", desc: "جراثیم کو ختم کرنے کی صلاحیت ناپتا ہے۔" },
    { id: 7, name: "Turbidity Meter", desc: "پانی کی گدلاہٹ (Cloudiness) معلوم کرتا ہے۔" },
    { id: 8, name: "Pressure Switch", desc: "مقررہ پریشر پر برقی سرکٹ کو آن یا آف کرتا ہے۔" },
    { id: 9, name: "Level Switch", desc: "ٹینک میں پانی کی سطح معلوم کرتا ہے۔" },
  ];

  const detailedInstruments = [
    {
      id: "1",
      title: "1۔ Pressure Gauge (پریشر گیج)",
      subtitle: "پانی کا دباؤ دکھانے والا آلہ",
      example: "یہ ایک گول ڈائل والا آلہ ہے جو پائپ کے اندر پانی کا دباؤ (Pressure) دکھاتا ہے۔",
      points: ["پانی کا پریشر ناپنا", "فلٹر کی خرابی کی نشاندہی", "پمپ کی کارکردگی چیک کرنا", "لائن میں رکاوٹ کا پتہ لگانا"],
      icon: <Gauge className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      border: "border-cyan-200",
      images: [
        "https://images.openai.com/static-rsc-4/7q7sckWAuIk293S0VrAo-bpCWgx9xlPu_WBdE4u1B1cFA9celbYFphH9_-By3H6HowUaFaOqBhZltFJaFPN9CEOyYE7T9OEfVQ9CSzdqr9UJJkYHwAXTTJh7Ea_VN4LANka2liJoX50aAiNGoI5Xwy5CzaZfjKD6cr1KxGeuQCHoxwmO-QNA5gBcnMQHq3Q3?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/1rOsi46N2BuwdCaBG18tImq1My6RSK3s62NCYs7vsdNApdwq1DIGqwY1qntk4Y1r3KOUhfjWhyVMDnLO6P1lCgPs2alp4cRi3ODnyVgVnNk55Vc_MzKbZuk2lGL11X-I9byU7K4mZfiNMVIuMJBS3bumgF6Ju1siqb1rS0HtnLYX6upS1_wdhPGXTkXTKsju?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/DdtryE0ou-Ibqiaspm-EfaiZWX_h4eghUmlxCFWTmxsJ4tkQ1-FAk073bBK4dwBty3PVebuJnNrMtYqhhH-we7ESUKpHEr9Tn_vAuiYJ6QKknjeWKMBS_tt1e12X_bIYbspE3-vaNoqwMMuHwEBuTeB2_dPej2kfmAlRXhuB-QrVuNawKNgVfoNneHiQ_75l?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/7iLgUm4hoVXjstS0WZM2uMDYOYj0yY0-fjwKr1Q4yeTLCAtyHia-oAhhDlenjv2gTrw79d-xioeAgrzxLO4vQyKK26RBZrR5lriX9tVbyiOGZnFTqrIOFGdEAklR3I3HIsUE8bVxxbwTSDBBVK0W3ztEl2J_ZWqJpNJM8l-dC19S9p38t1hKjPtBrv5MMAn-?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/ejBOuU3qSm6gP-kT6uRkSUkrvlegSbx2uMnsK0nUPOhfG82YTcTSgGCi3Pz6i8cGHO-mot27Wt6Z9rd7riALnDCZ_DtU5rKgnnTUvjN3iX4wIossuwIQqsQzBa-kcOnSLHbYSqmfWrDPIAcwSr2kaOvT3rbd5VGz7gUH5zvdNrmvpbT_zSgimmVs6o0L0qpH?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/7q7sckWAuIk293S0VrAo-bpCWgx9xlPu_WBdE4u1B1cFA9celbYFphH9_-By3H6HowUaFaOqBhZltFJaFPN9CEOyYE7T9OEfVQ9CSzdqr9UJJkYHwAXTTJh7Ea_VN4LANka2liJoX50aAiNGoI5Xwy5CzaZfjKD6cr1KxGeuQCHoxwmO-QNA5gBcnMQHq3Q3?purpose=fullsize"
      ]
    },
    {
      id: "2",
      title: "2۔ Flow Meter (فلو میٹر)",
      subtitle: "بہاؤ کی مقدار بتانے والا آلہ",
      example: "یہ بتاتا ہے کہ ایک منٹ یا ایک گھنٹے میں کتنا پانی گزر رہا ہے۔ اکائیاں: LPM، LPH، m³/h。",
      points: ["پانی کے بہاؤ کی مقدار دکھانا", "Feed, Permeate اور Reject کی نگرانی", "فلٹر بند ہونے کی نشاندہی", "ممبرین فاؤلنگ کا پتہ لگانا"],
      icon: <Activity className="w-6 h-6" />,
      gradient: "from-cyan-500 to-teal-500",
      border: "border-teal-200",
      images: [
        "https://images.openai.com/static-rsc-4/sLAdGDPKM0aSp3cC5OOsC0OukBn4YnEyE5roP2dXapx1TVppHNqZwndcfzzvIVSIcayUgGqJz8ix-iTJsPqBanf5dLFNqNColWqbdFVmv6Yclu_SicLSXN9mzaV3y_78Vy8y3Zj3eQYRP7y7GAju7tcDkvAZmPk1uU6lgmtdn8TKAL5ExnF-0YkyyshkE8E9?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/isUx1Ygdp20R3UOrXiwkREEM9uZ1LAs9SQ1sy_l9WuldQ3_q7bkoozOxEOGBYyEpIELlomyeo4cInFhNq3eHIE738Y5BixVytBoXJg5cHLZ0Oc2PXehWgT3juo5_I_j83yA9iDnH-j9Z3hJcahwlduvVNdGxKqkZx611CX5_cdm0Ab2Zh5SEsAtO1m3Zogzn?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/pkSkX30L3b3W9xcImcnvIO84OB3LR7IfYn2JCmXKESSfGJavSuEoh6spqZ7peFSjKm7HA2NHmZ-pyRE06BE1XD68Nf8zCum7aHPrKeCjg2hPhbAoarFyBH2djQdC-V0xB00x-JaIyFbSR6dHxKqZRy7wxg5YZUlSK_9BrplRTgOHQVYyo7uQapMx7MpHl2xZ?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/enyZqj9pbwBz3j4kK6hnkI9Jq03RxT5Z0g5hY2yiEODTwJzqeu-OMsCJoMZ8eopMnCkDYhypjEvD3fxrN331CXx18kjRk77dlULmjuXf3-wyD-pDwD8BnJFGhclIViaT0cslbB-vJYQ5rQ0cTpfko-rKxHOipirkcCteFoqsZ-rKkMvjdDN3vhmdjCdoMmZj?purpose=fullsize"
      ]
    },
    {
      id: "3",
      title: "3۔ TDS Meter (ٹی ڈی ایس میٹر)",
      subtitle: "Total Dissolved Solids",
      example: "پانی میں گھلے ہوئے نمکیات کی مقدار (ppm) ناپتا ہے۔ خام پانی بمقابلہ RO پانی کے معیار کی جانچ کرتا ہے۔",
      points: ["صاف پانی کا معیار معلوم کرنا", "ممبرین کی کارکردگی چیک کرنا", "نمکیات کی مقدار بتانا", "خرابی کی فوری نشاندہی"],
      icon: <Droplets className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500",
      border: "border-amber-200",
      images: [
        "https://images.openai.com/static-rsc-4/uOk5ffN0MghEjY4XBmDB5k7K6JjWVhqSylHGrNawwv0kS2EBiNX6sjiD1A7o8chOWNnUlaVhVcHcQoow9DyHplG-hyo5XPgEYXDD-ZPi2y95t-bSfqeEKMLCWNL1xW3m--x4xvxyE2gu_jHNK7c1l-hroV32gvWLeQ8GbRs72SPSAGubkRa_hv9iXL994cdW?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/z-DCoEaiW3F4lhq-kasn5BE-moga7DHqm1u3Eg0jWcYXacbLlWUr9mEGHblQ3e8UdHE71Lkih0BonhTGSK_6tZa9uLDL2DPMP5HvMgQQBQrZa2uP3Q5rYcxK3pKHuXl6jsexTHdthgNGBJTZnkNlgI9MdcRN7AdYMBKGVRiB1U_5TgbvrXmNTN-OcnSMM_3i?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/7MZdCxMwXnMsapoMUmW6tGpV8xOy-Y2Dcbvr07xUZqIslNNxZX8EKequLSyz7xovfn4efSaMxUY2nZOpeeNSpcQOjbNg7xPRMe2tq5V0_1Fgmgm0tCRUIwcw3SZMcm8Z_IGj7gKItNL_6MvkFO-2BrJSE6cQxlNd0WfjIFOzIwetgnVqaE2rvQs4gEpKEZD_?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/eidrDDUhnJ-cAI9MFkbFLhaorK7Uvy1LVj3ux1WXYiNCeKO51OoA-dpdQRTYdVZkizxvBkd4xfwJnyvNPlql9OuCm-MLI8SOvYBOfCQ5vrxvshKUPIGrxtgMrGrFJMYRGrxP4Lm3VMik-mRScrRwEZKIeVXxuIzAfg3z3jOTe2arZ4e31ryB56b2ywxCiRDz?purpose=fullsize"
      ]
    },
    {
      id: "4",
      title: "4۔ Conductivity Meter (کنڈکٹویٹی میٹر)",
      subtitle: "برقی رو گزارنے کی صلاحیت",
      example: "یہ پانی کی برقی رو گزارنے کی صلاحیت ناپتا ہے۔ جتنا زیادہ نمک ہوگا، اتنی زیادہ Conductivity ہوگی۔",
      points: ["صنعتی پلانٹس میں اہم استعمال", "زیادہ Conductivity = زیادہ نمکیات", "کم Conductivity = زیادہ صاف پانی", "اکائی µS/cm یا mS/cm"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-500",
      border: "border-purple-200",
      images: [
        "https://images.openai.com/static-rsc-4/dld8_aPod2Ry0tSNlwc91eDphkLwt684aRPSiLz7JfZzXCxxFJ1LF879udy4CTFsnsy0vITO_PZVT-X3SFh1HRs682F2tEdC23T5UBzGBuKI2h4c7NT-L_D33iIb_Y2gCbZ2liBXWMoCBwf-oVENBQzRm4M5rYmz49khvX-tA5gqj3g6ac8Xc5mk2EOYnJoN?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/edJZkCBzU69xxRKlxsdMZn1eF8vYsJ2qbNzXcChMxhzgC_-dtDT4sv-YJ1k3u7ddvBWvGiEuXQtQf1XIp2z2jJB_XEvHq480iixMBerflc_VWHNTq7We9DgV-rxICacAfFD8aTpJNFzeS9dllIUUR5zDAhx_JdvJPouuoSELdmSEjjynthnt-h77jpN9wmZu?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/rslWNNXMcfFTFiVDrKniHL6CREerX6-gvReGGLRlX11DKXAc4CRVEJmGf3NpgAma9RlqSDPGXStaDKeCTRCWAA7pQw3b2BH91-hOeXqUojYl26XbjWCWp9EmMc_85RQynRJfkkscKpnlX5CZss6rfn7ZmPyaJL-VgTAGPLbQNOLUvOpwnK1axWH8EBE5Z9zD?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/E0h1TUiXzeCWVDqD53eIbV-ss7c-MPnxv0vrsOAKIbZZypSzY4WY3ILoji8YjzJX3mS62fSxyWnMUv0DrSMhQUi7lTcxcPGJPq0ii06hWPPJqeCvgEfYewI5EUMORJwW9NbxoPYdLkqm0SHjd3k38NvWAkQtnvBVU-eSiwQl34aNyS2aSV_lffeEsuzC7KSK?purpose=fullsize"
      ]
    },
    {
      id: "5",
      title: "5۔ pH Meter",
      subtitle: "تیزابیت اور الکلائن پن کا پیمانہ",
      example: "پانی کی تیزابیت (Acidity) یا الکلائن ہونے (Alkalinity) کو 0 سے 14 کے پیمانے پر ناپتا ہے۔",
      points: ["کیمیکل ڈوزنگ کی نگرانی", "RO پانی کے معیار کی جانچ", "ممبرین کی حفاظت", "7 غیر جانبدار، کم تیزابی، زیادہ الکلائن"],
      icon: <Sliders className="w-6 h-6" />,
      gradient: "from-rose-500 to-red-500",
      border: "border-rose-200",
      images: [
        "https://images.openai.com/static-rsc-4/8kXPnJGeM-dxgTnJNgvrMW57f3DCzL52ER-Dz8uFAHk5mg5_hmyPl1r2jUGKsGX88fgchGmvq56aYNPe6DkAxgCfG0uiduKXc11duu5tmUmrIjS8BgFB9Y9furbpNf9uFhtluY-GXbcOXHhdDRWVNQDmdvlGK2XCLSXB2y_N2BpJCCDdfvEc9wSxokj4Gmku?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/3zWBFTHZ_C1USMbWw97AAaQqzH8eFNxjVb6e6pZqVNK-mPQ4Xsk5eqCGX9GFdAu4hQu2iyfyAnbzlJXpTuPNYg4YhpoLEXWn-YA7uG3Au7YHF11J6KKC-_Dvj1C_aJfCHywTFT38LNxdSanVktDzEolLlVjhAUFqvxnYkNH3ycWbgXVje2LLLv43hb6gICv2?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/9e5aF4L2tdKFgT6Y2CAlMnhDQtKdDWUMUKqrLl-K4G9_U2zlDyYvtFVEolQXh_t0tZvZJnhnanbOsYr_VLwhtoG7-hu52B-gbUeFYNOrppJO9MTgf7ClciQsuRIggpql32Br7mNifu8xswRWFEKF_iOVu0YbqCUpEl6aNmcPIGwn2qriax7xsGp9YOMfseTo?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/b7nVWna1p-H2uFD_5R1tpljL7m3Q3kMTRTVmi2GlvcpUF9sGlhbZB-Tzp4rN_5JccLhVc_FFhz5NEmNNEYoL4nYBQW3NrZNQbY7eD7q_7VCr5wqEQ2NfZxm60s7METdHQi8-mtJWlfMJg9i3PXRmpvxTEbv8KizQRcdkXwZL_tSX2CWrgbJQX9UqAb60cR_8?purpose=fullsize"
      ]
    },
    {
      id: "6",
      title: "6۔ ORP Meter",
      subtitle: "Oxidation Reduction Potential",
      example: "یہ بتاتا ہے کہ پانی میں جراثیم کو ختم کرنے کی صلاحیت کتنی ہے۔ Ozone اور Chlorination سسٹمز میں استعمال ہوتا ہے۔",
      points: ["جراثیم کشی کی جانچ", "Ozone سسٹم کی نگرانی", "Chlorination سسٹم کنٹرول", "کم ORP پر غیر مؤثر جراثیم کشی"],
      icon: <ShieldAlert className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      border: "border-emerald-200",
      images: [
        "https://images.openai.com/static-rsc-4/TsVVzDDwxKnv_Q8zU4IzHGQq-ZYQ2LTvJ3vQH-NfenXOKrp5HSlXKBbHHbDyFYlGhlnE34xf6SHbw4X9SSrYt04lSDAaWZI_HCjAWVXRQLBbCk2mGw-dyQu9GSRBPlUNZA61rhB1YN_Mvch1RIkq2iTSG-v3J0pNZVV0U73g6wQMRjxgOXwHTIRuiuxhjooo?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/ITvycGF7K7jI9gbfRk9a3g_GUSMs3XlxFixPMnbkyr8z6MiqoOUYfn1cFqOzIFD3k7yK_Ix3ayJWo32vt43OkiPzhgKODkV926YFhoIJXUQPcU9QfDk_fs2cP-I8yWHrdm-o2fDHCrZqKnXBEgox62B3XBYfbhpiX247rI1XknSfVcub9nbtU4aLYC6ZBunw?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/jtROs7aZWThbcPSIBIc91RWp-BA29rSJbxXvuHu0AfALDgvhTCU8UGTnn2iPUNdAtig6bqByNTJs4vGBs_rmYuyhtgqqPX06dKuOzEInfOKb7vHsaMrgzwfXJ0VwT-1bhmBpXRHnawV4zijyVumIQ0FrsIa6gayXsE97qbKhDpccoB-6BzQFSpuT27wD2IN-?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/jOUE0f-uu8AYGgwgcULAbZWZiowT7B9auCqn9ax1P1Hey8Pb9VcBKg5ZEX_wxRO1UdpD0XjyuSmRFB3Wrnuev9Qnt46YtemzwV2a76NgPauOpBFd73pJT2P-JHvKd4g8osj-0zxVwH4rz7coBvMJd4gbaChp66GtmNYwM6MuCbpRJ7jUGL5uuhnLGi1J2JcD?purpose=fullsize"
      ]
    },
    {
      id: "7",
      title: "7۔ Turbidity Meter",
      subtitle: "گدلاہٹ (Cloudiness) کا آلہ",
      example: "پانی میں معلق ذرات کی مقدار NTU (Nephelometric Turbidity Unit) میں معلوم کرتا ہے۔",
      points: ["پانی کی گدلاہٹ ناپنا", "Sand Filter کی کارکردگی جانچنا", "خام پانی کے معیار کی جانچ", "معلق ذرات کی نشاندہی"],
      icon: <Search className="w-6 h-6" />,
      gradient: "from-sky-500 to-blue-600",
      border: "border-sky-200",
      images: [
        "https://images.openai.com/static-rsc-4/RsypkPpeAcqVvqbJagYw46CmQqZaNpLGOMOm_TjlWaieIgkCGqaku9v2mBiNCfE-XHxNNg4p4g5NMZsTdqZW2EeNmvnJbFu5pqSCZFX_i54kYpjIoeNDLxG6iOhMVuMj1WfbAwFjGg0xaQJh9Dd5BOzB0uj43SBB3JqczBkL2fXf_8JWnAqETO70Q5pz61AK?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/Al0yFwMHaF4VLIo_Fk7QOLnNmOg-2bKoTBy5d6i98cPdqBexAeioolVRzy5UNjYdGwW_0QcU_i6k1xn3n7rR6LFw380Dcy1uW3-Fpf9lOSK2Vwnr_OHpVx6QRltMEChYWiQDmGmNRettpWshxvYqn8x8bGgQ2zTKJRZBcZIQm_I5CioVl371H7B7bF0E1laV?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/P3vWh17ZqrqcpYGRB2BMrFQ1KX9rs6YqkqI6fYuJs5x0LaXHauBfbzT1jNG9GVEl1DAnssa-U6NfGrB5FrUVy_XtgDFq1welhKW8LgqoKyGV4ZSl1E13uFCPSl9N_7qJX1R-hI4HTPB5Kb0FyphDUMlWXyIdRyanSbkaFrE4NTvCAOAnY7L-CehWr35gtU9m?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/BXhXxT3CXhtQQRwEcHtj4qMsYZ7glD_T0JcYCiPgGodzT2EFhe-IIrBbFU69bETFCNlG6UlGlTs8arDKuaINo0RJhaE6PKxXAUFYkG67Pl4NYQJemwqv3qKbytWokcWl2L0lyhYPRxEma1tEQ4DCXXkgc2coJ8iSdfyrbK1oE2GvxhpQg9cAzuGvrwZzcw2o?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/CZoq4oiq4u-bAS9aad3iKZACFA4B-jKbeE4xxbawnOe78J-PxoRjkrxMMpsY_vsBxe51FQ7KV622d3xqnl5zFzSn8INQXrZpCCIDucxBibBsklu-1A_5Sv1Tk2zQ_tbmJcxsmRq3OC0eVWJmPeiIGZIaHoEF9xudX4ZpjP5zaN5gSKeXem3C98Y4qOVUQitB?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/PpblS802OMQKRPZFgKIP2jaS-lddXjdBRPNP5Bx7gItziSD1V44DlcghhLJNHc5VyIjN5VuXskVHBXYY_WLm-nygkZSyYhNOhTz8VfKZAkaAgx0x9zzaqM9EgRF0459mruPAWDM89m2xSly3p9STBU9ewMTNqrkfeU4MYT3yUhcG7Mt_NtZu4QaSqu2Ss7rW?purpose=fullsize"
      ]
    },
    {
      id: "8",
      title: "8۔ Pressure Switch",
      subtitle: "آٹو پریشر کنٹرولر",
      example: "مقررہ پریشر پر برقی سرکٹ کو آن یا آف کرتا ہے۔ کم پریشر ہونے پر پمپ بند کر کے حفاظت کرتا ہے۔",
      points: ["Dry Running سے حفاظت", "High Pressure سے حفاظت", "آٹومیٹک پمپ کنٹرول", "پلانٹ کی حفاظت"],
      icon: <AlertTriangle className="w-6 h-6" />,
      gradient: "from-orange-500 to-amber-600",
      border: "border-orange-200",
      images: [
        "https://images.openai.com/static-rsc-4/If6tGQFecktWapbt_IlL4JuIkFVeMHAqEGZFSzMJhuYqYW3ndTaONJEG_Xr1S4WVit-krEpFRxcFLsq2XDRKIMfCeoutgdKKNgIMjDCuv0p4upUhEmyONwmityGimR6bKk3oWUlY1nS8AUU49bkC57hX4bTQXpE1EiaRuZpSmA4uMGpUGCw7VrwLXf29zIM4?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/r6qOtWp3cd2PvvxLuMZjwtekeKlePNWsXBE9CKLuNls8tKCwIIabZsY1psqVxRl7lSGvABUU_hweYwWKtZdCVUZEUm4GJ-AxU7uu7yCh8QYCTLDMBTBIladkMBobupRaTYfNdeWvhLTsgk8Y8uqCrfa_yz8Yht4Kq68XUmj2G1LBVXO7dEIgSJgRufxkskft?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/p6f5NWmXNzTJw9ecw2ZgmxMc1uBx6odR6X2-gKLTr4jZ-ppHBQdgphfVvaWo-5SOMtguzUmE_JUU36e24_OQq9OVBcElaFJHtsJJpAvVnTubePpWSgwff_FpnGqA_Yt8Nzu93mg8_rxVvcYKgZqvkZQ5XuIFBW6XE7uWNkvTDardEfSQpi-CLAIYgiY_en-c?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/0mWHhVrWQXqNPeTJyNIEQpfzxyxzqeKspc9P2TNUQWzn-WW8CVEK1iLjAkXVbfke1bmojhmSFoSglT3GJ2IoJsFVo3mXah46CNJpmSDBte14tgjWgOs12w2_dInk-uA7MGtzkXlP5997dJmQ9n4AZm2mIL9_O74y9ymx-xI2bFaHp_v1Oyq3X-__ssOpCYQo?purpose=fullsize"
      ]
    },
    {
      id: "9",
      title: "9۔ Level Switch",
      subtitle: "ٹینک لیول کنٹرولر",
      example: "یہ ٹینک میں پانی کی سطح (Level) معلوم کرتا ہے اور ٹینک بھرنے یا خالی ہونے پر پمپ کو کنٹرول کرتا ہے۔",
      points: ["ٹینک اوور فلو سے بچاؤ", "پانی ضائع ہونے سے روکنا", "آٹومیٹک فلنگ سسٹم", "آپریٹر کی آسانی"],
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-700",
      border: "border-indigo-200",
      images: [
        "https://images.openai.com/static-rsc-4/-BiJ17FRcoawFc2RPaJOyoelU2_ufSeWuNOcHp6XmTYPjrpTFx1JuCXg-gyvSU2MKEeFjSXz4aIH8w7Av9_VFoFk7bWLQ6WckwPXDbHMn9W07rGXjWilR7rdT4wo2xYb95qzVu4KSDtQ2XvZ0ez4ENt2LaefFEP1rhylPtinwRceyRk3DMNuZFuBxEX7o_2q?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/UG7gUfHw67y62_Lu5qO1ZieSBVlrKTIascDM9DKPe58y7SBTg8c0vhA_48rthQeHM2n2bcoxQKQmt3WwwgIpA7Ex4AmhsveAT5H0H-AOO65Y5FbAWEErxtSw7UxR9teGjA763IPdN8HC1zTy2_an9o9vKW7ZkXSBlWp0ZLwl8pfA-F3Fy_64AC1xlntQdsnk?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/HElkzPAe4VC3SYDoXue5_DW2nxxN-MGhlIlJeWoEqimfMS98tluk-9VKHlf3QoqZWb_BFy980vzF_lCdWP8YdQsM9FKpBslX93IlgzNh1kUtpkWpaAMx5gAbjMlNlyYwZ0V46YwO4fv83U9ue6PIvviF96pFiYiZU6BehqkhPw3weQ7T6aZQ5TDRMd5lWKyU?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/MaJToOJaBlNB1FTZeKnrIzLTip2Zt-HF34PuoUFuGnAbEcvlRtRnDAX8LDvO4C_xrjvKrGxawjSNNpK_j3dszo7RXk__K_Ahq5YnMeOwrpJjxZX7867t8cVqIpvb92dBkPljdGvlx1XfzYU261q-XzU3V9d0KHr9xdLb1koN9bhXaWcFfd3LY7GlGg1q6Ode?purpose=fullsize"
      ]
    },
  ];

  const operatorDailyChecks = [
    "Feed Pressure",
    "High Pressure",
    "Permeate Flow",
    "Reject Flow",
    "Raw Water TDS",
    "Product Water TDS",
    "Conductivity",
    "pH",
    "Turbidity (ضرورت کے مطابق)",
  ];

  const interviewQAs = [
    {
      q: "سوال 1: Pressure Gauge اور Pressure Switch میں کیا فرق ہے؟",
      a: "Pressure Gauge صرف پریشر دکھاتا ہے، جبکہ Pressure Switch مقررہ پریشر پر برقی سرکٹ کو آن یا آف بھی کرتا ہے۔",
    },
    {
      q: "سوال 2: TDS Meter اور Conductivity Meter میں کیا فرق ہے؟",
      a: "TDS Meter پانی میں گھلے ہوئے نمکیات (ppm) کی مقدار بتاتا ہے، جبکہ Conductivity Meter پانی کی برقی رو گزارنے کی صلاحیت (µS/cm) ناپتا ہے۔",
    },
    {
      q: "سوال 3: اگر RO پلانٹ کے صاف پانی کا TDS اچانک بڑھ جائے تو سب سے پہلے کس چیز کی جانچ کریں گے؟",
      a: "سب سے پہلے RO Membrane کی حالت، پھر Carbon Filter، اور اس کے بعد آپریٹنگ پریشر اور Flow کی جانچ کریں۔",
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
              <span>آر او پلانٹ کی مکمل اردو گائیڈ</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              سبق نمبر 5
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              RO پلانٹ میں استعمال ہونے والے انسٹرومنٹس (Instruments)
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
            <span className="text-cyan-600 font-sans font-extrabold">Instrument</span> وہ آلہ ہوتا ہے جو RO پلانٹ کی کسی خاص حالت یا مقدار کو ناپتا (Measure)، دکھاتا (Display) یا کنٹرول (Control) کرتا ہے۔
          </p>
          <div className="mt-4 p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-cyan-900 font-bold">
            &quot;اگر پمپ اور فلٹرز RO پلانٹ کا جسم ہیں، تو انسٹرومنٹس اس کی آنکھیں اور کان ہیں۔&quot;
          </div>
        </motion.div>

        {/* Instruments Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-cyan-600" />
            <span>اہم انسٹرومنٹس کی فہرست</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instrumentsList.map((item, index) => (
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

        {/* Detailed Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-right mb-10 mt-4"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              ہر انسٹرومنٹ کی تفصیلی معلومات اور کام
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full mt-3" />
          </motion.div>

          <div className="space-y-8">
            {detailedInstruments.map((item, index) => {
              const currentImgIdx = activeImageIndexes[item.id] ?? 0;
              const totalImages = item.images.length;
              const isSixImages = totalImages >= 6;

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
                        {item.icon}
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

                  {/* Image Display Section: Sliding Carousel or Cellphone Collage */}
                  <div className="mb-6">
                    {/* Desktop/Tablet Sliding Carousel with Buttons */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group">
                      <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImgIdx}
                            src={item.images[currentImgIdx]}
                            alt={item.title}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>

                        {/* Slide Left / Right Buttons */}
                        <button
                          onClick={() => handlePrevImage(item.id, totalImages)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm shadow-lg z-10"
                          aria-label="Previous Image"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => handleNextImage(item.id, totalImages)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-sm shadow-lg z-10"
                          aria-label="Next Image"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image Counter Badge */}
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider">
                          {currentImgIdx + 1} / {totalImages}
                        </div>
                      </div>
                    </div>

                    {/* Cellphone 16:9 Aspect Ratio Collage (4 or 6 Images Grid) */}
                    <div className="mt-4 block">
                      <span className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-wide">
                        موبائل ویو - {isSixImages ? "چھ تصاویر کا کولاج (16:9)" : "چار تصاویر کا کولاج (16:9)"}
                      </span>
                      <div className={`grid gap-2 ${isSixImages ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
                        {item.images.slice(0, isSixImages ? 6 : 4).map((imgUrl, imgIdx) => (
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

                  <div className="bg-slate-50 rounded-2xl p-5 mb-5 border border-slate-200/60">
                    <span className="text-sm font-bold text-cyan-700 block mb-1">
                      تعارف / مثال:
                    </span>
                    <p className="text-slate-700 font-medium text-lg leading-relaxed">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-bold text-cyan-700 block mb-3">
                      اہم خصوصیات / نکات:
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

        {/* Summary Table Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            تمام انسٹرومنٹس کا خلاصہ (Summary Table)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-cyan-50 text-cyan-900 border-b border-cyan-200">
                  <th className="p-3 font-bold">Instrument</th>
                  <th className="p-3 font-bold">کیا ناپتا ہے؟</th>
                  <th className="p-3 font-bold">عام اکائی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Pressure Gauge</td>
                  <td className="p-3">پانی کا دباؤ</td>
                  <td className="p-3">Bar / psi</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Flow Meter</td>
                  <td className="p-3">پانی کا بہاؤ</td>
                  <td className="p-3">LPM / LPH</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">TDS Meter</td>
                  <td className="p-3">گھلے ہوئے نمکیات</td>
                  <td className="p-3">ppm</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Conductivity Meter</td>
                  <td className="p-3">برقی رو گزارنے کی صلاحیت</td>
                  <td className="p-3">µS/cm</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">pH Meter</td>
                  <td className="p-3">تیزابیت یا الکلائن پن</td>
                  <td className="p-3">pH</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">ORP Meter</td>
                  <td className="p-3">جراثیم کش صلاحیت</td>
                  <td className="p-3">mV</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Turbidity Meter</td>
                  <td className="p-3">پانی کی گدلاہٹ</td>
                  <td className="p-3">NTU</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Pressure Switch</td>
                  <td className="p-3">پریشر پر کنٹرول</td>
                  <td className="p-3">آن / آف</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-700">Level Switch</td>
                  <td className="p-3">پانی کی سطح</td>
                  <td className="p-3">آن / آف</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Operator Daily Checks Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-600 via-sky-600 to-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 text-right"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
            ایک ماہر RO آپریٹر روزانہ کیا چیک کرتا ہے؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {operatorDailyChecks.map((check, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 font-bold text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
                <span>{check}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-cyan-50 font-medium text-base">
            اگر ان ریڈنگز میں اچانک تبدیلی آ جائے تو وہ فوراً سمجھ جاتا ہے کہ مسئلہ پمپ، فلٹر، ممبرین یا کیمیکل ڈوزنگ میں ہے۔
          </p>
        </motion.section>

        {/* Interview Q&A Section */}
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
                انٹرویو سوالات اور جوابات
              </h2>
              <p className="text-slate-600 font-medium text-sm leading-normal">
                آپریشنل مہارت کے لیے اہم سوالات۔
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {interviewQAs.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm">
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
      </article>
    </div>
  );
}