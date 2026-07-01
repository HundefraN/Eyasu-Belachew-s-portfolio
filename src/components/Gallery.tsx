import { useState } from 'react';
import { Filter, Eye, X, MapPin, Calendar, Layers, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Architecture' | 'Interior' | 'Landscape' | 'Specialized'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filters setup
  const filters: ('All' | 'Architecture' | 'Interior' | 'Landscape' | 'Specialized')[] = [
    'All',
    'Architecture',
    'Interior',
    'Landscape',
    'Specialized',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-brand-dark/95 relative overflow-hidden border-t border-white/5">
      {/* Decorative lines */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-amber-gold/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-on-scroll" id="projects-header">
          <div className="max-w-2xl text-center md:text-left mb-8 md:mb-0">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-gold">
              Portfolio Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Selected Works
            </h2>
            <p className="font-sans text-gray-400 mt-4 leading-relaxed font-light">
              Explore 11 meticulously modeled structural blueprints, landscaping, and high-contrast interior renovations crafted with absolute fidelity.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-end shrink-0" id="filter-container">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${activeFilter === filter
                  ? 'bg-amber-gold text-brand-dark shadow-md shadow-amber-gold/10'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                id={`filter-btn-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid with Asymmetry to handle exactly 11 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-6" id="projects-grid">
          {filteredProjects.map((project, index) => {
            // If viewing "All", we can make the first project (id: 1) twice as wide for aesthetic rhythm
            const isFeatured = activeFilter === 'All' && project.id === 1;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card/40 cursor-pointer transition-all duration-500 hover:border-amber-gold/30 hover:shadow-2xl hover:shadow-amber-gold/5 flex flex-col justify-between ${isFeatured
                  ? 'xl:col-span-6 md:col-span-2'
                  : 'xl:col-span-3 col-span-1'
                  }`}
                style={{ contentVisibility: 'auto' }}
                id={`project-card-${project.id}`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* Subtle hover zoom */}
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-dark/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-amber-gold text-brand-dark flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Floating Category tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-brand-dark/85 border border-white/10 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-widest text-amber-gold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content info */}
                <div className="p-6 relative space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                      <span>{project.subCategory}</span>
                      <span>•</span>
                      <span>{project.details.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-gold transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-amber-gold/70" />
                      <span className="truncate">{project.details.location}</span>
                    </div>
                    <span className="shrink-0 text-[11px] text-amber-gold hover:underline flex items-center gap-1">
                      Details <Eye className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic empty/fallback state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <Layers className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 font-sans">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal / Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-md overflow-y-auto animate-fade-in"
          id="project-lightbox"
        >
          {/* Main Container */}
          <div className="bg-brand-card border border-white/10 max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl relative my-8">
            {/* Sticky/Fixed close button inside container */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-dark/80 backdrop-blur-md hover:bg-amber-gold hover:text-brand-dark text-white rounded-full flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
              id="lightbox-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Column */}
              <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-black/50 min-h-[300px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Data Details Column */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-amber-gold">
                      {selectedProject.category}
                    </span>
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-gray-300">
                      {selectedProject.subCategory}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Spec sheets */}
                <div className="border-t border-b border-white/5 py-6 space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-500 uppercase tracking-widest">Location</span>
                    <span className="col-span-2 text-white text-right font-sans">{selectedProject.details.location}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-500 uppercase tracking-widest">Year</span>
                    <span className="col-span-2 text-white text-right font-sans">{selectedProject.details.year}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-500 uppercase tracking-widest">Area size</span>
                    <span className="col-span-2 text-white text-right font-sans">{selectedProject.details.area}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-gray-500 uppercase tracking-widest">My Scope</span>
                    <span className="col-span-2 text-white text-right font-sans text-xs">{selectedProject.details.scope}</span>
                  </div>
                </div>

                {/* Footer of modal */}
                <div className="flex items-center justify-between pt-4">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      Primary Contact
                    </span>
                    <span className="text-xs text-gray-300 font-sans">
                      Iyasu Belachew
                    </span>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-amber-gold hover:bg-amber-gold/95 text-brand-dark rounded text-xs uppercase tracking-widest font-bold font-display shadow-md shadow-amber-gold/10 transition-colors"
                  >
                    Inquire About This Space
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
