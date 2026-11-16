import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Briefcase, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

const experiencePhotos = {
  1: [
    "/experience/lab-assistant/aslab.jpeg",
    "/experience/lab-assistant/aslab1.jpeg",
  ],
  2: [
    "/experience/lab-coordinator/koor.jpeg",
    "/experience/lab-coordinator/koor1.jpeg",
    "/experience/lab-coordinator/koor2.jpeg",
    "/experience/lab-coordinator/STRUKTUR%20SE_20250219_052105_0000%20%281%29.png",
  ],
  3: [
    "/experience/pln-icon-plus/icon.jpeg",
    "/experience/pln-icon-plus/icon1.jpeg",
  ],
  4: [
    "/experience/ministry-of-forestry/khk.jpeg",
    "/experience/ministry-of-forestry/khk1.jpeg",
    "/experience/ministry-of-forestry/khk2.jpeg",
    "/experience/ministry-of-forestry/khk3.jpeg",
  ],
};

function ExperienceGallery({ photos, title, lang }) {
  const trackRef = useRef(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [mounted, setMounted] = useState(false);
  const isID = lang === "ID";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (activePhoto === null) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activePhoto]);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-4 rounded-xl border border-white/[.06] bg-black/10 p-2.5 sm:p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[.65rem] font-semibold uppercase tracking-[.15em] text-violet-300">{isID ? "Dokumentasi" : "Photo documentation"}</p>
          <p className="mt-1 text-xs text-slate-500">{title}</p>
        </div>
        {photos.length >= 4 && <div className="flex gap-1.5">
          <button type="button" onClick={() => scroll(-1)} aria-label={isID ? "Geser foto ke kiri" : "Scroll photos left"} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-violet-300/30 hover:text-white"><ArrowLeft size={15} /></button>
          <button type="button" onClick={() => scroll(1)} aria-label={isID ? "Geser foto ke kanan" : "Scroll photos right"} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-violet-300/30 hover:text-white"><ArrowRight size={15} /></button>
        </div>}
      </div>
      <div ref={trackRef} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {photos.map((src, photoIndex) => (
          <figure key={src} className="w-[220px] shrink-0 snap-start sm:w-[250px]">
            <button type="button" onClick={() => setActivePhoto(photoIndex)} aria-label={isID ? `Perbesar foto ${photoIndex + 1} - ${title}` : `Enlarge photo ${photoIndex + 1} - ${title}`} className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/[.06] bg-[#09090f] text-left">
              <Image src={src} alt={`${title} - ${isID ? "dokumentasi" : "documentation"} ${photoIndex + 1}`} fill sizes="(max-width: 640px) 220px, 250px" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6 text-[.65rem] text-white/80 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">{isID ? "Klik untuk perbesar" : "Click to enlarge"}</span>
            </button>
            <figcaption className="mt-2 text-[.68rem] text-slate-500">{isID ? "Foto" : "Photo"} {String(photoIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </div>
      {mounted && activePhoto !== null && createPortal(
          <div onClick={() => setActivePhoto(null)} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8">
            <div role="dialog" aria-modal="true" aria-labelledby="experience-photo-title" onClick={(event) => event.stopPropagation()} className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#101018] shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <h2 id="experience-photo-title" className="truncate text-sm font-semibold text-white">{title}</h2>
                  <p className="mt-0.5 text-xs text-slate-500">{isID ? "Foto" : "Photo"} {String(activePhoto + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</p>
                </div>
                <button type="button" autoFocus onClick={() => setActivePhoto(null)} aria-label={isID ? "Tutup foto" : "Close photo"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-violet-300/30 hover:text-white"><X size={17} /></button>
              </div>
              <div className="flex max-h-[76vh] min-h-40 w-full items-center justify-center bg-black/40 p-2 sm:p-4">
                <img src={photos[activePhoto]} alt={`${title} - ${isID ? "dokumentasi" : "documentation"} ${activePhoto + 1}`} className="max-h-[70vh] max-w-full object-contain" />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default function Experience() {
  const { lang } = useLanguage();
  const items = lang === "ID" ? idData.experience : enData.experience;
  return (
    <section id="experience" className="section-wrap">
      <div className="mb-9"><p className="section-kicker">{lang === "ID" ? "PERJALANAN" : "MY JOURNEY"}</p><h2 className="section-heading mt-2 text-white">{lang === "ID" ? "Pengalaman profesional" : "Professional experience"}</h2></div>
      <div className="relative ml-2 border-l border-violet-300/20 pl-7 sm:ml-4 sm:pl-10">
        {items.map((item, index) => (
          <motion.article key={item.id} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }} whileHover={{ y: -3 }} className="relative mb-5 last:mb-0 rounded-2xl border border-white/[.08] bg-[#101018] p-5 transition-colors hover:border-violet-300/20 sm:p-6">
            <span className="absolute -left-[2.08rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-violet-300/30 bg-[#11111a] text-violet-200 sm:-left-[3.08rem]"><Briefcase size={14}/></span>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h3 className="font-display text-lg font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm text-violet-200">{item.company}</p></div><span className="w-fit shrink-0 rounded-full border border-white/[.08] bg-white/[.035] px-3 py-1 font-mono text-[.68rem] text-slate-400">{item.duration}</span></div>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
            {experiencePhotos[item.id]?.length > 0 && <ExperienceGallery photos={experiencePhotos[item.id]} title={item.company} lang={lang} />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
