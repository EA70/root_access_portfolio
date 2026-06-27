"use client";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';


export default function Hero() {

  
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center bg-black px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/cyber-bg-professional.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 w-full max-w-4xl relative z-10" // z-10 pour être au-dessus de l'overlay
      >
        {/* Hero  */}
        <h2 className="text-green-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em]">
          Ingénieur en Cybersécurité
        </h2>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          DÉFENSE &<br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
            INTELLIGENCE
          </span>
        </h1>
        
        <p className="max-w-sm md:max-w-md mx-auto text-slate-400 font-mono text-sm md:text-base px-2">
          Analyste système, pentester & passionné par l'intégrité des infrastructures critiques.
        </p>
      </motion.div>
    </section>
  );
}