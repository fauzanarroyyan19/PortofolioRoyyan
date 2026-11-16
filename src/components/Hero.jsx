import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "/public/profile.png";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const copy = lang === "ID" ? {
    eyebrow: "PORTOFOLIO · 2026",
    first: "Halo, saya",
    name: "Fauzan Ar Royyan",
    role: "Web Developer & Data Analyst",
    subtitle: "Dengan minat pada AI & Machine Learning",
    desc: "Lulusan Teknik Informatika (IPK 3.72) dengan pengalaman di web development, analisis data, dan IT support. Pernah membangun IT Support Dashboard di PLN Icon Plus, mengolah 1.000+ dataset kehutanan di Kementerian Kehutanan, dan memimpin 24 asisten laboratorium.",
    contact: "Hubungi saya",
    work: "Lihat proyek",
    status: "Terbuka untuk peluang",
    location: "Jakarta, Indonesia",
  } : {
    eyebrow: "PORTFOLIO · 2026",
    first: "Hello, I'm",
    name: "Fauzan ArRoyyan",
    role: "Web Developer & Data Analyst",
    subtitle: "Interested in AI & Machine Learning",
    desc: "An Informatics Engineering graduate (GPA 3.72) with experience in web development, data analysis, and IT support. Built an IT Support Dashboard at PLN Icon Plus, processed 1,000+ forestry datasets at the Ministry of Forestry, and led a team of 24 laboratory assistants.",
    contact: "Get in touch",
    work: "Explore projects",
    status: "Open to opportunities",
    location: "Jakarta, Indonesia",
  };

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]" />
        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-16">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="order-2 md:order-1">
          <p className="section-kicker mb-5">{copy.eyebrow}</p>
          <p className="mb-1 text-lg text-slate-300">{copy.first},</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">{copy.name}<span className="text-violet-300">.</span></h1>
          <h2 className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">{copy.role}</h2>
          <p className="mt-1 text-sm font-medium text-violet-300">{copy.subtitle}</p>
          <p className="mt-6 max-w-xl text-[.98rem] leading-8 text-slate-400">{copy.desc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacts" className="inline-flex items-center gap-2 rounded-xl bg-violet-300 px-5 py-3 text-sm font-semibold text-[#151020] transition hover:-translate-y-0.5 hover:bg-violet-200">
              {copy.contact}<ArrowUpRight size={17} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-300/40 hover:bg-white/[.07]">
              {copy.work}<ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"/><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"/></span>{copy.status}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={15} className="text-violet-300"/>{copy.location}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="order-1 mx-auto w-full max-w-[360px] md:order-2 md:max-w-[440px]">
          <div className="relative aspect-[.92] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/15 via-[#171520] to-fuchsia-400/10 p-3 shadow-2xl shadow-violet-950/30">
            <div className="absolute inset-3 rounded-[1.5rem] border border-white/5" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />
            <Image src={profilePic} alt="Fauzan AR Royyan" fill priority sizes="(max-width: 768px) 90vw, 440px" className="relative z-10 object-contain object-bottom grayscale transition duration-700 hover:grayscale-0" />
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0b12]/75 px-4 py-3 backdrop-blur-xl">
              <div><p className="text-xs text-slate-400">Informatics Engineering</p><p className="mt-0.5 text-sm font-semibold text-white">GPA 3.72 / 4.00</p></div>
              <span className="rounded-lg bg-violet-300/10 px-2.5 py-1 text-xs font-semibold text-violet-200">ITPLN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
