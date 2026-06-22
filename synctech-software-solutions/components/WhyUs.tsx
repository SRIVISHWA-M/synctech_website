import React from "react";
import {
  Code2,
  Smartphone,
  Globe,
  BrainCircuit,
} from "lucide-react";
import { Reveal } from "./Reveal";

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Software Development",
      subtitle: "Scalable solutions built around your business",
      description:
        "We develop secure, high-performance software applications tailored to your unique business requirements and future growth.",
      highlights:
        "Custom Workflows • API Integrations • Cloud Deployment • Enterprise Security",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      subtitle: "Fast, responsive & SEO-focused platforms",
      description:
        "Build modern web applications with exceptional user experiences and optimized performance across all devices.",
      highlights:
        "React • Next.js • SEO Optimization • Responsive Design",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Native & cross-platform experiences",
      description:
        "Create engaging mobile applications that help businesses connect with customers anytime and anywhere.",
      highlights:
        "Android • iOS • Flutter • React Native",
    },
    {
      icon: BrainCircuit,
      title: "AI & Automation Solutions",
      subtitle: "Smarter operations through innovation",
      description:
        "Leverage AI-powered technologies to automate processes, improve decision-making, and increase productivity.",
      highlights:
        "AI Agents • Chatbots • Automation • Data Intelligence",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-100/40 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-24">

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
                mb-6
              "
            >
              Why Choose SyncTech
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
                text-slate-900
              "
            >
              Your Trusted Partner For
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
              SyncTech Software Solutions helps startups,
              businesses, and enterprises build scalable software,
              web applications, mobile apps, and AI-powered systems
              that accelerate growth and improve efficiency.
            </p>

          </div>
        </Reveal>

        {/* Desktop */}
        <div className="hidden lg:block relative max-w-7xl mx-auto min-h-[950px]">

          {/* Center Orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="relative">

              <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 opacity-10 blur-3xl animate-pulse" />

              <div className="absolute inset-0 flex items-center justify-center">

                <div
                  className="
                    w-[320px]
                    h-[320px]
                    rounded-full
                    bg-white/80
                    backdrop-blur-2xl
                    border
                    border-white
                    shadow-[0_20px_80px_rgba(59,130,246,0.15)]
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-center
                    px-8
                  "
                >
                  <span className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em]">
                    SyncTech
                  </span>

                  <h3 className="text-5xl font-bold text-slate-900 mt-4">
                    Build
                  </h3>

                  <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Better
                  </h3>

                  <p className="mt-5 text-slate-500 leading-relaxed">
                    Delivering innovative technology solutions
                    designed for performance, scalability,
                    and business success.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-16 relative z-10">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={index} delay={index * 150}>
                  <div
                    className={`
                      group
                      relative
                      h-[340px]
                      overflow-hidden
                      rounded-3xl
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-white
                      shadow-xl
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:shadow-blue-500/20

                      ${index === 0 ? "mr-52" : ""}
                      ${index === 1 ? "ml-52" : ""}
                      ${index === 2 ? "mr-52 mt-32" : ""}
                      ${index === 3 ? "ml-52 mt-32" : ""}
                    `}
                  >
                    {/* Number */}
                    <span
                      className="
                        absolute
                        top-4
                        right-6
                        text-8xl
                        font-extrabold
                        text-slate-100
                        group-hover:text-blue-100
                        transition-colors
                        duration-500
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* Front Side */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        p-8
                        transition-all
                        duration-500
                        group-hover:-translate-y-full
                        group-hover:opacity-0
                      "
                    >
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl mb-6">
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-slate-500 text-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Hover Side */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-600
                        via-blue-500
                        to-cyan-500
                        p-8
                        text-white
                        translate-y-full
                        group-hover:translate-y-0
                        transition-all
                        duration-500
                        flex
                        flex-col
                        justify-center
                      "
                    >
                      <Icon className="w-10 h-10 mb-5 text-white" />

                      <h3 className="text-2xl font-bold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-white/90 text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <div className="border-t border-white/20 pt-4">
                        <p className="text-xs uppercase tracking-widest mb-2 text-white/70">
                          Key Highlights
                        </p>

                        <p className="text-sm text-white/90 leading-relaxed">
                          {item.highlights}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden grid gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={index}>
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;