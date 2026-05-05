import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[110vh] md:h-screen bg-white text-slate-900 overflow-hidden flex flex-col justify-end">
      
      {/* Background: Clean White with Animated Blue Curve */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          
          {/* 1. Base Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

          {/* 2. Atmosphere Glow */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-50/50 to-transparent blur-[80px] rounded-full animate-pulse-slow"></div>

          {/* 3. The White Planet (Blending with bg) */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] md:w-[130vw] md:h-[130vw] bg-white rounded-[50%] shadow-[inset_0_20px_60px_-10px_rgba(59,130,246,0.15)] overflow-hidden">
              {/* Inner Grid/Reflection */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-gradient-to-b from-blue-50 to-transparent blur-3xl opacity-60"></div>
          </div>

          {/* 4. The Animated Blue Horizon Line */}
          {/* Base Line */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] md:w-[130vw] md:h-[130vw] rounded-[50%] border-t-[3px] border-blue-400 shadow-[0_-5px_20px_rgba(59,130,246,0.4)]"></div>
          
          {/* Pulsing Overlay Line */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] md:w-[130vw] md:h-[130vw] rounded-[50%] border-t-[2px] border-cyan-300 blur-[2px] animate-pulse"></div>

          {/* Moving Light/Energy on the Curve (Simulated via gradient animation) */}
           <div className="absolute top-[24.5%] left-1/2 -translate-x-1/2 w-[200vw] h-[100px] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.6)_0%,transparent_50%)] blur-[20px] animate-pulse-slow"></div>

          {/* 5. Central Bright Spot / Lens Flare */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-blue-200/40 to-transparent blur-[50px] -translate-y-[50%]"></div>
          
          {/* 6. Overlay gradient for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col pt-32 pb-16 justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full mt-4 md:mt-10">
            <Reveal>
              <div className="max-w-md">
                <p className="text-slate-500 text-lg leading-relaxed font-light tracking-wide">
                  SyncTech Software Solutions is a trusted software development company in India offering comprehensive digital services that equip businesses with the technology to excel.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200} className="hidden md:block mt-6 md:mt-0">
              <p className="text-slate-800 text-lg font-bold tracking-wide bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                500+ Successful Projects Delivered
              </p>
            </Reveal>
        </div>

        {/* Bottom Section - Center Headline */}
        <div className="flex flex-col items-center text-center mt-auto mb-6 md:mb-10">
            <Reveal delay={300}>
              <p className="text-primary-600 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 shadow-sm">
                 Top Software Development Company in India
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-900 tracking-tighter mb-10 leading-[0.9]">
                Master <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-500 to-cyan-400 drop-shadow-sm">
                  Digital Solutions.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={600}>
               <a 
                 href="#contact" 
                 className="group relative inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full text-lg font-medium hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-900/20 hover:shadow-primary-600/30"
               >
                 Get Free Consultation
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;