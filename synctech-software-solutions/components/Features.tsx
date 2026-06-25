import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const Services = () => {
  const services = [
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    title: "Custom Software Development",
    description:
      "Scalable and secure software solutions tailored to your business requirements.",
    features: [
      "Enterprise Applications",
      "CRM & ERP Systems",
      "SaaS Platforms",
      "Workflow Automation",
      "API Integrations",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    title: "Web & Mobile Applications",
    description:
      "Modern web and mobile experiences built with performance, scalability, and usability in mind.",
    features: [
      "React & Next.js Apps",
      "Android Development",
      "iOS Development",
      "Progressive Web Apps",
      "Responsive Design",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    title: "AI & Automation Solutions",
    description:
      "Leverage AI technologies and automation to streamline operations and accelerate growth.",
    features: [
      "AI Chatbots",
      "Generative AI",
      "Business Automation",
      "Data Analytics",
      "Machine Learning",
    ],
  },
];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-100/40 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-5xl mx-auto">
            <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
              Our Expertise
            </span>

            <h2 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-blue-800">
              Expertise That Drives
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Business Success
              </span>
            </h2>

            <p className="mt-2 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We combine modern technologies, innovative thinking,
              and customer-focused development to deliver reliable
              digital solutions that help businesses grow faster.
            </p>
          </div>
        </Reveal>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-5">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 150}>
              <div
                className="
                  group
                  relative
                  h-[420px]
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  shadow-xl
                  hover:shadow-blue-500/10
                  transition-all
                  duration-500
                "
              >
                {/* Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />

                {/* Front Content */}
                <div
                  className="
                    h-full
                    p-10
                    flex
                    flex-col
                    justify-between
                    transition-all
                    duration-700
                    group-hover:-translate-y-6
                  "
                >
                  <div>
                    <div className="w-full h-40 overflow-hidden rounded-2xl">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
</div>

                    <h3 className="mt-8 text-3xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-6 text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight className="w-7 h-7 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {/* Slide Up Panel */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    bottom-0
                    h-[75%]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-700
                    ease-out
                    bg-gradient-to-br
                    from-blue-600
                    via-blue-500
                    to-cyan-500
                    text-white
                    p-8
                  "
                >
                  <h4 className="text-xl font-bold mb-6">
                    What We Deliver
                  </h4>

                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/90 text-sm leading-relaxed">
                      Built using modern technologies with a focus on
                      scalability, security, performance, and long-term
                      business growth.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;