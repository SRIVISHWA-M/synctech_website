"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const categories = [
  {
    id: "Frontend",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    techs: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", desc: "Component-based library for building modern user interfaces." },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/black", desc: "Production-ready React framework for scalable applications." },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", desc: "Utility-first CSS framework for rapid UI development." },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", desc: "Strongly typed JavaScript for enterprise applications." },
    ]
  },
  {
    id: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    techs: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", desc: "Scalable JavaScript runtime." },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", desc: "Versatile language for AI and backend development." },
      { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8", desc: "High-performance language for scalable systems." },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", desc: "Modern API query language." },
    ]
  },
  {
    id: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    techs: [
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", desc: "Cross-platform mobile framework." },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", desc: "Google's UI toolkit." },
      { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84", desc: "Mobile operating system." },
      { name: "iOS", icon: "https://cdn.simpleicons.org/ios/black", desc: "Apple mobile ecosystem." },
    ]
  },
  {
    id: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    techs: [
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E", desc: "Scalable cloud infrastructure." },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", desc: "Enterprise cloud services." },
      { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0089D6", desc: "Cloud platform for modern applications." },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", desc: "Containerization platform." },
    ]
  }
];

export default function EnterpriseTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const [scene, setScene] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setScene(0);
      return;
    }

    setScene(1);
    const t2 = setTimeout(() => setScene(2), 1500); // Carousel Enters
    const t3 = setTimeout(() => setScene(3), 3000); // Frontend Active
    const t4 = setTimeout(() => setScene(4), 6000); // Backend Active
    const t5 = setTimeout(() => setScene(5), 9000); // Mobile Active
    const t6 = setTimeout(() => setScene(6), 12000); // Cloud Active
    const t7 = setTimeout(() => setScene(7), 15000); // Final Grid Layout

    return () => {
      clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
    };
  }, [isInView, playCount]);

  // Derived states
  const activeCategoryIndex =
    (scene === 2 || scene === 3) ? 0 :
      scene === 4 ? 1 :
        scene === 5 ? 2 :
          scene === 6 ? 3 : -1;

  const activeTechIndex =
    scene === 3 ? 0 : // React
      scene === 4 ? 1 : // Python
        scene === 5 ? 1 : // Flutter
          scene === 6 ? 0 : -1; // AWS

  return (
    <section
      ref={containerRef}
      className="relative min-h-[1000px] w-full bg-[#F8FAFC] overflow-hidden font-sans flex flex-col items-center py-24"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />

        {/* Soft Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/50 rounded-full blur-[100px]" />

        {/* Animated Gradient Mesh / Ambient Light Spots */}
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
        {scene > 0 && [...Array(20)].map((_, i) => (
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

      {/* Intro Header (Scenes 1 - 6) */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto mb-16 h-32">
        <AnimatePresence>
          {scene >= 1 && scene < 7 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Technology Stack</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Building Intelligent Digital Experiences with Modern Technologies</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Experience (Scenes 2 - 6) */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center">
        <AnimatePresence>
          {scene >= 2 && scene < 7 && (
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Netflix-style Category Carousel */}
              <div className="relative w-full h-[300px] flex justify-center items-center perspective-[2000px]">
                {categories.map((cat, idx) => {
                  const isActive = activeCategoryIndex === idx;
                  const offset = idx - activeCategoryIndex;

                  return (
                    <motion.div
                      key={cat.id}
                      animate={{
                        x: offset * 360,
                        scale: isActive ? 1.15 : 0.85,
                        rotateY: offset * -20,
                        opacity: isActive ? 1 : Math.abs(offset) > 1 ? 0 : 0.4,
                        zIndex: isActive ? 50 : 40 - Math.abs(offset),
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                      className={`absolute w-[320px] h-[200px] rounded-[24px] overflow-hidden shadow-2xl border-2 transition-colors duration-500
                          ${isActive ? 'border-indigo-400 ring-4 ring-indigo-100 shadow-[0_30px_60px_rgba(79,70,229,0.25)]' : 'border-[#E2E8F0] shadow-md'}
                        `}
                    >
                      <img src={cat.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105" alt={cat.id} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-90" />

                      {isActive && <motion.div layoutId="glowEffect" className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay" />}

                      <div className="absolute bottom-6 left-8 flex items-center gap-3">
                        <div className="w-2 h-8 bg-indigo-500 rounded-full" />
                        <div className="text-white font-bold text-3xl tracking-tight">{cat.id}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech Cards Carousel (Scenes 3 - 6) */}
              <div className="relative w-full h-[360px] flex justify-center items-center mt-12 perspective-[1500px]">
                <AnimatePresence mode="popLayout">
                  {scene >= 3 && activeCategoryIndex !== -1 && categories[activeCategoryIndex].techs.map((tech, idx) => {
                    const isActive = activeTechIndex === idx;
                    const offset = idx - activeTechIndex;

                    return (
                      <motion.div
                        key={tech.name + activeCategoryIndex} // force remount on category change
                        initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: 30 }}
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                          x: offset * 300,
                          scale: isActive ? 1.15 : 0.85,
                          rotateY: offset * -15,
                          zIndex: isActive ? 30 : 20 - Math.abs(offset),
                        }}
                        exit={{ opacity: 0, y: -80, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22, delay: Math.abs(offset) * 0.1 }}
                        className={`absolute w-[280px] bg-white rounded-[24px] p-8 flex flex-col items-center text-center border transition-shadow duration-500
                            ${isActive ? 'shadow-[0_20px_50px_rgba(79,70,229,0.15)] border-indigo-200 ring-2 ring-indigo-50' : 'shadow-xl border-[#E2E8F0]'}
                          `}
                      >
                        <div className={`w-28 h-28 mb-6 rounded-[20px] flex items-center justify-center p-6 border shadow-inner transition-colors duration-500
                            ${isActive ? 'bg-slate-50 border-indigo-100' : 'bg-slate-50 border-slate-100'}
                          `}>
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-sm" />
                        </div>
                        <h4 className="text-2xl font-bold text-[#0F172A] mb-3">{tech.name}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed px-2">{tech.desc}</p>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Final Scene Layout (Scene 7) */}
      <AnimatePresence>
        {scene === 7 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center pt-24 pb-12 overflow-y-auto bg-[#F8FAFC]/90 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-7xl px-8 relative z-10">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.8, type: "spring" }}
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
                        transition={{ delay: i * 0.2 + j * 0.1 + 0.8 }}
                        className="flex items-center gap-5 bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group"
                      >
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-300">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-center mt-20 pb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight">Building Intelligent Digital Experiences</h2>
              <p className="text-2xl text-indigo-600 font-medium mb-12">Powered by Modern Technologies</p>

              <button
                onClick={() => setPlayCount(p => p + 1)}
                className="px-8 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.4)] hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Replay Animation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
