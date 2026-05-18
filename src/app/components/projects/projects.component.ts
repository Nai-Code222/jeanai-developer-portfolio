// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = this.portfolioService.getProjects();

  constructor(private portfolioService: PortfolioService) {}

  badgeColor(status: string): string {
    const map: Record<string, string> = {
      'Complete':      '#2EAA6E',
      'In Deployment': '#E07A10',
      'In Progress':   '#8B5CF6'
    };
    return map[status] ?? '#F060A8';
  }

  badgeBg(status: string): string {
    const map: Record<string, string> = {
      'Complete':      '#F0FFF7',
      'In Deployment': '#FFF8F0',
      'In Progress':   '#F8F0FF'
    };
    return map[status] ?? '#FFF0F8';
  }
}
