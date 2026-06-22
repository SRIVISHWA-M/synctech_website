import React from "react";
import { ArrowRight, Lightbulb,
  Layers3,
  Users, } from "lucide-react";
import { Reveal } from "./Reveal";

const About: React.FC = () => {
  const services = [
    "Custom Software",
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "Cloud Services",
    "UI/UX Design",
  ];

  const stats = [
    {
      value: "20+",
      label: "Projects Delivered",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-100/40 blur-[120px] rounded-full" />

        {/* Main Globe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[48vw] md:h-[48vw] rounded-full animate-globe">

          <div className="relative w-full h-full rounded-full overflow-hidden bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-200 via-blue-300 to-blue-500 shadow-[0_30px_120px_rgba(37,99,235,0.25)]">

            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/50 blur-[80px] rounded-full" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[80px] rounded-full" />

          </div>

          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-[100px] scale-125 -z-10" />
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <Reveal>
              <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                About SyncTech
              </span>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">

                Building
                <br />

                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Future-Ready
                </span>

                <br />

                Digital Solutions

              </h2>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
                At SyncTech Software Solutions, we help startups,
                SMEs, and enterprises build scalable software,
                web applications, mobile apps, and AI-powered
                solutions. Our mission is to transform business
                ideas into high-performance digital products that
                drive innovation, efficiency, and sustainable growth.
              </p>
            </Reveal>

            {/* Service Tags */}
            <Reveal delay={500}>
              <div className="flex flex-wrap gap-3 mt-8">

                {services.map((item) => (
                  <span
                    key={item}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/70
                      backdrop-blur-xl
                      border border-blue-100
                      text-blue-700
                      text-sm
                      font-medium
                      hover:scale-105
                      hover:border-blue-300
                      transition-all
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={700}>
              <div className="mt-10">

                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-8
                    py-4
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    font-semibold
                    shadow-xl
                    hover:-translate-y-1
                    hover:shadow-blue-500/30
                    transition-all
                    duration-300
                  "
                >
                  Let's Build Together

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </Reveal>

          </div>
          {/* RIGHT CONTENT */}
<div className="flex justify-center lg:justify-end">
  <div className="space-y-5 max-w-md">

    {[
      {
        icon: Lightbulb,
        title: "Innovation First",
        description:
          "We leverage modern technologies and strategic thinking to build future-ready digital products that create lasting business value.",
      },
      {
        icon: Layers3,
        title: "Scalable Solutions",
        description:
          "Our software architectures are designed for flexibility, performance, and seamless growth as your business evolves.",
      },
      {
        icon: Users,
        title: "Client-Centric Approach",
        description:
          "We collaborate closely with clients throughout the development journey to ensure successful outcomes and measurable results.",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <Reveal key={index} delay={600 + index * 150}>
          <div
            className="
              group
              p-6
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              border
              border-slate-100
              shadow-lg
              hover:shadow-blue-500/10
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      );
    })}

  </div>
</div>
</div>

</div>
          </section>
  );
};

export default About;