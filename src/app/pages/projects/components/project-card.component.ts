import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article 
      class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      data-aos="fade-up"
      [attr.data-aos-delay]="delay"
    >
      <!-- Image Container -->
      <div class="relative h-64 overflow-hidden">
        <img 
          [src]="project.image" 
          [alt]="project.title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="mb-4">
          <span class="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
            {{ project.category }}
          </span>
        </div>
        <h3 class="mb-2 text-xl font-bold text-primary">{{ project.title }}</h3>
        <p class="mb-4 text-gray-600">{{ project.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ project.location }}</span>
          <button 
            class="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            (click)="viewDetails()"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() delay = '0';

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/projects', this.project.id]);
  }
}