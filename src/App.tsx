import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Intersection Observer for scroll-driven fade/slide up reveal
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to track again
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.15, // trigger when 15% of element is visible
    });

    // Select all elements that should reveal on scroll
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-brand-dark text-gray-100 font-sans min-h-screen selection:bg-amber-gold selection:text-brand-dark overflow-x-hidden">
      {/* Sticky Top-level Navigation */}
      <Navbar />

      <main>
        {/* Hero Cover with dynamic badges */}
        <Hero />

        {/* Section 1.5: About the founder & consulting vision */}
        <About />

        {/* Section 2: Services catalog split gracefully */}
        <Services />

        {/* Section 3: 11-Picture filterable gallery with animated lightboxes */}
        <Gallery />

        {/* Section 4: Production BIM & high-performance hardware workstation stack */}
        <Tools />

        {/* Section 5: Secure inquiry briefing board & direct lines */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
