import { Compass, ArrowUp, Phone, Mail, Award } from 'lucide-react';
import { CLIENT_INFO } from '../data';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 py-16 relative overflow-hidden" id="footer-section">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-gold flex items-center justify-center text-brand-dark font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display text-lg font-bold tracking-widest text-white uppercase">
                  {CLIENT_INFO.name}
                </span>
                <span className="block text-[10px] tracking-widest font-mono text-gray-400 uppercase">
                  Architectural Studio
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm font-light">
              Designing bespoke spatial coordinates where structural calculation meets photorealistic interior aesthetics. Standard-compliant architectural planning.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-gray-500 font-mono">
              <Award className="w-4 h-4 text-amber-gold" />
              <span>{CLIENT_INFO.socialProof}</span>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-gold">
              Studio Coordinates
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-gray-400">
              <button
                onClick={() => handleScrollTo('home')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                01. Top Platform / Home
              </button>
              <button
                onClick={() => handleScrollTo('about')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                02. Founder & Vision
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                03. Services & Expertise
              </button>
              <button
                onClick={() => handleScrollTo('projects')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                04. Selected Portfolio
              </button>
              <button
                onClick={() => handleScrollTo('tools')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                05. Software & Hardware
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                06. Inquire / Blueprint Brief
              </button>
            </div>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-gold">
              Direct Contact Channels
            </h4>
            <div className="space-y-3 font-sans text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <span>{CLIENT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="truncate">{CLIENT_INFO.email}</span>
              </div>
              <div className="pt-2 text-xs font-mono text-gray-600 uppercase tracking-wider">
                Available on Telegram for remote contract drafts.
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-xs text-gray-500 font-mono">
              &copy; {new Date().getFullYear()} {CLIENT_INFO.name}. All blueprints preserved.
            </p>
            <p className="text-[10px] text-gray-600 font-mono">
              Designed for high-performance BIM coordinated execution.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded border border-white/5 hover:border-white/10 flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-gray-400 hover:text-white transition-all cursor-pointer"
            id="back-to-top-btn"
          >
            Back to Summit <ArrowUp className="w-3.5 h-3.5 text-amber-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
