"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock } from "lucide-react";

const certs = [
  { title: "CISSP", org: "(ISC)²", icon: ShieldCheck },
  { title: "OSCP", org: "OffSec", icon: Lock },
  { title: "CEH", org: "EC-Council", icon: Award },
  { title: "OSCP", org: "OffSec", icon: Lock },
  { title: "CEH", org: "EC-Council", icon: Award },
];

export default function Certifications() {
  return (
    <section id="certifs" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-mono text-green-500 mb-16">
          &gt; CERTIFICATIONS_OFFICIELLES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              // Animation d'entrée
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15, // Effet de cascade : chaque carte attend la précédente
                ease: "easeOut",
              }}
              // Animation au survol (on garde ton effet existant)
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group p-8 border border-green-900/50 bg-green-950/10 hover:border-green-500 transition-all duration-300 rounded-lg cursor-pointer"
            >
              <cert.icon className="w-10 h-10 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                {cert.title}
              </h3>
              <p className="text-green-500/60 font-mono text-sm uppercase tracking-wider">
                {cert.org}
              </p>

              {/* Barre de progression décorative au survol */}
              <div className="mt-6 w-12 h-[2px] bg-green-900 group-hover:bg-green-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
