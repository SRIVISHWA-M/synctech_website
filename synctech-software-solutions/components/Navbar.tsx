import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#features" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-out
          ${
            isScrolled
              ? "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/75 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]"
              : "top-0 left-0 w-full bg-transparent"
          }
        `}
      >
        {isScrolled && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-blue-500/5 pointer-events-none" />
        )}

        <div className="relative container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[80px]">

            <a href="/" className="flex items-center gap-3 group">
              <img
                src="https://res.cloudinary.com/dij2x0ixo/image/upload/v1782032673/SyncTechWhiteLogo_bt3s0u.jpg"
                alt="SyncTechn Logo"
                className="w-15 h-15"
              />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Sync<span className="text-blue-600">Techn</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center h-full">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-5 h-full flex items-center text-slate-700 font-semibold transition-all duration-300 hover:text-blue-600 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-slate-700 font-medium border-b border-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-6 py-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[90px]" />
    </>
  );
};

export default Navbar;