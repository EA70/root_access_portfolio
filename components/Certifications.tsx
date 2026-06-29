"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Certifs() {
  const t = useTranslations("Certifs");
  const certs = t.raw("list") as { name: string; full: string; icon: string }[];

  return (
    <section id="certifs" className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center text-green-500 font-mono tracking-tighter">
          &gt; {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center p-5 border border-green-900/30 bg-zinc-950 rounded-lg hover:border-green-500/50 transition-all"
            >
              <div className="w-12 h-12 mr-5 flex items-center justify-center p-2 bg-black rounded border border-green-900/20">
                <img 
                  src={`https://cdn.simpleicons.org/${cert.icon}/00C853`} 
                  alt={cert.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold font-mono text-sm group-hover:text-green-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 truncate mt-1">
                  {cert.full}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}