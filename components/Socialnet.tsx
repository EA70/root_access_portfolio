"use client";

import { motion } from "framer-motion";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { SiTryhackme, SiHackthebox, SiMedium } from "react-icons/si";

 
const socials = [
{ href: "https://www.linkedin.com/in/cl3ment", icon: FaLinkedin, label: "Linkedin" },  
{ href: "https://profile.hackthebox.com/profile/019c9107-5bc9-732d-a456-24d68f765883", icon: SiHackthebox, label: "Hack The Box" },
{ href: "https://tryhackme.com/p/Clemento", icon: SiTryhackme, label: "TryHackMe" },
{ href: "https://github.com/Th3k33n", icon: FaGithub, label: "GitHub" },
{ href: "https://medium/@clementsec", icon: SiMedium, label: "Medium" },]
export default function Socialnet() {
  return (
<div className=" w-full bg-black border-b border-green-900/30 py-3 flex justify-center gap-6">
      {socials.map((s, i) => (
        <a key={i} href={s.href} target="_blank" className="text-slate-600 hover:text-green-500 transition-colors">
          <s.icon size={15} />
        </a>
      ))}
    </div>
  );
}