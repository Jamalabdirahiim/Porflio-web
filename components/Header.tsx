import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`container mx-auto px-6 py-4 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass rounded-full shadow-xl shadow-indigo-100/50' : ''}`}>
        
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-lg shadow-[0_4px_20px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-text-main group-hover:text-accent transition-colors">FOOROR</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="px-5 py-2 text-sm font-semibold uppercase tracking-widest text-text-dim hover:text-accent transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-8 py-3 text-sm font-bold uppercase tracking-widest bg-accent text-white rounded-full hover:bg-text-main transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20">
            Hire Me
          </a>
        </nav>

        <button className="md:hidden p-2 text-text-main glass rounded-lg hover:text-accent transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};