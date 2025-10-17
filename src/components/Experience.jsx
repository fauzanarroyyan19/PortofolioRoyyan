"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Experience() {
 const { lang } = useLanguage();
   const experiences = lang === "ID" ? idData.experience : enData.experience;

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <section id="experience" className="px-6 md:px-10 py-12">
      <h2 className="text-2xl font-semibold text-neon">#experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
            className="p-4 border border-gray-700 rounded bg-[#15151a]"
          >
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <div className="text-sm text-gray-400 mb-1">
              {exp.company} • {exp.duration}
            </div>
            <p className="text-gray-400 text-sm">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
