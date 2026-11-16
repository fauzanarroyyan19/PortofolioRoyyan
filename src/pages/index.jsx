import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const navigation = window.performance?.getEntriesByType?.("navigation")?.[0];
    if (navigation?.type !== "reload") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090f] text-graylight font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="border-t border-white/[.06] px-5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Royyan — Made With Next.js & Tailwind
      </footer>
    </div>
  );
}
