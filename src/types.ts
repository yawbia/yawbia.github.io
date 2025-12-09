export interface Link {
  label: string;
  url: string;
  type: 'pdf' | 'code' | 'website' | 'video' | 'slides';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  imageUrl?: string;
  links: Link[];
  tags: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  links: Link[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  location: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}