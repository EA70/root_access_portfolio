"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Paragraph = {
  label: string;
  text: string;
};

export default function About() {
  const t = useTranslations("About");

  const paragraphs = t.raw("paragraphs") as Paragraph[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
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
    <section
      id="about"
      className="py-20 bg-black text-white border-t border-green-900/20"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-mono text-green-500 mb-12">
          &gt; {t("title")}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-green-950/5 p-8 md:p-12 border border-green-900/30 rounded-lg font-mono space-y-6"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-slate-300 leading-relaxed"
            >
              <span className="text-green-500">
                {paragraph.label}
              </span>{" "}
              {paragraph.text}
            </motion.p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}