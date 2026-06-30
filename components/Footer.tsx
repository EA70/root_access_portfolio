"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { SiTryhackme, SiHackthebox, SiMedium } from "react-icons/si";
import { Code, Terminal } from "lucide-react";


const socials = [
{ href: "https://www.linkedin.com/in/cl3ment", icon: FaLinkedin, label: "Linkedin" },  
{ href: "https://profile.hackthebox.com/profile/019c9107-5bc9-732d-a456-24d68f765883", icon: SiHackthebox, label: "Hack The Box" },
{ href: "https://tryhackme.com/p/Clemento", icon: SiTryhackme, label: "TryHackMe" },
{ href: "https://github.com/Th3k33n", icon: FaGithub, label: "GitHub" },
{ href: "https://medium/@clementsec", icon: SiMedium, label: "Medium" },]

export default function Footer() {
  return (
    <footer className="border-t border-green-900/30 bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-7">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18 }}
            >
              <Link
                href={href}
                target="_blank"
                aria-label={label}
                className="text-slate-500 transition-colors duration-300 hover:text-green-500"
              >
                <Icon size={22} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="font-mono text-[10px] text-slate-400 tracking-wider">
          © {new Date().getFullYear()} CLEMENT ANGUANDIA
        </div>
        <div className="font-mono text-[10px] text-slate-400 tracking-wider">
          
  <Link
    className="underline underline-offset-2 hover:text-green-500 transition-colors"
    href="https://mandoelieportfolio-c74e.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
            MANDO ELIE
          </Link>
        </div>
      </div>
    </footer>
  );
}