// src/app/components/nav/nav.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  activeSection = 'home';

  navItems = [
    { id: 'home',       label: 'Home',       icon: 'ti-home'        },
    { id: 'about',      label: 'About',      icon: 'ti-user'        },
    { id: 'projects',   label: 'Projects',   icon: 'ti-layout-grid' },
    { id: 'skills',     label: 'Skills',     icon: 'ti-sparkles'    },
    { id: 'experience', label: 'Experience', icon: 'ti-briefcase'   },
    { id: 'contact',    label: 'Contact',    icon: 'ti-mail'        },
  ];

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    // Observe all sections after view initialises
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach(s => this.observer.observe(s));
    }, 200);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
