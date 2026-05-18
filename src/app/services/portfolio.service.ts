// src/app/services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { Project, Skill, Experience } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Delaluna Answers',
        description: 'Production astrology app (iOS & Android) with natal charts, horoscopes, transit readings, synastry, AI interpretations, and a chat advisor — built as sole developer across the full product lifecycle.',
        tags: ['React Native', 'Expo SDK 54', 'TypeScript', 'Firebase', 'RevenueCat'],
        platform: 'Mobile',
        status: 'In Deployment',
        demoUrl: '#',
        previewType: 'phones',
        previewGlyph: '◈',
        previewLabel: 'delaluna.app',
        screenshots: [
          'assets/images/delaluna-welcome.png',
          'assets/images/delaluna-login.png',
          'assets/images/delaluna-main.png',
          'assets/images/delaluna-chat.png',
          'assets/images/delaluna-transits.png'
        ]
      },
      {
        id: 2,
        title: 'Freelance Invoice Tracker',
        description: 'A web dashboard for freelancers to track invoices, manage clients, and monitor payment status — built with a clean, data-driven UI.',
        tags: ['TypeScript', 'Angular', 'Dashboard', 'CSS'],
        platform: 'Web',
        status: 'Live',
        codeUrl: 'https://github.com/Nai-Code222/jcreative-tracker',
        demoUrl: 'https://nai-code222.github.io/jcreative-tracker/',
        previewType: 'dashboard',
        previewGlyph: '⬡',
        previewLabel: 'invoice-tracker',
        screenshots: [
          'assets/images/invoice-overview.png',
          'assets/images/invoice-invoices.png',
          'assets/images/invoice-payments.png'
        ]
      },
      {
        id: 3,
        title: 'Developer Portfolio',
        description: 'This portfolio site — built with Angular, featuring a glassmorphism UI, scroll reveal animations, and a responsive layout showcasing my work and experience.',
        tags: ['Angular', 'TypeScript', 'SCSS', 'Standalone Components'],
        platform: 'Web',
        status: 'Live',
        codeUrl: 'https://github.com/Nai-Code222/jeanai-developer-portfolio',
        previewType: 'workflow',
        previewGlyph: '⬢',
        previewLabel: 'jeanai.dev',
        screenshots: ['assets/images/portfolio-hero.png']
      },
      {
        id: 5,
        title: 'Rock Paper Scissors',
        description: 'A native iOS mobile game built with Swift — clean game logic, animated UI, and score tracking.',
        tags: ['Swift', 'iOS', 'Xcode', 'UIKit'],
        platform: 'iOS',
        status: 'Complete',
        codeUrl: 'https://github.com/Nai-Code222/iOS-RPS',
        previewType: 'phones',
        previewGlyph: '◉',
        previewLabel: 'iOS Game',
        screenshots: ['assets/images/rps-home.png']
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        icon: '🖥',
        title: 'Frontend',
        subtitle: 'UI & Web',
        tags: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React Native', 'Expo'],
        featured: ['Angular', 'TypeScript']
      },
      {
        icon: '📱',
        title: 'Mobile',
        subtitle: 'iOS & Android',
        tags: ['React Native', 'Expo SDK 54', 'Swift', 'iOS (Xcode)', 'Android Studio', 'EAS Build', 'OTA Updates'],
        featured: ['React Native', 'Expo SDK 54']
      },
      {
        icon: '⚙️',
        title: 'Backend',
        subtitle: 'APIs & Data',
        tags: ['Java', 'Spring Boot', 'Quarkus', 'Java CAF', 'REST APIs', 'Oracle', 'MySQL', 'PostgreSQL', 'SQL'],
        featured: ['Spring Boot', 'Java']
      },
      {
        icon: '☁️',
        title: 'Cloud & DevOps',
        subtitle: 'Infrastructure & Tools',
        tags: ['Firebase', 'Azure DevOps', 'RevenueCat', 'Kubernetes', 'Tidal', 'Git', 'Jira', 'CI/CD', 'JUnit', 'Mockito', 'Selenium'],
        featured: ['Firebase', 'Azure DevOps']
      }
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        dateRange: '2024 — Present',
        badge: 'Solo Dev',
        badgeColor: 'orange',
        role: 'Mobile Developer',
        company: 'Delaluna Answers · Independent',
        description: 'Built a production astrology app (iOS & Android) as lead and sole developer. Engineered a native calculation engine via Swiss Ephemeris for Placidus house calculations and 12-planet natal charts. Integrated Firebase GenAI Extensions, RevenueCat subscription lifecycle, and EAS Build CI/CD with 5 build profiles.'
      },
      {
        dateRange: '11/2023 — 05/2025',
        badge: 'Full-Time',
        badgeColor: 'pink',
        role: 'Software Engineer',
        company: 'General Motors · Austin, TX',
        description: 'Developed and maintained front-end user interfaces using Angular, TypeScript, HTML, and CSS, ensuring responsive and intuitive user experiences. Designed and implemented backend APIs using Quarkus, Kubernetes, and Java to support front-end functionality and seamless integration. Wrote and executed unit and JUnit tests to validate code functionality and ensure reliability of backend services. Coordinated software releases and production deployments with cross-functional teams to ensure smooth and timely delivery.'
      },
      {
        dateRange: '06/2022 — 11/2023',
        badge: 'Full-Time',
        badgeColor: 'green',
        role: 'Software Test Engineer',
        company: 'General Motors · Austin, TX',
        description: 'Developed and verified test scenarios for 5+ internal web applications, writing comprehensive unit and integration tests using JUnit, Mockito, and Selenium. Constructed Power BI reports used across the company by integrating with multiple enterprise databases for cross-team visibility and data-driven decision making.'
      },
      {
        dateRange: '06/2021 — 06/2022',
        badge: 'Internship',
        badgeColor: 'purple',
        role: 'Software Development Intern',
        company: 'LITCheck, LLC · Atlanta, GA',
        description: 'Collaborated with QA, Legal, Sales, and Engineering teams to support development cycles; participated in code reviews and testing to resolve issues prior to deployment.'
      }
    ];
  }
}
