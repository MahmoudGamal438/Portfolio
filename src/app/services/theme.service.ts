import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeMode>('dark');

  init(): void {
    const stored = localStorage.getItem('portfolio-theme');
    const preferred: ThemeMode =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';
    this.apply(preferred);
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(mode: ThemeMode): void {
    this.theme.set(mode);
    document.documentElement.dataset['theme'] = mode;
    document.documentElement.style.colorScheme = mode;
    localStorage.setItem('portfolio-theme', mode);
  }
}
