import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Siap Kolaborasi?
          </motion.h2>
          <p className="mt-3 text-white/70">
            Ceritakan kebutuhanmu. Kami akan merespons cepat dengan ide, estimasi, dan timeline yang jelas.
          </p>

          <div className="mt-8 space-y-4 text-white/80">
            <a href="mailto:hello@flames.studio" className="flex items-center gap-3 hover:text-white transition">
              <Mail className="h-5 w-5" /> hello@flames.studio
            </a>
            <a href="tel:+6281234567890" className="flex items-center gap-3 hover:text-white transition">
              <Phone className="h-5 w-5" /> +62 812-3456-7890
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const subject = encodeURIComponent(`Project Inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\nContact: ${email}`);
            window.location.href = `mailto:hello@flames.studio?subject=${subject}&body=${body}`;
          }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Nama</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Nama kamu" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="email@domain.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70">Pesan</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Ceritakan singkat kebutuhanmu..." />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition">
            <Send className="h-5 w-5" /> Kirim Brief
          </button>

          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl opacity-40"
               style={{
                 background: 'radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,0.6), rgba(0,0,0,0))'
               }}
          />
        </motion.form>
      </div>
    </section>
  );
}
