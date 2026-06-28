"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  locale: string;
  changeLanguage: (locale: string) => void;
};

const languages = [
  { code: "fr", label: "Français FR" },
  { code: "en", label: "English EN" },
  { code: "de", label: "Deutsch DE" }
];

export default function LanguageDropdown({
  locale,
  changeLanguage
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current =
    languages.find((lang) => lang.code === locale) ??
    languages[0];

  return (
    <div
      ref={ref}
      className="relative "
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-mono text-green-500 hover:text-green-400 transition-colors"
      >
        {current.code.toUpperCase()}

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-44 overflow-hidden rounded-lg border border-green-900/50 bg-black shadow-xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-4 py-3 text-left font-mono transition-colors ${
                  locale === lang.code
                    ? "bg-green-500 text-black font-bold"
                    : "text-slate-300 hover:bg-green-950/40 hover:text-green-400"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}