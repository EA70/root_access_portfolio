"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("Contact");
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          e.currentTarget.reset();
        }, 5000);
      } else {
        alert("Impossible d envoyer le message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Erreur survenue, ressayez plus tard");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black md:py-32 text-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-12 text-center text-green-500 font-mono tracking-tighter"
        >
          &gt; {t("title")}
        </motion.h2>

        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="h-[400px] flex flex-col items-center justify-center border border-green-900/30 rounded-lg p-8 bg-green-950/5 text-center"
            >
              <div className="text-green-500 mb-4 text-4xl">✓</div>
              <p className="text-white font-mono text-lg">
                {t("messageSucces")}
              </p>
              <p className="text-slate-400 font-mono text-sm mt-2">
                {t("detailsmessage")}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-green-950/5 border border-green-900/30 rounded-lg p-8"
            >
              <div>
                <label className="block text-sm font-mono text-green-500/70 mb-2">
                  {t("form.name.label")}
                </label>
                <input
                  name="name"
                  required
                  placeholder={t("form.name.placeholder")}
                  className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none focus:border-green-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-green-500/70 mb-2">
                  {t("form.email.label")}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.email.placeholder")}
                  className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none focus:border-green-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-green-500/70 mb-2">
                  {t("form.message.label")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("form.message.placeholder")}
                  className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none resize-none focus:border-green-500 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-green-500 text-black font-bold py-3 uppercase tracking font-mono rounded-md hover:bg-green-400 transition-all disabled:opacity-50"
              >
                {isSubmitting ? t("sending") : t("form.submit")}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
