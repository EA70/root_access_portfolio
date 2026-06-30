"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

export default function About() {
  const t = useTranslations("About");
  const paragraphs = t.raw("paragraphs") as { label: string; text: string }[];
  const cta = t.raw("cta");

  return (
    <section id="about" className="py-20 bg-black text-white border-b border-green-900/20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 text-center text-green-500 font-mono tracking-tighter">&gt; {t("title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-slate-400 leading-relaxed font-mono"
              >
                {p.text}
              </motion.p>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-green-950/10 border border-green-900/30 rounded-lg h-fit"
          >
            <h3 className="text-xl font-bold mb-4 font-mono">{cta.title}</h3>
            <p className="text-slate-400 text-sm mb-6 font-mono">{cta.description}</p>
            <a
              href={cta.link}
              download
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-black font-bold py-3 hover:bg-green-400 transition-colors font-mono text-sm"
            >
              <Download size={16} />
              {cta.button}
            </a >
          </motion.div>
        </div>
      </div>
    </section>
  );
}