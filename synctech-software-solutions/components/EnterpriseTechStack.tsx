"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const categories = [
  {
    id: "Frontend",
    techs: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/black" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ]
  },
  {
    id: "Backend",
    techs: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    ]
  },
  {
    id: "Mobile",
    techs: [
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "iOS", icon: "https://cdn.simpleicons.org/ios/black" },
    ]
  },
  {
    id: "Cloud",
    techs: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Microsoft Azure", icon: "https://swimburger.net/media/ppnn3pcl/azure.png" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    ]
  }
];

export default function EnterpriseTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  
  const [playCount, setPlayCount] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);
  const [activeTechIndex, setActiveTechIndex] = useState(-1);
  const [isFinalScene, setIsFinalScene] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // 1. If user scrolls out of view, reset EVERYTHING (including skip state)
    if (!isInView) {
      setActiveCategoryIndex(-1);
      setActiveTechIndex(-1);
      setIsFinalScene(false);
      setIsSkipped(false); 
      return;
    }

    // 2. If user clicked skip while in view, jump to end
    if (isSkipped) {
      setActiveCategoryIndex(-1);
      setActiveTechIndex(-1);
      setIsFinalScene(true);
      return;
    }

    let timeouts: NodeJS.Timeout[] = [];
    let cumulativeDelay = 500;

    const schedule = (fn: () => void, delay: number) => {
      cumulativeDelay += delay;
      timeouts.push(setTimeout(fn, cumulativeDelay));
    };

    categories.forEach((cat, cIdx) => {
      // Fade in category and show first tech
      schedule(() => {
        setActiveCategoryIndex(cIdx);
        setActiveTechIndex(0);
      }, 500);

      // Cycle through the rest of the technologies
      schedule(() => setActiveTechIndex(1), 1800);
      schedule(() => setActiveTechIndex(2), 1800);
      schedule(() => setActiveTechIndex(3), 1800);
      
      // Hold the last technology briefly
      schedule(() => {}, 1800);

      // Fade out the category before the next one
      schedule(() => {
        setActiveCategoryIndex(-1);
      }, 0);
      
      // Small pause before next category appears
      schedule(() => {}, 600);
    });

    // Enter Final Scene
    schedule(() => {
      setIsFinalScene(true);
    }, 0);

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, playCount, isSkipped]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600px] w-full bg-[#F8FAFC] overflow-hidden font-sans flex flex-col items-center py-16"
    >
      {/* Skip Animation Button */}
      {!isFinalScene && (
        <button
          onClick={() => setIsSkipped(true)}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors shadow-sm"
        >
          Skip ⏭
        </button>
      )}
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/50 rounded-full blur-[100px]" />

        <motion.div
          animate={{ x: [-80, 80, -80], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: [80, -80, 80], y: [50, -50, 50] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />

        {/* Slow Floating Particles */}
        {(activeCategoryIndex > -1 || isFinalScene) && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-400 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: 0.2
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Intro Header */}
      <div className="relative z-20 text-center w-full max-w-4xl mx-auto mb-8 h-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight">Technology Stack</h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Building Intelligent Digital Experiences</p>
        </motion.div>
      </div>

      {/* Carousel Experience */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start min-h-[400px]">
        <AnimatePresence mode="wait">
          {!isFinalScene && activeCategoryIndex !== -1 && (
            <motion.div
              key={`category-${activeCategoryIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center perspective-[2000px]"
            >
              {/* Category Floating Title */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/60 border border-slate-200 shadow-sm backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-indigo-900 font-bold tracking-widest uppercase text-sm">
                    {categories[activeCategoryIndex].id} 
                  </span>
                </div>
              </motion.div>

              {/* Tech Cards Carousel */}
              <div className="relative w-full h-[320px] flex justify-center items-center">
                <AnimatePresence mode="popLayout">
                  {categories[activeCategoryIndex].techs.map((tech, idx) => {
                    const isActive = activeTechIndex === idx;
                    const offset = idx - activeTechIndex;

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: 400, scale: 0.8, rotateY: 40 }}
                        animate={{
                          opacity: isActive ? 1 : Math.abs(offset) > 1 ? 0 : 0.4,
                          x: offset * 320,
                          scale: isActive ? 1.3 : 0.85,
                          rotateY: offset * -15,
                          zIndex: isActive ? 50 : 30 - Math.abs(offset),
                          filter: isActive ? 'blur(0px)' : 'blur(4px)',
                        }}
                        exit={{ opacity: 0, x: -400, scale: 0.8, rotateY: -40 }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className={`absolute w-[240px] h-[280px] bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center border transition-shadow duration-500
                            ${isActive ? 'shadow-[0_40px_80px_rgba(79,70,229,0.15)] border-indigo-100 ring-4 ring-white' : 'shadow-xl border-slate-100'}
                          `}
                      >
                        {isActive && <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-[24px]" />}

                        <div className="w-28 h-28 mb-6 flex items-center justify-center relative z-10">
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-sm" />
                        </div>
                        <h4 className="text-2xl font-extrabold text-[#0F172A] relative z-10 tracking-tight">{tech.name}</h4>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Scene Layout */}
        <AnimatePresence>
          {isFinalScene && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-30 w-full flex flex-col items-center justify-start pb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-7xl px-8 relative z-10">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
                    className="flex flex-col gap-6"
                  >
                    <div className="text-2xl font-extrabold text-[#0F172A] border-b-2 border-indigo-100 pb-4 inline-flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                      {cat.id}
                    </div>

                    <div className="flex flex-col gap-4 relative">
                      {cat.techs.map((tech, j) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 + j * 0.1 + 0.3 }}
                          className="flex items-center gap-5 bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group"
                        >
                          <div className="w-14 h-14 bg-white rounded-2xl p-2 border border-slate-100 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                          </div>
                          <div className="font-bold text-[#0F172A] text-lg">{tech.name}</div>
                        </motion.div>
                      ))}
                      
                      {/* Decorative Connection Line */}
                      <div className="absolute left-7 top-14 bottom-14 w-[2px] bg-gradient-to-b from-indigo-100 via-indigo-200 to-transparent -z-10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
