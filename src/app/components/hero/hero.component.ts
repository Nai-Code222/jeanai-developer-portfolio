// src/app/components/hero/hero.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  roles = [
    'Full-Stack Developer',
    'React Engineer',
    'Mobile Developer',
    'API Architect',
    'UI Engineer'
  ];
  currentRole = this.roles[0];
  roleVisible = true;

  private roleInterval!: ReturnType<typeof setInterval>;

  ngOnInit() {
    let index = 0;
    this.roleInterval = setInterval(() => {
      this.roleVisible = false;
      setTimeout(() => {
        index = (index + 1) % this.roles.length;
        this.currentRole = this.roles[index];
        this.roleVisible = true;
      }, 320);
    }, 2600);
  }

  ngOnDestroy() {
    clearInterval(this.roleInterval);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
