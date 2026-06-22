import {
    ArrowRight,
    Smartphone,
    Layers,
    ShieldCheck,
    Zap,
    Bell,
    Cloud,
    BarChart3,
    Globe,
    CheckCircle,

    Award,
    Users,
    Rocket,
    Headphones,
    Workflow,

    HeartPulse,
    ShoppingBag,
    Factory,
    Truck,
    Landmark,
    GraduationCap,
    Building2,
    Plane,

    Code2,
    Database,
    Cpu,

    Lock,
    Fingerprint,

    Star,
    HelpCircle,
} from "lucide-react";
import EnterpriseTechStack from "../components/EnterpriseTechStack";
const services = [
    {
        icon: Smartphone,
        title: "Native iOS Development",
        desc: "High-performance iPhone and iPad applications built using Swift and Apple's latest frameworks.",
    },
    {
        icon: Smartphone,
        title: "Native Android Development",
        desc: "Scalable Android applications engineered with Kotlin for reliability and performance.",
    },
    {
        icon: Layers,
        title: "Cross-Platform Development",
        desc: "Build once and deploy across multiple platforms using Flutter and React Native.",
    },
    {
        icon: Cloud,
        title: "Enterprise Mobility Solutions",
        desc: "Secure mobile applications that streamline business operations and improve productivity.",
    },
    {
        icon: ShieldCheck,
        title: "App Modernization",
        desc: "Upgrade legacy applications with modern technologies, security, and performance enhancements.",
    },
    {
        icon: Zap,
        title: "API & System Integration",
        desc: "Seamlessly connect mobile applications with CRMs, ERPs, payment gateways, and cloud services.",
    },
];

const features = [
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "Data encryption, secure authentication, and industry-standard security practices.",
    },
    {
        icon: Zap,
        title: "High Performance",
        desc: "Fast loading times and optimized user experiences across all devices.",
    },
    {
        icon: Cloud,
        title: "Cloud Integration",
        desc: "Scalable cloud infrastructure with real-time synchronization.",
    },
    {
        icon: Bell,
        title: "Push Notifications",
        desc: "Increase engagement through personalized notifications and updates.",
    },
    {
        icon: Globe,
        title: "Cross-Device Support",
        desc: "Consistent experiences across smartphones, tablets, and wearables.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Insights",
        desc: "Track user behavior and gain valuable business intelligence.",
    },
];

const benefits = [
    "Increase customer engagement and retention",
    "Improve brand visibility and customer loyalty",
    "Streamline business processes and workflows",
    "Generate new revenue opportunities",
    "Enhance customer experience",
    "Access real-time business insights",
    "Improve operational efficiency",
    "Stay ahead of competitors",
];
const whyChooseUs = [
    {
        icon: Award,
        title: "Proven Mobile Expertise",
        desc: "Our team has successfully delivered mobile applications across multiple industries, helping businesses improve customer engagement and operational efficiency.",
    },
    {
        icon: Users,
        title: "Dedicated Development Team",
        desc: "Work with experienced developers, designers, QA engineers, and project managers committed to your project's success.",
    },
    {
        icon: ShieldCheck,
        title: "Security-First Approach",
        desc: "We follow secure coding practices, encryption standards, and compliance requirements to protect your data.",
    },
    {
        icon: Rocket,
        title: "Faster Time-to-Market",
        desc: "Our agile methodology enables faster development cycles and quicker product launches.",
    },
    {
        icon: Workflow,
        title: "Agile Delivery Model",
        desc: "Transparent project management, regular sprint reviews, and continuous stakeholder collaboration.",
    },
    {
        icon: Headphones,
        title: "Long-Term Support",
        desc: "We provide ongoing maintenance, monitoring, updates, and technical support after launch.",
    },
];

const industries = [
    {
        icon: HeartPulse,
        title: "Healthcare",
        desc: "Patient portals, telemedicine apps, appointment booking systems, and healthcare management solutions.",
    },
    {
        icon: ShoppingBag,
        title: "Retail & E-Commerce",
        desc: "Mobile shopping experiences, loyalty programs, inventory tracking, and digital commerce solutions.",
    },
    {
        icon: Factory,
        title: "Manufacturing",
        desc: "Production monitoring, workforce management, maintenance tracking, and operational visibility.",
    },
    {
        icon: Truck,
        title: "Logistics & Transportation",
        desc: "Fleet management, route optimization, delivery tracking, and warehouse operations.",
    },
    {
        icon: Landmark,
        title: "Banking & Finance",
        desc: "Secure mobile banking, payment solutions, digital wallets, and financial management platforms.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        desc: "Learning management systems, online courses, student engagement, and virtual classrooms.",
    },
    {
        icon: Building2,
        title: "Real Estate",
        desc: "Property management, virtual tours, lead generation, and client communication platforms.",
    },
    {
        icon: Plane,
        title: "Travel & Hospitality",
        desc: "Booking systems, customer engagement, travel planning, and loyalty applications.",
    },
];

const technologies = {
    frontend: [
        "SwiftUI",
        "UIKit",
        "Kotlin",
        "Jetpack Compose",
        "Flutter",
        "React Native",
    ],
    backend: [
        "Node.js",
        "Python",
        "Java",
        ".NET",
        "Express.js",
        "Django",
    ],
    database: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "SQLite",
    ],
    cloud: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Firebase Cloud",
    ],
};

const process = [
    {
        step: "01",
        title: "Discovery & Planning",
        desc: "Understand business goals, user requirements, and project scope.",
    },
    {
        step: "02",
        title: "Research & Strategy",
        desc: "Define product roadmap, technology stack, and implementation strategy.",
    },
    {
        step: "03",
        title: "UI/UX Design",
        desc: "Create intuitive user experiences, wireframes, and interactive prototypes.",
    },
    {
        step: "04",
        title: "Development",
        desc: "Build scalable mobile applications using modern technologies and frameworks.",
    },
    {
        step: "05",
        title: "Testing & QA",
        desc: "Perform functional, performance, usability, and security testing.",
    },
    {
        step: "06",
        title: "Deployment",
        desc: "Launch applications on App Store and Google Play with optimized release processes.",
    },
    {
        step: "07",
        title: "Monitoring",
        desc: "Track application performance, user engagement, and operational health.",
    },
    {
        step: "08",
        title: "Continuous Improvement",
        desc: "Enhance functionality through updates, optimizations, and new features.",
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
        title: "Data Encryption",
        desc: "Protect sensitive information with industry-standard encryption protocols.",
    },
    {
        icon: Fingerprint,
        title: "Secure Authentication",
        desc: "Implement biometric authentication, multi-factor authentication, and role-based access controls.",
    },
    {
        icon: Database,
        title: "Secure Data Storage",
        desc: "Ensure secure storage and transmission of business-critical information.",
    },
    {
        icon: ShieldCheck,
        title: "Compliance Ready",
        desc: "Support for GDPR, HIPAA, SOC 2, and industry-specific compliance requirements.",
    },
];

const faqs = [
    {
        question: "How long does it take to develop a mobile application?",
        answer:
            "Project timelines depend on complexity, features, and integrations. MVP applications typically take 8–12 weeks, while enterprise-grade applications may require 4–6 months.",
    },
    {
        question: "Do you develop apps for both iOS and Android?",
        answer:
            "Yes. We build native iOS apps, native Android apps, and cross-platform applications using Flutter and React Native.",
    },
    {
        question: "How much does mobile app development cost?",
        answer:
            "The cost depends on project scope, features, integrations, and complexity. We provide customized estimates after understanding your requirements.",
    },
    {
        question: "Can you redesign an existing application?",
        answer:
            "Absolutely. We modernize legacy applications by improving UI/UX, performance, security, and scalability.",
    },
    {
        question: "Do you provide post-launch support?",
        answer:
            "Yes. We offer maintenance, monitoring, updates, performance optimization, and technical support.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We use Swift, Kotlin, Flutter, React Native, Node.js, Python, Firebase, AWS, Azure, and Google Cloud technologies.",
    },
    {
        question: "Can you integrate third-party services?",
        answer:
            "Yes. We integrate payment gateways, CRMs, ERPs, analytics platforms, cloud services, and external APIs.",
    },
    {
        question: "Will my application be scalable?",
        answer:
            "Yes. Every application is designed with scalability in mind to support future growth and increasing user demands.",
    },
    {
        question: "Do you sign NDAs?",
        answer:
            "Yes. We are happy to sign Non-Disclosure Agreements before discussing your project details.",
    },
    {
        question: "How do you ensure application security?",
        answer:
            "We implement encryption, secure authentication, vulnerability assessments, security testing, and compliance best practices.",
    },
];
export default function MobileDevelopment() {
    return (
        <div className="bg-white text-slate-900">
            {/* ========================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================= */}

            <section className="relative overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl text-center mx-auto">
                        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                            Mobile App Development Services
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-[1.15]">
                            Build Mobile Apps That
                            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-[1.2] pb-2">
                                Drive Business Growth
                            </span>
                        </h1>

                        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Transform your ideas into powerful mobile experiences with
                            scalable, secure, and high-performance applications for iOS and
                            Android. From startup MVPs to enterprise-grade solutions, we help
                            businesses accelerate digital transformation through innovative
                            mobile technology.
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
            {/* OVERVIEW SECTION */}
            {/* ========================================================= */}

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold mb-8">
                            Mobile App Development Overview
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Mobile applications have become an essential component of modern
                            business strategies. They enable organizations to engage
                            customers, streamline operations, improve accessibility, and
                            create new digital revenue streams.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our mobile app development services help businesses build
                            innovative applications that combine exceptional user experiences,
                            robust security, and scalable architectures. Whether you're
                            launching a new digital product or modernizing an existing
                            application, we deliver solutions designed for long-term growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SERVICES WE OFFER */}
            {/* ========================================================= */}

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Mobile App Development Services
                        </h2>
                        <p className="text-lg text-slate-600">
                            End-to-end mobile application development services tailored to
                            your business requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
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
            {/* KEY FEATURES */}
            {/* ========================================================= */}

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Key Features & Capabilities
                        </h2>

                        <p className="text-lg text-slate-600">
                            Build secure, scalable, and future-ready mobile applications with
                            advanced capabilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
                                >
                                    <Icon className="text-blue-600 mb-5" size={28} />

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
            {/* BUSINESS BENEFITS */}
            {/* ========================================================= */}

            <section className="py-24 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Business Benefits of Mobile Apps
                        </h2>

                        <p className="text-slate-300 text-lg">
                            Unlock new opportunities for growth, customer engagement, and
                            operational excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-2xl border border-slate-800 p-6"
                            >
                                <CheckCircle
                                    className="text-green-400 shrink-0 mt-1"
                                    size={22}
                                />
                                <span className="text-slate-200">{benefit}</span>
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
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">
                            Why Choose Us
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Mobile Solutions Built for Long-Term Success
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            We combine strategy, design, engineering, and innovation to deliver
                            mobile applications that create measurable business value.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
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
            {/* INDUSTRIES WE SERVE */}
            {/* ========================================================= */}

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">
                            Industries We Serve
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Mobile Solutions Across Industries
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            We help organizations across industries accelerate digital
                            transformation through innovative mobile applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <Icon className="text-blue-600 mb-5" size={30} />

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
            {/* DEVELOPMENT PROCESS */}
            {/* ========================================================= */}

            <section className="py-24 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <span className="text-blue-400 font-semibold uppercase tracking-wider">
                            Development Process
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Our Mobile App Development Journey
                        </h2>

                        <p className="mt-6 text-lg text-slate-300">
                            A proven process that ensures quality, transparency, and predictable
                            delivery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {process.map((item) => (
                            <div
                                key={item.step}
                                className="rounded-3xl border border-slate-800 p-8"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-bold text-blue-400">
                                        {item.step}
                                    </span>

                                    <ArrowRight className="text-slate-600" />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ========================================================= */}
            {/* RESULTS & METRICS */}
            {/* ========================================================= */}

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">
                            Results & Metrics
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Delivering Measurable Business Outcomes
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Our success is measured by the impact we create for our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-slate-200 p-8 text-center hover:shadow-lg transition flex flex-col justify-center"
                            >
                                <h3 className="text-4xl font-bold mb-2 text-blue-600">{item.value}</h3>
                                <p className="font-semibold text-slate-700">{item.label}</p>
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
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">
                            Security & Compliance
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Built with Security at the Core
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Security is integrated into every stage of our mobile app development
                            lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {securityFeatures.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl border border-slate-200 p-8"
                                >
                                    <Icon className="text-blue-600 mb-5" size={30} />

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
                            Answers to common questions about our mobile development services.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group border border-slate-200 rounded-2xl p-6"
                            >
                                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg list-none">
                                    {faq.question}
                                    <HelpCircle className="text-blue-600 group-open:rotate-180 transition-transform" />
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
                        Ready to Build Your Mobile Application?
                    </h2>

                    <p className="mt-8 text-lg text-slate-300 leading-relaxed">
                        Whether you're launching a startup MVP, building a customer-facing
                        platform, or modernizing an enterprise application, our team can help
                        bring your vision to life with scalable, secure, and high-performance
                        mobile solutions.
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
        </div>
    );
}