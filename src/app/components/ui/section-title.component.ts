import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
  `
})
export class SectionTitleComponent {
  @Input() title!: string;
}