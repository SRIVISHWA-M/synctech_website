import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-white text-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      {/* 1️⃣5️⃣ Strong CTA Section */}
      <div className="container mx-auto px-4 mb-20 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-slate-900">Looking for a Reliable Software Development Company in India?</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
            Let’s build powerful digital solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-500/20 hover:-translate-y-1">
               👉 Get Free Consultation
             </button>
             <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-sm">
               👉 Request a Quote
             </button>
          </div>
        </Reveal>
      </div>

      {/* 1️⃣6️⃣ Contact Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
          
          {/* Info Side */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Us</h3>
                <p className="text-slate-500 mb-8">Fill out the form or reach us directly. We respond within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600 border border-primary-100">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Email</h5>
                      <p className="text-slate-500 text-sm">hello@synctech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600 border border-primary-100">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Phone</h5>
                      <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600 border border-primary-100">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Headquarters</h5>
                      <p className="text-slate-500 text-sm">101 Tech Blvd, Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 hidden lg:block">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Follow Us</p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all cursor-pointer"></div>
                   <div className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all cursor-pointer"></div>
                   <div className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all cursor-pointer"></div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-6 md:p-8 text-slate-900 border border-slate-100 shadow-sm">
            <Reveal delay={200}>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Get a Free Consultation</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-600">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-400" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-600">Company</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-400" placeholder="Tech Inc." />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-400" placeholder="john@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-400" placeholder="Tell us about your project..."></textarea>
                </div>

                <button className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary-600/20">
                  Send Request
                  <Send size={18} />
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;