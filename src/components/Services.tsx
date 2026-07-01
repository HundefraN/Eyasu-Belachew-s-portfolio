import { useState } from 'react';
import {
  Building,
  Layers,
  Compass,
  Building2,
  Cpu,
  CheckCircle2,
  HardHat,
  FileText,
  Workflow,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  // Group services by category
  const categories: { [key: string]: { list: Service[]; subtitle: string; color: string } } = {
    'Core Design': {
      list: SERVICES.filter((s) => s.category === 'Core Design'),
      subtitle: 'Aesthetic Spatial Creation',
      color: 'border-amber-gold/30 text-amber-gold'
    },
    'Technical Engineering': {
      list: SERVICES.filter((s) => s.category === 'Technical Engineering'),
      subtitle: 'Rigorous Technical Logic',
      color: 'border-blue-500/20 text-blue-400'
    },
    'Consulting & Docs': {
      list: SERVICES.filter((s) => s.category === 'Consulting & Docs'),
      subtitle: 'Project Fidelity & BOQ',
      color: 'border-emerald-500/20 text-emerald-400'
    }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case 'Architectural Design':
        return <Building className="w-6 h-6 text-amber-gold" />;
      case 'Interior Design':
        return <Layers className="w-6 h-6 text-amber-gold" />;
      case 'Landscape Design':
        return <Compass className="w-6 h-6 text-amber-gold" />;
      case 'Structure Analysis':
        return <Building2 className="w-6 h-6 text-amber-gold" />;
      case 'Electrical Design':
        return <Cpu className="w-6 h-6 text-amber-gold" />;
      case 'Sanitary Design':
        return <Workflow className="w-6 h-6 text-amber-gold" />;
      case 'Supervision & Consulting':
        return <HardHat className="w-6 h-6 text-amber-gold" />;
      case 'BOQ (Bill of Quantities) & Docs':
        return <FileText className="w-6 h-6 text-amber-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-amber-gold/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left max-w-3xl mb-16 reveal-on-scroll" id="services-header">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-gold">
            Services & Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
            Multi-Disciplinary Solutions
          </h2>
          <p className="font-sans text-gray-400 mt-4 leading-relaxed font-light">
            Bringing rigorous computational drafts, aesthetic floor layout designs, and safe engineering calculations to every scale of project development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {Object.entries(categories).map(([catName, { list, subtitle, color }]) => (
            <div
              key={catName}
              className="space-y-6 reveal-on-scroll"
              id={`service-group-${catName.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Category Header */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl backdrop-blur-sm">
                <span className={`inline-block text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border ${color} mb-1`}>
                  {catName}
                </span>
                <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                  {subtitle}
                </span>
              </div>

              {/* Service Cards under Category */}
              <div className="space-y-4">
                {list.map((service, index) => {
                  const uniqueId = `${catName}-${index}`;
                  const isHovered = hoveredIndex === uniqueId;

                  return (
                    <div
                      key={service.title}
                      className={`p-6 bg-brand-card/60 border rounded-xl backdrop-blur-sm transition-all duration-300 relative group overflow-hidden ${
                        isHovered
                          ? 'border-amber-gold/50 bg-brand-card shadow-lg shadow-amber-gold/5 translate-y-[-4px]'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                      onMouseEnter={() => setHoveredIndex(uniqueId)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      id={`service-card-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    >
                      {/* Accent highlight strip */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-amber-gold transition-all duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      {/* Icon & Title */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-amber-gold/10 group-hover:border-amber-gold/30 transition-colors duration-300">
                          {getIcon(service.title)}
                        </div>
                        <div className="space-y-2 flex-1">
                          <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-gold transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Bullet details, dynamically expands slightly on hover for visual depth */}
                      <div
                        className={`mt-4 pt-4 border-t border-white/5 space-y-2.5 transition-all duration-500 ${
                          isHovered ? 'opacity-100 max-h-[250px]' : 'opacity-40 max-h-[160px]'
                        }`}
                      >
                        <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                          Scope Deliverables
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {service.details.map((detail) => (
                            <div key={detail} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-gold/60 shrink-0" />
                              <span className="font-sans truncate">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
