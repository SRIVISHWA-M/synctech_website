import React from 'react';
import { ArrowRight, Check, Zap, Layers } from 'lucide-react';
import { SERVICES } from '../constants';
import { Reveal } from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12 max-w-4xl mx-auto text-center">
            <h4 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
               We deliver high-impact <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Software & Digital Services</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
              From concept to execution, we provide the comprehensive expertise needed to transform your vision into reality.
            </p>
          </div>
        </Reveal>

        {/* Desktop Wave Services */}
        <div className="hidden lg:block relative h-[600px] w-full mb-16">
           {/* SVG Wave */}
           <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 600">
               <defs>
                 <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
                   <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                 </linearGradient>
               </defs>
               
               <path 
                 d="M0,300 Q150,600 300,300 T600,300 T900,300 T1200,300" 
                 fill="none" 
                 stroke="url(#serviceGradient)" 
                 strokeWidth="2" 
                 className="opacity-100"
               />
           </svg>

           {/* Service Nodes */}
           {SERVICES.map((service, index) => {
               const positions = [
                   { left: '12.5%', top: '450px' },
                   { left: '37.5%', top: '150px' }, 
                   { left: '62.5%', top: '450px' }, 
                   { left: '87.5%', top: '150px' }
               ];
               
               const pos = positions[index] || { left: '0', top: '0' };
               const isTop = parseInt(pos.top) < 300; 

               return (
                  <div key={service.id} className="absolute transform -translate-x-1/2 -translate-y-1/2 group w-64 flex flex-col items-center" style={{ left: pos.left, top: pos.top }}>
                      <Reveal delay={index * 150}>
                         <a href={`#service-${service.id}`} className="flex flex-col items-center group/item relative">
                             {/* Hexagon Icon */}
                             <div className="relative w-24 h-24 flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 cursor-pointer z-20">
                                <div className="absolute inset-0 bg-white clip-path-hexagon shadow-lg group-hover/item:shadow-xl transition-all border-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent clip-path-hexagon"></div>
                                <service.icon className="relative z-10 text-primary-600 group-hover/item:text-primary-700 transition-colors" size={36} />
                                
                                <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-500 rounded-full animate-pulse ${isTop ? '-bottom-4' : '-top-4'}`}></div>
                             </div>
                             
                             {/* Text Content */}
                             <div className={`absolute w-64 text-center transition-all duration-500 z-30 ${isTop ? 'top-28 pt-4' : 'bottom-28 pb-4'} opacity-80 group-hover/item:opacity-100`}>
                                 <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover/item:text-primary-600 transition-colors">{service.title}</h3>
                                 <p className="text-sm text-slate-500 leading-relaxed font-light">{service.shortDesc}</p>
                             </div>

                             {/* Big Number Background */}
                             <span 
                               className="absolute text-[140px] font-bold text-slate-200/40 -z-10 select-none pointer-events-none font-sans leading-none transition-colors group-hover/item:text-blue-200/40" 
                               style={{ [isTop ? 'bottom' : 'top']: '-60px' }}
                             >
                               0{index + 1}
                             </span>
                         </a>
                      </Reveal>
                  </div>
               )
           })}
        </div>

        {/* Mobile Vertical List */}
        <div className="lg:hidden space-y-8 mb-16 relative pl-8 border-l border-slate-200 ml-4">
            {SERVICES.map((service, index) => (
                <Reveal key={service.id} delay={index * 100}>
                    <a href={`#service-${service.id}`} className="block relative pl-6 group">
                        <div className="absolute -left-[41px] top-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary-400 transition-all">
                            <service.icon size={18} className="text-primary-600" />
                        </div>
                        <span className="text-6xl font-bold text-slate-100 absolute -top-8 right-0 -z-10">0{index+1}</span>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{service.shortDesc}</p>
                    </a>
                </Reveal>
            ))}
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={`service-${service.id}`} className={`relative group/section flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 scroll-mt-24`}>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-slate-200 hidden lg:block"></div>

              <div className="lg:w-1/2 w-full relative">
                <Reveal delay={200}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-white aspect-[16/10] group perspective-1000 z-10 bg-white">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative w-full h-full object-cover transform group-hover/section:scale-105 transition-transform duration-700 z-10"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-20"></div>
                    
                    {/* Comparison Box */}
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <div className="backdrop-blur-md bg-white/90 p-5 rounded-xl border border-white/40 shadow-lg transform translate-y-4 group-hover/section:translate-y-0 transition-transform duration-500">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary-50 rounded-lg text-primary-600 shrink-0">
                                <Zap size={20} fill="currentColor" className="opacity-75" />
                            </div>
                            <div>
                                <h5 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">Why Choose Custom?</h5>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                  {service.comparison}
                                </p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:w-1/2 w-full relative">
                <span className="absolute -top-12 -left-10 text-9xl font-extrabold text-slate-100 select-none pointer-events-none z-0 font-sans">
                  0{index + 1}
                </span>

                <Reveal>
                  <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">
                        <service.icon size={14} />
                        Service 0{index + 1}
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light border-l-2 border-primary-200 pl-6">
                        {service.fullDesc}
                      </p>

                      {/* Features Chips */}
                      <div className="mb-8">
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                           <Layers size={16} className="text-primary-500" /> Core Features
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {service.features.map((feature, i) => (
                                <span key={i} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-primary-300 hover:text-primary-700 hover:shadow-sm transition-all cursor-default">
                                    {feature}
                                </span>
                            ))}
                        </div>
                      </div>

                      {/* Benefits List */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8">
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Check size={16} className="text-green-500" /> Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></div>
                                {benefit}
                              </div>
                            ))}
                        </div>
                      </div>
                      
                      <a href="#contact" className="group inline-flex items-center gap-3 text-slate-900 font-semibold border-b border-primary-500 pb-1 hover:text-primary-600 transition-colors">
                        Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}} />
    </section>
  );
};

export default Services;