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
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Proven Technical Excellence",
    subtitle: "Experienced engineers delivering quality solutions",
    description:
      "Our expert development team builds secure, scalable, and high-performance software solutions using modern technologies and industry best practices.",
    highlights:
      "Expert Developers • Agile Delivery • Quality Assurance • Modern Tech Stack",
  },

  {
    icon: Globe,
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Customer-First Development",
    subtitle: "Focused on your business success",
    description:
      "We collaborate closely with clients at every stage of development to ensure transparency, faster delivery, and measurable business outcomes.",
    highlights:
      "Dedicated Support • Transparent Communication • Strategic Partnership • Client Success",
  },

  {
    icon: Smartphone,
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Scalable Growth Solutions",
    subtitle: "Built for today and ready for tomorrow",
    description:
      "Every solution is designed with scalability, security, and performance in mind, helping businesses grow confidently without technology limitations.",
    highlights:
      "Cloud Ready • Secure Architecture • High Performance • Future Scalability",
  },

  {
    icon: BrainCircuit,
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Innovation & AI Expertise",
    subtitle: "Leveraging technology for competitive advantage",
    description:
      "We utilize AI, automation, and emerging technologies to streamline operations, improve efficiency, and accelerate digital transformation.",
    highlights:
      "Artificial Intelligence • Automation • Data Intelligence • Digital Innovation",
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
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                text-blue-800
              "
            >
              Your Trusted Partner For
              <span className="block bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
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
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-500 to-slate-500 bg-clip-text text-transparent leading-tight">
  Leading Software Development Company for Web, Mobile and AI Solutions
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
      h-[360px]
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
    {/* Background Image */}
  <div className="absolute inset-0 overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full
      h-full
      transition-all
      duration-700
    "
  />

  <div className="absolute inset-0 bg-white/40" />
</div>

    {/* Front Side */}
    <div
      className="
        absolute
        inset-0
        z-10
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
      
      <h3 className="text-3xl font-bold text-slate-900 mb-3">
        {item.title}
      </h3>

    </div>

    {/* Hover Side */}
    <div
      className="
        absolute
        inset-0
        z-20
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