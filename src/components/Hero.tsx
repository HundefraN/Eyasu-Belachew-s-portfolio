import { useEffect, useState } from 'react';
import { ArrowDown, Award, Briefcase, ChevronRight, Phone, Compass } from 'lucide-react';
import { CLIENT_INFO } from '../data';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden pt-24"
    >
      {/* Structural Grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Architectural Concept Image Backdrop - low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-referrer opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80')",
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Golden gradient spotlight circles */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Social Proof Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-1000 transform ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              id="hero-badge"
            >
              <Award className="w-4 h-4 text-amber-gold" />
              <span className="text-xs uppercase tracking-widest font-mono text-gray-300">
                {CLIENT_INFO.socialProof}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                className={`font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none transition-all duration-1000 delay-200 transform ${
                  loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                id="hero-title"
              >
                <span className="block text-gray-400 text-lg sm:text-2xl font-mono tracking-widest uppercase mb-3">
                  {CLIENT_INFO.title}
                </span>
                EYASU SAMI
              </h1>

              {/* Tagline */}
              <p
                className={`font-sans text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed transition-all duration-1000 delay-400 transform ${
                  loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                id="hero-tagline"
              >
                {CLIENT_INFO.tagline}
              </p>
            </div>

            {/* Quick Details List */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 max-w-xl transition-all duration-1000 delay-600 transform ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              id="hero-stats"
            >
              <div>
                <span className="block text-2xl font-bold font-display text-amber-gold">
                  {CLIENT_INFO.experienceYears}
                </span>
                <span className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                  Experience
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-display text-amber-gold">
                  100%
                </span>
                <span className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                  Fidelity Rate
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-base font-semibold font-display text-white truncate">
                  Addis Ababa
                </span>
                <span className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                  Headquarters
                </span>
              </div>
            </div>

            {/* Actions */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-800 transform ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              id="hero-actions"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group px-8 py-4 bg-amber-gold hover:bg-amber-gold/90 text-brand-dark rounded-md font-display uppercase tracking-widest font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-gold/10 hover:shadow-amber-gold/20 transition-all duration-300 cursor-pointer"
                id="hero-view-work-btn"
              >
                View Selected Work
                <Briefcase className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-md font-display uppercase tracking-widest font-semibold text-xs border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-contact-btn"
              >
                Get In Touch
                <Phone className="w-4 h-4 text-amber-gold" />
              </button>
            </div>
          </div>

          {/* Right Floating Architectural wireframe block */}
          <div
            className={`hidden lg:block lg:col-span-4 relative transition-all duration-1000 delay-500 transform ${
              loaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            id="hero-right-visual"
          >
            <div className="relative w-full aspect-square max-w-[340px] mx-auto animate-float">
              {/* Outer double square frame */}
              <div className="absolute inset-0 border-2 border-amber-gold/30 rounded-xl flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-white/10 rounded-lg flex items-center justify-center">
                  <div className="w-[75%] h-[75%] border border-dashed border-amber-gold/20 rounded flex items-center justify-center">
                    <Compass className="w-12 h-12 text-amber-gold/40" />
                  </div>
                </div>
              </div>

              {/* Floating Blueprint Badges */}
              <div className="absolute -top-4 -right-4 p-3 bg-brand-card/90 border border-white/10 rounded-lg shadow-xl backdrop-blur-md">
                <span className="block text-[10px] font-mono text-amber-gold uppercase tracking-widest">
                  CAD / BIM
                </span>
                <span className="block text-xs text-white font-semibold">
                  3D REVIT MODELS
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 p-3 bg-brand-card/90 border border-white/10 rounded-lg shadow-xl backdrop-blur-md">
                <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  ● ACTIVE
                </span>
                <span className="block text-xs text-white font-semibold">
                  Consulting/Supervision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
          Explore Studio
        </span>
        <ArrowDown className="w-4 h-4 text-amber-gold animate-bounce" />
      </div>
    </section>
  );
}
