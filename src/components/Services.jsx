import { motion } from 'framer-motion';
import { Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Landing Page Premium',
    desc: 'Halaman promosi yang cepat, tajam, dan berfokus pada konversi dengan animasi halus.',
  },
  {
    icon: Code,
    title: 'Web App Interaktif',
    desc: 'Aplikasi web modern dengan kinerja tinggi dan pengalaman pengguna maksimal.',
  },
  {
    icon: Palette,
    title: 'Branding & Desain UI/UX',
    desc: 'Identitas visual elegan dengan tipografi, warna, dan komponen yang konsisten.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full blur-3xl opacity-30"
             style={{
               background: 'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.55), rgba(0,0,0,0))'
             }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Layanan Utama
        </motion.h2>
        <p className="text-center mt-3 text-white/70 max-w-2xl mx-auto">
          Fokus pada hasil dengan desain berani, teknologi terbaru, dan performa maksimal.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black p-6 shadow-2xl shadow-purple-950/20 hover:border-purple-500/40 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>

              <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto h-24 w-[90%] rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition"
                   style={{
                     background: 'radial-gradient(60% 60% at 50% 50%, rgba(147,51,234,0.6), rgba(0,0,0,0))'
                   }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
