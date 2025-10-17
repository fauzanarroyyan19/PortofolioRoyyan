"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const text = {
    EN: [
      { href: "#projects", label: "#projects" },
      { href: "#skills", label: "#skills" },
      { href: "#experience", label: "experience" },
      { href: "#contacts", label: "#contacts" },
    ],
    ID: [
      { href: "#projects", label: "#proyek" },
      { href: "#skills", label: "#keahlian" },
      { href: "#experience", label: "#pengalaman-saya" },
      { href: "#contacts", label: "#kontak" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f16]/80 backdrop-blur-md border-b border-gray-800 px-6 md:px-12 py-5 flex items-center justify-between shadow-[0_0_15px_rgba(168,85,247,0.15)]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-purple-500/30">
          R
        </div>
        <span className="font-mono text-lg text-gray-200 tracking-wide">
          Royyan
        </span>
      </div>

      {/* Right Section (Links + Language Selector) */}
      <div className="flex items-center gap-6 font-medium">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {text[lang].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-gray-300 font-medium border border-gray-700 hover:border-purple-500 px-3 py-2 rounded-lg transition-all duration-300 hover:text-purple-400"
          >
            {lang} <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-[#1a1b20] border border-gray-700 rounded-md shadow-lg overflow-hidden backdrop-blur-md">
              {[
                { code: "EN", label: "🇬🇧 English" },
                { code: "ID", label: "🇮🇩 Indonesia" },
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    changeLanguage(item.code); // pake context
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 transition-all ${
                    lang === item.code ? "bg-purple-600/10 text-purple-400" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
