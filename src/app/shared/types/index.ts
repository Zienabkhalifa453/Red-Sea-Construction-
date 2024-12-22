export interface NavLink {
  path: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
}

export interface Award {
  year: number;
  title: string;
  description: string;
  awardedBy: string;
}

export interface Certification {
  name: string;
  validUntil: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: number;
  title: string;
  achievement: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon?: string;
}

export interface Goal {
  title: string;
  description: string;
  targetDate: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  category: 'exterior' | 'interior' | 'construction';
}