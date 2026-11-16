import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import projects from "../data/Projects";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const copy = lang === "ID"
    ? { kicker: "KARYA PILIHAN", title: "Proyek yang pernah saya kerjakan", intro: "Beberapa hal yang saya bangun, eksplorasi, dan pelajari." }
    : { kicker: "SELECTED WORK", title: "Things I've built", intro: "A few projects I've built, explored, and learned from." };
  const getDesc = (desc) => typeof desc === "string" ? desc : desc[lang] ?? desc.EN ?? desc.ID ?? "";

  return (
    <section id="projects" className="section-wrap">
      <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
        <div><p className="section-kicker">{copy.kicker}</p><h2 className="section-heading mt-2 text-white">{copy.title}</h2></div>
        <p className="max-w-sm text-sm text-slate-400">{copy.intro}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: Math.min(index * .06, .24) }} whileHover={{ y: -5 }} className="group overflow-hidden rounded-2xl border border-white/[.085] bg-[#101018] transition-colors hover:border-violet-300/30">
            <div className="relative h-48 overflow-hidden bg-[#0b0b12] sm:h-52">
              <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${project.image}')` }} role="img" aria-label={project.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101018]/50 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[.68rem] text-slate-200 backdrop-blur">PROJECT {String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex min-h-[245px] flex-col p-5">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => <span key={tech} className="rounded-md bg-white/[.055] px-2 py-1 font-mono text-[.65rem] text-slate-400">{tech}</span>)}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">{project.title}</h3>
              <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-400">{getDesc(project.desc)}</p>
              <div className="mt-auto flex gap-2 pt-5">
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-1.5 rounded-lg border border-violet-300/25 bg-violet-300/10 px-3 py-2 text-xs font-semibold text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-300/15">
                  {lang === "ID" ? "Studi kasus" : "Case study"}<ArrowRight size={14}/>
                </Link>
                {project.live && project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-violet-300 px-3 py-2 text-xs font-semibold text-[#171020] transition hover:bg-violet-200">{lang === "ID" ? "Demo" : "Live demo"}<ArrowUpRight size={14}/></a>}
                {project.repo && project.repo !== "#" && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"><Github size={14}/> GitHub</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
