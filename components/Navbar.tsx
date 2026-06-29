"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageDropdown from "@/components/LanguageDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams();

  // Liste des items avec des clés pour le fichier JSON
  const menuItems = [
    { name: "home", href: "/fr" },
    { name: "career", href: "#parcours" },
    { name: "skills", href: "#skills" },
    { name: "certifs", href: "#certifs" },
    { name: "blog", href: "#blog" },
    { name: "about", href: "#about" },
    { name: "contact", href: "#contact" },
  ];

  const changeLanguage = (nextLocale: string) => {
    const currentPathname = window.location.pathname;
    const newPath = currentPathname.replace(/^\/[^\/]+/, `/${nextLocale}`);
    // On redirige
    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-green-900/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/fr"
          className="text-green-500 font-bold text-xl tracking-tighter font-mono"
        >
          &gt; Clément Anguandia
        </Link>

        {/* Menu Desktop + Sélecteur de langue */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-sm font-medium text-slate-400">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-green-500 transition-colors"
              >
                {t(item.name)}
              </Link>
            ))}
          </div>
        </div>

        {/* Sélecteur de langue isolé */}
        <div className=" hidden md:flex    items-center space-x-3 text-xs font-mono pl-6">
          <LanguageDropdown
            locale={locale as string}
            changeLanguage={changeLanguage}
          />
        </div>
        {/* Bouton Mobile */}
        <button
          className="md:hidden text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
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
              {t(item.name)}
            </Link>
          ))}
          {/* Sélecteur de langue Mobile */}
          <div className="flex space-x-4 pt-4 border-t border-green-900/50">
            {["fr", "en", "de"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`text-xs uppercase ${locale === lang ? "text-green-500" : "text-slate-600"}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
