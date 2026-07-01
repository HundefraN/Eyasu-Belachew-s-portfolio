import { Cpu, Terminal, Layers, Box, Compass, RefreshCw, Monitor, Zap } from 'lucide-react';
import { SOFTWARE_STACK } from '../data';

export default function Tools() {
  const productionTools = SOFTWARE_STACK.filter((t) => t.category === 'production');
  const renderingTools = SOFTWARE_STACK.filter((t) => t.category === 'rendering');
  const hardwareTools = SOFTWARE_STACK.filter((t) => t.category === 'hardware');

  return (
    <section id="tools" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Structural layout dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll" id="tools-header">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-gold">
            The Digital Drafting Table
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
            Software Stack & Hardware
          </h2>
          <p className="font-sans text-gray-400 mt-4 leading-relaxed font-light">
            Behind every physical landmark lies a robust suite of parametric modeling algorithms, hyper-realistic physics render engines, and high-performance processing hardware.
          </p>
        </div>

        {/* Categories split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
          {/* Heavy Duty Production Column */}
          <div className="p-8 sm:p-10 bg-brand-card/50 border border-white/5 rounded-2xl relative flex flex-col justify-between reveal-on-scroll" id="tools-production">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/5">
                <div className="w-10 h-10 rounded-lg bg-amber-gold/10 border border-amber-gold/30 flex items-center justify-center text-amber-gold">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Heavy-Duty Production
                  </h3>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    Parametric Drafting & BIM
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                Utilizing state-of-the-art Building Information Modeling (BIM) workflows. This ensures architectural integrity, coordinated structural overlays, and precise blueprint outputs.
              </p>

              {/* Stack items */}
              <div className="space-y-4">
                {productionTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-amber-gold/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-display text-sm font-semibold text-white">
                        {tool.name}
                      </span>
                      <span className="px-2.5 py-1 bg-amber-gold/5 border border-amber-gold/20 text-amber-gold font-mono text-[10px] uppercase rounded">
                        {tool.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8 text-[11px] font-mono text-gray-500 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-gold" />
              <span>Full compliance with municipal architectural standards.</span>
            </div>
          </div>

          {/* Rendering Powerhouses Column */}
          <div className="p-8 sm:p-10 bg-brand-card/50 border border-white/5 rounded-2xl relative flex flex-col justify-between reveal-on-scroll" id="tools-rendering">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Photoreal Visualizations
                  </h3>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    Raytracing & Post-Production
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                Transforming skeletal wireframe designs into immersive virtual realities. Raytraced materials, realistic global illumination, dynamic atmospheric simulations, and cinematic color-grading.
              </p>

              {/* Stack items */}
              <div className="space-y-4">
                {renderingTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-emerald-400/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-display text-sm font-semibold text-white">
                        {tool.name}
                      </span>
                      <span className="px-2.5 py-1 bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 font-mono text-[10px] uppercase rounded">
                        {tool.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8 text-[11px] font-mono text-gray-500 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Real-time D5 Render with path-tracing core algorithms.</span>
            </div>
          </div>
        </div>

        {/* High-Performance Hardware specification card */}
        {hardwareTools.map((hardware) => (
          <div
            key={hardware.name}
            className="p-6 sm:p-8 bg-gradient-to-r from-brand-card/80 to-brand-card/40 border border-white/10 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 reveal-on-scroll"
            id="tools-hardware-banner"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-gold/10 border border-amber-gold/30 flex items-center justify-center text-amber-gold shrink-0">
                <Monitor className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-gold">
                  Core Processing Infrastructure
                </span>
                <h4 className="font-display text-lg font-bold text-white">
                  High-Performance Architect Workstation
                </h4>
              </div>
            </div>

            <div className="px-5 py-3 rounded-lg bg-brand-dark/90 border border-white/5 font-mono text-xs text-center md:text-right">
              <span className="text-gray-400 uppercase">GPU / CPU Specs: </span>
              <span className="text-white font-semibold block sm:inline">{hardware.level}</span>
            </div>

            {/* Glowing neon background circle */}
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px] rounded-full bg-amber-gold/2 blur-[80px] pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
