import React, { useState } from "react";
import {
   ArrowRight,
  CheckCircle,
  Users,
  Database,
  Workflow,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Target,
  Bell,
  LineChart,
  Globe,
  Award,
  Rocket,
  Headphones,
  Settings,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  HelpCircle,
  Sparkles,
  Zap,
  Plus,
  RotateCcw,
  TrendingUp,
  DollarSign,
  Clock,
  Smartphone,
} from "lucide-react";

import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const softwareServices = [
  {
    icon: Database,
    title: "Custom Software Development",
    desc: "Tailor-made software solutions designed around your business processes and operational requirements.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Responsive, scalable, and secure web applications using modern technologies like React, Node.js, and Next.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform Android and iOS applications with exceptional user experiences.",
  },
  {
    icon: Workflow,
    title: "Enterprise Software",
    desc: "Enterprise-grade ERP, CRM, HRMS, and business automation solutions for growing organizations.",
  },
  {
    icon: ShieldCheck,
    title: "API Development & Integration",
    desc: "Secure REST APIs and seamless third-party integrations to connect your business systems.",
  },
  {
    icon: BarChart3,
    title: "Cloud & SaaS Solutions",
    desc: "Cloud-native applications and SaaS platforms built for scalability, security, and performance.",
  },
];
const softwareFeatures = [
  {
    icon: Workflow,
    title: "Agile Development",
    desc: "Rapid and iterative software development using Agile methodologies for faster delivery and continuous improvement.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    desc: "Build secure, high-performance applications designed to scale as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Implement industry-standard security practices, authentication, encryption, and compliance.",
  },
  {
    icon: Globe,
    title: "Cloud-Native Applications",
    desc: "Develop cloud-ready applications on AWS, Azure, and Google Cloud for maximum flexibility.",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    desc: "Optimize applications for speed, reliability, and exceptional user experience.",
  },
  {
    icon: Target,
    title: "Custom Business Solutions",
    desc: "Create software tailored to your workflows, business processes, and organizational goals.",
  },
];

const softwareBenefits = [
  "Accelerate digital transformation",
  "Automate manual business processes",
  "Improve operational efficiency",
  "Increase business scalability",
  "Enhance data security and compliance",
  "Reduce long-term operational costs",
  "Deliver better customer experiences",
  "Enable real-time business insights",
  "Seamlessly integrate with existing systems",
  "Support business growth with scalable architecture",
];

const stats = [
  {
    value: "100%",
    label: "Custom Solutions",
  },
  {
    value: "Cloud",
    label: "Native Apps",
  },
  {
    value: "AI",
    label: "Powered Development",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
];


const commitments = [
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "We work closely with clients to understand their goals and deliver software solutions that create measurable business value.",
  },
  {
    icon: Workflow,
    title: "Agile & Transparent Development",
    desc: "Our agile methodology ensures continuous collaboration, faster releases, and complete project transparency throughout development.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    desc: "We build secure, reliable, and high-performing applications using industry best practices, testing, and modern security standards.",
  },
  {
    icon: BarChart3,
    title: "Continuous Innovation",
    desc: "We continuously adopt emerging technologies, cloud platforms, AI, and automation to deliver future-ready software solutions.",
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development is the process of designing, building, and maintaining software applications tailored specifically to your business requirements, workflows, and objectives.",
  },
  {
    question: "How long does it take to develop custom software?",
    answer:
      "The development timeline depends on the project's complexity, features, integrations, and testing requirements. Most projects are completed within 8 to 20 weeks, while larger enterprise solutions may require more time.",
  },
  {
    question: "Do you develop both web and mobile applications?",
    answer:
      "Yes. We develop responsive web applications, enterprise software, SaaS platforms, Android apps, iOS apps, and cross-platform mobile applications using modern technologies.",
  },
  {
    question: "Can you integrate the software with our existing systems?",
    answer:
      "Absolutely. We integrate custom software with ERP systems, CRM platforms, payment gateways, cloud services, APIs, third-party applications, and legacy systems to ensure seamless business operations.",
  },
  {
    question: "Which technologies do you use for software development?",
    answer:
      "We work with React, Next.js, Node.js, Python, Java, .NET, PHP, Flutter, React Native, AWS, Microsoft Azure, Google Cloud, SQL, MongoDB, and many other modern development technologies.",
  },
  {
    question: "Do you provide cloud-based software solutions?",
    answer:
      "Yes. We develop secure cloud-native applications and SaaS solutions that offer scalability, high availability, remote accessibility, and enterprise-grade security.",
  },
  {
    question: "Do you provide maintenance and support after deployment?",
    answer:
      "Yes. We offer ongoing software maintenance, performance optimization, security updates, bug fixes, feature enhancements, monitoring, and technical support to ensure your application continues to perform efficiently.",
  },
]



export default function SoftwareDevelopment() {
  // Tab states for CRM interactive section
  const [activeTab, setActiveTab] = useState("cost");

  // Kanban Leads States
  const [leads, setLeads] = useState([
    { id: 1, name: "Nexus Retail Ltd", value: 4500, stage: "New Lead", owner: "Sarah K." },
    { id: 2, name: "BioLife Healthcare", value: 12500, stage: "Contacted", owner: "Alex M." },
    { id: 3, name: "Summit Fintech", value: 8200, stage: "Demo Scheduled", owner: "Sarah K." },
    { id: 4, name: "Apex Logistics", value: 15000, stage: "New Lead", owner: "Alex M." },
    { id: 5, name: "Zenith EduCorp", value: 9500, stage: "Deal Closed", owner: "David L." }
  ]);

  const STAGES = ["New Lead", "Contacted", "Demo Scheduled", "Deal Closed"];
  
  const moveLead = (leadId, direction) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id === leadId) {
        const currentIdx = STAGES.indexOf(lead.stage);
        let nextIdx = currentIdx + direction;
        if (nextIdx >= 0 && nextIdx < STAGES.length) {
          return { ...lead, stage: STAGES[nextIdx] };
        }
      }
      return lead;
    }));
  };

  const addLead = () => {
    const names = ["Omega Logistics", "Nova E-Commerce", "Vertex Solutions", "Prime Care Labs"];
    const randomName = names[Math.floor(Math.random() * names.length)] + " " + Math.floor(Math.random() * 100);
    const randomVal = Math.floor(Math.random() * 12 + 3) * 1000;
    const newId = leads.length + 1;
    setLeads(prev => [...prev, {
      id: newId,
      name: randomName,
      value: randomVal,
      stage: "New Lead",
      owner: "System Auto"
    }]);
  };

  const resetLeads = () => {
    setLeads([
      { id: 1, name: "Nexus Retail Ltd", value: 4500, stage: "New Lead", owner: "Sarah K." },
      { id: 2, name: "BioLife Healthcare", value: 12500, stage: "Contacted", owner: "Alex M." },
      { id: 3, name: "Summit Fintech", value: 8200, stage: "Demo Scheduled", owner: "Sarah K." },
      { id: 4, name: "Apex Logistics", value: 15000, stage: "New Lead", owner: "Alex M." },
      { id: 5, name: "Zenith EduCorp", value: 9500, stage: "Deal Closed", owner: "David L." }
    ]);
  };

  // ROI Calculator States
  const [roiLeads, setRoiLeads] = useState(150);
  const [roiHours, setRoiHours] = useState(4);

  // Derived ROI stats
  const totalManualHours = roiLeads * roiHours;
  const hoursSavedWithCRM = Math.round(totalManualHours * 0.65);
  const savingsUSD = hoursSavedWithCRM * 50;
  const savingsINR = hoursSavedWithCRM * 4000;

  // Pipeline metrics
  const totalPipeline = leads.reduce((sum, lead) => sum + lead.value, 0);
  const closedRevenue = leads.filter(l => l.stage === "Deal Closed").reduce((sum, lead) => sum + lead.value, 0);
  const winRate = Math.round((leads.filter(l => l.stage === "Deal Closed").length / leads.length) * 100);

  return (
    <>
      <SEO
  title="Custom Software Development Services | Enterprise Software Development Company | SyncTech"
  description="SyncTech Software Solutions provides custom software development services, enterprise application development, web and mobile app development, software product development, API integration, cloud solutions, and legacy software modernization to help businesses accelerate digital transformation."
  keywords="custom software development, software development company, enterprise software development, custom software solutions, software product development, web application development, mobile app development, cloud application development, API development, software integration services, legacy software modernization, SaaS application development, business software development, custom enterprise applications"
/>

      {/* ========================================================= */}
{/* HERO SECTION */}
{/* ========================================================= */}

<section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-blue-50 via-white to-white">
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
    <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* Left Content */}
      <div className="lg:col-span-7 text-center lg:text-left">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          <Sparkles size={16} className="text-blue-500" />
          CUSTOM SOFTWARE DEVELOPMENT
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
          Build Powerful
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">
            Custom Software Solutions
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Accelerate your digital transformation with custom software
          development services tailored to your business goals. We design,
          develop, and deliver secure, scalable, and high-performance software
          solutions including enterprise applications, SaaS platforms, web and
          mobile apps, software product development, cloud applications, API
          integrations, and legacy software modernization.
        </p>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-blue-600 group-hover:scale-105 transition-transform">
                {stat.value}
              </h3>

              <p className="text-xs text-slate-500 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Right Side */}

      <div className="lg:col-span-5 flex justify-center relative">
  <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

  <div className="relative border border-slate-200/50 p-3 rounded-3xl shadow-2xl hover:rotate-1 hover:scale-[1.02] transition-all duration-500 max-w-[500px] w-full bg-white">

    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      alt="Custom Software Development Services"
      className="w-full h-[420px] object-cover rounded-2xl"
    />

    {/* Floating Badge */}
    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2 animate-bounce">
      <CheckCircle size={14} />
      100+ Projects Delivered
    </div>

  </div>
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
        Custom Software Development Services For Modern Businesses
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        Every business has unique processes, challenges, and goals that
        off-the-shelf software cannot always address effectively. Our custom
        software development services help organizations build tailored digital
        solutions that streamline operations, improve productivity, and create
        competitive advantages. From enterprise applications and SaaS platforms
        to web and mobile applications, we develop software designed around
        your specific business requirements.
      </p>

      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        As a trusted software development company, we combine strategic
        planning, user-focused design, modern technologies, and agile
        development methodologies to deliver scalable, secure, and
        high-performance software solutions. Our expertise includes software
        product development, enterprise software development, API integration,
        cloud application development, legacy system modernization, and
        workflow automation.
      </p>

      <p className="text-lg text-slate-600 leading-relaxed">
        Whether you need a custom business application, enterprise platform,
        customer portal, internal management system, or cloud-native solution,
        our team helps transform your ideas into powerful software products
        that drive growth, improve operational efficiency, and accelerate
        digital transformation.
      </p>
    </div>
  </div>
</section>
{/* ========================================================= */}
{/* INTERACTIVE SOFTWARE DEVELOPMENT ESTIMATOR */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50 border-y border-slate-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Interactive Estimator
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Estimate Your Software Project
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Get an instant estimate for software development cost, project duration,
        and team size based on your project requirements.
      </p>

      <div className="inline-flex mt-8 bg-slate-200 rounded-xl p-1">
        <button
          onClick={() => setActiveTab("cost")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeTab === "cost"
              ? "bg-white text-blue-600 shadow"
              : "text-slate-600"
          }`}
        >
          Project Cost
        </button>

        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeTab === "timeline"
              ? "bg-white text-blue-600 shadow"
              : "text-slate-600"
          }`}
        >
          Timeline
        </button>
      </div>
    </div>

    {/* ========================================================= */}
    {/* COST ESTIMATOR */}
    {/* ========================================================= */}

    {activeTab === "cost" ? (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        <div className="grid lg:grid-cols-2 gap-14">

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Project Requirements
            </h3>

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="font-semibold">
                  Number of Features
                </span>

                <span className="font-bold text-blue-600">
                  {roiLeads}
                </span>

              </div>

              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={roiLeads}
                onChange={(e) => setRoiLeads(Number(e.target.value))}
                className="w-full accent-blue-600"
              />

            </div>

            <div>

              <div className="flex justify-between mb-3">

                <span className="font-semibold">
                  Complexity Level
                </span>

                <span className="font-bold text-blue-600">
                  {roiHours}/10
                </span>

              </div>

              <input
                type="range"
                min="1"
                max="10"
                value={roiHours}
                onChange={(e) => setRoiHours(Number(e.target.value))}
                className="w-full accent-blue-600"
              />

            </div>

          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white">

            <h3 className="text-2xl font-bold mb-8">
              Estimated Budget
            </h3>

            <div className="space-y-8">

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  Estimated Development Cost
                </p>

                <div className="text-4xl font-black text-green-400 mt-2">
                  $
                  {(
                    roiLeads *
                    roiHours *
                    120
                  ).toLocaleString()}
                </div>

              </div>

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  Approximate Team Size
                </p>

                <div className="text-3xl font-bold text-cyan-300 mt-2">
                  {Math.ceil(roiHours / 2) + 2} Developers
                </div>

              </div>

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  Delivery Confidence
                </p>

                <div className="text-3xl font-bold text-blue-300 mt-2">
                  95%
                </div>

              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-slate-900 font-bold hover:bg-cyan-300"
              >
                Get Detailed Quote
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    ) : (

      /* ========================================================= */
      /* TIMELINE */
      /* ========================================================= */

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        <div className="grid lg:grid-cols-2 gap-14">

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Estimated Development Timeline
            </h3>

            <div className="space-y-6">

              {[
                ["Discovery & Planning", "1-2 Weeks"],
                ["UI/UX Design", "2-3 Weeks"],
                ["Frontend Development", "3-6 Weeks"],
                ["Backend Development", "4-8 Weeks"],
                ["Testing & QA", "2 Weeks"],
                ["Deployment", "1 Week"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between border-b border-slate-200 pb-4"
                >
                  <span className="font-semibold">
                    {item[0]}
                  </span>

                  <span className="font-bold text-blue-600">
                    {item[1]}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">

            <Clock className="mb-6" size={40} />

            <h3 className="text-3xl font-black">
              Typical Delivery
            </h3>

            <div className="text-6xl font-black mt-6">
              8–20
            </div>

            <p className="text-xl mt-2">
              Weeks
            </p>

            <p className="mt-8 text-blue-100 leading-relaxed">
              Depending on project complexity, integrations, security
              requirements, testing, and deployment.
            </p>

            <Link
              to="/contact"
              className="inline-flex mt-10 items-center gap-2 bg-white text-blue-700 px-6 py-4 rounded-xl font-bold hover:bg-blue-50"
            >
              Discuss My Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    )}

  </div>
</section>
      {/* ========================================================= */}
{/* SOFTWARE DEVELOPMENT SERVICES */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Our Services
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Software Development Services We Offer
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We build secure, scalable, and high-performance software solutions
        that help businesses automate operations, improve productivity,
        and accelerate digital transformation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {softwareServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
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

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Features
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Software Development Features & Capabilities
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We build secure, scalable, and high-performance software solutions
        using modern technologies and industry best practices.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {softwareFeatures.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
              <Icon
                className="text-blue-600 transition-transform duration-500 group-hover:rotate-6"
                size={28}
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
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
        Benefits of Custom Software Development
      </h2>

      <p className="mt-6 text-slate-300 text-lg">
        Empower your business with secure, scalable, and high-performance
        software solutions built specifically for your unique requirements.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {softwareBenefits.map((benefit, index) => (
        <div
          key={index}
          className="group flex items-start gap-4 rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
        >
          <CheckCircle
            className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform"
            size={22}
          />

          <span className="text-slate-200 text-lg">
            {benefit}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
     {/* ========================================================= */}
{/* WHY CHOOSE US */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Why Choose SyncTech
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Why Businesses Choose Our Software Development Services
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We build secure, scalable, and future-ready software solutions that
        accelerate digital transformation and deliver measurable business
        value.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Award,
          title: "Experienced Development Team",
          desc: "Our experienced software engineers deliver enterprise-grade web, mobile, cloud, and SaaS applications using modern technologies.",
        },
        {
          icon: Rocket,
          title: "Scalable Architecture",
          desc: "We design applications with scalable architectures that grow with your business and support future expansion.",
        },
        {
          icon: ShieldCheck,
          title: "Secure Development",
          desc: "Security is integrated throughout development with secure coding standards, encryption, authentication, and compliance best practices.",
        },
        {
          icon: Workflow,
          title: "Agile Development Process",
          desc: "Using Agile methodologies, we deliver faster releases, continuous feedback, and complete project transparency.",
        },
        {
          icon: Settings,
          title: "Custom Software Solutions",
          desc: "Every solution is tailored to your business processes, workflows, and long-term operational goals.",
        },
        {
          icon: Headphones,
          title: "Long-Term Support",
          desc: "We provide maintenance, performance optimization, upgrades, monitoring, and technical support after deployment.",
        },
      ].map((item, index) => {
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
{/* INDUSTRIES WE SERVE */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Industries We Serve
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Software Development Solutions Across Industries
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We develop secure, scalable, and industry-specific software solutions
        that help organizations automate processes, improve efficiency, and
        accelerate digital transformation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: ShoppingBag,
          title: "Retail & E-Commerce",
          desc: "Custom eCommerce platforms, inventory management, POS systems, customer portals, and order management solutions.",
        },
        {
          icon: HeartPulse,
          title: "Healthcare",
          desc: "Hospital management systems, telemedicine platforms, patient portals, EMR/EHR software, and healthcare applications.",
        },
        {
          icon: Landmark,
          title: "Banking & Finance",
          desc: "FinTech platforms, digital banking solutions, payment gateways, loan management systems, and secure financial software.",
        },
        {
          icon: GraduationCap,
          title: "Education",
          desc: "Learning Management Systems (LMS), student information systems, online examination platforms, and eLearning applications.",
        },
        {
          icon: Factory,
          title: "Manufacturing",
          desc: "ERP software, production management, warehouse automation, supply chain systems, and quality control applications.",
        },
        {
          icon: Building2,
          title: "Enterprise & Professional Services",
          desc: "Enterprise resource planning, HRMS, CRM, project management software, workflow automation, and business intelligence solutions.",
        },
      ].map((industry, index) => {
        const Icon = industry.icon;

        return (
          <div
            key={index}
            className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
          >
            <Icon
              className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110"
              size={30}
            />

            <h3 className="text-xl font-semibold mb-3">
              {industry.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {industry.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* ========================================================= */}
{/* SOFTWARE DEVELOPMENT PROCESS */}
{/* ========================================================= */}

<section className="py-24 bg-slate-950 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-blue-400 font-semibold uppercase tracking-wider">
        Development Process
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Our Software Development Lifecycle
      </h2>

      <p className="mt-6 text-lg text-slate-300">
        We follow a proven Agile software development process to deliver
        secure, scalable, and high-quality software solutions on time and
        within budget.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          step: "01",
          title: "Requirement Analysis",
          desc: "We understand your business goals, challenges, project scope, and technical requirements to create a clear development roadmap.",
        },
        {
          step: "02",
          title: "Planning & Architecture",
          desc: "Our architects design the software architecture, database structure, technology stack, and project milestones.",
        },
        {
          step: "03",
          title: "UI/UX Design",
          desc: "We create intuitive user interfaces and engaging user experiences that improve usability and customer satisfaction.",
        },
        {
          step: "04",
          title: "Software Development",
          desc: "Our developers build scalable web, mobile, cloud, or enterprise applications using modern frameworks and best coding practices.",
        },
        {
          step: "05",
          title: "Testing & Quality Assurance",
          desc: "Every feature undergoes functional, performance, security, and compatibility testing to ensure reliable software delivery.",
        },
        {
          step: "06",
          title: "Deployment",
          desc: "We deploy your application securely on cloud or on-premise environments with minimal downtime.",
        },
        {
          step: "07",
          title: "Maintenance & Support",
          desc: "After launch, we provide continuous monitoring, updates, bug fixes, feature enhancements, and technical support.",
        },
        {
          step: "08",
          title: "Continuous Improvement",
          desc: "Using user feedback and analytics, we continuously optimize performance and introduce new features as your business grows.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="rounded-3xl border border-slate-800 p-8 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="text-4xl font-bold text-blue-400">
              {item.step}
            </span>

            <ArrowRight className="text-slate-600" />
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ========================================================= */}
{/* OUR COMMITMENT */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Our Commitment
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Our Commitment to Quality Software Development
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We are committed to delivering innovative, secure, and scalable
        software solutions that help businesses improve efficiency,
        accelerate digital transformation, and achieve long-term success.
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
              Answers to common questions about custom software development and
              implementation.
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
      Ready to Build Your Next Software Solution?
    </h2>

    <p className="mt-8 text-lg text-slate-300 leading-relaxed">
      Whether you're building a custom business application, enterprise
      platform, SaaS product, mobile app, or modern web solution, our
      experienced development team is ready to turn your ideas into secure,
      scalable, and high-performance software.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <a
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Start Your Project
        <ArrowRight size={18} />
      </a>
    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        Custom Software Development
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        Enterprise Web & Mobile Apps
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        Ongoing Maintenance & Support
      </div>
    </div>
  </div>
</section>

    </>
  );
}
