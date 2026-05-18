// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  template: `
    <section id="contact">
      <div class="contact-wrap">
        <p class="eyebrow" appReveal style="justify-content:center">Contact</p>
        <h2 class="section-h" appReveal [revealDelay]="80" style="text-align:center">
          Let's build something<br><em>beautiful together.</em>
        </h2>

        <div class="contact-card" appReveal [revealDelay]="160">
          <p class="contact-sub">
            Have a project in mind, a role to fill, or just want to say hi?
            My inbox is always open.
          </p>

          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input class="form-input" formControlName="name" type="text" placeholder="Your name"/>
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input class="form-input" formControlName="email" type="email" placeholder="you@example.com"/>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input class="form-input" formControlName="subject" type="text" placeholder="Project inquiry, collaboration, etc."/>
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea class="form-input" formControlName="message" placeholder="Tell me about your project or idea..."></textarea>
            </div>
            <button
              class="btn-send"
              type="submit"
              [disabled]="contactForm.invalid || submitted"
            >
              {{ submitted ? 'Sent ✦' : 'Send Message ✦' }}
            </button>
          </form>

          <div class="contact-social">
            <a href="#" class="social-pill"><span class="social-icon">gh</span> GitHub</a>
            <a href="#" class="social-pill"><span class="social-icon">in</span> LinkedIn</a>
            <a href="mailto:JeanaiRoberts&#64;outlook.com" class="social-pill"><span class="social-icon">&#64;</span> Email</a>
            <a href="assets/JeanaiRoberts_Resume.pdf" download="JeanaiRoberts_Resume.pdf" class="social-pill resume-pill">
              <svg class="dl-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { padding-bottom: 8rem; }

    .contact-wrap { max-width: 760px; margin: 0 auto; text-align: center; }

    .contact-card {
      background: var(--glass-strong);
      backdrop-filter: var(--blur);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 3.5rem;
      box-shadow: var(--shadow-lg);
      margin-top: 3.5rem;
    }

    .contact-sub {
      font-size: 1rem; color: var(--text-2);
      line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem;
    }

    .form-row {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 1rem; margin-bottom: 1rem;
    }

    .form-group { display: flex; flex-direction: column; gap: 0.45rem; text-align: left; margin-bottom: 1rem; }

    .form-label {
      font-family: var(--mono); font-size: 0.67rem;
      letter-spacing: 0.12em; text-transform: uppercase; color: var(--p500);
    }

    .form-input {
      background: rgba(255,255,255,0.7);
      border: 1.5px solid rgba(240,96,168,0.18);
      border-radius: var(--radius-sm);
      padding: 0.85rem 1.1rem;
      font-family: var(--sans); font-size: 0.9rem; color: var(--text);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      cursor: none;

      &:focus {
        border-color: var(--p300);
        box-shadow: 0 0 0 4px rgba(240,96,168,0.1);
      }
      &::placeholder { color: var(--text-3); }
    }

    textarea.form-input { resize: vertical; min-height: 120px; }

    .btn-send {
      width: 100%;
      background: var(--p400); color: #fff;
      border: none; border-radius: 14px;
      padding: 1rem;
      font-family: var(--sans); font-size: 0.9rem; font-weight: 500;
      cursor: none;
      transition: background 0.2s, transform 0.15s;

      &:hover:not(:disabled) { background: var(--p500); transform: translateY(-2px); }
      &:disabled { opacity: 0.7; }
    }

    .contact-social {
      display: flex; gap: 1rem; justify-content: center;
      margin-top: 2rem; flex-wrap: wrap;
    }

    .social-pill {
      display: flex; align-items: center; gap: 0.5rem;
      background: rgba(255,255,255,0.6);
      border: 1px solid var(--p100);
      border-radius: var(--radius-pill);
      padding: 0.55rem 1.2rem;
      text-decoration: none; color: var(--text-2);
      font-size: 0.8rem; font-weight: 500;
      transition: all 0.2s;
      cursor: none;

      &:hover { background: var(--p50); border-color: var(--p300); color: var(--p500); transform: translateY(-2px); }
    }

    .social-icon { font-family: var(--mono); font-size: 0.72rem; color: var(--p400); }

    .resume-pill { border-color: var(--p200); color: var(--p500); }

    .dl-icon { width: 0.85rem; height: 0.85rem; color: var(--p400); flex-shrink: 0; }

    @media (max-width: 820px) {
      .contact-card { padding: 2.5rem 1.5rem; }
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  submitted = false;

  contactForm: FormGroup = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.submitted = true;
      // TODO: wire up to Supabase / EmailJS / Formspree
    }
  }
}
