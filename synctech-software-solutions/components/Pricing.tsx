import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRICING } from '../constants';
import { Reveal } from './Reveal';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Pricing Models</h2>
            <p className="text-slate-500">Flexible engagement tailored to your project stage.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map((plan, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div className={`relative p-8 rounded-3xl border h-full flex flex-col transition-transform hover:-translate-y-2 duration-300 ${plan.isPopular ? 'border-primary-500 bg-white shadow-xl shadow-primary-900/5' : 'border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg'}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500"> / project</span>}
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={18} className="text-primary-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25' : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200'}`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;