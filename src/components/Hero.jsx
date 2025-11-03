import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Spline Canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient Overlays - non blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-72 blur-3xl opacity-50"
           style={{
             background: 'radial-gradient(60% 60% at 50% 40%, rgba(147,51,234,0.6), rgba(0,0,0,0))'
           }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Portofolio Jasa Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Elegan & Futuristik</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 text-base sm:text-lg text-white/80 max-w-xl"
          >
            Kami bantu bisnis kamu tampil menonjol dengan desain modern, animasi interaktif, dan pengalaman pengguna kelas premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition"
            >
              <Rocket className="h-5 w-5" /> Mulai Konsultasi
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition">Lihat Layanan</a>
          </motion.div>
        </div>

        <div className="md:col-span-6" />
      </div>
    </section>
  );
}
