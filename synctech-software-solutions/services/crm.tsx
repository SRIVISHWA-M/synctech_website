import {
  ArrowRight,
  CheckCircle,

  // Services
  Users,
  Database,
  Workflow,
  BarChart3,
  MessageSquare,
  ShieldCheck,

  // Features
  Target,
  Bell,
  LineChart,
  Globe,

  // Why Choose Us
  Award,
  Rocket,
  Headphones,
  Settings,

  // Industries
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,

  // Tech Stack
  Cloud,
  Cpu,

  // FAQ
  HelpCircle,
} from "lucide-react";

import CrmTechnologies from "../components/CrmTechnologies";

const crmServices = [
  {
    icon: Users,
    title: "Customer Relationship Management",
    desc: "Centralize customer interactions, communication history, and engagement activities within a unified platform.",
  },
  {
    icon: Workflow,
    title: "Sales Automation",
    desc: "Automate lead tracking, follow-ups, pipeline management, and sales processes to improve efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Management",
    desc: "Manage customer inquiries, tickets, and communication channels from a single platform.",
  },
  {
    icon: Database,
    title: "Customer Data Management",
    desc: "Maintain accurate customer records, profiles, and business information securely.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Generate actionable insights through dashboards, reports, and business intelligence tools.",
  },
  {
    icon: ShieldCheck,
    title: "CRM Integration",
    desc: "Connect CRM platforms with ERP systems, email tools, marketing platforms, and business applications.",
  },
];

const crmFeatures = [
  {
    icon: Users,
    title: "360° Customer View",
    desc: "Access complete customer information and interaction history in one place.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Reduce manual work through intelligent automation and process optimization.",
  },
  {
    icon: Target,
    title: "Lead Management",
    desc: "Track leads from initial contact through conversion and customer retention.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Receive reminders, alerts, and task notifications to improve productivity.",
  },
  {
    icon: LineChart,
    title: "Performance Insights",
    desc: "Monitor sales performance and customer engagement through analytics.",
  },
  {
    icon: Globe,
    title: "Cloud Accessibility",
    desc: "Securely access CRM data from any device and location.",
  },
];

const crmBenefits = [
  "Improve customer relationships",
  "Increase sales productivity",
  "Enhance customer retention",
  "Streamline business operations",
  "Improve team collaboration",
  "Gain actionable insights",
  "Automate repetitive tasks",
  "Drive business growth",
];

const stats = [
  {
    value: "CRM",
    label: "Focused Solutions",
  },
  {
    value: "Cloud",
    label: "Based Systems",
  },
  {
    value: "Smart",
    label: "Automation",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Business-Focused CRM Solutions",
    desc: "CRM platforms tailored to your business processes, customer journey, and growth objectives.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    desc: "Flexible CRM systems that grow alongside your business and customer base.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Secure customer data management with modern security practices and access controls.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Reduce manual tasks and improve operational efficiency through intelligent automation.",
  },
  {
    icon: Settings,
    title: "Custom CRM Configuration",
    desc: "Personalized dashboards, workflows, and modules designed around your business.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Continuous assistance, maintenance, and optimization to maximize CRM performance.",
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Customer engagement, loyalty management, and sales tracking solutions.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient relationship management and communication systems.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Customer onboarding, relationship tracking, and service management.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student lifecycle management and communication platforms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Sales pipeline management and customer relationship tracking.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    desc: "Client engagement, project communication, and relationship management.",
  },
];

const crmPlatforms = {
  CRM: [
    "Salesforce",
    "HubSpot CRM",
    "Zoho CRM",
    "Microsoft Dynamics 365",
  ],
  Automation: [
    "Power Automate",
    "Zapier",
    "Make",
    "HubSpot Workflows",
  ],
  Analytics: [
    "Power BI",
    "Google Analytics",
    "Looker Studio",
    "CRM Dashboards",
  ],
  Cloud: [
    "Microsoft Azure",
    "AWS",
    "Google Cloud",
    "Cloud CRM Platforms",
  ],
};
const commitments = [
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "We focus on creating CRM solutions that strengthen customer relationships and improve engagement.",
  },
  {
    icon: Workflow,
    title: "Business Process Optimization",
    desc: "Automate repetitive tasks and streamline workflows to improve productivity and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Systems",
    desc: "Protect customer data with secure CRM architectures and industry best practices.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    desc: "Transform customer information into actionable insights for smarter business decisions.",
  },
];

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "CRM (Customer Relationship Management) software helps businesses manage customer interactions, sales activities, support processes, and customer data from a centralized platform.",
  },
  {
    question: "Can CRM improve customer retention?",
    answer:
      "Yes. CRM systems help businesses understand customer behavior, personalize communication, and improve customer satisfaction.",
  },
  {
    question: "Do you provide CRM customization?",
    answer:
      "Yes. We customize workflows, dashboards, reports, automation, and integrations based on your business requirements.",
  },
  {
    question: "Can CRM integrate with existing software?",
    answer:
      "Yes. CRM solutions can integrate with ERP systems, accounting software, email platforms, marketing tools, and other business applications.",
  },
  {
    question: "Which CRM platforms do you support?",
    answer:
      "We work with Salesforce, HubSpot CRM, Zoho CRM, Microsoft Dynamics 365, and custom CRM solutions.",
  },
  {
    question: "Do you provide cloud-based CRM solutions?",
    answer:
      "Yes. We implement secure cloud-based CRM systems that can be accessed from anywhere.",
  },
  {
    question: "Can CRM automate business processes?",
    answer:
      "Absolutely. CRM systems can automate lead management, follow-ups, approvals, notifications, reporting, and more.",
  },
 
];


const implementationProcess = [
  {
    step: "01",
    title: "Business Analysis",
    desc: "Understand your business goals, customer journey, and operational workflows.",
  },
  {
    step: "02",
    title: "CRM Strategy",
    desc: "Define CRM requirements, implementation roadmap, and platform selection.",
  },
  {
    step: "03",
    title: "Customization",
    desc: "Configure CRM modules, workflows, dashboards, and automation.",
  },
  {
    step: "04",
    title: "Integration",
    desc: "Connect CRM with existing business systems, ERP, and marketing platforms.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Validate functionality, security, and performance before deployment.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Launch the CRM solution and ensure smooth adoption across teams.",
  },
  {
    step: "07",
    title: "Training",
    desc: "Provide user training and onboarding for maximum CRM utilization.",
  },
  {
    step: "08",
    title: "Optimization",
    desc: "Continuously improve CRM performance and workflows based on business needs.",
  },
];
export default function CRMSolutions() {
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
              CRM SOLUTIONS
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-[1.15]">
              Build Stronger Customer
             <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-[1.2] pb-2">
                Relationships With CRM
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Streamline customer interactions, automate workflows, improve
              sales processes, and strengthen customer relationships with
              scalable CRM solutions tailored to your business needs.
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

            {/* STATS */}

            <section className="mt-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      {stat.value}
                    </h3>

                    <p className="mt-3 text-slate-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
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
              CRM Solutions Designed For Modern Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Customer relationships are the foundation of every successful
              business. Modern CRM solutions help organizations manage customer
              interactions, improve communication, automate workflows, and
              strengthen long-term customer relationships.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our CRM solutions are designed to centralize customer data,
              optimize sales processes, enhance collaboration, and provide
              valuable business insights through intelligent reporting and
              automation.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're managing leads, tracking opportunities, supporting
              customers, or analyzing business performance, our CRM solutions
              help streamline operations and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CRM TECHNOLOGIES */}
      {/* ========================================================= */}

      

      {/* ========================================================= */}
      {/* CRM SERVICES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Services
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              CRM Services We Offer
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Comprehensive CRM solutions that improve customer engagement,
              streamline operations, and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmServices.map((service, index) => {
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
            {crmFeatures.map((feature, index) => {
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
              Transform customer relationships into long-term business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {crmBenefits.map((benefit, index) => (
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
          CRM Solutions Designed Around Your Business
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We help businesses streamline customer interactions, improve
          productivity, and build stronger customer relationships.
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
  {/* INDUSTRIES */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Industries We Serve
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          CRM Solutions Across Industries
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
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
  {/* CRM PLATFORMS */}
  {/* ========================================================= */}

  <CrmTechnologies />

  {/* ========================================================= */}
  {/* IMPLEMENTATION PROCESS */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-blue-400 font-semibold uppercase tracking-wider">
          Implementation Process
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Our CRM Implementation Approach
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {implementationProcess.map((item) => (
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

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-slate-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Our Commitment
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Building Better Customer Relationships
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We help businesses leverage CRM technology to improve customer
          engagement, streamline operations, and support long-term growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {commitments.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                <Icon className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
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

  <section className="py-24 bg-slate-50">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          FAQs
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Answers to common questions about CRM solutions and implementation.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-slate-200 rounded-2xl p-6 bg-white transition-all duration-300 hover:border-blue-300"
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
  {/* CTA SECTION */}
  {/* ========================================================= */}

  <section className="py-24 bg-slate-950 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <span className="text-blue-400 font-semibold uppercase tracking-wider">
        Get Started
      </span>

      <h2 className="mt-4 text-4xl lg:text-6xl font-bold">
        Ready To Transform Customer Relationships?
      </h2>

      <p className="mt-8 text-lg text-slate-300 leading-relaxed">
        Empower your team with a CRM solution that centralizes customer data,
        automates workflows, improves collaboration, and drives business growth.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Schedule Consultation
          <ArrowRight size={18} />
        </a>


      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          CRM Strategy & Planning
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          Custom CRM Implementation
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-400" />
          Ongoing Support & Optimization
        </div>
      </div>
    </div>
  </section>
    </>
  );
}