/**
 * Type definitions for the application
 */

export interface SectionProps {
  className?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface ComparisonData {
  title: string;
  imageUrl: string;
  imageAlt: string;
  items: string[];
  variant: 'authentic' | 'bastardized';
}

export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
}
