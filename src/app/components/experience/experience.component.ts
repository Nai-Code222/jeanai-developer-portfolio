// src/app/components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience">
      <div class="section-inner">
        <p class="eyebrow" appReveal>Career</p>
        <h2 class="section-h" appReveal [revealDelay]="80">Where I've <em>grown.</em></h2>

        <div class="exp-list">
          <div class="exp-card"
               *ngFor="let exp of experiences; let i = index"
               appReveal [revealDelay]="i * 80"
               [ngClass]="'badge-' + exp.badgeColor">
            <div class="exp-date-col">
              <span class="exp-date-range">{{ exp.dateRange }}</span>
              <span class="exp-company-tag" [ngClass]="'tag-' + exp.badgeColor">
                {{ exp.badge }}
              </span>
            </div>
            <div>
              <div class="exp-role">{{ exp.role }}</div>
              <div class="exp-co-name">{{ exp.company }}</div>
              <p class="exp-desc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-list { margin-top: 3.5rem; display: flex; flex-direction: column; gap: 1.2rem; }

    .exp-card {
      background: var(--glass);
      backdrop-filter: var(--blur);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem 2.5rem;
      box-shadow: var(--shadow);
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 2rem;
      align-items: start;
      transition: transform 0.25s, box-shadow 0.25s;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute; top: 0; left: 0;
        width: 3px; height: 100%;
        background: linear-gradient(to bottom, var(--p100), var(--p400));
        opacity: 0;
        transition: opacity 0.3s;
      }
      &:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
      &:hover::before { opacity: 1; }
    }

    .exp-date-col {
      font-family: var(--mono);
      font-size: 0.72rem;
      color: var(--text-3);
      letter-spacing: 0.06em;
      padding-top: 4px;
    }

    .exp-date-range { display: block; margin-bottom: 0.5rem; }

    .exp-company-tag {
      display: inline-block;
      border-radius: var(--radius-pill);
      padding: 0.22rem 0.7rem;
      font-size: 0.65rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .tag-pink   { background: var(--p50);  border: 1px solid var(--p100);  color: var(--p500); }
    .tag-green  { background: #F0FFF7; border: 1px solid #B8F0D8; color: #2EAA6E; }
    .tag-orange { background: #FFF8F0; border: 1px solid #FFD8A8; color: #E07A10; }
    .tag-purple { background: #F8F0FF; border: 1px solid #DDB8F8; color: #8B5CF6; }

    .exp-role {
      font-family: var(--serif);
      font-size: 1.1rem; font-weight: 500;
      color: var(--text); margin-bottom: 0.3rem;
    }
    .exp-co-name { font-size: 0.85rem; color: var(--p400); font-weight: 500; margin-bottom: 0.8rem; }
    .exp-desc    { font-size: 0.88rem; color: var(--text-2); line-height: 1.7; font-weight: 300; }

    @media (max-width: 820px) {
      .exp-card { grid-template-columns: 1fr; }
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = this.portfolioService.getExperiences();
  constructor(private portfolioService: PortfolioService) {}
}
