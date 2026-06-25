"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Shield,
  Database,
  Cookie,
  Lock,
  Users,
  FileText,
  Mail,
  Calendar,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    icon: FileText,
    title: "Introduction",
    content:
      "Synctech Software Solutions respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information.",
  },
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content:
      "We may collect personal information including your name, email address, phone number, company information, and any details submitted through forms, inquiries, or consultations.",
  },
  {
    id: "how-we-use-information",
    icon: Users,
    title: "How We Use Information",
    content:
      "We use your information to provide services, respond to inquiries, improve website functionality, enhance user experience, communicate updates, and maintain security.",
  },
  {
    id: "cookies-tracking",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    content:
      "We use cookies and similar technologies to improve website performance, remember preferences, analyze traffic, and enhance your browsing experience.",
  },
  {
    id: "information-sharing",
    icon: Users,
    title: "Information Sharing",
    content:
      "We do not sell or rent your personal information. Information may only be shared with trusted service providers or when legally required.",
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational safeguards to protect your personal information against unauthorized access, disclosure, or misuse.",
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "Your Rights",
    content:
      "You may have the right to access, update, correct, or request deletion of your personal information, subject to applicable laws.",
  },
  {
    id: "data-retention",
    icon: Database,
    title: "Data Retention",
    content:
      "We retain information only as long as necessary to fulfill business purposes, legal obligations, and service requirements.",
  },
];

export default function PrivacyPolicy() {
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
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

        {/* Arc */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1600px] h-[800px] border border-blue-300/50 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <Shield size={16} />
              Privacy Policy
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-slate-950">
              Your Privacy.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Our Responsibility.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Synctech Software Solutions, we value your trust. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use
              our services.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-full shadow-sm">
                <Calendar size={18} className="text-blue-600" />
                <span className="font-medium">
                  Last Updated: June 21, 2026
                </span>
              </div>

              <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-full shadow-sm">
                <Mail size={18} className="text-blue-600" />
                <span className="font-medium">
                  info@synctechn.com
                </span>
              </div>
            </div>
          </motion.div>
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
                  {sections.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`flex items-start gap-3 px-4 py-3 rounded-2xl transition duration-300 whitespace-normal leading-snug border-l-4 ${
                          activeSection === item.id
                            ? "bg-blue-50 border-blue-600 text-blue-700 font-semibold"
                            : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${activeSection === item.id ? "bg-blue-600" : "bg-slate-300"}`} />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                  <Shield className="text-blue-600 mb-3" size={28} />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Your Privacy Matters
                  </h4>
                  <p className="text-sm text-slate-600">
                    We are committed to transparency and protecting your
                    information.
                  </p>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-6">
              {sections.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    id={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="text-blue-600" size={28} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-bold text-slate-900">
                            {item.title}
                          </h2>

                          <span className="text-blue-600 font-bold text-lg">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-10 md:p-14 flex flex-col lg:flex-row justify-between items-center gap-8"
          >
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
                Need Help?
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Questions About Privacy?
              </h2>

              <p className="text-slate-600 max-w-2xl">
                If you have questions regarding this Privacy Policy or how
                we handle your information, our team is ready to assist.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-950 text-white font-semibold shadow-xl hover:scale-105 transition"
            >
              Contact Us
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}