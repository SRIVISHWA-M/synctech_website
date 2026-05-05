import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all">
            <Terminal size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-900'}`}>
            SyncTech
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`font-medium text-sm uppercase tracking-wide hover:text-primary-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-600'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-bold hover:bg-primary-600 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/20"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />} 
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-4 border-t border-slate-100 h-screen">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-700 font-medium py-4 border-b border-slate-100 last:border-0 hover:text-primary-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full text-center py-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;