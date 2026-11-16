import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, RotateCcw, Sparkles, Vote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const choices = [
  { id: "faceguard", icon: "🛡️", name: "FaceGuard AI" },
  { id: "handdt", icon: "✋", name: "HandDT" },
  { id: "blockchain", icon: "🗳️", name: "Blockchain Voting" },
];

export default function MiniVote() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [voted, setVoted] = useState(false);
  const isID = lang === "ID";

  return (
    <section className="px-4 pb-10 sm:px-6" aria-label={isID ? "Polling mini" : "Mini poll"}>
      <div className="mx-auto max-w-3xl">
        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          aria-expanded={open}
          className="group mx-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-xs text-slate-400 transition hover:border-violet-300/30 hover:text-violet-100"
        >
          <Sparkles size={14} className="text-violet-300 transition-transform group-hover:rotate-12" />
          {isID ? "Psst… pilih project favoritmu" : "Psst… pick your favorite project"}
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-violet-300/15 bg-[#101018] p-5 shadow-xl shadow-violet-950/10 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Vote size={18} /></span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">{isID ? "Project mana yang paling menarik?" : "Which project caught your eye?"}</h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{isID ? "Pilih satu untuk membuka easter egg kecil." : "Choose one to reveal a little easter egg."}</p>
                  </div>
                </div>

                {!voted ? (
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {choices.map((choice) => (
                      <motion.button
                        key={choice.id}
                        type="button"
                        onClick={() => setSelected(choice.id)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        aria-pressed={selected === choice.id}
                        className={`rounded-xl border px-3 py-3 text-left text-sm transition ${selected === choice.id ? "border-violet-300/50 bg-violet-300/10 text-white" : "border-white/[.08] bg-white/[.02] text-slate-300 hover:border-white/20"}`}
                      >
                        <span className="mr-2" aria-hidden="true">{choice.icon}</span>{choice.name}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[.05] p-4">
                      <Check size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white">{isID ? "Pilihanmu tercatat:" : "Your pick:"} {choices.find((choice) => choice.id === selected)?.name}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{isID ? "Terima kasih sudah ikut! Ini polling demo dan pilihanmu hanya tersimpan selama halaman dibuka." : "Thanks for joining in! This is a demo poll; your vote only lasts while this page is open."}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-[.68rem] text-slate-600">{isID ? "Tanpa login · cuma untuk seru-seruan" : "No login · just for fun"}</p>
                  {voted ? (
                    <button type="button" onClick={() => { setVoted(false); setSelected(""); }} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-slate-400 transition hover:bg-white/[.05] hover:text-white"><RotateCcw size={13} />{isID ? "Pilih lagi" : "Vote again"}</button>
                  ) : (
                    <button type="button" disabled={!selected} onClick={() => setVoted(true)} className="rounded-lg bg-violet-300 px-3 py-2 text-xs font-semibold text-[#171020] transition hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-40">{isID ? "Kirim pilihan" : "Cast vote"}</button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
