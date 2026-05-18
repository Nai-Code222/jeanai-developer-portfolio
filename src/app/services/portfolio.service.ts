// src/app/services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { Project, Skill, Experience } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'NaiCode Portfolio',
        description: 'Personal portfolio website crafted with a soft, elegant aesthetic.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
        status: 'Complete',
        codeUrl: '#',
        demoUrl: '#',
        previewType: 'phones'
      },
      {
        id: 2,
        title: 'PetalPay',
        description: 'Mobile payment app designed specifically for small beauty businesses to manage transactions gracefully.',
        tags: ['React Native', 'Node.js', 'Stripe', 'Expo'],
        status: 'In Deployment',
        codeUrl: '#',
        demoUrl: '#',
        previewType: 'workflow'
      },
      {
        id: 3,
        title: 'BloomBoard',
        description: 'A social dashboard and analytics platform for creative entrepreneurs.',
        tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
        status: 'In Progress',
        codeUrl: '#',
        demoUrl: '#',
        previewType: 'dashboard'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        icon: '🖥',
        title: 'Frontend',
        subtitle: 'UI & Web',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'HTML/CSS', 'Vue.js', 'Figma'],
        featured: ['React', 'Next.js']
      },
      {
        icon: '📱',
        title: 'Mobile',
        subtitle: 'iOS & Android',
        tags: ['React Native', 'Expo', 'Swift UI', 'Kotlin', 'App Store Deploy', 'Push Notifications'],
        featured: ['React Native', 'Expo']
      },
      {
        icon: '⚙️',
        title: 'Backend',
        subtitle: 'APIs & Data',
        tags: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'Prisma'],
        featured: ['Node.js']
      },
      {
        icon: '☁️',
        title: 'Cloud & Tools',
        subtitle: 'DevOps & Deploy',
        tags: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Supabase', 'Firebase', 'CI/CD'],
        featured: []
      }
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        dateRange: '2023 — Present',
        badge: 'Current',
        badgeColor: 'pink',
        role: 'Founder & Lead Engineer',
        company: 'NaiCode Labs',
        description: 'Building client products and open-source tools under the NaiCode Labs brand. Scope spans full-stack web, mobile apps, and design systems for startups and small businesses.'
      },
      {
        dateRange: '2021 — 2023',
        badge: 'Full-Time',
        badgeColor: 'green',
        role: 'Senior Frontend Engineer',
        company: 'Notion · Remote',
        description: 'Owned core editor features and led the accessibility audit initiative that brought the product to WCAG AA compliance across all surfaces.'
      },
      {
        dateRange: '2019 — 2021',
        badge: 'Full-Time',
        badgeColor: 'orange',
        role: 'Software Engineer',
        company: 'Vercel · San Francisco',
        description: 'Worked on the deployment pipeline and the Next.js DX team. Improved cold-start times by 40% and contributed to OSS tooling.'
      },
      {
        dateRange: '2018 — 2019',
        badge: 'Internship',
        badgeColor: 'purple',
        role: 'Frontend Engineering Intern',
        company: 'Figma · San Francisco',
        description: 'Contributed to the canvas rendering team. Built a prototype of the first auto-layout implementation.'
      }
    ];
  }
}
