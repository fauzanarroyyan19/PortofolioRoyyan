import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, changeLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const links = lang === "ID"
    ? [["#projects", "Proyek"], ["#skills", "Keahlian"], ["#experience", "Pengalaman"], ["#contacts", "Kontak"]]
    : [["#projects", "Projects"], ["#skills", "Skills"], ["#experience", "Experience"], ["#contacts", "Contact"]];

  const selectLanguage = (code) => {
    changeLanguage(code);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="site-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Fauzan Ar Royyan home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 font-mono text-lg font-bold text-white shadow-lg shadow-violet-500/20">F</span>
          <span className="font-semibold tracking-tight text-white">Fauzan Ar Royyan<span className="text-violet-300">.</span></span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button type="button" onClick={() => setLanguageOpen(!languageOpen)} className="nav-control" aria-expanded={languageOpen} aria-label="Select language">
              {lang} <ChevronDown size={15} className={languageOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            {languageOpen && (
              <div className="nav-dropdown">
                {[{ code: "EN", label: "English" }, { code: "ID", label: "Indonesia" }].map((item) => (
                  <button key={item.code} type="button" onClick={() => selectLanguage(item.code)} className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-white/5 ${lang === item.code ? "text-violet-300" : "text-slate-300"}`}>
                    <span className="mr-2 text-xs text-slate-500">{item.code}</span>{item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="nav-control md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="site-nav mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
