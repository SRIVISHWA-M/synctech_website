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
const aiServices = [
  {
    icon: Sparkles,
    title: "Generative AI Development",
    desc: "Build custom AI applications powered by Large Language Models (LLMs), GPT, Claude, Gemini, and open-source AI models.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    desc: "Develop intelligent AI chatbots and virtual assistants for customer support, sales automation, and internal business operations.",
  },
  {
    icon: Database,
    title: "AI Data Analytics",
    desc: "Transform business data into actionable insights using predictive analytics, machine learning, and AI-driven reporting.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    desc: "Automate repetitive business processes using intelligent AI agents, RPA, and machine learning workflows.",
  },
  {
    icon: ShieldCheck,
    title: "AI Integration Services",
    desc: "Integrate AI capabilities into existing ERP, CRM, websites, mobile apps, and enterprise software platforms.",
  },
  {
    icon: BarChart3,
    title: "Machine Learning Solutions",
    desc: "Develop custom machine learning models for forecasting, recommendation systems, fraud detection, and business intelligence.",
  },
];
const aiFeatures = [
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Develop AI-powered applications using Large Language Models (LLMs) for content generation, automation, and intelligent assistants.",
  },
  {
    icon: Brain,
    title: "Machine Learning Models",
    desc: "Build predictive models that analyze business data, identify patterns, and improve decision-making.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    desc: "Deploy conversational AI solutions that provide instant customer support and automate interactions.",
  },
  {
    icon: Database,
    title: "Intelligent Data Processing",
    desc: "Extract, classify, organize, and analyze structured and unstructured data using AI technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI & Security",
    desc: "Develop secure, ethical, and compliant AI systems with robust governance and data protection.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Automate repetitive workflows and improve operational efficiency using intelligent AI agents.",
  },
];
const aiBenefits = [
  "Automate repetitive business processes",
  "Increase operational efficiency and productivity",
  "Deliver personalized customer experiences",
  "Make faster, data-driven business decisions",
  "Reduce operational costs through automation",
  "Improve forecasting with predictive analytics",
  "Enhance accuracy while minimizing human errors",
  "Scale AI solutions as your business grows",
];
const stats = [
  {
    value: "50+",
    label: "AI Solutions Delivered",
  },
  {
    value: "95%",
    label: "Automation Accuracy",
  },
  {
    value: "24/7",
    label: "AI Assistance",
  },
  {
    value: "100%",
    label: "Custom AI Models",
  },
];


const aiCommitments = [
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    desc: "We build AI systems with fairness, transparency, security, and ethical principles at the core of every solution.",
  },
  {
    icon: Brain,
    title: "Continuous Innovation",
    desc: "Our team continuously explores the latest AI models, machine learning techniques, and generative AI technologies.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    desc: "We protect sensitive business data through secure AI architectures, encryption, and industry-standard compliance practices.",
  },
  {
    icon: Headphones,
    title: "Long-Term AI Support",
    desc: "We provide ongoing monitoring, model optimization, maintenance, updates, and technical support after deployment.",
  },
];
const faqs = [
  {
    question: "What AI solutions do you offer?",
    answer:
      "We develop custom AI solutions including machine learning applications, generative AI, AI chatbots, predictive analytics, computer vision, natural language processing (NLP), recommendation systems, and intelligent business automation.",
  },
  {
    question: "Can AI be integrated with our existing software?",
    answer:
      "Yes. We integrate AI capabilities into your existing web applications, mobile apps, ERP, CRM, SaaS platforms, APIs, and enterprise systems with minimal disruption.",
  },
  {
    question: "Do you build custom AI models?",
    answer:
      "Yes. We develop and fine-tune custom AI and machine learning models tailored to your business objectives, industry requirements, and available data.",
  },
  {
    question: "Is our business data secure when using AI?",
    answer:
      "Absolutely. We follow industry best practices for data security, encryption, access control, compliance, and privacy to ensure your sensitive information remains protected.",
  },
  {
    question: "Can you develop AI chatbots for customer support?",
    answer:
      "Yes. We build intelligent AI chatbots and virtual assistants capable of handling customer inquiries, automating support, generating responses, and improving customer engagement 24/7.",
  },
  {
    question: "Which AI technologies do you work with?",
    answer:
      "We work with OpenAI, TensorFlow, PyTorch, LangChain, Hugging Face, Python, Azure AI, Google AI, AWS AI services, vector databases, and other modern AI technologies.",
  },
  {
    question: "How long does it take to develop an AI solution?",
    answer:
      "Project timelines depend on complexity, data availability, integrations, and business requirements. Most AI projects take between 6 and 20 weeks from planning to deployment.",
  },
  {
    question: "Do you provide AI maintenance and support?",
    answer:
      "Yes. We provide continuous monitoring, model retraining, performance optimization, security updates, maintenance, and ongoing technical support after deployment.",
  },
];



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
  title="AI Solutions & Artificial Intelligence Development Services | SyncTech Software Solutions"
  description="SyncTech Software Solutions provides AI solutions including Generative AI, Machine Learning, AI Chatbots, Computer Vision, Natural Language Processing (NLP), Predictive Analytics, AI Automation, Recommendation Systems, and custom AI application development to help businesses accelerate digital transformation."
  keywords="AI solutions, artificial intelligence development, AI development company, generative AI development, machine learning solutions, AI chatbot development, conversational AI, computer vision development, NLP solutions, natural language processing, predictive analytics, AI automation, recommendation engine development, intelligent automation, AI consulting services, custom AI applications, enterprise AI solutions, LLM development, OpenAI integration, AI software development"
/>

{/* ========================================================= */}
{/* HERO SECTION */}
{/* ========================================================= */}

<section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-violet-50 via-white to-white">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px] animate-pulse" />
    <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* Left Content */}

      <div className="lg:col-span-7 text-center lg:text-left">

        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
          <Sparkles size={16} className="text-violet-600" />
          ARTIFICIAL INTELLIGENCE SOLUTIONS
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
          Intelligent AI Solutions
          <span className="block bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent pb-1">
            That Transform Businesses
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Empower your business with AI-powered automation, Generative AI,
          Machine Learning, Computer Vision, NLP, Predictive Analytics,
          AI Chatbots, Recommendation Engines, and custom intelligent
          applications designed to increase efficiency, reduce costs,
          and accelerate digital transformation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-violet-700 hover:scale-[1.03] transition-all duration-300"
          >
            Get Free AI Consultation
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-violet-200 text-center lg:text-left"
            >

              <h3 className="text-2xl font-bold text-violet-600">
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

        <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-[80px]" />

        <div className="relative border border-slate-200 bg-white p-3 rounded-3xl shadow-2xl hover:rotate-1 hover:scale-[1.02] transition-all duration-500 max-w-[500px]">

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
            alt="AI Solutions by SyncTech Software Solutions"
            className="w-full h-[430px] object-cover rounded-2xl"
          />

          <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2 animate-bounce">
            <CheckCircle size={14} />
            AI Powered
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

      <span className="text-violet-600 font-semibold uppercase tracking-wider">
        Overview
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold mb-8">
        AI Solutions That Drive Business Innovation
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        Artificial Intelligence is transforming the way businesses operate,
        automate processes, and deliver exceptional customer experiences.
        At SyncTech Software Solutions, we develop intelligent AI solutions
        that help organizations streamline operations, improve decision-making,
        enhance productivity, and unlock new business opportunities through
        data-driven innovation.
      </p>

      <p className="text-lg text-slate-600 leading-relaxed mb-6">
        Our AI development services include Generative AI, Machine Learning,
        Natural Language Processing (NLP), Computer Vision, AI Chatbots,
        Predictive Analytics, Recommendation Systems, Intelligent Automation,
        and custom AI-powered applications. We leverage modern AI frameworks,
        large language models (LLMs), and cloud technologies to build scalable,
        secure, and enterprise-grade AI solutions tailored to your business
        requirements.
      </p>

      <p className="text-lg text-slate-600 leading-relaxed">
        Whether you're looking to automate repetitive workflows, develop
        intelligent virtual assistants, implement predictive analytics,
        integrate AI into existing software, or create innovative AI-powered
        products, our experienced AI engineers deliver reliable, future-ready
        solutions that accelerate digital transformation and create measurable
        business value.
      </p>

    </div>
  </div>
</section>
{/* ========================================================= */}
{/* INTERACTIVE AI SOLUTION ESTIMATOR */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50 border-y border-slate-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        AI Solution Estimator
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Estimate Your AI Project
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Estimate the investment, implementation timeline, and AI development
        resources required for your intelligent business solution.
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
          AI Cost
        </button>

        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeTab === "timeline"
              ? "bg-white text-blue-600 shadow"
              : "text-slate-600"
          }`}
        >
          AI Timeline
        </button>

      </div>
    </div>

    {activeTab === "cost" ? (

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              AI Project Requirements
            </h3>

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="font-semibold">
                  AI Features
                </span>

                <span className="font-bold text-blue-600">
                  {roiLeads}
                </span>

              </div>

              <input
                type="range"
                min="1"
                max="50"
                value={roiLeads}
                onChange={(e) => setRoiLeads(Number(e.target.value))}
                className="w-full accent-blue-600"
              />

            </div>

            <div>

              <div className="flex justify-between mb-3">

                <span className="font-semibold">
                  AI Complexity
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

          {/* Right */}

          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white">

            <h3 className="text-2xl font-bold mb-8">
              Estimated AI Investment
            </h3>

            <div className="space-y-8">

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  Estimated Cost
                </p>

                <div className="text-4xl font-black text-green-400 mt-2">
                  $
                  {(roiLeads * roiHours * 250).toLocaleString()}
                </div>

              </div>

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  AI Development Team
                </p>

                <div className="text-3xl font-bold text-cyan-300 mt-2">
                  {Math.ceil(roiHours / 2) + 3} Experts
                </div>

              </div>

              <div>

                <p className="uppercase text-xs text-slate-400 font-bold">
                  AI Accuracy Target
                </p>

                <div className="text-3xl font-bold text-blue-300 mt-2">
                  96%
                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 rounded-xl bg-cyan-400 px-6 py-4 text-slate-900 font-bold hover:bg-cyan-300"
              >
                Get AI Consultation
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

    ) : (

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              AI Development Roadmap
            </h3>

            <div className="space-y-6">

              {[
                ["AI Strategy & Discovery", "1 Week"],
                ["Data Collection & Preparation", "2-4 Weeks"],
                ["Model Development", "3-6 Weeks"],
                ["Training & Optimization", "2-5 Weeks"],
                ["Integration & API", "2 Weeks"],
                ["Testing & Deployment", "1-2 Weeks"],
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

          {/* Right */}

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">

            <Clock className="mb-6" size={40} />

            <h3 className="text-3xl font-black">
              Typical AI Delivery
            </h3>

            <div className="text-6xl font-black mt-6">
              6–18
            </div>

            <p className="text-xl mt-2">
              Weeks
            </p>

            <p className="mt-8 text-blue-100 leading-relaxed">
              Timeline depends on AI model complexity, dataset availability,
              integrations, testing, and deployment requirements.
            </p>

            <Link
              to="/contact"
              className="inline-flex mt-10 items-center gap-2 bg-white text-blue-700 px-6 py-4 rounded-xl font-bold hover:bg-blue-50"
            >
              Talk to AI Experts
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    )}

  </div>
</section>
      {/* ========================================================= */}
{/* AI SOLUTION SERVICES */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Our AI Services
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        AI Solutions We Offer
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We develop intelligent AI-powered solutions that automate business
        operations, improve decision-making, enhance customer experiences,
        and accelerate digital transformation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {aiServices.map((service, index) => {
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
{/* AI FEATURES */}
{/* ========================================================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        AI Capabilities
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        AI Features & Capabilities
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We build intelligent AI solutions that automate workflows,
        enhance decision-making, improve customer experiences,
        and unlock valuable business insights.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {aiFeatures.map((feature, index) => {
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
        Benefits of AI Solutions
      </h2>

      <p className="mt-6 text-slate-300 text-lg">
        Leverage Artificial Intelligence to automate operations, improve
        decision-making, enhance customer experiences, and accelerate
        business growth with intelligent solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {aiBenefits.map((benefit, index) => (
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
        Why Businesses Choose Our AI Solutions
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We build intelligent AI solutions that automate workflows, enhance
        decision-making, improve customer experiences, and accelerate business
        growth with cutting-edge technologies.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Brain,
          title: "AI Expertise",
          desc: "Our AI specialists build intelligent solutions using machine learning, deep learning, NLP, computer vision, and generative AI technologies.",
        },
        {
          icon: Cpu,
          title: "Advanced AI Technologies",
          desc: "We leverage the latest AI frameworks, cloud platforms, and modern architectures to deliver scalable and high-performing AI applications.",
        },
        {
          icon: Sparkles,
          title: "Custom AI Solutions",
          desc: "Every AI solution is tailored to your business goals, industry requirements, and operational workflows for maximum business value.",
        },
        {
          icon: ShieldCheck,
          title: "Secure & Responsible AI",
          desc: "Our AI systems are developed with strong security, data privacy, ethical AI principles, and compliance with industry standards.",
        },
        {
          icon: Workflow,
          title: "Seamless Integration",
          desc: "We integrate AI capabilities into your existing software, ERP, CRM, cloud infrastructure, and business processes with minimal disruption.",
        },
        {
          icon: Headphones,
          title: "Continuous Optimization & Support",
          desc: "We monitor, retrain, optimize, and maintain AI models to ensure long-term performance, reliability, and business success.",
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
        AI Solutions Across Industries
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We develop intelligent AI solutions tailored to industry-specific
        challenges, helping organizations automate operations, improve
        decision-making, and deliver exceptional customer experiences.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: ShoppingBag,
          title: "Retail & E-Commerce",
          desc: "AI-powered recommendation engines, demand forecasting, customer analytics, inventory optimization, and intelligent shopping experiences.",
        },
        {
          icon: HeartPulse,
          title: "Healthcare",
          desc: "Medical image analysis, AI diagnostics, virtual healthcare assistants, predictive analytics, and patient care automation.",
        },
        {
          icon: Landmark,
          title: "Banking & Finance",
          desc: "Fraud detection, AI risk assessment, automated financial advisors, credit scoring, and intelligent banking solutions.",
        },
        {
          icon: GraduationCap,
          title: "Education",
          desc: "Personalized learning platforms, AI tutors, automated grading, learning analytics, and intelligent education systems.",
        },
        {
          icon: Factory,
          title: "Manufacturing",
          desc: "Predictive maintenance, quality inspection using computer vision, production optimization, and smart factory automation.",
        },
        {
          icon: Building2,
          title: "Enterprise & Professional Services",
          desc: "AI chatbots, workflow automation, document intelligence, business analytics, predictive insights, and enterprise AI assistants.",
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
{/* AI SOLUTIONS DEVELOPMENT PROCESS */}
{/* ========================================================= */}

<section className="py-24 bg-slate-950 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-blue-400 font-semibold uppercase tracking-wider">
        AI Development Process
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Our AI Solution Development Lifecycle
      </h2>

      <p className="mt-6 text-lg text-slate-300">
        We follow a structured AI development methodology to build intelligent,
        secure, and scalable AI solutions that solve real business challenges
        and deliver measurable results.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          step: "01",
          title: "Business Discovery",
          desc: "We analyze your business objectives, existing workflows, available data, and AI opportunities to define a clear implementation strategy.",
        },
        {
          step: "02",
          title: "Data Collection & Preparation",
          desc: "Our team gathers, cleans, labels, and prepares high-quality datasets required for accurate AI model training and performance.",
        },
        {
          step: "03",
          title: "AI Strategy & Solution Design",
          desc: "We select the most suitable AI technologies, machine learning models, LLMs, or computer vision frameworks based on your business goals.",
        },
        {
          step: "04",
          title: "Model Development & Training",
          desc: "Our AI engineers build, train, and optimize machine learning and deep learning models using industry-leading frameworks and best practices.",
        },
        {
          step: "05",
          title: "Application Integration",
          desc: "We integrate AI capabilities into your web applications, mobile apps, enterprise systems, APIs, or cloud infrastructure.",
        },
        {
          step: "06",
          title: "Testing & Validation",
          desc: "Every AI solution undergoes rigorous testing for accuracy, security, scalability, reliability, bias detection, and real-world performance.",
        },
        {
          step: "07",
          title: "Deployment & Monitoring",
          desc: "We deploy AI models securely in cloud or on-premise environments while continuously monitoring performance and resource utilization.",
        },
        {
          step: "08",
          title: "Continuous Optimization",
          desc: "Using analytics, user feedback, and new datasets, we retrain and improve AI models to ensure long-term accuracy and business value.",
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
        Our Commitment to Responsible AI Innovation
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We are committed to delivering intelligent, secure, and ethical AI
        solutions that help businesses automate operations, improve decision
        making, and create sustainable competitive advantages.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {aiCommitments.map((item, index) => {
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
      Ready to Transform Your Business with AI?
    </h2>

    <p className="mt-8 text-lg text-slate-300 leading-relaxed">
      Whether you're looking to automate business processes, build intelligent
      AI applications, deploy AI chatbots, leverage machine learning, or
      integrate Generative AI into your business, our AI experts are ready to
      help you innovate with secure, scalable, and future-ready AI solutions.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <a
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Start Your AI Project
        <ArrowRight size={18} />
      </a>
    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        Custom AI Solutions
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        AI Chatbots & Machine Learning
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle size={16} className="text-green-400" />
        AI Integration & Ongoing Support
      </div>
    </div>
  </div>
</section>

</>
);
}