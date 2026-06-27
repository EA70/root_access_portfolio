"use client";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "PARCOURS", href: "#parcours" },
    { name: "CERTIFS", href: "#certifs" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-green-900/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-green-500 font-bold text-xl tracking-tighter font-mono">
          &gt; ROOT_ACCESS
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-green-500 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bouton Mobile */}
        <button className="md:hidden text-green-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-green-900/50 px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name} 
              href={item.href} 
              className="block text-slate-400 hover:text-green-500 font-mono"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}