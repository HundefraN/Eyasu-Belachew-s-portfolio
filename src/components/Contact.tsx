import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw, MessageSquare, Briefcase } from 'lucide-react';
import { CLIENT_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Villa',
    budget: 'Standard',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate in-memory server communication
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential Villa',
      budget: 'Standard',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark/95 relative overflow-hidden border-t border-white/5">
      {/* Structural layout grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8 reveal-on-scroll" id="contact-info">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-mono text-amber-gold">
                Let's Build Together
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Initiate Your Blueprint
              </h2>
              <p className="font-sans text-gray-400 font-light leading-relaxed">
                Whether you want to draft a multi-story commercial tower, structure a parametric feature wall, or conceptualize a bespoke coffee house, we are ready to assist.
              </p>
            </div>

            {/* Quick cards */}
            <div className="space-y-4 pt-6">
              {/* Phone */}
              <a
                href={`tel:${CLIENT_INFO.phone}`}
                className="flex items-center gap-4 p-5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-amber-gold/30 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-gold/10 flex items-center justify-center text-amber-gold shrink-0 border border-amber-gold/10 group-hover:bg-amber-gold/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Direct Call / Telegram
                  </span>
                  <span className="block font-display text-base font-bold text-white group-hover:text-amber-gold transition-colors">
                    {CLIENT_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CLIENT_INFO.email}`}
                className="flex items-center gap-4 p-5 bg-white/[0.01] border border-white/5 rounded-xl hover:border-amber-gold/30 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-gold/10 flex items-center justify-center text-amber-gold shrink-0 border border-amber-gold/10 group-hover:bg-amber-gold/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Business Email Inquiry
                  </span>
                  <span className="block font-sans text-sm sm:text-base font-medium text-white group-hover:text-amber-gold transition-colors truncate">
                    {CLIENT_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 bg-white/[0.01] border border-white/5 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Office Headquarters
                  </span>
                  <span className="block font-sans text-sm sm:text-base font-medium text-white">
                    {CLIENT_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote of craftsmanship */}
            <div className="p-6 bg-white/[0.01] border-l-2 border-amber-gold rounded-r-xl">
              <p className="italic font-light text-sm text-gray-400 leading-relaxed">
                "An architect is a multi-disciplinary coordinator of structural integrity and aesthetic ambiance. We respect budget targets and model with absolute mathematical fidelity."
              </p>
              <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-amber-gold">
                - Iyasu Belachew, Gudo Architects & Engineers
              </span>
            </div>
          </div>

          {/* Right Inquiry Form Column */}
          <div className="lg:col-span-7 reveal-on-scroll" id="contact-form-wrapper">
            <div className="p-8 sm:p-10 bg-brand-card border border-white/10 rounded-2xl relative overflow-hidden shadow-xl">

              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      Inquiry Form Coordinate
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">
                      * Indicates required coordinate specifications
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block text-xs uppercase tracking-widest font-mono text-gray-400">
                        Your Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="e.g. Abebe Kebede"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-amber-gold focus:outline-none focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block text-xs uppercase tracking-widest font-mono text-gray-400">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="e.g. name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-amber-gold focus:outline-none focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="block text-xs uppercase tracking-widest font-mono text-gray-400">
                        Phone Coordinate
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        placeholder="e.g. 0911XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-amber-gold focus:outline-none focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="project-type" className="block text-xs uppercase tracking-widest font-mono text-gray-400">
                        Project Scope *
                      </label>
                      <select
                        id="project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-amber-gold focus:outline-none focus:bg-white/[0.08] transition-all"
                      >
                        <option value="Residential Villa" className="bg-brand-card">G+X Residential Villa</option>
                        <option value="Commercial Multi-story" className="bg-brand-card">Commercial Center (G+4+)</option>
                        <option value="Interior Remodel" className="bg-brand-card">Bespoke Interior Design</option>
                        <option value="Landscape / Cafe" className="bg-brand-card">Outdoor Cafe / Landscape</option>
                        <option value="Specialized / Parametric" className="bg-brand-card">Parametric Installation</option>
                        <option value="Full Construction Package" className="bg-brand-card">Architectural + Structure Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="block text-xs uppercase tracking-widest font-mono text-gray-400">
                      Message Blueprint Brief *
                    </label>
                    <textarea
                      id="message-input"
                      rows={5}
                      required
                      placeholder="Detail your spatial desires, location constraints, and design requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-amber-gold focus:outline-none focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-amber-gold hover:bg-amber-gold/90 text-brand-dark rounded-lg font-display uppercase tracking-widest font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-gold/5 transition-all cursor-pointer disabled:opacity-50"
                    id="submit-inquiry-btn"
                  >
                    {isSubmitting ? (
                      <>
                        Processing Coordinates
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Transmit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success screen */
                <div className="py-12 text-center space-y-6 animate-fade-in" id="contact-success-screen">
                  <div className="w-16 h-16 bg-amber-gold/10 border border-amber-gold/30 text-amber-gold rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-gold/5">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Transmission Confirmed
                    </h3>
                    <p className="font-sans text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your structural coordinates for a <strong className="text-amber-gold">{formData.projectType}</strong> have been successfully saved into our database stream.
                    </p>
                  </div>

                  {/* Summary coordinates board */}
                  <div className="bg-brand-dark/50 border border-white/5 rounded-xl p-5 text-left font-mono text-xs max-w-md mx-auto space-y-3.5">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
                      Transmitted Log Metrics
                    </span>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contact Email:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    {formData.phone && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Contact Phone:</span>
                        <span className="text-white">{formData.phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service Category:</span>
                      <span className="text-amber-gold">{formData.projectType}</span>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-gray-500 block mb-1">Brief Description:</span>
                      <p className="text-gray-300 font-sans italic text-xs leading-relaxed truncate">
                        "{formData.message}"
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-amber-gold font-mono uppercase tracking-wider">
                    Iyasu Belachew will review and respond within 24 hours.
                  </p>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-xs font-mono uppercase tracking-widest text-gray-300 rounded hover:text-white transition-all cursor-pointer"
                  >
                    Submit New Brief
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
