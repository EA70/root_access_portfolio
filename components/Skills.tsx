"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");
  const hardData = t.raw("hard_data");
  const softData = t.raw("soft_data") as string[];

  return (
    <section id="skills" className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl font-black text-center mb-12 text-green-500 font-mono">&gt; {t("hard_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {Object.entries(hardData).map(([category, items]: [string, any]) => (
            <motion.div key={category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 border border-green-900/30 bg-zinc-950/50 rounded-lg">
              <h3 className="text-green-500 font-bold mb-4 font-mono text-sm uppercase">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill: string) => (
                  <li key={skill} className="flex items-center text-slate-400 text-sm font-mono"><span className="text-green-700 mr-3">◆</span> {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-black mb-12 text-center text-green-500 font-mono">&gt; {t("soft_title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {softData.map((skill: string, index: number) => (
            <motion.div key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 border border-zinc-800 bg-zinc-900/30 rounded flex items-center hover:border-green-500/50 transition-colors">
              <span className="text-green-500 mr-3">●</span>
              <span className="text-slate-400 font-mono text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}