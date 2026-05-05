import React from 'react';
import { Terminal } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-500 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg text-white">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900">SyncTech</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              We help ambitious businesses scale through world-class technology solutions.
            </p>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} SyncTech Software Solutions. <br /> All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Mobile Development</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">CRM Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.label}><a href={item.href} className="hover:text-primary-600 transition-colors">{item.label}</a></li>
              ))}
              <li><a href="#" className="hover:text-primary-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;