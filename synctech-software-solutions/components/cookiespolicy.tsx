"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Cookie,
  Settings,
  Shield,
  BarChart3,
  SlidersHorizontal,
  Megaphone,
  Globe,
  Settings2,
  Lock,
  RefreshCcw,
  Mail,
  Calendar,
} from "lucide-react";

const sections = [
  {
    id: "what-are-cookies",
    icon: Cookie,
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and remember user preferences.",
    points: [
      "Stored on your browser or device.",
      "Improve website functionality.",
      "Remember user preferences.",
      "Track website performance.",
      "May be linked to information you provide voluntarily.",
    ],
  },

  {
    id: "how-we-use-cookies",
    icon: Settings,
    title: "How We Use Cookies",
    content:
      "We use cookies to improve website functionality, security, and user experience.",
    points: [
      "Ensure website functions properly.",
      "Improve website performance.",
      "Remember user preferences and settings.",
      "Analyze visitor behavior.",
      "Enhance website security.",
      "Monitor and improve our services.",
    ],
  },

  {
    id: "essential-cookies",
    icon: Shield,
    title: "Essential Cookies",
    content:
      "Essential cookies are required for the website to function correctly.",
    points: [
      "Session management.",
      "Security and authentication.",
      "Form submission functionality.",
      "Website navigation.",
    ],
  },

  {
    id: "analytics-cookies",
    icon: BarChart3,
    title: "Performance and Analytics Cookies",
    content:
      "These cookies help us understand how visitors interact with our website.",
    points: [
      "Measure website traffic.",
      "Track visitor behavior.",
      "Identify popular pages.",
      "Improve website performance.",
    ],
  },

  {
    id: "functional-cookies",
    icon: SlidersHorizontal,
    title: "Functional Cookies",
    content:
      "Functional cookies remember your preferences and provide enhanced functionality.",
    points: [
      "Language preferences.",
      "User settings.",
      "Personalized content preferences.",
    ],
  },

  {
    id: "marketing-cookies",
    icon: Megaphone,
    title: "Marketing and Advertising Cookies",
    content:
      "Where applicable, these cookies may be used for marketing and advertising purposes.",
    points: [
      "Deliver relevant advertisements.",
      "Measure advertising effectiveness.",
      "Improve marketing campaigns.",
      "Used only with appropriate consent where required.",
    ],
  },

  {
    id: "third-party-cookies",
    icon: Globe,
    title: "Third-Party Cookies",
    content:
      "Some cookies may be placed by third-party services integrated into our website.",
    points: [
      "Analytics providers.",
      "Cloud hosting services.",
      "Customer support tools.",
      "Embedded content providers.",
      "Third parties have their own privacy policies.",
    ],
  },

  {
    id: "managing-cookies",
    icon: Settings2,
    title: "Managing Cookies",
    content:
      "Most browsers allow you to manage or disable cookies through browser settings.",
    points: [
      "Delete existing cookies.",
      "Block future cookies.",
      "Receive notifications before cookies are stored.",
      "Disabling cookies may affect functionality.",
    ],
  },

  {
    id: "data-protection",
    icon: Lock,
    title: "Data Protection",
    content:
      "Information collected through cookies is handled in accordance with our Privacy Policy.",
    points: [
      "Protected against unauthorized access.",
      "Protected against misuse.",
      "Protected against disclosure.",
      "Managed according to data protection regulations.",
    ],
  },

  {
    id: "policy-updates",
    icon: RefreshCcw,
    title: "Updates to This Cookies Policy",
    content:
      "We may update this Cookies Policy from time to time.",
    points: [
      "Changes may reflect legal requirements.",
      "Changes may reflect technology updates.",
      "Changes may reflect business practices.",
      "Updated date will be revised accordingly.",
    ],
  },
];

export default function CookiesPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white overflow-hidden"
    >
      <section className="relative pt-32 pb-24">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Cookie size={16} />
            Legal Information
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-slate-950">
            Cookies{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar size={16} />
              <span>Last Updated: June 21, 2026</span>
            </div>
          </div>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto">
            This Cookies Policy explains how Synctech Software Solutions uses
            cookies and similar technologies on synctechn.com.
          </p>
        </div>
      </section>
            {/* Content Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Sidebar */}
            <div className="w-full lg:w-[360px] shrink-0 sticky top-28 bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 shadow-sm">

                  <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-6">
                    Table of Contents
                  </h3>

                  <ul className="space-y-2">

                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`flex items-start gap-3 px-4 py-3 rounded-2xl transition duration-300 whitespace-normal leading-snug border-l-4 ${
                            activeSection === section.id
                              ? "bg-blue-50 border-blue-600 text-blue-700 font-semibold"
                              : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${activeSection === section.id ? "bg-blue-600" : "bg-slate-300"}`} />
                          {section.title}
                        </a>
                      </li>
                    ))}

                  </ul>

            </div>

            {/* Content Cards */}
            <div className="flex-1 min-w-0">

              <div className="space-y-8">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            {section.title}
                          </h2>
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {section.content}
                          </p>
                          <ul className="space-y-3">
                            {section.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                                <span className="text-slate-700 leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>
            {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-10 md:p-14"
          >

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  Need Assistance?
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Questions About Our
                  <span className="block text-blue-600">
                    Cookies Policy?
                  </span>
                </h2>

                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  If you have any questions regarding our Cookies Policy,
                  cookie usage, or privacy practices, please contact our team.
                  We are happy to assist you.
                </p>

              </div>

              <div className="flex flex-col sm:flex-row gap-4">

                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 40px rgba(37,99,235,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-950 text-white font-semibold"
                >
                  Contact Us
                </motion.a>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

    </motion.main>
  );
}