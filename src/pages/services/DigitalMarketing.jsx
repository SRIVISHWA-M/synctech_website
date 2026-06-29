"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,

  // Part 1
  Search,
  TrendingUp,
  Megaphone,
  Mail,
  BarChart3,
  Users,
  Globe,
  Target,

  // Part 2
  Award,
  ShieldCheck,
  Rocket,
  Headphones,
  Workflow,
  LineChart,
  Share2,

  // Part3
  HelpCircle,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  Clock,
  Gauge,
  Lock,
} from "lucide-react";

import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import MarketingTechnologies from "./sections/MarketingTechnologies";

const marketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve search rankings, increase organic traffic, and attract qualified leads through strategic SEO initiatives.",
  },
  {
    icon: Megaphone,
    title: "Pay-Per-Click Advertising",
    desc: "Generate immediate visibility and targeted traffic through Google Ads and paid media campaigns.",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    desc: "Build meaningful customer relationships and increase brand awareness across social platforms.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Create personalized campaigns that nurture leads and improve customer retention.",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    desc: "Develop engaging content that educates audiences and drives conversions.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Data-driven campaigns focused on maximizing ROI and measurable business growth.",
  },
];

const marketingFeatures = [
  {
    icon: Target,
    title: "Audience Targeting",
    desc: "Reach ideal customers through precise targeting strategies and audience segmentation.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Increase search engine visibility and improve online discoverability.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Track performance with actionable insights and transparent reporting.",
  },
  {
    icon: Users,
    title: "Brand Awareness",
    desc: "Build credibility and strengthen brand recognition across digital channels.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Drive qualified leads through targeted marketing campaigns and strategies.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Marketing",
    desc: "Engage audiences across search, social media, email, and content platforms.",
  },
];

const marketingBenefits = [
  "Increase brand visibility",
  "Generate qualified leads",
  "Improve customer engagement",
  "Boost website traffic",
  "Increase conversion rates",
  "Strengthen online presence",
  "Enhance customer retention",
  "Drive sustainable business growth",
];

const stats = [
  {
    value: "Data",
    label: "Driven Strategy",
  },
  {
    value: "Multi",
    label: "Channel Marketing",
  },
  {
    value: "ROI",
    label: "Focused Campaigns",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Strategic Marketing Approach",
    desc: "Every campaign is built around your business goals, audience behavior, and growth objectives.",
  },
  {
    icon: Users,
    title: "Customer-Centric Execution",
    desc: "We focus on understanding your customers to create highly targeted campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    desc: "Track campaign performance through detailed reports and actionable insights.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused Campaigns",
    desc: "Marketing strategies designed to increase visibility, engagement, and conversions.",
  },
  {
    icon: Workflow,
    title: "Data-Driven Decisions",
    desc: "Every optimization is backed by analytics, testing, and performance metrics.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Continuous communication and campaign support to maximize results.",
  },
];

const marketingChannels = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Increase organic visibility and improve search engine rankings.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    desc: "Generate targeted traffic through Google Ads and PPC campaigns.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage customers across social platforms.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Nurture leads and strengthen customer relationships.",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    desc: "Create valuable content that attracts and converts audiences.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Focus on measurable ROI and campaign performance optimization.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Drive qualified leads through targeted digital strategies.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    desc: "Monitor performance and uncover growth opportunities.",
  },
];

const marketingTools = {
  analytics: [
    "Google Analytics",
    "Google Search Console",
    "Google Tag Manager",
    "Looker Studio",
  ],
  advertising: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"],
  seo: ["SEMrush", "Ahrefs", "Moz", "Screaming Frog"],
  marketing: ["Mailchimp", "HubSpot", "Buffer", "Hootsuite"],
};

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "Understand business goals, audience, competitors, and market opportunities.",
  },
  {
    step: "02",
    title: "Strategy Development",
    desc: "Create a customized digital marketing roadmap aligned with business objectives.",
  },
  {
    step: "03",
    title: "Campaign Setup",
    desc: "Configure channels, tracking systems, and marketing assets.",
  },
  {
    step: "04",
    title: "Content & Creative",
    desc: "Develop engaging content, creatives, and campaign materials.",
  },
  {
    step: "05",
    title: "Campaign Launch",
    desc: "Execute campaigns across selected marketing channels.",
  },
  {
    step: "06",
    title: "Optimization",
    desc: "Continuously improve campaigns based on performance data.",
  },
  {
    step: "07",
    title: "Reporting",
    desc: "Provide detailed performance reports and business insights.",
  },
  {
    step: "08",
    title: "Scale & Growth",
    desc: "Expand successful campaigns and maximize long-term results.",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "Transparent Communication",
    desc: "Regular updates, clear reporting, and complete visibility into campaign performance and progress.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented Strategies",
    desc: "Every marketing initiative is designed to support long-term business growth and measurable outcomes.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "We focus on understanding your audience and creating campaigns that resonate with their needs.",
  },
  {
    icon: Target,
    title: "Goal-Driven Execution",
    desc: "Marketing strategies aligned with your business objectives, industry, and target audience.",
  },
  {
    icon: BarChart3,
    title: "Data-Backed Decisions",
    desc: "Campaign optimization based on performance insights, analytics, and market trends.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Improvement",
    desc: "Ongoing analysis and refinement to improve engagement, conversions, and ROI.",
  },
];

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide SEO, social media marketing, content marketing, PPC advertising, email marketing, lead generation, and performance marketing services.",
  },
  {
    question: "Can you help a startup grow online?",
    answer:
      "Yes. We work with startups and growing businesses to build brand awareness, generate leads, and establish a strong digital presence.",
  },

  {
    question: "How often will I receive reports?",
    answer:
      "Reporting frequency can be customized, but most clients receive monthly performance reports and insights.",
  },
  {
    question: "Do you create content for marketing campaigns?",
    answer:
      "Yes. We help develop blogs, website content, social media posts, email campaigns, and other marketing materials.",
  },
  {
    question: "Can you work with businesses in any industry?",
    answer:
      "Yes. Our marketing strategies are tailored to different industries, business models, and target audiences.",
  },
  {
    question: "Why choose your digital marketing services?",
    answer:
      "We focus on personalized strategies, transparent communication, data-driven decisions, and long-term business growth.",
  },
];
export default function DigitalMarketing() {
  const [activeTab, setActiveTab] = useState("simulator");

  // Budget Simulator States
  const [monthlyBudget, setMonthlyBudget] = useState(2500);
  const [channel, setChannel] = useState("google");

  const channelMultipliers = {
    google: { impressions: 12, clicks: 0.45, conversionRate: 0.045 },
    meta: { impressions: 22, clicks: 0.75, conversionRate: 0.035 },
    seo: { impressions: 8, clicks: 0.25, conversionRate: 0.06 }
  };

  const getSimulatedMetrics = () => {
    const mult = channelMultipliers[channel] || channelMultipliers.google;
    const impressions = Math.round(monthlyBudget * mult.impressions);
    const clicks = Math.round(impressions * mult.clicks * 0.05);
    const leads = Math.round(clicks * mult.conversionRate);
    const conversionCost = Math.round(monthlyBudget / (leads || 1));
    return { impressions, clicks, leads, conversionCost };
  };

  const metrics = getSimulatedMetrics();

  // SEO Scanner States
  const [auditUrl, setAuditUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const startScan = (e) => {
    e.preventDefault();
    if (!auditUrl) return;
    setIsScanning(true);
    setScanComplete(false);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <>
      <SEO
        title="Performance Digital Marketing & SEO Services | SyncTech"
        description="Scale your business with SyncTech's ROI-focused digital marketing campaigns. We deliver SEO optimization, social media marketing, PPC Google Ads, and copywriting."
        keywords="digital marketing, search engine optimization, SEO services, pay per click advertising, Google Ads agency, brand strategy"
      />

      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Description, and Stats */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                <Sparkles size={16} className="text-blue-500" />
                DIGITAL MARKETING SERVICES
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
                Grow Your Brand With
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">
                  Digital Marketing
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                Accelerate business growth through SEO, social media marketing,
                paid advertising, content marketing, and performance-driven
                strategies that help you attract customers and increase revenue.
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

              {/* STATS OVERLAY IN HERO */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group text-center lg:text-left rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Illustration Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass-card border border-slate-200/50 p-3 rounded-3xl shadow-2xl hover:rotate-1 hover:scale-[1.02] transition-all duration-500 max-w-[420px] lg:max-w-none">
                <img
                  src="/marketing_analytics.png"
                  alt="SyncTech Digital Marketing Solutions"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Micro notification badge */}
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-1.5 animate-bounce">
                  <TrendingUp size={12} className="text-cyan-300" />
                  +340% Traffic ROI
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
              Digital Marketing Solutions That Drive Growth
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              In today's competitive digital landscape, businesses need more
              than just an online presence. Effective digital marketing helps
              brands connect with their audience, increase visibility, generate
              leads, and drive measurable growth.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our digital marketing services combine strategy, creativity, and
              analytics to help businesses reach the right audience at the right
              time through the most effective digital channels.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're looking to improve search rankings, increase social
              engagement, generate leads, or boost conversions, we create
              tailored marketing strategies aligned with your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE DIGITAL MARKETING EXPERIENCE */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Interactive Tools
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 tracking-tight">
              Optimize Your Campaign ROI
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Simulate performance marketing click metrics or scan a site for technical SEO compliance instantly.
            </p>

            {/* Selector Tabs */}
            <div className="inline-flex p-1 bg-slate-200/80 backdrop-blur rounded-xl mt-8">
              <button
                type="button"
                onClick={() => setActiveTab("simulator")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "simulator"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                  }`}
              >
                1. Campaign ROI Budget Simulator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scanner")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "scanner"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                  }`}
              >
                2. Technical SEO Scanner
              </button>
            </div>
          </div>

          {activeTab === "simulator" ? (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Inputs Left */}
                <div className="lg:col-span-7">
                  <h3 className="text-lg font-bold text-slate-950 mb-6 uppercase tracking-wider text-xs">Configure Ad Channel & Budget:</h3>

                  {/* Select Channel */}
                  <div className="mb-8">
                    <span className="block text-sm font-bold text-slate-700 mb-3">Choose Target Channel</span>
                    <div className="grid grid-cols-3 gap-3">
                      {["google", "meta", "seo"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setChannel(item)}
                          className={`py-3.5 rounded-xl border text-xs font-bold capitalize transition-all ${channel === item
                              ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                        >
                          {item === "seo" ? "Organic SEO" : item + " PPC Ads"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Range Budget */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Estimated Monthly Ad Spend</span>
                      <span className="text-base font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                        ${monthlyBudget.toLocaleString()} / ₹{(monthlyBudget * 80).toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="15000"
                      step="500"
                      value={monthlyBudget}
                      onChange={e => setMonthlyBudget(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-semibold">
                      <span>$500</span>
                      <span>$7,500</span>
                      <span>$15,000</span>
                    </div>
                  </div>
                </div>

                {/* Outputs Right */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8 rounded-2xl text-white border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-cyan-400" />
                    Estimated Monthly Impact
                  </h3>

                  <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-1">Estimated Impressions</span>
                      <div className="text-2xl font-black text-white">
                        {metrics.impressions.toLocaleString()} view engagements
                      </div>
                    </div>

                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-1">Targeted Site Clicks</span>
                      <div className="text-2xl font-black text-cyan-300">
                        {metrics.clicks.toLocaleString()} click-throughs
                      </div>
                    </div>

                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold block mb-1">Qualified Business Leads</span>
                      <div className="text-3xl font-black text-green-400">
                        ~{metrics.leads.toLocaleString()} conversions
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-1">Est. Cost Per Lead (CPL)</span>
                      <div className="text-xl font-bold text-white">
                        ${metrics.conversionCost.toLocaleString()} / ₹{(metrics.conversionCost * 80).toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                      <Link
                        to={`/contact?service=Result-Driven%20Digital%20Marketing&source=ROI%20Simulator&budget=${monthlyBudget}&channel=${channel}`}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 px-6 py-3.5 text-slate-900 font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        Launch Simulated Campaign
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              {/* Form Input */}
              <form onSubmit={startScan} className="max-w-xl mx-auto mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Website URL to Audit:</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    placeholder="https://example.com"
                    value={auditUrl}
                    onChange={e => setAuditUrl(e.target.value)}
                    className="flex-grow rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800"
                  />
                  <button
                    type="submit"
                    disabled={isScanning}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isScanning ? "Scanning..." : "Run Audit"}
                  </button>
                </div>
              </form>

              {/* Loader */}
              {isScanning && (
                <div className="max-w-md mx-auto text-center py-10">
                  <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden relative">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-150"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">
                    Evaluating Page Semantics, Schema and Speed ({scanProgress}%)
                  </span>
                </div>
              )}

              {/* Scan Results */}
              {scanComplete && (
                <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center border-t border-slate-100 pt-8">
                  {/* Gauge */}
                  <div className="md:col-span-4 text-center">
                    <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-8 border-green-500 bg-green-50/20 shadow-inner">
                      <span className="text-4xl font-black text-green-600">92</span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">SEO Score</span>
                    </div>
                    <span className="block text-xs font-bold text-slate-400 uppercase mt-4">Scan Address: {auditUrl}</span>
                  </div>

                  {/* Checklist */}
                  <div className="md:col-span-8 space-y-3.5 text-slate-700">
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">Mobile Optimization & Responsive Layout</span>
                        <span className="text-xs text-slate-500">Perfect viewport sizing, click element sizing, and font visibility detected.</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">HTML5 Semantic Hierarchy Tags</span>
                        <span className="text-xs text-slate-500">Structured layout using single header H1, navigation nodes, and image Alt descriptions.</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 p-4 rounded-xl">
                      <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0">!</span>
                      <div>
                        <span className="text-sm font-bold text-orange-850 block">Structured Data Schema Markup (Warning)</span>
                        <span className="text-xs text-orange-700">No JSON-LD Organization or Product Schema detected. SyncTech implements these custom parameters automatically to boost ranking snippets.</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-12 mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
                    <p className="text-xs text-slate-500 text-center sm:text-left">
                      Warning detected: Missing JSON-LD schema metadata reduces organic visibility. Want to optimize your code's technical SEO score?
                    </p>
                    <Link
                      to={`/contact?service=Result-Driven%20Digital%20Marketing&source=SEO%20Scanner&auditUrl=${encodeURIComponent(auditUrl)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-750 px-6 py-3.5 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      Fix My Technical SEO
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* MARKETING TECHNOLOGIES */}
      {/* ========================================================= */}

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
              Digital Marketing Services
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Comprehensive marketing solutions designed to increase visibility,
              engagement, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => {
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
            {marketingFeatures.map((feature, index) => {
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

                  <p className="text-slate-600">{feature.desc}</p>
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
              Transform your marketing efforts into measurable business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {marketingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <CheckCircle
                  className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={22}
                />

                <span className="text-slate-200">{benefit}</span>
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
              Digital Marketing Built For Growth
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We combine creativity, strategy, and analytics to help businesses
              build stronger digital presence and measurable results.
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
      {/* MARKETING CHANNELS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Marketing Channels
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Channels We Optimize
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Reach customers across multiple digital channels with integrated
              marketing strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingChannels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110"
                    size={30}
                  />

                  <h3 className="font-semibold text-lg mb-3">
                    {channel.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TOOLS & PLATFORMS */}
      {/* ========================================================= */}

      <MarketingTechnologies />
      {/* ========================================================= */}
      {/* PROCESS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Our Process
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              How We Deliver Marketing Success
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
              Our Commitment
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Focused on Delivering Value
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              As a growing digital marketing partner, we are committed to
              helping businesses achieve sustainable growth through effective
              marketing strategies and transparent collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
              Common questions about our digital marketing services.
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
                    className="text-blue-600 transition-transform group-open:rotate-180"
                    size={22}
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
            Let's Grow Together
          </span>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold">
            Ready to Expand Your Digital Presence?
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            Whether you're looking to improve brand visibility, generate more
            leads, increase website traffic, or build stronger customer
            relationships, we're ready to help you achieve your marketing goals.
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
              Customized Marketing Strategies
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Transparent Communication
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Continuous Optimization
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
