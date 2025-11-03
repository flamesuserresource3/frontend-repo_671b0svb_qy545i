import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-purple-600 to-fuchsia-500">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold tracking-tight">Flames Studio</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Layanan</a>
          <a href="#portfolio" className="hover:text-white transition">Portofolio</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </nav>

        <a
          href="#contact"
          className="ml-4 inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition"
        >
          Mulai Project
        </a>
      </div>
    </header>
  );
}
