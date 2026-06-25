import React from "react";
import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";

const Hero: React.FC = () => {
  const services = [
    {
      icon: "⚙️",
      title: "Custom Software",
    },
    {
      icon: "🌐",
      title: "Web Development",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
    },
    {
      icon: "🤖",
      title: "AI Solutions",
    },
  ];

  const stats = [
    {
      value: "20+",
      label: "Projects Worked",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Client Focused",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-cyan-100 to-blue-50" />

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-blue-100/70 blur-[120px] rounded-full" />

        {/* Floating Glow */}
        <div className="absolute top-40 left-10 w-48 h-40 bg-blue-500/20 blur-3xl rounded-full animate-float" />

        <div className="absolute bottom-32 right-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full animate-float-delay" />

        {/* Globe */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[250vw] h-[350vw] md:w-[140vw] md:h-[140vw] bg-white rounded-full shadow-[inset_0_20px_80px_-20px_rgba(59,130,246,0.2)]" />

        {/* Horizon */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[250vw] h-[350vw] md:w-[140vw] md:h-[140vw] rounded-full border-t-[3px] border-blue-400 shadow-[0_-5px_30px_rgba(59,130,246,0.4)]" />

        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="container relative">

        <div className="mt-35 text-center">

          {/* Heading */}
          <Reveal delay={150}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight text-blue-800">

              Transform Your Business With

              <span className="block bg-gradient-to-r from-blue-800 via-cyan-500 to-cyan-500 bg-clip-text text-transparent">
                Custom Software AI Solutions
              </span>

            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={300}>
            <p className="max-w-4xl mx-auto mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">

              SyncTech Software Solutions helps startups,
              SMEs, and enterprises build scalable web
              applications, mobile apps, AI-powered products,
              and digital transformation solutions that
              accelerate growth and improve business efficiency.

            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={500}>
            <div className="flex flex-wrap justify-center gap-10 mt-12">

              {stats.map((item, index) => (
                <div key={index} className="text-center">

                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {item.value}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold shadow-xl hover:-translate-y-1 hover:shadow-blue-500/30 transition-all duration-300"
              >
                Get Free Consultation

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              </div>
          </Reveal>
          </div>
          </div>

    </section>
  );
};

export default Hero;