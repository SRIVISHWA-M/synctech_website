"use client";

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

    // Part 3
    HelpCircle,
} from "lucide-react";

import { MapPin, Phone, Mail as MailIcon, Clock } from "lucide-react";
import MarketingTechnologies from "../components/MarketingTechnologies";


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
    advertising: [
        "Google Ads",
        "Meta Ads",
        "LinkedIn Ads",
        "YouTube Ads",
    ],
    seo: [
        "SEMrush",
        "Ahrefs",
        "Moz",
        "Screaming Frog",
    ],
    marketing: [
        "Mailchimp",
        "HubSpot",
        "Buffer",
        "Hootsuite",
    ],
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
                            DIGITAL MARKETING SERVICES
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-[1.15]">
                            Grow Your Brand With
                            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-[1.2] pb-2">
                                Digital Marketing
                            </span>
                        </h1>

                        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Accelerate business growth through SEO, social media marketing,
                            paid advertising, content marketing, and performance-driven
                            strategies that help you attract customers and increase revenue.
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

                        {/* Stats */}

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
                            Focused on Delivering Value
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            As a growing digital marketing partner, we are committed to helping
                            businesses achieve sustainable growth through effective marketing
                            strategies and transparent collaboration.
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