import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface CourseCategory {
  name: string;
  courses: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  category: 'Student - Placement' | 'Student - Learning' | 'Client - Consulting';
  image?: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechCategory {
  title: string;
  image: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}
