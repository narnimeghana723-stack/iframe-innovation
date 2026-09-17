export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'IoT' | 'Software' | 'Cloud' | 'Automation';
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  clientOrDomain: string;
  deliverables: string[];
  featured?: boolean;
}

export interface InnovationDomain {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyCapabilities: string[];
  colorGradient: string;
  badge: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  department: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Milestone {
  year: string;
  quarter?: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  location: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
  rating: number;
}

export interface PartnerLogo {
  id: string;
  name: string;
  category: string;
  tagline: string;
}
