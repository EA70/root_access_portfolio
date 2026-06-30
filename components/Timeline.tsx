"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations("Timeline");
  const events = t.raw("events") as { year: string; title: string; desc: string }[];
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
<section id="parcours" ref={containerRef} className="py-20 md:py-32 bg-black text-white px-6">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-black mb-12 text-center text-green-500 font-mono tracking-tighter"
>&gt; {t("title")}</h2>
    
    <div className="relative">
      <motion.div 
        style={{ height }} 
        className="absolute top-0 left-1/2 -ml-[1px] w-[2px] bg-green-500" 
      />

      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className={`mb-16 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <span className="font-mono text-green-500 text-sm block">{event.year}</span>
            <h3 className="text-xl font-bold mt-1">{event.title}</h3>
            <p className="text-slate-400 font-mono text-sm mt-2">{event.desc}</p>
          </div>

          <div className="absolute left-1/2 -ml-[5px] h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}