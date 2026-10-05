import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly points = [
    { label: 'Focus', value: 'Angular and Frontend Development' },
    { label: 'Education', value: 'Information Systems, Menoufia University' },
    { label: 'Training', value: 'NTI · ITI · DEPI' },
    { label: 'Stack', value: 'TypeScript, JavaScript, REST APIs' },
  ];
}
