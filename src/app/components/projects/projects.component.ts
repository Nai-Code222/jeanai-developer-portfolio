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
  activeIndex: Record<number, number> = {};

  constructor(private portfolioService: PortfolioService) {}

  onScroll(event: Event, projectId: number): void {
    const el = event.target as HTMLElement;
    const imgWidth = (el.firstElementChild as HTMLElement)?.offsetWidth || el.clientWidth;
    this.activeIndex[projectId] = Math.round(el.scrollLeft / (imgWidth + 10));
  }

  goTo(el: HTMLElement, index: number, projectId: number): void {
    const imgWidth = (el.firstElementChild as HTMLElement)?.offsetWidth || el.clientWidth;
    el.scrollTo({ left: (imgWidth + 10) * index, behavior: 'smooth' });
    this.activeIndex[projectId] = index;
  }

  activeIdx(projectId: number): number {
    return this.activeIndex[projectId] || 0;
  }

  badgeColor(status: string): string {
    const map: Record<string, string> = {
      'Complete':      '#2EAA6E',
      'Live':          '#2EAA6E',
      'In Deployment': '#E07A10',
      'In Progress':   '#8B5CF6'
    };
    return map[status] ?? '#F060A8';
  }

  badgeBg(status: string): string {
    const map: Record<string, string> = {
      'Complete':      '#F0FFF7',
      'Live':          '#F0FFF7',
      'In Deployment': '#FFF8F0',
      'In Progress':   '#F8F0FF'
    };
    return map[status] ?? '#FFF0F8';
  }
}
