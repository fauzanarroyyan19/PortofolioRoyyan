import { motion } from "framer-motion";
import { Code2, Wrench, Layers3 } from "lucide-react";
import {
  SiAndroidstudio, SiC, SiCplusplus, SiCodeigniter, SiCss3, SiFigma, SiFlask, SiGithub, SiGit,
  SiGo, SiGooglecolab, SiHtml5, SiJavascript, SiJupyter, SiKotlin, SiLaravel,
  SiLinux, SiMysql, SiNextdotjs, SiNodedotjs, SiPandas, SiPhp, SiPostgresql,
  SiPostman, SiPython, SiReact, SiTailwindcss, SiVercel, SiVite, SiXampp,
} from "react-icons/si";
import { DiJava, DiNetbeans } from "react-icons/di";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: DiJava,
  C: SiC,
  "C++": SiCplusplus,
  PHP: SiPhp,
  Kotlin: SiKotlin,
  Go: SiGo,
  NetBeans: DiNetbeans,
  "Android Studio": SiAndroidstudio,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Figma: SiFigma,
  Postman: SiPostman,
  Vercel: SiVercel,
  XAMPP: SiXampp,
  Jupyter: SiJupyter,
  Colab: SiGooglecolab,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Pandas: SiPandas,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Laravel: SiLaravel,
  "CodeIgniter 4": SiCodeigniter,
  Flask: SiFlask,
  "Tailwind CSS": SiTailwindcss,
};

export default function Skills() {
  const { lang } = useLanguage();
  const data = lang === "ID" ? idData.skills : enData.skills;
  const groups = [
    { key: "langs", icon: Code2, tint: "text-sky-300", count: data.langs.length },
    { key: "tools", icon: Wrench, tint: "text-emerald-300", count: data.tools.length },
    { key: "frameworks", icon: Layers3, tint: "text-violet-300", count: data.frameworks.length },
  ];
  return (
    <section id="skills" className="border-y border-white/[.06] bg-white/[.018]">
      <div className="section-wrap">
        <div className="mb-8"><p className="section-kicker">{lang === "ID" ? "PERANGKAT SAYA" : "MY TOOLKIT"}</p><h2 className="section-heading mt-2 text-white">{lang === "ID" ? "Teknologi yang saya gunakan" : "Technologies I work with"}</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          {groups.map(({ key, icon: Icon, tint, count }, groupIndex) => (
            <motion.div key={key} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIndex * .08 }} whileHover={{ y: -3 }} className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 transition-colors hover:border-violet-300/20 sm:p-6">
              <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-3"><span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/[.05] ${tint}`}><Icon size={19}/></span><h3 className="font-display font-semibold text-white">{data[`${key}Title`]}</h3></div><span className="font-mono text-xs text-slate-600">{String(count).padStart(2,"0")}</span></div>
              <ul className="flex flex-wrap gap-2">{data[key].map((item) => {
                const SkillIcon = skillIcons[item];
                return <li key={item} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[.07] bg-white/[.025] px-2.5 py-1.5 text-xs text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-300/25 hover:text-violet-200">
                  {SkillIcon && <SkillIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-violet-300" />}
                  {item}
                </li>;
              })}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
