"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

function CertIcon({ icon, name }: { icon: string; name: string }) {
  const [failed, setFailed] = useState(!icon);

  if (failed) {
    return (
      <span className="text-green-500 font-mono font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-wide text-center leading-tight">
        {name.slice(0, 4)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}/00C853`}
      alt={name}
      className="w-full h-full object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Certifs() {
  const t = useTranslations("Certifs");
  const certs = t.raw("list") as { name: string; full: string; icon: string }[];

  return (
    <section id="certifs" className="py-12 sm:py-16 md:py-20 bg-black text-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-12 text-center text-green-500 font-mono tracking-tighter">
          &gt; {t("title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center p-4 sm:p-5 border border-green-900/30 bg-zinc-950 rounded-lg hover:border-green-500/50 transition-all"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mr-3 sm:mr-4 md:mr-5 flex-shrink-0 flex items-center justify-center p-1.5 sm:p-2 bg-black rounded border border-green-900/20">
                <CertIcon icon={cert.icon} name={cert.name} />
              </div>
              <div className="overflow-hidden min-w-0">
                <h3 className="font-bold font-mono text-xs sm:text-sm group-hover:text-green-400 transition-colors truncate">
                  {cert.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 truncate mt-1">
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