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
          Royyan adalah{" "}
          <span className="text-purple-500">Web Developer</span> <br /> dan{" "}
          <span className="text-purple-500">
            Penggemar AI & Machine Learning
          </span>
        </>
      ),
      desc: `Halo, saya Royyan — seorang web developer yang tertarik dengan AI dan machine learning. Saya suka bikin hal-hal keren di internet dan bereksperimen dengan teknologi cerdas yang berguna.`,
      button: "Hubungi saya!!",
      working: "Sedang mengerjakan proyek di",
    },
    EN: {
      title: (
        <>
          Royyan is a{" "}
          <span className="text-purple-500">Web Developer</span> <br /> and{" "}
          <span className="text-purple-500">
            AI & Machine Learning Enthusiast
          </span>
        </>
      ),
      desc: `Yo, I’m Royyan — a web dev who vibes with AI & machine learning. I build cool stuff on the internet and love experimenting with smart tech that actually does something useful.`,
      button: "Contact me !!",
      working: "Currently working on",
    },
  };

  return (
    <section className="w-full h-screen relative bg-[#0f0f16] text-gray-200 flex items-center justify-center px-10 md:px-20 overflow-hidden">
      {/* Animated Background Blobs */}
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

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Text Section */}
        <div className="flex flex-col items-start text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {content[lang].title}
          </motion.h1>

          <p className="text-gray-400 max-w-md text-sm md:text-base">
            {content[lang].desc}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-2 px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-md transition-all"
          >
            {content[lang].button}
          </motion.a>

          <div className="flex items-center space-x-2 text-sm text-gray-400 mt-3 border border-gray-700 px-3 py-2 rounded-md">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span>{content[lang].working}</span>
            <span className="font-semibold text-purple-400">
              Kementerian Kehutanan
            </span>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-end"
        >
{/* Image Section */}
<div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] flex-shrink-0">
  <Image
    src={profilePic}
    alt="Royyan"
    fill
    className="rounded-lg object-contain grayscale hover:grayscale-0 transition-all"
  />
</div>


        </motion.div>
      </div>
    </section>
  );
}
