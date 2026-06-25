"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Lightbulb,
  User,
  BarChart3,
  Database,
  Cloud,
  Play,
  Calendar,
  Package,
  Headphones,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

/* ==================================================
   DATA
================================================== */

const industries = [
  { id: "startup", title: "Startups", icon: Rocket },
  { id: "smb", title: "Small & Medium\nBusinesses", icon: TrendingUp },
  { id: "enterprise", title: "Enterprises", icon: Building2 },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "healthcare", title: "Healthcare", icon: HeartPulse },
  { id: "ecommerce", title: "E-commerce", icon: ShoppingCart },
];

/* ==================================================
   MAIN COMPONENT
================================================== */

export default function IndustriesSection() {
  const [active, setActive] = useState("startup");

  return (
    <section className="relative py-16 bg-white overflow-hidden font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        
        <div className="text-center mb-10">
          <span className="text-blue-600 text-center font-semibold uppercase tracking-[0.25em] text-sm">
  Industries We Serve
</span>
          <h2 className="block bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-400 bg-clip-text text-transparent mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-400">
  Software Solutions Tailored for Diverse Industries
</h2>
<p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
  SyncTech delivers custom software development, web applications, mobile solutions,
  AI-powered automation, and digital transformation services for startups, small businesses,
  enterprises, educational institutions, healthcare providers, and e-commerce brands. Our
  industry-focused technology solutions help organizations improve efficiency, enhance customer
  experiences, and accelerate sustainable business growth.
</p>
        </div>

        {/* Tabs - Scene 1 Look */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-10"
        >
          {industries.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`relative group flex flex-col items-center justify-center w-28 h-32 lg:w-32 lg:h-36 rounded-[24px] border transition-all duration-500
                ${
                  isActive
                    ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-indigo-100 scale-105 z-10"
                    : "bg-white border-slate-100 hover:shadow-lg hover:border-indigo-50 hover:-translate-y-1"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-500 ${
                    isActive
                      ? "bg-blue-800 text-white shadow-md shadow-indigo-200"
                      : "bg-blue-50 text-indigo-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs lg:text-sm font-semibold text-center leading-snug transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Scene Container */}
        <div className="relative min-h-[400px] w-full max-w-5xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {active === "startup" && <StartupScene />}
              {active === "smb" && <SMBScene />}
              {active === "enterprise" && <EnterpriseScene />}
              {active === "education" && <EducationScene />}
              {active === "healthcare" && <HealthcareScene />}
              {active === "ecommerce" && <EcommerceScene />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ==================================================
   REUSABLE UI COMPONENTS
================================================== */

function CenterCard({
  industry,
  title,
  icon: Icon,
  children,
}: {
  industry: string;
  title: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <div className="w-[340px] md:w-[400px] h-[360px] bg-white rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-slate-100 p-8 flex flex-col relative z-10 mx-auto overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-indigo-600" />
        <span className="font-bold text-slate-800 text-sm">{industry}</span>
      </div>
      <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-8 z-20">
        {title}
      </h2>

      <div className="flex-1 relative w-full flex items-center justify-center z-10">
        {children}
      </div>
    </div>
  );
}

function FloatingWidget({
  className,
  children,
  delay = 0,
  yOffset = 10,
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -yOffset, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay, type: "spring" },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
      className={`absolute bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-4 z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ==================================================
   SCENES
================================================== */

function StartupScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Floating Widgets */}
      <FloatingWidget className="top-20 left-4 md:left-12 lg:left-24" delay={0.1}>
        <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-yellow-500" />
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-12 left-0 md:left-8 lg:left-16 w-32"
        delay={0.2}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">
          Revenue
        </div>
        <div className="text-lg font-bold text-slate-800 mb-2">+ 68%</div>
        <svg
          className="w-full h-8"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,5"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatingWidget>

      <FloatingWidget
        className="top-12 right-4 md:right-12 lg:right-24 w-36"
        delay={0.3}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">Users</div>
        <div className="flex items-center gap-1 mb-3">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-lg font-bold text-slate-800">125%</span>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"
            >
              <User className="w-4 h-4 text-slate-400" />
            </div>
          ))}
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-16 right-0 md:right-8 lg:right-20"
        delay={0.4}
      >
        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-indigo-500" />
        </div>
      </FloatingWidget>

      {/* Center Card */}
      <CenterCard
        industry="Startups"
        title="Empowering Fast-Growing Startups"
        icon={Rocket}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Rocket className="w-32 h-32 text-indigo-600 drop-shadow-[0_20px_30px_rgba(79,70,229,0.3)]" />
          </motion.div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 bg-gradient-to-t from-indigo-100 to-transparent rounded-full blur-2xl opacity-80" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-300 blur-3xl opacity-50 rounded-full" />
        </div>
      </CenterCard>
    </div>
  );
}

function SMBScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <FloatingWidget
        className="top-12 left-4 md:left-12 lg:left-24 w-36"
        delay={0.1}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">
          Revenue
        </div>
        <div className="text-lg font-bold text-slate-800 mb-2">+ 68%</div>
        <svg
          className="w-full h-8"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 L20,15 L40,20 L60,5 L80,10 L100,0"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatingWidget>

      <FloatingWidget
        className="top-20 right-4 md:right-12 lg:right-24 w-32 flex flex-col items-center"
        delay={0.2}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-2 w-full text-left">
          Growth
        </div>
        <div className="relative w-16 h-16 mb-2">
          <svg
            viewBox="0 0 36 36"
            className="w-full h-full transform -rotate-90"
          >
            <path
              className="text-slate-100"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: "42, 100" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-indigo-500"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700">
            42%
          </div>
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-12 right-10 md:right-16 lg:right-32"
        delay={0.3}
      >
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-blue-500" />
        </div>
      </FloatingWidget>

      <CenterCard
        industry="Small & Medium Businesses"
        title="Scaling Business Operations"
        icon={TrendingUp}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <div className="relative w-36 h-36">
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 z-20"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-xl overflow-visible"
              >
                <path
                  d="M 10 90 Q 40 70 50 50 T 90 10"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <polygon points="90,10 75,5 85,25" fill="#4f46e5" />
              </svg>
            </motion.div>
            <div className="absolute bottom-0 left-4 w-8 h-16 bg-indigo-100 rounded-t-md z-10" />
            <div className="absolute bottom-0 left-20 w-8 h-28 bg-indigo-200 rounded-t-md z-10" />
            <div className="absolute bottom-0 left-36 w-8 h-40 bg-indigo-300 rounded-t-md z-10" />
          </div>
        </div>
      </CenterCard>
    </div>
  );
}

function EnterpriseScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <FloatingWidget
        className="top-12 left-8 md:left-16 lg:left-28"
        delay={0.1}
      >
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
          <Database className="w-5 h-5 text-indigo-500" />
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-16 left-4 md:left-12 lg:left-20"
        delay={0.2}
      >
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-500" />
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="top-20 right-8 md:right-16 lg:right-28"
        delay={0.3}
      >
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
          <Cloud className="w-5 h-5 text-cyan-500" />
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-16 right-4 md:right-12 lg:right-20"
        delay={0.4}
      >
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-blue-500" />
        </div>
      </FloatingWidget>

      <CenterCard
        industry="Enterprises"
        title="Enterprise Digital Transformation"
        icon={Building2}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 400 500"
          >
            <circle cx="100" cy="200" r="4" fill="#6366f1" />
            <circle cx="300" cy="150" r="6" fill="#3b82f6" />
            <circle cx="350" cy="300" r="4" fill="#6366f1" />
            <circle cx="80" cy="350" r="5" fill="#8b5cf6" />
            <path
              d="M 100 200 L 200 350 L 300 150 L 350 300 M 80 350 L 200 350"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="relative z-10 flex items-end justify-center gap-1.5">
            <motion.div
              animate={{ height: [100, 100] }}
              className="w-14 h-[100px] bg-indigo-600 rounded-t-lg shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
            </motion.div>
            <motion.div
              animate={{ height: [160, 160] }}
              className="w-16 h-[160px] bg-blue-500 rounded-t-lg shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1/3 bg-white/20" />
            </motion.div>
            <motion.div
              animate={{ height: [130, 130] }}
              className="w-14 h-[130px] bg-indigo-400 rounded-t-lg shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
            </motion.div>
          </div>
        </div>
      </CenterCard>
    </div>
  );
}

function EducationScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <FloatingWidget
        className="top-12 left-8 md:left-16 lg:left-28"
        delay={0.1}
      >
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-inner">
          <GraduationCap className="w-6 h-6 text-indigo-600" />
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="top-20 left-0 md:left-8 lg:left-16 w-28"
        delay={0.2}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">
          Courses
        </div>
        <div className="text-xl font-bold text-slate-800">24</div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-20 left-6 md:left-12 lg:left-24 w-40"
        delay={0.3}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center pl-1">
            <Play className="w-3 h-3 text-indigo-600" />
          </div>
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-indigo-500" />
          </div>
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="top-16 right-4 md:right-12 lg:right-24 w-28 flex flex-col items-center"
        delay={0.4}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-2 w-full text-left">
          Progress
        </div>
        <div className="relative w-12 h-12 mb-1">
          <svg
            viewBox="0 0 36 36"
            className="w-full h-full transform -rotate-90"
          >
            <path
              className="text-slate-100"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: "85, 100" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-indigo-500"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700">
            85%
          </div>
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-16 right-8 md:right-16 lg:right-28"
        delay={0.5}
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center"
            >
              <User className="w-4 h-4 text-indigo-400" />
            </div>
          ))}
        </div>
      </FloatingWidget>

      <CenterCard
        industry="Education"
        title="Smart Learning Solutions"
        icon={BookOpen}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <BookOpen className="w-32 h-32 text-indigo-600 drop-shadow-[0_20px_30px_rgba(79,70,229,0.2)]" />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-300 rounded-sm rotate-12"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-5 h-5 bg-blue-300 rounded-full"
          />
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-300 rounded-full"
          />
        </div>
      </CenterCard>
    </div>
  );
}

function HealthcareScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <FloatingWidget
        className="top-20 left-0 md:left-8 lg:left-20 w-40"
        delay={0.1}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-2">
          Patient Overview
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
            <User className="w-4 h-4 text-rose-500" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="w-full h-1.5 bg-slate-100 rounded-full" />
            <div className="w-2/3 h-1.5 bg-slate-100 rounded-full" />
          </div>
        </div>
        <svg
          className="w-full h-6 mt-3"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 L20,10 L30,0 L40,20 L50,10 L100,10"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
        </svg>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-12 left-6 md:left-12 lg:left-24 w-28"
        delay={0.2}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">
          Vitals
        </div>
        <div className="flex items-end gap-1">
          <span className="text-xl font-bold text-slate-800">120/80</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <HeartPulse className="w-3 h-3 text-rose-500" />
          <span className="text-[10px] text-slate-400">BP</span>
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="top-12 right-0 md:right-8 lg:right-20 w-36"
        delay={0.3}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-1">
          AI Analysis
        </div>
        <div className="text-xs font-bold text-slate-700 mb-2">
          Risk: <span className="text-emerald-500">Low</span>
        </div>
        <svg
          className="w-full h-8"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 L20,20 L40,25 L60,15 L80,20 L100,10"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-20 right-6 md:right-12 lg:right-24 w-36"
        delay={0.4}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-2">
          Appointments
        </div>
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span className="text-xs font-bold text-slate-700">18 Today</span>
        </div>
      </FloatingWidget>

      <CenterCard
        industry="Healthcare"
        title="AI-Powered Healthcare Innovation"
        icon={HeartPulse}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] z-10"
            >
              <HeartPulse className="w-16 h-16 text-white" />
            </motion.div>
            <div className="absolute -inset-8 border border-blue-200 rounded-full opacity-50" />
            <div className="absolute -inset-16 border border-blue-100 rounded-full opacity-30" />
          </div>
        </div>
      </CenterCard>
    </div>
  );
}

function EcommerceScene() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <FloatingWidget
        className="top-20 left-2 md:left-8 lg:left-20 w-36"
        delay={0.1}
      >
        <div className="w-full h-20 bg-slate-50 rounded-xl mb-3 flex items-center justify-center">
          <Package className="w-8 h-8 text-slate-400" />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
          <span className="text-sm font-bold text-slate-800">$120</span>
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          ))}
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-20 left-8 md:left-16 lg:left-28 w-32"
        delay={0.2}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-indigo-500" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">
              3
            </div>
          </div>
          <div className="text-xs font-bold text-slate-700">
            Cart<br />
            <span className="text-[10px] text-slate-400 font-normal">
              3 items
            </span>
          </div>
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="top-16 right-2 md:right-8 lg:right-20 w-36"
        delay={0.3}
      >
        <div className="w-full h-20 bg-slate-50 rounded-xl mb-3 flex items-center justify-center">
          <Headphones className="w-8 h-8 text-slate-800" />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
          <span className="text-sm font-bold text-slate-800">$89</span>
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          ))}
        </div>
      </FloatingWidget>

      <FloatingWidget
        className="bottom-12 right-6 md:right-12 lg:right-24 w-40"
        delay={0.4}
      >
        <div className="text-[10px] font-semibold text-slate-400 mb-2">
          Checkout
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-600">
            Payment Successful
          </span>
        </div>
      </FloatingWidget>

      <CenterCard
        industry="E-commerce"
        title="Intelligent Commerce Experiences"
        icon={ShoppingCart}
      >
        <div className="relative w-full flex items-center justify-center pt-2">
          <motion.div
            animate={{ x: [-5, 5, -5], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <ShoppingCart className="w-32 h-32 text-indigo-500 drop-shadow-[0_20px_30px_rgba(99,102,241,0.3)]" />
          </motion.div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-4 bg-indigo-900/10 blur-md rounded-full" />
        </div>
      </CenterCard>
    </div>
  );
}
