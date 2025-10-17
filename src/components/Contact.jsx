"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_y0rhtqi",   // ganti dengan Service ID EmailJS
        "template_1c9wzmo",  // ganti dengan Template ID
        formRef.current,
        "DsniQB5AX44J1ACWr"    // ganti dengan Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contacts" className="px-6 md:px-10 py-12 bg-[#0f0f16]">
      <h2 className="text-2xl font-semibold text-neon">#contacts</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Info Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="p-6 border border-gray-700 rounded-xl bg-gradient-to-br from-[#1a1a25] to-[#111118] shadow-lg"
        >
          <p className="text-gray-400 mb-4">
            I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
          </p>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="font-mono text-purple-400">Discord:</span> fauzan03143
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-purple-400">Email:</span> arroyyanfauzan4@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-purple-400">GitHub:</span> github.com/fauzanarroyyan19
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-purple-400">LinkedIn:</span> linkedin.com/in/fauzanarroyyan
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-gray-700 rounded-xl bg-[#111118] shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded bg-[#1a1a25] border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded bg-[#1a1a25] border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-2 rounded bg-[#1a1a25] border border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500 resize-none h-32"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success === true && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
          {success === false && <p className="text-red-500 text-sm mt-2">Failed to send message. Try again.</p>}
        </motion.form>

      </div>
    </section>
  );
}
