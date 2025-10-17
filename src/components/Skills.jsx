"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Skills() {
  const { lang } = useLanguage();
  const data = lang === "ID" ? idData.skills : enData.skills;

  const badgeColors = {
    langs: "bg-blue-600 text-white",
    tools: "bg-green-600 text-white",
    frameworks: "bg-purple-600 text-white"
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <section id="skills" className="px-6 md:px-10 py-12">
      <h2 className="text-2xl font-semibold text-neon">
        {lang === "ID" ? "#keahlian" : "#skills"}
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Languages */}
        <div className="p-4 border border-gray-700 rounded">
          <h4 className="font-semibold mb-2">{data.langsTitle}</h4>
          <ul className="flex flex-wrap gap-2">
            {data.langs.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors.langs} cursor-default hover:scale-110 transition-transform`}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="p-4 border border-gray-700 rounded">
          <h4 className="font-semibold mb-2">{data.toolsTitle}</h4>
          <ul className="flex flex-wrap gap-2">
            {data.tools.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors.tools} cursor-default hover:scale-110 transition-transform`}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="p-4 border border-gray-700 rounded">
          <h4 className="font-semibold mb-2">{data.frameworksTitle}</h4>
          <ul className="flex flex-wrap gap-2">
            {data.frameworks.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors.frameworks} cursor-default hover:scale-110 transition-transform`}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
