import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './services/scroll.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly theme = inject(ThemeService);
  readonly scroll = inject(ScrollService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.theme.init();
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        if (!this.router.url.includes('#')) {
          window.scrollTo({ top: 0 });
        }
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scroll.onWindowScroll();
  }
}
