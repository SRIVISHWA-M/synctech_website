import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#111111] mt-20 pt-12 pb-0 overflow-hidden font-sans">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16 mb-8">
          
          {/* Left Side: Brand and Description */}
          <div className="flex-1 max-w-xs">
            <div className="text-white font-extrabold text-3xl tracking-tight mb-2">SyncTechn</div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              We help ambitious businesses scale through world-class technology solutions.
            </p>
          </div>

          {/* Right Side: Link Columns */}
          <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {/* Column 1: Services */}
            <div>
              <h4 className="text-white font-medium text-base mb-4">Services</h4>
              <ul className="space-y-3 text-sm font-medium text-slate-400">
                <li><a href="/services/mobiledevelopment" className="transition-colors duration-300 hover:text-blue-400">Mobile Development</a></li>
                <li><a href="/services/webdevelopment" className="transition-colors duration-300 hover:text-blue-400">Web Development</a></li>
                <li><a href="/services/digitalmarketing" className="transition-colors duration-300 hover:text-blue-400">Digital Marketing</a></li>
                <li><a href="/services/crm" className="transition-colors duration-300 hover:text-blue-400">CRM Solutions</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-white font-medium text-base mb-4">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-slate-400">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}><a href={item.href} className="transition-colors duration-300 hover:text-blue-400">{item.label}</a></li>
                ))}
                <li><a href="/careers" className="transition-colors duration-300 hover:text-blue-400">Careers</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="text-white font-medium text-base mb-4">Legal</h4>
              <ul className="space-y-3 text-sm font-medium text-slate-400">
                <li><a href="/privacypolicy" className="transition-colors duration-300 hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="/termsofservice" className="transition-colors duration-300 hover:text-blue-400">Terms of Service</a></li>
                <li><a href="/cookiespolicy" className="transition-colors duration-300 hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h4 className="text-white font-medium text-base mb-4">Social</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Mail size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Bar: Copyright */}
        <div className="mt-8 mb-0 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 relative z-10">
          <div>
            &copy; {new Date().getFullYear()} SyncTech Software Solutions. All rights reserved.
          </div>
          <div>
            Design by SyncTechn
          </div>
        </div>
      </div>

      {/* Huge Background Text - Centered Watermark */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
  <span className="text-[14vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-blue-600/30 via-blue-500/20 to-cyan-400/10 translate-y-[25%]">
    SYNCTECHN
  </span>
</div>\
    </footer>
  );
};

export default Footer;