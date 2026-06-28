import Link from "next/link";

export default function Footer() {

  return (
    <footer className="py-12 border-t border-green-900/30 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* État du système */}
 

        {/* Liens réseaux sociaux (exemples) */}
        <div className="flex gap-8 font-mono text-xs text-slate-500">
          <Link href="#" className="hover:text-green-500 transition-colors">
            GITHUB
          </Link>
          <Link href="#" className="hover:text-green-500 transition-colors">
            LINKEDIN
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-slate-700 font-mono text-[10px]">
          © {new Date().getFullYear()} CLEMENT ANGUANDIA
        </div>
      </div>
    </footer>
  );
}