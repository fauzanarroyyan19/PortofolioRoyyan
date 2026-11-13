"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Projects() {
  const { lang } = useLanguage();
  const data = lang === "ID" ? idData : enData;

  // Proyek diambil dari file JSON bahasa (locales), bukan dari ../data/Projects
  const projects = data.projects ?? [];

  // Jumlah minimal kartu di grid. Slot kosong hanya muncul kalau proyek kurang dari ini.
  const totalSlots = 3;
  const emptySlots = Math.max(0, totalSlots - projects.length);

  // Tombol hanya tampil kalau link-nya sungguhan (bukan "#" atau kosong)
  const isValidLink = (url) => Boolean(url) && url !== "#" && !url.endsWith("...");

  return (
    <section id="projects" className="px-6 md:px-10 py-12">
      <h2 className="text-2xl font-semibold text-neon">
        {lang === "ID" ? "#proyek" : "#projects"}
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Semua proyek dari JSON */}
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-[#15151a] border border-gray-700 p-4 rounded"
          >
            <div
              className="h-64 md:h-72 bg-cover bg-center rounded bg-[#0f0f16]"
              style={{ backgroundImage: `url(${p.image})` }}
              role="img"
              aria-label={p.title}
            />
            <div className="mt-3">
              <div className="font-mono text-sm text-gray-400">
                {p.tech.join(" • ")}
              </div>
              <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{p.desc}</p>
              <div className="mt-3 flex gap-2">
                {isValidLink(p.live) && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                  >
                    Live ↬
                  </a>
                )}
                {isValidLink(p.repo) && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slot kosong, hanya kalau proyek kurang dari totalSlots */}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <motion.div
            key={`soon-${i}`}
            whileHover={{ scale: 1.02 }}
            className="bg-[#15151a] border border-dashed border-gray-700 p-4 rounded flex flex-col items-center justify-center text-center h-72 md:h-80"
          >
            <span className="text-4xl mb-3">🚧</span>
            <h3 className="text-lg font-semibold text-gray-300">
              {lang === "ID" ? "Segera Tersedia" : "Available Soon"}
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-[200px]">
              {lang === "ID"
                ? "Proyek berikutnya sedang dalam pengembangan."
                : "The next project is currently in development."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
