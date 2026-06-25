import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "What software development services does SyncTech provide?",
    answer:
      "SyncTech provides custom software development, web application development, mobile app development, AI-powered solutions, cloud integration, SaaS development, and digital transformation services tailored to your business requirements.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "The cost depends on project complexity, features, integrations, and timeline. We provide customized quotations based on your business requirements and project scope.",
  },
  {
    question: "Do you develop both web and mobile applications?",
    answer:
      "Yes. We build responsive web applications, Progressive Web Apps (PWAs), Android apps, iOS apps, and cross-platform mobile applications using modern technologies.",
  },
  {
    question: "Can SyncTech help startups build MVP products?",
    answer:
      "Absolutely. We help startups design, develop, and launch Minimum Viable Products (MVPs) quickly, enabling faster market validation and business growth.",
  },
  {
    question: "Do you offer AI and automation solutions for businesses?",
    answer:
      "Yes. We develop AI-powered chatbots, business automation systems, workflow automation tools, predictive analytics platforms, and intelligent software solutions.",
  },
  {
    question: "What industries does SyncTech serve?",
    answer:
      "We serve startups, small and medium businesses, enterprises, healthcare organizations, educational institutions, e-commerce companies, and various other industries.",
  },
  {
    question: "How long does it take to develop a software application?",
    answer:
      "Development timelines vary depending on the project's complexity. Simple applications may take a few weeks, while enterprise-grade platforms may require several months.",
  },
  {
    question: "Why choose SyncTech as your software development partner?",
    answer:
      "SyncTech combines technical expertise, innovative thinking, agile methodologies, and a client-focused approach to deliver scalable, secure, and high-performance software solutions.",
  },
];

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-100/30 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
              Everything You Need to Know
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Find answers to common questions about custom software
              development, web applications, mobile app development,
              AI solutions, project timelines, pricing, and our
              development process.
            </p>
          </div>
        </Reveal>

        {/* FAQ Items */}
        <div className="space-y-5">
          {FAQS.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  hover:border-blue-200
                  transition-all
                  duration-300
                "
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                >
                  <span className="font-bold text-slate-900 text-lg pr-4">
                    {faq.question}
                  </span>

                  <div className="flex-shrink-0">
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
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

export default Support;