import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './Reveal';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50 opacity-100"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-500">Don't just take our word for it.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div className="bg-white p-8 rounded-2xl relative h-full hover:shadow-xl transition-all border border-slate-100 shadow-md">
                <Quote className="absolute top-6 right-6 text-slate-200" size={40} fill="currentColor" />
                <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium uppercase">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;