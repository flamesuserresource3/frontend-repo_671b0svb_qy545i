import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const controls = useAnimation();
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    controls.start({
      y: [0, -8, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Spline Canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette and color glow (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_80%,rgba(88,28,135,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 grid md:grid-cols-12 gap-10 items-center"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          setMouse({ x, y });
        }}
      >
        <div className="md:col-span-7 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
            style={{
              textShadow:
                `0 0 24px rgba(147,51,234,${0.25 + mouse.x * 0.2})`
            }}
          >
            Bangun Presence Digital yang Berkelas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Elegan. Futuristis. Maksimal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-white/80 max-w-xl"
          >
            Desain premium dengan animasi yang halus dan interaktif—tanpa efek bising. Fokus pada kesan, kecepatan, dan hasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition will-change-transform"
              style={{
                transform: `perspective(800px) rotateX(${(0.5 - mouse.y) * 6}deg) rotateY(${(mouse.x - 0.5) * 6}deg)`,
              }}
            >
              <Rocket className="h-5 w-5" /> Mulai Konsultasi
            </motion.a>
            <a href="#services" className="text-white/80 hover:text-white transition">Lihat Layanan</a>
          </motion.div>
        </div>

        <div className="md:col-span-5 relative">
          {/* Floating glow orbs */}
          <motion.div
            animate={controls}
            className="absolute -right-6 -top-6 h-40 w-40 rounded-full opacity-60 blur-2xl"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.55), rgba(0,0,0,0))',
            }}
          />
          <motion.div
            animate={controls}
            transition={{ delay: 0.8, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 bottom-10 h-36 w-36 rounded-full opacity-50 blur-2xl"
            style={{
              background: 'radial-gradient(circle at 70% 70%, rgba(217,70,239,0.45), rgba(0,0,0,0))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
