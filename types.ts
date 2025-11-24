import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CourseCategory {
  name: string;
  courses: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
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
