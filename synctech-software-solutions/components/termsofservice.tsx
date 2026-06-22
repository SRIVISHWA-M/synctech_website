"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FileText,
  Briefcase,
  Globe,
  Copyright,
  UserCheck,
  Link,
  Shield,
  AlertTriangle,
  Scale,
  Lock,
  Settings,
  Ban,
  Gavel,
  RefreshCcw,
  Mail,
  Calendar,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By accessing or using our website, you agree to comply with and be bound by these Terms of Service.",
    points: [
      "Read and agree to these Terms before using our website.",
      "Comply with all applicable laws and regulations.",
      "Do not use the website if you disagree with any part of these Terms.",
    ],
  },

  {
    id: "services",
    icon: Briefcase,
    title: "About Our Services",
    content:
      "Synctech Software Solutions provides technology-related services to businesses and organizations.",
    points: [
      "Custom Software Development",
      "Web Development",
      "Mobile Application Development",
      "AI & Machine Learning Solutions",
      "Cloud Solutions",
      "IT Consulting Services",
      "Digital Transformation Services",
    ],
  },

  {
    id: "website-use",
    icon: Globe,
    title: "Use of the Website",
    content:
      "Users must use the website responsibly and only for lawful purposes.",
    points: [
      "Do not violate laws or regulations.",
      "Do not attempt unauthorized access.",
      "Do not upload malicious software or viruses.",
      "Do not interfere with website security.",
      "Do not engage in fraudulent activities.",
      "Do not copy or distribute content without permission.",
    ],
  },

  {
    id: "intellectual-property",
    icon: Copyright,
    title: "Intellectual Property Rights",
    content:
      "All website content is owned by Synctech Software Solutions and protected by intellectual property laws.",
    points: [
      "Text",
      "Graphics",
      "Logos",
      "Icons",
      "Images",
      "Software",
      "Designs",
      "Source Code",
    ],
  },

  {
    id: "user-submissions",
    icon: UserCheck,
    title: "User Submissions",
    content:
      "Information submitted through forms or communication channels must be accurate and lawful.",
    points: [
      "Provide accurate information.",
      "Use forms only for legitimate purposes.",
      "Submitted information may be used to improve services.",
    ],
  },

  {
    id: "third-party-links",
    icon: Link,
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites for convenience.",
    points: [
      "We do not control third-party websites.",
      "We are not responsible for their content.",
      "We are not responsible for their privacy practices.",
      "Access third-party sites at your own risk.",
    ],
  },

  {
    id: "warranties",
    icon: Shield,
    title: "Disclaimer of Warranties",
    content:
      "The website and services are provided on an 'as is' basis without warranties.",
    points: [
      "No guarantee of accuracy.",
      "No guarantee of availability.",
      "No guarantee of reliability.",
      "No guarantee of error-free operation.",
      "No guarantee of complete security.",
    ],
  },

  {
    id: "liability",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "Synctech Software Solutions shall not be liable for damages resulting from the use of our website or services.",
    points: [
      "Direct damages",
      "Indirect damages",
      "Incidental damages",
      "Consequential damages",
      "Loss of data",
      "Business interruption",
      "Loss of profits",
    ],
  },

  {
    id: "indemnification",
    icon: Scale,
    title: "Indemnification",
    content:
      "Users agree to indemnify and hold Synctech Software Solutions harmless.",
    points: [
      "Claims arising from website usage.",
      "Violation of these Terms.",
      "Violation of applicable laws.",
    ],
  },

  {
    id: "privacy",
    icon: Lock,
    title: "Privacy",
    content:
      "Your use of the website is also governed by our Privacy Policy.",
    points: [
      "Read our Privacy Policy.",
      "Understand how your information is handled.",
    ],
  },

  {
    id: "service-modifications",
    icon: Settings,
    title: "Service Modifications",
    content:
      "We reserve the right to modify or discontinue services at any time.",
    points: [
      "Modify website content.",
      "Update services.",
      "Suspend functionality.",
      "Discontinue services without notice.",
    ],
  },

  {
    id: "termination",
    icon: Ban,
    title: "Termination",
    content:
      "Access to the website may be suspended or terminated for violations.",
    points: [
      "Violation of Terms.",
      "Unlawful activities.",
      "Security concerns.",
    ],
  },

  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of India.",
    points: [
      "Jurisdiction: Chennai, Tamil Nadu.",
      "Applicable Indian laws.",
    ],
  },

  {
    id: "changes",
    icon: RefreshCcw,
    title: "Changes to These Terms",
    content:
      "We may update these Terms from time to time.",
    points: [
      "Changes will be posted on this page.",
      "Last Updated date will be revised.",
      "Continued use indicates acceptance.",
    ],
  },
];

export default function TermsOfService() {
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <FileText size={16} />
              Legal Information
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-950 leading-tight">
                Terms of{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Service
            </span>
            </h1>

            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar size={16} />
                <span>Last Updated: June 21, 2026</span>
              </div>
            </div>

            <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to Synctech Software Solutions. These Terms of Service
              govern your access to and use of our website, products, and
              services.
            </p>

          </motion.div>
        </div>
      </section>
            {/* Content Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Sidebar Navigation */}
            <div className="w-full lg:w-[360px] shrink-0 sticky top-28 bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 shadow-sm">

                  <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-6">
                    Table of Contents
                  </h3>

                  <ul className="space-y-2">

                    {sections.map((section, index) => (
                      <li key={index}>
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

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              <div className="space-y-8">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <motion.div
                      key={index}
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
            transition={{ duration: 0.7 }}
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
                    Terms of Service?
                  </span>
                </h2>

                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  If you have any questions regarding our Terms of Service,
                  please reach out to our team. We are happy to assist you
                  with any legal, compliance, or service-related inquiries.
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