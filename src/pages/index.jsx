import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="bg-dark text-graylight font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Royyan — Made With Next.js & Tailwind
      </footer>
    </div>
  );
}
