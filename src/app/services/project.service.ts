import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  readonly all = PROJECTS;

  filterBy(category: ProjectCategory): Project[] {
    if (category === 'all') {
      return this.all;
    }
    return this.all.filter((project) => project.category === category);
  }

  getBySlug(slug: string): Project | undefined {
    return this.all.find((project) => project.slug === slug);
  }
}
