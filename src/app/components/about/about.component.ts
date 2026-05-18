// src/app/components/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about">
      <div class="section-inner">
        <div class="about-grid">

          <div class="about-img-card" appReveal>
            <div class="about-img-inner">
              <img src="assets/images/avatar.png" alt="Jeanai Roberts illustration"/>
            </div>
            <div class="about-img-label">Jeanai Roberts · Developer</div>
          </div>

          <div class="about-text">
            <p class="eyebrow" appReveal>About Me</p>
            <h2 class="section-h" appReveal [revealDelay]="80">
              Building with <em>purpose,</em><br>powered by curiosity.
            </h2>
            <p class="about-p" appReveal [revealDelay]="160">
              Hey! I'm Jeanai — a full-stack software engineer based in Austin, TX with
              experience building enterprise-grade web applications and production mobile apps.
              I've shipped features at General Motors and launched a live iOS & Android app as
              the sole developer.
            </p>
            <p class="about-p" appReveal [revealDelay]="160">
              I work across the full stack — Angular frontends, Spring Boot microservices,
              React Native mobile apps, and Firebase cloud architecture — always with an eye
              toward clean design and reliable engineering.
            </p>
            <div class="about-stat-row" appReveal [revealDelay]="240">
              <div class="about-stat">
                <div class="about-stat-n">3+</div>
                <div class="about-stat-l">Years Exp.</div>
              </div>
              <div class="about-stat">
                <div class="about-stat-n">5+</div>
                <div class="about-stat-l">Apps Shipped</div>
              </div>
              <div class="about-stat">
                <div class="about-stat-n">∞</div>
                <div class="about-stat-l">Coffees</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: transparent; }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3.5rem;
      align-items: center;
    }

    .about-img-card {
      display: none;
    }

    .about-img-inner {
      width: 100%; height: 100%;
      background: linear-gradient(145deg, var(--p50), var(--p100));
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;

      img {
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: top center;
      }
    }

    .about-img-label {
      position: absolute; bottom: 1.2rem; left: 50%;
      transform: translateX(-50%);
      background: var(--glass-strong);
      backdrop-filter: var(--blur-sm);
      border: 1px solid var(--border);
      border-radius: var(--radius-pill);
      padding: 0.45rem 1.2rem;
      white-space: nowrap;
      font-family: var(--mono);
      font-size: 0.68rem;
      color: var(--p500);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .about-p {
      font-size: 0.98rem;
      color: var(--text-2);
      line-height: 1.85;
      font-weight: 300;
      margin-bottom: 1.4rem;
    }

    .about-stat-row {
      display: flex; gap: 1.5rem; margin-top: 2.2rem; flex-wrap: wrap;
    }

    .about-stat {
      background: var(--glass);
      backdrop-filter: var(--blur-sm);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 1rem 1.4rem;
      flex: 1; min-width: 100px; text-align: center;
    }

    .about-stat-n {
      font-family: var(--serif);
      font-size: 1.9rem; font-weight: 500;
      color: var(--p400); line-height: 1;
    }

    .about-stat-l {
      font-size: 0.7rem; color: var(--text-3);
      letter-spacing: 0.08em; text-transform: uppercase;
      margin-top: 0.3rem; font-family: var(--mono);
    }

    @media (max-width: 820px) {
      .about-grid { grid-template-columns: 1fr; }
      .about-img-card { aspect-ratio: 4/3; }
    }
  `]
})
export class AboutComponent {}
