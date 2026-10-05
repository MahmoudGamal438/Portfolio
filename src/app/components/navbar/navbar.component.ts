import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile.data';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly profile = PROFILE;
  readonly theme = inject(ThemeService);
  readonly scroll = inject(ScrollService);
  private readonly router = inject(Router);

  readonly open = signal(false);
  readonly compact = signal(false);

  readonly links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.compact.set(window.scrollY > 16);
  }

  toggleMenu(): void {
    this.open.update((value) => !value);
  }

  closeMenu(): void {
    this.open.set(false);
  }

  async goTo(id: string): Promise<void> {
    this.closeMenu();
    if (!this.router.url.split('#')[0] || this.router.url.split('#')[0] === '/') {
      this.scroll.scrollTo(id);
      return;
    }
    await this.router.navigateByUrl('/');
    setTimeout(() => this.scroll.scrollTo(id), 50);
  }
}
