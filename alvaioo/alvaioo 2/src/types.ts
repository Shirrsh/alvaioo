
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type LucideIconType = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIconType; // Changed from React.ElementType
  lottieUrl?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
  improvement?: string; // e.g., "+30% Sales", "-50% Support Tickets"
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string; // for path
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  icon?: LucideIconType; // Changed from React.ElementType
  techStack?: string[]; // URLs or names of tech icons
}

// Props for ScrollReveal component
export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'animate-fade-in-up'
  delay?: string; // e.g., 'delay-300'
  threshold?: number; // IntersectionObserver threshold
  triggerOnce?: boolean;
}

// Props for LottiePlayer component
export interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  ariaLabel?: string;
}
