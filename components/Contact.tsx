"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-2xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-mono text-green-500 mb-12"
        >
          &gt; {t("title")}
        </motion.h2>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 bg-green-950/5 border border-green-900/30 rounded-lg p-8"
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-mono text-green-500/70 mb-2">
              {t("form.name.label")}
            </label>

            <input
              type="text"
              placeholder={t("form.name.placeholder")}
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none transition-all focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,.25)]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-mono text-green-500/70 mb-2">
              {t("form.email.label")}
            </label>

            <input
              type="email"
              placeholder={t("form.email.placeholder")}
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none transition-all focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,.25)]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-mono text-green-500/70 mb-2">
              {t("form.message.label")}
            </label>

            <textarea
              rows={5}
              placeholder={t("form.message.placeholder")}
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white outline-none transition-all resize-none focus:border-green-500 focus:shadow-[0_0_20px_rgba(34,197,94,.25)]"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(34,197,94,.45)"
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-green-500 text-black font-bold py-4 uppercase tracking-widest font-mono rounded-md"
          >
            {t("form.submit")}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}