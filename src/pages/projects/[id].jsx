import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import projects from "../../data/Projects";
import projectDetails from "../../data/ProjectDetails";

export default function ProjectCaseStudy({ project, details }) {
  const { lang, changeLanguage } = useLanguage();
  const detail = details?.[lang] ?? details?.EN ?? details?.ID;
  if (!detail) return null;
  const localizedTitle = detail.title ?? project.title;
  const copy = lang === "ID" ? {
    back: "Kembali ke semua proyek", live: "Buka demo", repo: "Lihat source code", background: "Latar belakang", goals: "Tujuan proyek", stack: "Teknologi", process: "Proses pengembangan", outcome: "Hasil akhir", preview: "Screenshot & preview", previewNote: "Visual proyek ditampilkan di bawah.", pairNote: "Layar login, utama, dan registrasi ditampilkan lebih dulu. Setiap halaman fitur berikutnya disandingkan dengan hasilnya.", other: "Jelajahi proyek lain",
  } : {
    back: "Back to all projects", live: "Open live demo", repo: "View source code", background: "Background", goals: "Project goals", stack: "Technology stack", process: "Development process", outcome: "Outcome", preview: "Screenshots & preview", previewNote: "Project visuals are shown below.", pairNote: "The login, home, and registration screens come first. Each following feature screen is paired with its result.", other: "Explore other projects",
  };
  const localizedDesc = typeof project.desc === "string" ? project.desc : project.desc[lang] ?? project.desc.EN ?? project.desc.ID;
  const screenshots = project.screenshots?.length
    ? project.screenshots.map((src, index) => ({ src, ...detail.screenshots?.[index] }))
    : [{ src: project.image, title: detail.preview, description: copy.previewNote }];
  const galleryGroups = detail.galleryGroups?.map((group) => ({
    ...group,
    screenshots: group.indices.map((index) => screenshots[index]).filter(Boolean),
  })) ?? [{ title: null, columns: 2, screenshots }];

  return (
    <main className="min-h-screen bg-[#09090f] px-4 pb-16 pt-6 text-slate-200 sm:px-6 sm:pt-8">
      <Head>
        <title>{project.title} · Fauzan Ar Royyan Portfolio</title>
        <meta name="description" content={localizedDesc} />
      </Head>
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-4 py-2.5 text-sm text-slate-300 transition hover:border-violet-300/30 hover:text-white"><ArrowLeft size={16}/>{copy.back}</Link>
          <div className="flex items-center gap-3">
            <div className="flex rounded-xl border border-white/10 bg-white/[.03] p-1" aria-label={lang === "ID" ? "Pilih bahasa" : "Choose language"}>
              {["ID", "EN"].map((code) => <button key={code} type="button" onClick={() => changeLanguage(code)} aria-pressed={lang === code} className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${lang === code ? "bg-violet-300 text-[#171020]" : "text-slate-400 hover:text-white"}`}>{code}</button>)}
            </div>
            <Link href="/" className="font-display text-sm font-semibold tracking-tight text-white">Fauzan Ar Royyan<span className="text-violet-300">.</span></Link>
          </div>
        </div>

        <header className="relative overflow-hidden rounded-3xl border border-white/[.09] bg-[#11111a] p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]"/>
          <div className="relative z-10 max-w-3xl">
            <div>
              <p className="section-kicker">{detail.eyebrow}</p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl">{localizedTitle}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{localizedDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-violet-300 px-4 py-2.5 text-sm font-semibold text-[#171020] transition hover:bg-violet-200">{copy.live}<ArrowUpRight size={16}/></a>}
                {project.repo && project.repo !== "#" && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/[.04]"><Github size={16}/>{copy.repo}</a>}
              </div>
            </div>
          </div>
        </header>

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7"><p className="section-kicker">01</p><h2 className="mt-1 font-display text-xl font-semibold text-white">{copy.background}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{detail.background}</p></section>
            <section className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7"><p className="section-kicker">02</p><h2 className="mt-1 font-display text-xl font-semibold text-white">{copy.goals}</h2><ul className="mt-4 space-y-3">{(detail.goals ?? []).map((goal, index) => <li key={goal} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="font-mono text-violet-300">0{index + 1}</span><span>{goal}</span></li>)}</ul></section>
            <section className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7"><p className="section-kicker">03</p><h2 className="mt-1 font-display text-xl font-semibold text-white">{copy.process}</h2><ol className="mt-4 space-y-3">{(detail.process ?? []).map((step, index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/20 bg-violet-300/5 font-mono text-[.68rem] text-violet-200">{index + 1}</span><span>{step}</span></li>)}</ol></section>
            <section className="rounded-2xl border border-violet-300/15 bg-violet-300/[.035] p-5 sm:p-7"><p className="section-kicker">04</p><h2 className="mt-1 font-display text-xl font-semibold text-white">{copy.outcome}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{detail.outcome}</p></section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-white/[.08] bg-[#101018] p-5"><h2 className="font-display text-base font-semibold text-white">{copy.stack}</h2><div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-lg border border-white/[.07] bg-white/[.03] px-2.5 py-1.5 font-mono text-xs text-slate-300">{tech}</span>)}</div></section>
            <Link href="/#projects" className="block rounded-2xl border border-white/[.08] bg-white/[.025] p-5 text-sm font-medium text-slate-300 transition hover:border-violet-300/25 hover:text-violet-200">{copy.other}<ArrowUpRight size={15} className="ml-1 inline"/></Link>
          </aside>
        </div>
        <section className="mt-5 rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7">
          <div className="mb-4"><h2 className="font-display text-xl font-semibold text-white">{copy.preview}</h2><p className="mt-1 text-sm text-slate-500">{project.id === 2 ? copy.pairNote : copy.previewNote}</p></div>
          <div className="space-y-10 sm:space-y-12">
            {galleryGroups.map((group) => (
              <div key={group.title ?? "project-preview"}>
                {group.title && <h3 className="mb-5 border-b border-white/[.07] pb-3 font-display text-base font-semibold text-violet-200">{group.title}</h3>}
                <div className={`grid gap-x-8 gap-y-10 ${group.columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
                  {group.screenshots.map((screenshot, index) => (
                    <figure key={screenshot.src} className="overflow-hidden rounded-2xl border border-white/[.09] bg-[#101018] shadow-lg shadow-black/10">
                      <div className={`relative ${screenshot.orientation === "landscape" ? "aspect-video bg-[#1a1d24]" : "aspect-[4/5] bg-white"}`}>
                        <Image src={screenshot.src} alt={screenshot.title ?? `${localizedTitle} screenshot ${index + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain"/>
                      </div>
                      <figcaption className="p-4 sm:p-5"><h4 className="text-sm font-semibold text-slate-100">{screenshot.title ?? detail.preview}</h4>{screenshot.description && <p className="mt-2 text-xs leading-6 text-slate-400">{screenshot.description}</p>}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export function getStaticPaths() {
  return { paths: projects.map((project) => ({ params: { id: String(project.id) } })), fallback: false };
}

export function getStaticProps({ params }) {
  const project = projects.find((item) => String(item.id) === params.id);
  const details = projectDetails[params.id];
  if (!project || !details) return { notFound: true };
  return { props: { project, details } };
}
