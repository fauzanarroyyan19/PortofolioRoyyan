"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import idData from "../locales/id.json";
import enData from "../locales/en.json";

export default function Projects() {
  const { lang } = useLanguage();
  const data = lang === "ID" ? idData : enData;
  const projects = data.projects;

  return (
    <section id="projects" className="px-6 md:px-10 py-12">
      <h2 className="text-2xl font-semibold text-neon">
        {lang === "ID" ? "#proyek" : "#projects"}
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
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
                  className="text-sm px-3 py-1 border border-gray-600 rounded"
                >
                  Live ↬
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 border border-gray-600 rounded"
                >
                  Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
