import { Award, ShieldCheck, Heart, LayoutGrid, CheckCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'End-to-End Consulting',
      desc: 'Seamless orchestration from initial schematic formulation to final structural execution sheets.',
      icon: <LayoutGrid className="w-5 h-5 text-amber-gold" />
    },
    {
      title: 'Technical Precision',
      desc: 'Integrating structural integrity and mechanical safety equations with pure artistic elegance.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-gold" />
    },
    {
      title: 'Stress-Free Delivery',
      desc: 'A comprehensive approach minimizing construction error with BIM coordinated blueprint fidelity.',
      icon: <Heart className="w-5 h-5 text-amber-gold" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-gold/2 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-[300px] h-[300px] rounded-full bg-amber-gold/1 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Professional Portrait Graphic */}
          <div className="lg:col-span-5 relative group reveal-on-scroll" id="about-portrait-wrapper">
            <div className="relative aspect-square max-w-[400px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Profile Image with high precision */}
              <img
                src={CLIENT_INFO.avatar}
                alt={CLIENT_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Gold frame overlay on hover */}
              <div className="absolute inset-0 border-[3px] border-amber-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none m-3" />
              
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-card/90 border border-white/10 backdrop-blur-md rounded-xl">
                <span className="block text-[10px] font-mono text-amber-gold uppercase tracking-widest">
                  Studio Founder
                </span>
                <span className="block font-display text-lg font-bold text-white">
                  {CLIENT_INFO.name}
                </span>
                <span className="block text-xs text-gray-400 font-mono">
                  Gudo Architects & Engineers PLC
                </span>
              </div>
            </div>

            {/* Asymmetrical Frame lines behind */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-gold/30 rounded-tl-2xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-gold/30 rounded-br-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right: Bio & Visionary Copy */}
          <div className="lg:col-span-7 space-y-8 reveal-on-scroll" id="about-content">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-amber-gold" />
                <span className="text-xs uppercase tracking-widest font-mono text-amber-gold">
                  Founder & Principal Consultant
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Creative Vision Meet Precision
              </h2>
            </div>

            {/* Full text requested by user */}
            <p className="font-sans text-base text-gray-300 font-light leading-relaxed relative">
              <span className="absolute -left-4 top-0 text-4xl text-amber-gold/25 font-serif">“</span>
              {CLIENT_INFO.bio}
              <span className="text-4xl text-amber-gold/25 font-serif relative top-2">”</span>
            </p>

            {/* Key highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h4 className="font-display text-sm font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
