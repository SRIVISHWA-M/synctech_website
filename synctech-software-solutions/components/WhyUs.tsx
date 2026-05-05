import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { Reveal } from './Reveal';

const WhyUs: React.FC = () => {
  // We use the first 4 items to create the 4-point cross layout
  const features = WHY_CHOOSE_US.slice(0, 4);
  const Icon1 = features[0].icon;
  const Icon2 = features[1].icon;
  const Icon3 = features[2].icon;
  const Icon4 = features[3].icon;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      
      {/* Background Ambience & Wave Effect */}
      <div className="absolute inset-0 bg-white overflow-hidden">
          {/* Light Blue Glow Center - Adjusted for white bg */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/60 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"></div>
          
          {/* Animated Wave SVG */}
          <svg className="absolute top-1/2 left-0 w-full h-[800px] -translate-y-1/2 opacity-60" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
                      <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
              </defs>

              {/* Multiple Layers of Waves */}
              {Array.from({ length: 12 }).map((_, i) => {
                  const yBase = 300;
                  const amplitude = 60 + i * 8;
                  const opacity = 0.4 + (i % 3) * 0.1;
                  // Alternating directions and delays for organic feel
                  const isEven = i % 2 === 0;
                  
                  return (
                      <g key={i} className="wave-layer">
                         {/* Solid Line */}
                         <path 
                            d={`M0,${yBase} Q300,${yBase - amplitude} 600,${yBase} T1200,${yBase}`}
                            fill="none" 
                            stroke="url(#wave-gradient)" 
                            strokeWidth={isEven ? 2 : 1}
                            style={{ 
                                opacity: opacity,
                                animation: `waveFloat ${6 + i}s ease-in-out infinite alternate`,
                                animationDelay: `${i * -0.5}s`
                            }}
                         />
                         {/* Particle Line (Dashed) for the 'digital' look */}
                         <path 
                            d={`M0,${yBase} Q300,${yBase + amplitude} 600,${yBase} T1200,${yBase}`}
                            fill="none" 
                            stroke="url(#wave-gradient)" 
                            strokeWidth="2"
                            strokeDasharray={isEven ? "4 8" : "2 10"}
                            style={{
                                opacity: opacity * 0.6,
                                animation: `waveFloat ${8 + i}s ease-in-out infinite alternate-reverse`,
                                animationDelay: `${i * -0.8}s`
                            }}
                         />
                      </g>
                  )
              })}
          </svg>

          {/* Vignette Overlay - White to Transparent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.5)_60%,#ffffff_100%)] pointer-events-none"></div>
      </div>

      {/* Style for wave animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes waveFloat {
            0% { transform: scaleY(0.9) translateY(15px); }
            100% { transform: scaleY(1.1) translateY(-15px); }
        }
      `}} />

      {/* Mobile Layout (Stacked) */}
      <div className="md:hidden container mx-auto px-4 relative z-10">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With SyncTech?</h2>
            <p className="text-slate-600">Core advantages that drive your success.</p>
         </div>
         <div className="space-y-8">
            {features.map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
                     <item.icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.description || "Leading the industry with excellence and innovation."}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Desktop Radial Layout */}
      <div className="hidden md:block relative w-full max-w-[1200px] aspect-square lg:aspect-[16/10] mx-auto z-10">
         
         {/* SVG Connections Layer - Adjusted for White BG */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
               <linearGradient id="grad-top" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
               </linearGradient>
               <linearGradient id="grad-right" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
               </linearGradient>
               <linearGradient id="grad-bottom" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
               </linearGradient>
               <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
               </linearGradient>
            </defs>

            {/* Top to Center */}
            <path d="M600,160 C600,280 600,280 600,400" stroke="url(#grad-top)" strokeWidth="80" fill="none" className="blur-[30px] opacity-20" />
            <path d="M600,160 C600,250 600,300 600,400" stroke="url(#grad-top)" strokeWidth="2" fill="none" className="opacity-40" strokeDasharray="5 5" />

            {/* Right to Center */}
            <path d="M1000,400 C800,400 800,400 600,400" stroke="url(#grad-right)" strokeWidth="80" fill="none" className="blur-[30px] opacity-20" />
            <path d="M1000,400 C850,400 750,400 600,400" stroke="url(#grad-right)" strokeWidth="2" fill="none" className="opacity-40" strokeDasharray="5 5" />

            {/* Bottom to Center */}
            <path d="M600,640 C600,520 600,520 600,400" stroke="url(#grad-bottom)" strokeWidth="80" fill="none" className="blur-[30px] opacity-20" />
            <path d="M600,640 C600,550 600,500 600,400" stroke="url(#grad-bottom)" strokeWidth="2" fill="none" className="opacity-40" strokeDasharray="5 5" />

            {/* Left to Center */}
            <path d="M200,400 C400,400 400,400 600,400" stroke="url(#grad-left)" strokeWidth="80" fill="none" className="blur-[30px] opacity-20" />
            <path d="M200,400 C350,400 450,400 600,400" stroke="url(#grad-left)" strokeWidth="2" fill="none" className="opacity-40" strokeDasharray="5 5" />
         </svg>

         {/* Center Content */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-[400px]">
            <Reveal>
               <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 drop-shadow-sm">
                  Why Partner With <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">SyncTech?</span>
               </h2>
               <p className="text-slate-600 text-sm font-medium">
                  Building the technological foundation for your scalable business growth.
               </p>
            </Reveal>
         </div>

         {/* 1. Top Node */}
         <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
            <Reveal delay={100} className="flex flex-col items-center">
               <div className="mb-4 text-center w-64">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{features[0].title}</h3>
                   <p className="text-slate-500 text-sm">{features[0].description || "Custom tailored solutions built from scratch."}</p>
               </div>
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] border border-slate-100 relative z-10">
                   <Icon1 size={32} className="text-blue-600" />
               </div>
            </Reveal>
         </div>

         {/* 2. Right Node */}
         <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 z-20 flex flex-row-reverse items-center">
            <Reveal delay={200} className="flex flex-row items-center gap-6">
               <div className="text-left w-64">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{features[1].title}</h3>
                   <p className="text-slate-500 text-sm">{features[1].description || "Optimized for startups and enterprise budgets."}</p>
               </div>
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(14,165,233,0.5)] border border-slate-100 relative z-10 shrink-0">
                   <Icon2 size={32} className="text-sky-500" />
               </div>
            </Reveal>
         </div>

         {/* 3. Bottom Node */}
         <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-20 flex flex-col-reverse items-center">
            <Reveal delay={300} className="flex flex-col-reverse items-center">
               <div className="mt-4 text-center w-64">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{features[2].title}</h3>
                   <p className="text-slate-500 text-sm">{features[2].description || "Senior developers with years of expertise."}</p>
               </div>
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] border border-slate-100 relative z-10">
                   <Icon3 size={32} className="text-blue-600" />
               </div>
            </Reveal>
         </div>

         {/* 4. Left Node */}
         <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 z-20 flex flex-row items-center">
             <Reveal delay={400} className="flex flex-row items-center gap-6">
               <div className="text-right w-64">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{features[3].title}</h3>
                   <p className="text-slate-500 text-sm">{features[3].description || "We value your time with strict deadlines."}</p>
               </div>
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)] border border-slate-100 relative z-10 shrink-0">
                   <Icon4 size={32} className="text-cyan-600" />
               </div>
            </Reveal>
         </div>

         {/* Decorative Arrows/Chevrons */}
         <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-blue-400 animate-pulse">▼</div>
         <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 text-blue-400 animate-pulse">▲</div>
         <div className="absolute top-1/2 right-[25%] -translate-y-1/2 text-sky-400 animate-pulse">◀</div>
         <div className="absolute top-1/2 left-[25%] -translate-y-1/2 text-cyan-400 animate-pulse">▶</div>

      </div>
    </section>
  );
};

export default WhyUs;