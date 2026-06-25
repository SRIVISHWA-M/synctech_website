import React from 'react';
import { Reveal } from './Reveal';
import {
  SearchCheck,
  ClipboardCheck,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
export const PROCESS_STEPS = [
  {
    icon: SearchCheck,
    title: "Requirement Analysis",
    desc: "We gather business requirements, understand project goals, identify challenges, and create a strategic roadmap for successful software development.",
  },
  {
    icon: ClipboardCheck,
    title: "Planning & Architecture",
    desc: "Our experts design scalable system architecture, select modern technologies, and define project milestones for efficient execution.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "We build secure, high-performance web applications, mobile apps, AI solutions, and enterprise software using modern development practices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Comprehensive testing ensures reliability, security, performance optimization, and a seamless user experience across all platforms.",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    desc: "We deploy solutions smoothly, monitor performance, provide ongoing maintenance, and ensure long-term business growth.",
  },
];
const Operations: React.FC = () => {
  return (
    <>
      <section
  id="process"
  className="relative py-32 bg-white overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 blur-[140px] rounded-full" />

  <div className="container mx-auto px-6 md:px-12 relative z-10">

    {/* Header */}
    <Reveal>
      <div className="max-w-5xl mx-auto text-center mb-24">

        <span
          className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-blue-50
            border
            border-blue-100
            text-blue-700
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            mb-2
          "
        >
          Development Process
        </span>

        <h2
          className="
            text-4xl
            md:text-4xl
            lg:text-6xl
            font-bold
            text-blue-900
            leading-tight
          "
        >
          Our Proven
          <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Software Development Process
          </span>
        </h2>

        <p className="mt-3 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          At SyncTech Software Solutions, we follow a structured
          software development lifecycle that ensures transparency,
          faster delivery, scalable architecture, and exceptional
          user experiences.
        </p>

      </div>
    </Reveal>
{/* PROCESS FLOW */}
<div className="relative max-w-7xl">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full" />
  </div>

  {/* Desktop Connection Line */}
  <div className="hidden lg:block absolute top-[45%] left-0 right-0 z-0">
    <div className="relative h-[2px] bg-slate-200">

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-600
          animate-pulse
        "
      />

    </div>
  </div>

  <div className="grid lg:grid-cols-5 gap-8 relative z-10">

    {PROCESS_STEPS.map((step, index) => {
      const Icon = step.icon;

      return (
        <Reveal key={index} delay={index * 150}>
          <div
            className={`
              relative
              group
              ${
                index % 2 === 1
                  ? "lg:translate-y-20"
                  : ""
              }
            `}
          >
           

            {/* Card */}
            <div
              className="
                relative
                overflow-hidden
                bg-white/80
                backdrop-blur-xl
                border
                border-white
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-4
                hover:shadow-blue-500/20
                transition-all
                duration-500
                min-h-[300px]
              "
            >

              {/* Hover Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-500/5
                  via-transparent
                  to-cyan-500/5
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  mb-6
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-500
                "
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  z-10
                  text-2xl
                  font-bold
                  text-slate-900
                  mb-4
                  group-hover:text-blue-600
                  transition-colors
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  text-slate-600
                  leading-relaxed
                  text-sm
                "
              >
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />
            </div>

          </div>
        </Reveal>
      );
    })}
  </div>
</div>

  </div>
</section>
    </>
  );
};

export default Operations;