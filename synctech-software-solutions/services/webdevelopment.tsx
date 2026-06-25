"use client";

import {
  ArrowRight,
  CheckCircle,

  // Services
  Globe,
  MonitorSmartphone,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Workflow,

  // Features
  Search,
  Gauge,
  ShieldCheck,
  Cloud,
  BarChart3,

  // Why Choose Us
  Award,
  Users,
  Rocket,
  Headphones,

  // Industries
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Landmark,
  GraduationCap,
  Building2,
  Cpu,

  // Tech Stack
  Code2,
  Database,

  // Security
  Lock,
  Fingerprint,

  // Metrics
  TrendingUp,

  // FAQ
  HelpCircle,
} from "lucide-react";
import EnterpriseTechStack from "../components/EnterpriseTechStack";

const webServices = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Design and develop responsive, high-performing websites tailored to your business goals and brand identity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Application Development",
    desc: "Build scalable web applications that automate workflows, improve efficiency, and support business growth.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Create feature-rich online stores with seamless shopping experiences and secure payment integrations.",
  },
  {
    icon: LayoutDashboard,
    title: "CMS Development",
    desc: "Develop content management solutions that make publishing and managing content effortless.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    desc: "Deliver app-like experiences through modern web technologies with offline capabilities.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    desc: "Connect applications, services, and business systems through scalable APIs.",
  },
];

const webFeatures = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    desc: "Optimized experiences across desktops, tablets, and mobile devices.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Architecture",
    desc: "Built with technical SEO best practices to improve visibility and rankings.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "Fast loading speeds and optimized code for superior user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Scalability",
    desc: "Scale applications effortlessly with cloud-native infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Protect applications and user data through industry-standard security practices.",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    desc: "Gain valuable business insights through advanced analytics and reporting.",
  },
];

const webBenefits = [
  "Increase online visibility and brand awareness",
  "Generate more qualified leads",
  "Improve customer engagement and retention",
  "Increase conversion rates and revenue",
  "Enhance user experience and satisfaction",
  "Support digital transformation initiatives",
  "Automate business processes and workflows",
  "Drive long-term business growth",
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Web Development Expertise",
    desc: "Our team has successfully delivered websites, portals, and enterprise applications across multiple industries.",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    desc: "Work with experienced designers, developers, QA engineers, and project managers committed to your success.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    desc: "We implement modern security standards and best practices throughout the development lifecycle.",
  },
  {
    icon: Rocket,
    title: "Faster Time-to-Market",
    desc: "Agile methodologies help us launch projects faster without compromising quality.",
  },
  {
    icon: Workflow,
    title: "Transparent Development Process",
    desc: "Regular updates, sprint reviews, and collaborative planning ensure project visibility.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We provide continuous maintenance, updates, monitoring, and technical assistance.",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient portals, telemedicine solutions, appointment systems, and healthcare platforms.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Online stores, inventory systems, loyalty programs, and digital commerce platforms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production management, inventory tracking, and workflow automation systems.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    desc: "Fleet management, shipment tracking, and warehouse management solutions.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Secure financial platforms, payment systems, and customer management solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning management systems, online training portals, and educational platforms.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property management, lead generation, and real estate marketplace solutions.",
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    desc: "Scalable SaaS platforms, dashboards, portals, and cloud-native applications.",
  },
];

const techStack = {
  frontend: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", ".NET", "Express.js"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  cloud: ["AWS", "Azure", "Google Cloud", "Vercel"],
};

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "Understand business goals, target audience, and technical requirements.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "Define user journeys, architecture, and implementation roadmap.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Create wireframes, prototypes, and intuitive user experiences.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Build scalable, secure, and high-performance web applications.",
  },
  {
    step: "05",
    title: "Testing & QA",
    desc: "Perform functional, security, performance, and usability testing.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Launch your application with optimized infrastructure and monitoring.",
  },
  {
    step: "07",
    title: "Monitoring",
    desc: "Track performance, uptime, and user engagement metrics.",
  },
  {
    step: "08",
    title: "Continuous Improvement",
    desc: "Enhance your platform through updates, optimizations, and new features.",
  },
];
const stats = [
  {
    value: "100%",
    label: "Commitment to Quality",
  },
  {
    value: "Modern",
    label: "Technology Stack",
  },
  {
    value: "Agile",
    label: "Development Process",
  },
  {
    value: "Scalable",
    label: "Solutions Built",
  },
];
const securityFeatures = [
  {
    icon: Lock,
    title: "SSL & Data Encryption",
    desc: "Protect user data through industry-standard encryption and secure communication protocols.",
  },
  {
    icon: Fingerprint,
    title: "Secure Authentication",
    desc: "Role-based access controls, multi-factor authentication, and secure login systems.",
  },
  {
    icon: Database,
    title: "Data Protection",
    desc: "Reliable backup strategies, secure storage, and disaster recovery planning.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Support for GDPR, HIPAA, SOC 2, PCI DSS, and other regulatory requirements.",
  },
];

const faqs = [
  {
    question: "How long does web development take?",
    answer:
      "Most business websites take 4–8 weeks while enterprise applications may require several months depending on complexity and integrations.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every website and application we build is optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We develop secure and scalable online stores with advanced commerce features.",
  },
  {
    question: "Will my website be scalable?",
    answer:
      "Yes. Our solutions are designed to support increasing traffic, users, and future business requirements.",
  },
  {
    question: "How secure are your web applications?",
    answer:
      "We follow security best practices including secure coding standards, encryption, authentication, and vulnerability testing.",
  },
  {
    question: "Do you offer cloud deployment?",
    answer:
      "Yes. We deploy applications on AWS, Azure, Google Cloud, and other cloud platforms.",
  },
];
export default function WebDevelopment() {
  return (
    <>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              WEB DEVELOPMENT SERVICES
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight">
              Build Modern Websites &
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Scalable Web Applications
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Create exceptional digital experiences with secure, scalable, and
              high-performing web solutions designed to improve customer
              engagement, streamline operations, and accelerate business growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </a>

             
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="group text-center transition-all duration-300"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {stat.value}
      </h3>

      <p className="mt-2 text-slate-600 font-medium">
        {stat.label}
      </p>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OVERVIEW */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Overview
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold mb-8">
              Future-Ready Web Solutions for Modern Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Your website is often the first interaction customers have with
              your business. A professionally developed website not only creates
              a strong first impression but also drives engagement, builds
              trust, and supports business growth.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We specialize in building custom websites and enterprise-grade web
              applications that combine modern design, robust functionality, and
              scalable architecture.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're launching a new digital platform, modernizing an
              existing website, or developing a complex web application, our
              team delivers solutions designed for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Services
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Comprehensive Web Development Services
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              End-to-end web development solutions tailored to your business
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Features
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Key Features & Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    size={28}
                  />

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BENEFITS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Benefits
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Business Benefits
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Transform your digital presence into a powerful growth engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {webBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <CheckCircle
                  className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={22}
                />

                <span className="text-slate-200">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Why Choose Us
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Why Businesses Trust Our Web Development Team
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We combine innovation, technical expertise, and strategic thinking to
          deliver web solutions that create measurable business impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUs.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Icon className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ========================================================= */}
  {/* INDUSTRIES */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Industries We Serve
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Industry-Focused Web Solutions
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Delivering tailored digital solutions across diverse industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
            >
              <Icon
                className="text-blue-600 mb-5 group-hover:scale-110 transition-transform"
                size={30}
              />

              <h3 className="font-semibold text-lg mb-3">
                {industry.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {industry.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ========================================================= */}
  {/* TECHNOLOGY STACK */}
  {/* ========================================================= */}

 <EnterpriseTechStack />
  {/* ========================================================= */}
  {/* PROCESS */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-blue-400 font-semibold uppercase tracking-wider">
          Development Process
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Our Proven Development Methodology
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {process.map((item) => (
          <div
            key={item.step}
            className="rounded-3xl border border-slate-800 p-8 hover:border-blue-500 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-blue-400">
                {item.step}
              </span>

              <ArrowRight className="text-slate-600" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

            <p className="text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
   <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Results & Metrics
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Delivering Measurable Results
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We focus on outcomes that drive business growth and digital success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300 flex flex-col justify-center"
          >
            <h3 className="text-4xl font-bold mb-2 text-blue-600">
              {item.value}
            </h3>

            <p className="font-semibold text-slate-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ========================================================= */}
  {/* SECURITY & COMPLIANCE */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Security & Compliance
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Security Built Into Every Project
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We follow enterprise-grade security practices to protect your systems,
          users, and business data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {securityFeatures.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
            >
              <Icon
                className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110"
                size={30}
              />

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ========================================================= */}
  {/* FAQ SECTION */}
  {/* ========================================================= */}

  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          FAQs
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Answers to common questions about our web development services.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-300"
          >
            <summary className="flex cursor-pointer items-center justify-between list-none text-lg font-semibold">
              {faq.question}

              <HelpCircle
                size={22}
                className="text-blue-600 transition-transform group-open:rotate-180"
              />
            </summary>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* ========================================================= */}
  {/* FINAL CTA */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-950 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <span className="text-blue-400 font-semibold uppercase tracking-wider">
        Get Started
      </span>

      <h2 className="mt-4 text-4xl lg:text-6xl font-bold">
        Ready to Build Your Next Web Project?
      </h2>

      <p className="mt-8 text-lg text-slate-300 leading-relaxed">
        Whether you need a business website, enterprise portal, SaaS platform,
        or custom web application, our team is ready to help you create digital
        experiences that drive results.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
         Book a Free Consultation
          <ArrowRight size={18} />
        </a>

        
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          Free Project Consultation
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          Dedicated Development Team
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          Ongoing Support & Maintenance
        </div>
      </div>
    </div>
  </section>
    </>
  );
}