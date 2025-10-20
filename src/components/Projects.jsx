"use client";
import { motion } from "framer-motion";
import projects from "../data/Projects"; // pastiin path-nya bener
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Projects() {
  const { lang } = useLanguage();
  const data = lang === "ID" ? idData : enData;
  const availableProjects = projects.filter((p) => p.id === 1); // cuma tampilkan project pertama

  // jumlah slot project total (misal mau tampil 3 grid card)
  const totalSlots = 3;

  return (
    <section id="projects" className="px-6 md:px-10 py-12">
      <h2 className="text-2xl font-semibold text-neon">
        {lang === "ID" ? "#proyek" : "#projects"}
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Render project yang sudah tersedia */}
        {availableProjects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-[#15151a] border border-gray-700 p-4 rounded"
          >
            <div
              className="h-64 md:h-72 bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="mt-3">
              <div className="font-mono text-sm text-gray-400">
                {p.tech.join(" • ")}
              </div>
              <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{p.desc}</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                >
                  Live ↬
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                >
                  Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slot kosong untuk proyek yang belum ada */}
        {Array.from({ length: totalSlots - availableProjects.length }).map(
          (_, i) => (
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
          )
        )}
      </div>
    </section>
  );
}
