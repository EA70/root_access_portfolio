"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-mono text-green-500 mb-12">
          &gt; CONTACTEZ-MOI
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">NOM</label>
            <input 
              type="text" 
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Votre nom..."
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">EMAIL</label>
            <input 
              type="email" 
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Votre email..."
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">MESSAGE</label>
            <textarea 
              rows={4}
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Votre message..."
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-500 text-black font-bold py-4 hover:bg-green-400 transition-colors uppercase tracking-widest font-mono"
          >
            ENVOYER VOTRE MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}