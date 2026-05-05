import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  comparison: string;
  image: string;
}

export interface ComparisonPoint {
  feature: string;
  custom: string;
  alternative: string;
  isAdvantage: boolean;
}

export interface WhyChooseUsItem {
  title: string;
  description?: string; // Optional description if we want to expand
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
}