import React from 'react';
import { INDUSTRIES, PROCESS_STEPS, TECH_STACK } from '../constants';
import { Reveal } from './Reveal';

const Operations: React.FC = () => {
  return (
    <>
      {/* 7️⃣ Industries We Serve */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Industries We Work With</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="bg-white p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:-translate-y-1 transition-all h-full text-center group border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-100">
                  <industry.icon className="text-slate-400 group-hover:text-primary-600 transition-colors" size={32} />
                  <span className="font-semibold text-slate-600 text-sm md:text-base group-hover:text-slate-900 transition-colors">{industry.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Our Process / Expertise Section (Wave Timeline) */}
      <section id="process" className="py-32 bg-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <Reveal>
            <div className="mb-24 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Our team of experts deliver <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">vision and missions</span> for your success.
              </h2>
              <p className="text-slate-500 text-lg max-w-xl pl-1 border-l-2 border-primary-200">
                 We follow a refined, step-by-step process to ensure your digital product is built to the highest standards of quality and performance.
              </p>
            </div>
          </Reveal>
          
          {/* Desktop Wave Timeline */}
          <div className="hidden lg:block relative h-[600px] w-full">
            
            {/* The Wave SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1200 600" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                   <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.5" />
                   <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                 </linearGradient>
               </defs>
               
               <path 
                 d="M0,300 C200,500 400,500 600,300 S1000,100 1200,300" 
                 fill="none" 
                 stroke="url(#waveGradient)" 
                 strokeWidth="2"
                 strokeDasharray="10 5" 
                 className="opacity-100"
               />
               
               <path 
                 d="M0,300 C200,500 400,500 600,300 S1000,100 1200,300" 
                 fill="none" 
                 stroke="#bfdbfe" 
                 strokeWidth="1"
                 className="opacity-40"
               />
            </svg>

            {PROCESS_STEPS.map((step, index) => {
               const positions = [
                 { left: '5%', top: '320px' },      // 1. Requirement
                 { left: '25%', top: '480px' },     // 2. Planning (Low)
                 { left: '50%', top: '300px' },     // 3. Development (Mid)
                 { left: '75%', top: '150px' },     // 4. Testing (High)
                 { left: '95%', top: '300px' },     // 5. Deployment
               ];
               
               const pos = positions[index] || { left: '0', top: '0' };
               const isLow = parseInt(pos.top) > 300;
               const textClass = isLow ? "mt-8" : "-mt-40 mb-8 order-first";

               return (
                 <div 
                   key={index}
                   className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group w-64"
                   style={{ left: pos.left, top: pos.top }}
                 >
                    <span className="absolute text-[140px] font-bold text-slate-100 select-none transition-colors group-hover:text-blue-50 font-sans z-0" style={{ top: isLow ? '-80px' : '20px' }}>
                      {index + 1}
                    </span>

                    {/* Node/Icon */}
                    <Reveal delay={index * 150} className="relative z-10">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white clip-path-hexagon border-none shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 clip-path-hexagon"></div>
                            <step.icon size={32} className="relative z-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                            <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-sm ${isLow ? '-top-6' : '-bottom-6'}`}></div>
                        </div>
                    </Reveal>

                    {/* Text Content */}
                    <Reveal delay={index * 150 + 100} className={`text-center relative z-20 ${textClass}`}>
                       <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                       <p className="text-sm text-slate-500 leading-relaxed font-light">{step.desc}</p>
                    </Reveal>
                 </div>
               );
            })}
          </div>

          {/* Mobile Vertical View */}
          <div className="lg:hidden relative space-y-16 pl-6">
             <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
             {PROCESS_STEPS.map((step, index) => (
               <Reveal key={index} delay={index * 100}>
                 <div className="relative pl-12">
                    <div className="absolute left-[-1.6rem] top-0 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <step.icon size={20} className="text-primary-600" />
                    </div>
                    <span className="absolute right-0 -top-8 text-7xl font-bold text-slate-100 -z-10">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                 </div>
               </Reveal>
             ))}
          </div>

        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .clip-path-hexagon {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
        `}} />
      </section>

      {/* 9️⃣ Technologies */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Technology Stack</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(TECH_STACK).map(([category, techs], index) => (
              <Reveal key={category} delay={index * 100}>
                <div>
                  <h3 className="text-xl font-bold text-primary-600 mb-8 capitalize border-b border-slate-200 pb-3">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-white rounded-lg text-slate-600 text-sm font-medium border border-slate-200 hover:border-primary-300 hover:text-primary-700 hover:shadow-md transition-all cursor-default shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Operations;