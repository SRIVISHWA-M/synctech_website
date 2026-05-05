import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { Reveal } from './Reveal';

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Frequently Asked Questions</h2>
        </Reveal>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary-200 transition-colors shadow-sm">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  {openIndex === idx ? <Minus className="text-primary-600" /> : <Plus className="text-slate-400" />}
                </button>
                
                <div className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;