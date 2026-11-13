"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "/public/profile.png";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    ID: {
      title: (
        <>
          Fauzan Ar Royyan adalah{" "}
          <span className="text-purple-500">Web Developer</span> <br /> dan{" "}
          <span className="text-purple-500">Data Analyst</span>
        </>
      ),
      subtitle: "Dengan minat pada AI & Machine Learning",
      desc: `Lulusan Teknik Informatika (IPK 3.72) dengan pengalaman di web development, analisis data, dan IT support. Pernah membangun IT Support Dashboard di PLN Icon Plus, mengolah 1000+ dataset kehutanan di Kementerian Kehutanan, dan memimpin 24 asisten laboratorium sebagai Koordinator Lab.`,
      button: "Hubungi saya",
      statusLabel: "Terbuka untuk peluang",
      statusHighlight: "Web Developer / Data Analyst",
      location: "Jakarta, Indonesia",
    },
    EN: {
      title: (
        <>
          Fauzan AR Royyan is a{" "}
          <span className="text-purple-500">Web Developer</span> <br /> and{" "}
          <span className="text-purple-500">Data Analyst</span>
        </>
      ),
      subtitle: "With an interest in AI & Machine Learning",
      desc: `Informatics Engineering graduate (GPA 3.72) with experience in web development, data analysis, and IT support. Built an IT Support Dashboard at PLN Icon Plus, processed 1000+ forestry datasets at the Ministry of Forestry, and led a team of 24 lab assistants as Laboratory Coordinator.`,
      button: "Contact me",
      statusLabel: "Open to opportunities as",
      statusHighlight: "Web Developer / Data Analyst",
      location: "Jakarta, Indonesia",
    },
  };

  return (
    <section className="w-full min-h-[85vh] relative bg-[#0f0f16] text-gray-200 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-10 overflow-hidden">
      {/* Background animation */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-60 h-60 bg-pink-500/20 rounded-full blur-3xl bottom-20 right-20"
      />

      {/* Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Text section */}
        <div className="flex flex-col items-start text-left space-y-6 md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            {content[lang].title}
          </motion.h1>

          <p className="text-purple-300 text-sm sm:text-base font-medium -mt-2">
            {content[lang].subtitle}
          </p>

          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            {content[lang].desc}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-2 px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-md transition-all"
          >
            {content[lang].button}
          </motion.a>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 mt-3 border border-gray-700 px-3 py-2 rounded-md">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span>{content[lang].statusLabel}</span>
            <span className="font-semibold text-purple-400">
              {content[lang].statusHighlight}
            </span>
          </div>

          <p className="text-xs text-gray-500">{content[lang].location}</p>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:w-1/2"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
            <Image
              src={profilePic}
              alt="Fauzan AR Royyan"
              fill
              className="rounded-lg object-contain grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
