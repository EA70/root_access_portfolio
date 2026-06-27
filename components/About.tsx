"use client";
import { motion } from "framer-motion";

export default function About() {
      // Animation du conteneur parent pour gérer le délai entre les paragraphes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Délai de 0.3s entre chaque paragraphe
      },
    },
  };

  // Animation individuelle de chaque paragraphe
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section id="about" className="py-20 bg-black text-white border-t border-green-900/20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-mono text-green-500 mb-12">
          &gt; SYSTEM_ANALYSIS_PROFILE
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-green-950/5 p-8 md:p-12 border border-green-900/30 rounded-lg font-mono space-y-6"
        >
          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed">
            <span className="text-green-500">[INFO]</span> Initialisation du profil... 
            Ma rigueur de travail repose sur le principe du "Zero Trust". Chaque ligne de code, chaque architecture réseau est auditée pour garantir une résilience maximale face aux menaces émergentes.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed">
            <span className="text-green-500">[WARN]</span> La complaisance est la faille la plus critique d'un système. 
            Mon approche combine une veille technologique constante et une discipline de fer dans le respect des protocoles de sécurité.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed">
            <span className="text-green-500">[SUCCESS]</span> Mon objectif : transformer les infrastructures vulnérables en bastions impénétrables, avec une précision chirurgicale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

