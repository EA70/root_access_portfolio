"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from 'next-intl';  

export default function Hero() {

  const t = useTranslations('Hero');
  const messages = useMessages() as any;
  const roles = messages.Hero.roles as string[];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) => 
        isDeleting 
          ? currentRole.substring(0, prev.length - 1) 
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, roles]);

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center bg-black px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgc.jpg')",
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
        className="text-center w-full max-w-5xl relative z-10 space-y-6"
      >
        <h2 className="text-green-500 font-mono pt-7 text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.4em]">
          {t('subtitle')}
        </h2>
        
        <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
              {text}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[4px] h-[0.8em] bg-green-500 ml-2 align-middle"
            />
          </h1>
        </div>
        
        <p className="max-w-sm md:max-w-md mx-auto text-slate-400 font-mono text-sm md:text-base px-2">
        </p>
      </motion.div>
    </section>
  );
}