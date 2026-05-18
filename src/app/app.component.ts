// src/app/app.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent }        from './components/nav/nav.component';
import { HeroComponent }       from './components/hero/hero.component';
import { AboutComponent }      from './components/about/about.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent }    from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  template: `
    <!-- Scroll progress bar -->
    <div id="progress-bar" [style.width.%]="scrollProgress"></div>

    <!-- Custom cursor -->
    <div class="cursor-dot"  [style.left.px]="cursorX" [style.top.px]="cursorY"></div>
    <div class="cursor-ring" [style.left.px]="ringX"   [style.top.px]="ringY"></div>

    <!-- Animated background orbs -->
    <div class="orb-field" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="orb orb-4"></div>
    </div>

    <!-- Navigation -->
    <app-nav></app-nav>

    <!-- Page sections -->
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>

    <!-- Footer -->
    <footer>
      <span class="footer-brand">NaiCode Labs</span>
      <span>© 2025 Jeanai Roberts · All rights reserved</span>
      <span>Built with Angular 17</span>
    </footer>
  `,
  styles: [`
    footer {
      position: relative; z-index: 1;
      background: rgba(255,255,255,0.5);
      backdrop-filter: var(--blur-sm);
      border-top: 1px solid rgba(255,255,255,0.8);
      padding: 2rem;
      display: flex; justify-content: space-between; align-items: center;
      font-size: 0.78rem; color: var(--text-3);
      font-family: var(--mono); letter-spacing: 0.05em;
    }
    .footer-brand { font-family: var(--serif); font-style: italic; color: var(--p400); }
    @media (max-width: 820px) { footer { flex-direction: column; gap: 0.5rem; text-align: center; } }
  `]
})
export class AppComponent implements OnInit {

  scrollProgress = 0;
  cursorX = 0; cursorY = 0;
  ringX = 0;   ringY = 0;

  private animFrame!: number;

  ngOnInit() {
    this.animateCursor();
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / scrollHeight) * 100;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }

  private animateCursor() {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      this.ringX = lerp(this.ringX, this.cursorX, 0.14);
      this.ringY = lerp(this.ringY, this.cursorY, 0.14);
      this.animFrame = requestAnimationFrame(tick);
    };
    tick();
  }
}
