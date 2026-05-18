// src/app/shared/reveal.directive.ts
import {
  Directive, ElementRef, OnInit, OnDestroy, Input
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const native = this.el.nativeElement as HTMLElement;
    native.style.opacity = '0';
    native.style.transform = 'translateY(24px)';
    native.style.transition = `opacity 0.65s ease ${this.revealDelay}ms, transform 0.65s ease ${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          native.style.opacity = '1';
          native.style.transform = 'translateY(0)';
          this.observer.unobserve(native);
        }
      },
      { threshold: 0.08 }
    );

    this.observer.observe(native);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
