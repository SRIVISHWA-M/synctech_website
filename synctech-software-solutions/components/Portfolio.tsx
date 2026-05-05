import React from 'react';
import { PORTFOLIO } from '../constants';
import { Reveal } from './Reveal';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <p className="text-slate-500 text-lg">
                Explore how we've helped diverse clients achieve their digital goals.
              </p>
            </div>
            <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PORTFOLIO.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3] border border-slate-200 shadow-lg bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-lg border-b-2 border-primary-400 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Case Study</span>
                  </div>
                </div>
                <div className="pl-1">
                    <span className="text-primary-600 text-xs font-bold uppercase tracking-widest block mb-2">{item.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;