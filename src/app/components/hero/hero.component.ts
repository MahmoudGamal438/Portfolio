import { Component, inject } from '@angular/core';
import { PROFILE } from '../../data/profile.data';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly profile = PROFILE;
  private readonly scroll = inject(ScrollService);

  viewProjects(): void {
    this.scroll.scrollTo('projects');
  }
}
