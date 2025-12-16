import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
  videoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  type: 'pdf' | 'doc';
  downloadUrl: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}