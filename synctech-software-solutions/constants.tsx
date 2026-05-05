import { 
  Smartphone, Globe, Megaphone, Database, 
  Code, CheckCircle, Users, Clock,
  Zap, TrendingUp, Search, Layers, ShieldCheck, PenTool, LayoutTemplate
} from 'lucide-react';
import { Service, ComparisonPoint, Testimonial, FAQItem, PricingPlan, PortfolioItem, WhyChooseUsItem } from './types';

// Helper to fix imports for icons used only here
import { Building2, BookOpen, Activity, ShoppingCart, ClipboardList, Palette, Code2, Bug, Rocket, Headphones } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
];

export const SERVICES: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    shortDesc: 'We build high-performance Android and iOS mobile applications tailored to your business goals.',
    fullDesc: 'We build high-performance Android and iOS mobile applications tailored to your business goals. Our mobile apps are secure, scalable, and designed for excellent user experience.',
    benefits: ['Android & iOS App Development', 'Flutter & React Native Apps', 'Custom UI/UX Design', 'App Maintenance & Support'],
    features: ['High Performance', 'Scalable Architecture', 'User-Centric Design', 'Cross-Platform Compatibility'],
    comparison: 'Custom mobile app development is more secure and scalable than ready-made app templates.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'web',
    title: 'Website Development',
    icon: Globe,
    shortDesc: 'Professional Website Development Services designed to convert visitors into customers.',
    fullDesc: 'We design and develop modern, responsive, and SEO-friendly websites that help businesses convert visitors into customers.',
    benefits: ['Modern Design', 'Responsive Layouts', 'SEO Friendly', 'High Conversion'],
    features: ['Business Websites', 'E-commerce Websites', 'Web Applications', 'Landing Pages'],
    comparison: 'Custom website development delivers better performance and SEO results than template-based websites.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    shortDesc: 'Result-Driven Digital Marketing Services focusing on traffic growth and ROI.',
    fullDesc: 'Our digital marketing strategies focus on traffic growth, lead generation, and ROI. We help brands improve online visibility and customer engagement.',
    benefits: ['Traffic Growth', 'Lead Generation', 'Better ROI', 'Brand Visibility'],
    features: ['Search Engine Optimization (SEO)', 'Social Media Marketing', 'Google & Meta Ads', 'Content Marketing'],
    comparison: 'Professional digital marketing delivers long-term growth compared to short-term boosting ads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'crm',
    title: 'CRM Portal Development',
    icon: Database,
    shortDesc: 'Custom CRM Portal Development Company for efficient operations.',
    fullDesc: 'We develop custom CRM portals that help businesses manage leads, customers, sales, and operations efficiently.',
    benefits: ['Efficient Operations', 'Better Customer Management', 'Automated Sales', 'Data-Driven Insights'],
    features: ['Lead & Customer Management', 'Role-based Access', 'Sales Tracking', 'Reports & Automation'],
    comparison: 'Custom CRM portals are more flexible and powerful than Excel sheets or off-the-shelf CRM tools.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { title: 'Custom software development (no templates)', icon: Code },
  { title: 'Affordable pricing for startups & SMEs', icon: TrendingUp },
  { title: 'Experienced developers & marketers', icon: Users },
  { title: 'On-time project delivery', icon: Clock },
  { title: 'Dedicated support team', icon: Headphones },
];

export const COMPARISON_ANGLE = "Choosing a professional software development company in India ensures better quality, security, and scalability than freelancers.";

export const COMPARISONS: ComparisonPoint[] = [
  { feature: 'Quality', custom: 'Professional Standards', alternative: 'Inconsistent', isAdvantage: true },
  { feature: 'Security', custom: 'Enterprise Grade', alternative: 'Basic / Vulnerable', isAdvantage: true },
  { feature: 'Scalability', custom: 'Built for Growth', alternative: 'Limited', isAdvantage: true },
  { feature: 'Reliability', custom: 'Dedicated Team', alternative: 'Individual Dependency', isAdvantage: true },
];

export const INDUSTRIES = [
  { name: 'Startups', icon: Rocket },
  { name: 'Small & Medium Businesses', icon: TrendingUp },
  { name: 'Enterprises', icon: Building2 },
  { name: 'Education', icon: BookOpen },
  { name: 'Healthcare', icon: Activity },
  { name: 'E-commerce', icon: ShoppingCart },
];

export const PROCESS_STEPS = [
  { title: 'Requirement Analysis', icon: ClipboardList, desc: 'Understanding your business needs.' },
  { title: 'Planning & UI Design', icon: Palette, desc: 'Blueprint and visual design.' },
  { title: 'Development', icon: Code2, desc: 'Coding your solution.' },
  { title: 'Testing & Quality Check', icon: Bug, desc: 'Ensuring bug-free performance.' },
  { title: 'Deployment & Support', icon: Headphones, desc: 'Launch and ongoing maintenance.' },
];

export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Go', 'GraphQL'],
  mobile: ['React Native', 'Flutter', 'iOS', 'Android'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker'],
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'FinTrack Pro',
    category: 'Fintech App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', 
    description: 'A personal finance management app with AI-driven insights.'
  },
  {
    title: 'MediConnect',
    category: 'Healthcare Portal',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    description: 'Telemedicine platform connecting patients with specialists.'
  },
  {
    title: 'ShopWave',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
    description: 'High-performance headless e-commerce solution.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Business Owner',
    role: 'Owner',
    company: 'India',
    content: 'SyncTech delivered a high-quality CRM portal that improved our sales process significantly.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Rahul Mehta',
    role: 'Director',
    company: 'TechGrowth',
    content: 'The mobile app they built helps us connect with customers instantly. Highly recommended for startups.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Anjali Gupta',
    role: 'Founder',
    company: 'EduSmart',
    content: 'Professional team and on-time delivery. Their digital marketing services boosted our leads by 200%.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Startup',
    price: '$5,000',
    features: ['Custom Mobile App', 'Basic Admin Dashboard', 'Cloud Deployment', '3 Months Support'],
    isPopular: false
  },
  {
    name: 'Business',
    price: '$12,000',
    features: ['Advanced Web Application', 'Scalable Backend', 'Full CRM Integration', '6 Months Support', 'SEO Optimization'],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Tailored ERP Solution', 'Dedicated Infrastructure', '24/7 Priority Support', 'Security Audits', 'Legacy Integration'],
    isPopular: false
  }
];


export const FAQS: FAQItem[] = [
  { question: 'How much does a custom app cost?', answer: 'Costs vary based on complexity. Simple apps start around $5k, while complex platforms can range from $20k to $100k+.' },
  { question: 'How long does development take?', answer: 'A typical MVP takes 4-8 weeks. Larger projects can take 3-6 months depending on requirements.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes, we offer various maintenance packages to ensure your software stays secure and up-to-date.' },
  { question: 'Who owns the code?', answer: 'You do. Once the project is paid for, 100% of the intellectual property belongs to you.' },
  { question: 'Can you update my existing app?', answer: 'Absolutely. We can audit your current codebase and implement new features or modernize the stack.' },
];