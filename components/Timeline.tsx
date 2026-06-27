"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

const events = [
  { year: "2026", title: "Senior Security Engineer", desc: "Architecture de systèmes critiques." },
  { year: "2024", title: "Certification CISSP", desc: "Expertise en gestion de la sécurité." },
  { year: "2022", title: "Junior Pentester", desc: "Audit de vulnérabilités et intrusion." },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="parcours" ref={containerRef} className="py-20 bg-black text-white relative">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* Colonne Gauche : Timeline */}
        <div>
          <h2 className="text-2xl font-mono text-green-500 mb-16">&gt; PARCOURS_PROFESSIONNEL</h2>
          <div className="relative border-l border-green-900/50 ml-3">
            <motion.div style={{ height }} className="absolute top-0 -left-[1px] w-[2px] bg-green-500" />
            {events.map((event, index) => (
              <motion.div key={index} className="mb-16 ml-8">
                <div className="absolute -left-[5px] mt-2 h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="font-mono text-green-500 text-sm">{event.year}</span>
                <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                <p className="text-slate-400 font-mono text-sm mt-2">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colonne Droite : Appel au CV (Sticky) */}
        <div className="md:sticky md:top-32 h-fit space-y-6">
          <div className="p-8 bg-green-950/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Besoin d'une expertise ?</h3>
            <p className="text-slate-400 font-mono mb-8">
              Consultez mon parcours détaillé et mes compétences techniques dans mon CV complet.
            </p>
            <a 
              href="/cv.pdf" 
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-black font-bold py-4 hover:bg-green-400 transition-colors font-mono"
            >
              <Download size={18} />
              TÉLÉCHARGER_CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}