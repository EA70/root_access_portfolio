"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-mono text-green-500 mb-12">
          &gt; INITIALISER_CONTACT
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">IDENTIFIANT</label>
            <input 
              type="text" 
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Ton nom..."
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">CANAL_COMMUNICATION</label>
            <input 
              type="email" 
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Ton email..."
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-green-500/70 mb-2">MESSAGE_PAYLOAD</label>
            <textarea 
              rows={4}
              className="w-full bg-green-950/10 border border-green-900/50 p-4 text-white focus:border-green-500 outline-none transition-all"
              placeholder="Description de la mission..."
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-500 text-black font-bold py-4 hover:bg-green-400 transition-colors uppercase tracking-widest font-mono"
          >
            EXECUTER_ENVOI
          </button>
        </form>
      </div>
    </section>
  );
}