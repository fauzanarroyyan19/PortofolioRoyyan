import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const copy = lang === "ID" ? {
    kicker: "MARI TERHUBUNG", title: "Punya ide atau peluang?", intro: "Saya terbuka untuk peluang freelance, kolaborasi, atau sekadar berbincang tentang teknologi.",
    name: "Nama", email: "Email", message: "Pesan", send: "Kirim pesan", sending: "Mengirim…", sent: "Pesan berhasil dikirim.", failed: "Pesan gagal dikirim. Silakan coba lagi.",
  } : {
    kicker: "LET'S CONNECT", title: "Have an idea or opportunity?", intro: "I'm open to freelance opportunities, collaborations, or simply chatting about technology.",
    name: "Name", email: "Email", message: "Message", send: "Send message", sending: "Sending…", sent: "Your message was sent successfully.", failed: "Could not send your message. Please try again.",
  };
  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_y0rhtqi", "template_1c9wzmo", formRef.current, "DsniQB5AX44J1ACWr").then(
      () => { setLoading(false); setSuccess(true); formRef.current?.reset(); },
      () => { setLoading(false); setSuccess(false); },
    );
  };
  const socials = [
    { href: "mailto:arroyyanfauzan4@gmail.com", label: "Email", detail: "arroyyanfauzan4@gmail.com", icon: Mail },
    { href: "https://wa.me/6289623613075", label: "WhatsApp", detail: "0896 2361 3075", icon: MessageCircle },
    { href: "https://www.instagram.com/fznarroyyan/", label: "Instagram", detail: "@fznarroyyan", icon: Instagram },
    { href: "https://github.com/fauzanarroyyan19", label: "GitHub", detail: "github.com/fauzanarroyyan19", icon: Github },
    { href: "https://linkedin.com/in/fauzanarroyyan", label: "LinkedIn", detail: "linkedin.com/in/fauzanarroyyan", icon: Linkedin },
    { href: "https://discord.com/users/fauzan03143", label: "Discord", detail: "fauzan03143", icon: MessageCircle },
  ];

  return (
    <section id="contacts" className="border-t border-white/[.06] bg-white/[.018]">
      <div className="section-wrap">
        <div className="mb-8"><p className="section-kicker">{copy.kicker}</p><h2 className="section-heading mt-2 text-white">{copy.title}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{copy.intro}</p></div>
        <div className="grid gap-5 md:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">{lang === "ID" ? "TEMUKAN SAYA DI" : "FIND ME ON"}</p>
            <div className="space-y-2">{socials.map(({ href, label, detail, icon: Icon }) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition hover:border-white/[.08] hover:bg-white/[.035]"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Icon size={17}/></span><span className="min-w-0 flex-1"><span className="block text-sm font-medium text-slate-200">{label}</span><span className="block truncate text-xs text-slate-500">{detail}</span></span><ArrowUpRight size={15} className="text-slate-600 transition group-hover:text-violet-200"/></a>)}</div>
          </div>
          <motion.form ref={formRef} onSubmit={sendEmail} className="rounded-2xl border border-white/[.08] bg-[#101018] p-5 sm:p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-medium text-slate-400">{copy.name}<input type="text" name="name" placeholder="Royyan" required className="contact-input mt-2"/></label>
              <label className="text-xs font-medium text-slate-400">{copy.email}<input type="email" name="email" placeholder="you@example.com" required className="contact-input mt-2"/></label>
            </div>
            <label className="mt-4 block text-xs font-medium text-slate-400">{copy.message}<textarea name="message" placeholder={lang === "ID" ? "Ceritakan sedikit tentang pesan Anda…" : "Tell me a little about your message…"} required rows={5} className="contact-input mt-2 resize-y"/></label>
            <div className="mt-4 flex flex-wrap items-center gap-4"><button type="submit" disabled={loading} className="rounded-xl bg-violet-300 px-5 py-3 text-sm font-semibold text-[#171020] transition hover:bg-violet-200 disabled:cursor-wait disabled:opacity-60">{loading ? copy.sending : copy.send}<ArrowUpRight size={15} className="ml-2 inline"/></button>{success === true && <p role="status" className="text-sm text-emerald-300">{copy.sent}</p>}{success === false && <p role="alert" className="text-sm text-rose-300">{copy.failed}</p>}</div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
