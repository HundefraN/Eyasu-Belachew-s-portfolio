import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CLIENT_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'about', 'services', 'projects', 'tools', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'tools', label: 'Tools & Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo('home')}
          className="flex items-center group text-left cursor-pointer"
          id="nav-logo-btn"
        >
          <div>
            <span className="block font-display text-lg font-bold tracking-widest text-white uppercase group-hover:text-amber-gold transition-colors duration-300">
              {CLIENT_INFO.name}
            </span>
            <span className="block text-[10px] tracking-widest font-mono text-gray-400 uppercase">
              Architectural Studio
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`font-sans text-sm tracking-wider uppercase font-medium transition-all duration-300 relative py-2 cursor-pointer ${activeSection === link.id
                  ? 'text-amber-gold font-semibold'
                  : 'text-gray-300 hover:text-white'
                }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-gold rounded-full" />
              )}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('contact')}
            className="ml-4 px-5 py-2.5 rounded-md border border-amber-gold text-amber-gold text-xs uppercase tracking-widest font-semibold hover:bg-amber-gold hover:text-brand-dark transition-all duration-300 cursor-pointer"
            id="nav-cta-btn"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-brand-dark/95 backdrop-blur-lg border-l border-white/5 z-40 transform transition-transform duration-500 ease-out p-8 md:hidden flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        id="mobile-nav-drawer"
      >
        <div className="flex flex-col gap-8 mt-16">
          <div className="border-b border-white/10 pb-4">
            <span className="block font-display text-xl font-bold tracking-widest text-white uppercase">
              {CLIENT_INFO.name}
            </span>
            <span className="text-xs text-amber-gold font-mono uppercase tracking-widest">
              Menu Navigation
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-left font-display text-xl tracking-wide uppercase font-medium py-1 transition-all ${activeSection === link.id
                    ? 'text-amber-gold pl-3 border-l-2 border-amber-gold'
                    : 'text-gray-300 hover:text-white'
                  }`}
                id={`mobile-nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full py-4 rounded-md bg-amber-gold text-brand-dark text-center font-display uppercase tracking-widest font-bold hover:bg-amber-gold/90 transition-all duration-300 block"
            id="mobile-nav-cta"
          >
            Get In Touch
          </button>
          <div className="mt-4 text-center text-[11px] text-gray-500 font-mono">
            {CLIENT_INFO.email}
          </div>
        </div>
      </div>
    </nav>
  );
}