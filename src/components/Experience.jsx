import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Experience() {
  const { lang } = useLanguage();
  const items = lang === "ID" ? idData.experience : enData.experience;
  return (
    <section id="experience" className="section-wrap">
      <div className="mb-9"><p className="section-kicker">{lang === "ID" ? "PERJALANAN" : "MY JOURNEY"}</p><h2 className="section-heading mt-2 text-white">{lang === "ID" ? "Pengalaman profesional" : "Professional experience"}</h2></div>
      <div className="relative ml-2 border-l border-violet-300/20 pl-7 sm:ml-4 sm:pl-10">
        {items.map((item, index) => (
          <motion.article key={item.id} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }} className="relative mb-5 last:mb-0 rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-6">
            <span className="absolute -left-[2.08rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-violet-300/30 bg-[#11111a] text-violet-200 sm:-left-[3.08rem]"><Briefcase size={14}/></span>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h3 className="font-display text-lg font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm text-violet-200">{item.company}</p></div><span className="w-fit shrink-0 rounded-full border border-white/[.08] bg-white/[.035] px-3 py-1 font-mono text-[.68rem] text-slate-400">{item.duration}</span></div>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
