// src/app/components/skills/skills.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="skills">
      <div class="section-inner">
        <p class="eyebrow" appReveal>Expertise</p>
        <h2 class="section-h" appReveal [revealDelay]="80">The tools of <em>my craft.</em></h2>

        <div class="skills-categories">
          <div class="skill-row-card" *ngFor="let skill of skills; let i = index"
               appReveal [revealDelay]="i * 80">
            <div class="skill-row-label">
              <span class="skill-row-icon">{{ skill.icon }}</span>
              <div class="skill-row-title">{{ skill.title }}</div>
              <div class="skill-row-sub">{{ skill.subtitle }}</div>
            </div>
            <div class="skill-pills">
              <span class="skill-pill"
                    *ngFor="let tag of skill.tags"
                    [class.featured]="skill.featured.includes(tag)">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-categories { display: flex; flex-direction: column; gap: 2rem; margin-top: 3.5rem; }

    .skill-row-card {
      background: var(--glass);
      backdrop-filter: var(--blur);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem 2.2rem;
      box-shadow: var(--shadow);
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 2rem;
      align-items: center;
      transition: transform 0.25s, box-shadow 0.25s;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 3px; height: 100%;
        background: linear-gradient(to bottom, #FFD6EE, #F060A8);
      }

      &:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
    }

    .skill-row-label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .skill-row-icon { font-size: 1.6rem; }

    .skill-row-title {
      font-family: var(--serif);
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--text);
    }

    .skill-row-sub {
      font-family: var(--mono);
      font-size: 0.65rem;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .skill-pills { display: flex; flex-wrap: wrap; gap: 0.55rem; }

    .skill-pill {
      background: rgba(255,255,255,0.75);
      border: 1px solid rgba(240,96,168,0.18);
      border-radius: var(--radius-pill);
      padding: 0.38rem 1rem;
      font-size: 0.78rem;
      color: var(--text-2);
      font-weight: 500;
      transition: all 0.18s ease;
      cursor: default;

      &:hover { background: var(--p50); border-color: var(--p300); color: var(--p500); transform: scale(1.04); }
      &.featured { background: var(--p50); border-color: var(--p200); color: var(--p500); }
    }

    @media (max-width: 820px) {
      .skill-row-card { grid-template-columns: 1fr; }
    }
  `]
})
export class SkillsComponent {
  skills: Skill[] = this.portfolioService.getSkills();
  constructor(private portfolioService: PortfolioService) {}
}
