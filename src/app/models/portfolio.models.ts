// src/app/models/portfolio.models.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: 'Complete' | 'In Deployment' | 'In Progress';
  codeUrl: string;
  demoUrl: string;
  previewType: 'phones' | 'workflow' | 'dashboard';
}

export interface Skill {
  icon: string;
  title: string;
  subtitle: string;
  tags: string[];
  featured: string[];
}

export interface Experience {
  dateRange: string;
  badge: string;
  badgeColor: 'pink' | 'green' | 'orange' | 'purple';
  role: string;
  company: string;
  description: string;
}
