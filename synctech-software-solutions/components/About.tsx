import React from 'react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-[100vh] bg-white overflow-hidden flex items-center justify-center py-40 md:py-60">
      
      {/* The Central Blue Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] rounded-full z-0 select-none pointer-events-none">
          {/* Main sphere gradient - Vibrant Blue */}
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-400 via-blue-600 to-blue-700 shadow-[0_20px_100px_rgba(37,99,235,0.4)] relative overflow-hidden">
             {/* Highlight for 3D effect */}
             <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-300/40 blur-[80px] rounded-full mix-blend-screen"></div>
             {/* Shadow */}
             <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-900/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          </div>
          {/* Outer glow */}
          <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full -z-10 transform scale-125"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col md:flex-row justify-between h-full min-h-[60vh] items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5 text-left flex flex-col justify-center mb-16 md:mb-0">
            <Reveal>
              <span className="text-primary-600 text-sm font-bold tracking-[0.2em] uppercase mb-6 block pl-1 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
                SyncTech Software Solutions
              </span>
            </Reveal>
            
            <Reveal delay={200}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.0] mb-12 tracking-tighter drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]">
                Step Into Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 drop-shadow-none">Digital Future</span>
              </h2>
            </Reveal>

            <Reveal delay={400}>
               <p className="text-slate-700 text-lg md:text-base max-w-md leading-relaxed pl-1 font-light tracking-wide border-l border-primary-200 pl-6 drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]">
                SyncTech is a modern software development company delivering innovative, scalable, and high-performance digital solutions. 
                We simplify complex challenges through custom software, helping businesses achieve long-term growth and success.
               </p>
            </Reveal>
        </div>

        {/* Right Content - Vertical Indicators */}
        <div className="w-full md:w-1/5 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-8 md:gap-24 h-full">
            {['INNOVATE', 'SCALE', 'SUCCEED'].map((item, i) => (
                <Reveal key={item} delay={600 + (i * 150)}>
                   <div className="group flex flex-col items-center md:items-end gap-3 cursor-pointer">
                      {/* Icon/Dot */}
                      <div className="relative w-8 h-8 flex items-center justify-center md:order-2">
                         <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-primary-600 transition-all duration-500 group-hover:scale-150 shadow-[0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
                         <div className="absolute inset-0 border border-slate-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                      </div>
                      
                      {/* Label */}
                      <span className="text-slate-400 group-hover:text-slate-900 transition-colors duration-500 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase md:order-1 text-center md:text-right">
                        {item}
                      </span>
                   </div>
                </Reveal>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;