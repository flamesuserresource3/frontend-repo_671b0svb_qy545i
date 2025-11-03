import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Simple portfolio teaser section */}
        <section id="portfolio" className="relative py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Cuplikan Karya</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Kualitas visual yang kuat dengan interaksi halus. Masing-masing proyek dirancang khusus sesuai karakter brand.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black">
                  <div className="aspect-[16/10] bg-gradient-to-tr from-purple-700/40 to-fuchsia-600/20" />
                  <div className="p-5">
                    <h3 className="font-semibold">Project #{i}</h3>
                    <p className="mt-1 text-sm text-white/70">Desain berfokus konversi dengan micro-interactions.</p>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-24 w-[90%] rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition"
                       style={{
                         background: 'radial-gradient(60% 60% at 50% 50%, rgba(147,51,234,0.6), rgba(0,0,0,0))'
                       }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="text-white/60">
            Built with love in purple tones.
          </div>
        </div>
      </footer>
    </div>
  );
}
