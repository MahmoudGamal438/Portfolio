import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly progress = signal(0);
  readonly showBackToTop = signal(false);
  readonly activeSection = signal('home');

  private readonly sections = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'contact',
  ];

  onWindowScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    this.progress.set(Math.min(100, Math.max(0, value)));
    this.showBackToTop.set(window.scrollY > 480);
    this.updateActiveSection();
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateActiveSection(): void {
    const offset = 120;
    let current = this.sections[0];
    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (!el) {
        continue;
      }
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }
}
