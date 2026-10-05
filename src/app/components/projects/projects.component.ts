import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { Project, ProjectCategory } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly projectsApi = inject(ProjectService);
  readonly filter = signal<ProjectCategory>('all');

  readonly filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'angular', label: 'Angular' },
    { id: 'frontend', label: 'Frontend' },
  ];

  get visible(): Project[] {
    return this.projectsApi.filterBy(this.filter());
  }

  setFilter(id: ProjectCategory): void {
    this.filter.set(id);
  }
}
