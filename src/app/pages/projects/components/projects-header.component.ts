import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-header',
  standalone: true,
  template: `
    <header class="text-center mb-16" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our portfolio of innovative construction projects across the Middle East,
        showcasing excellence in design, sustainability, and execution.
      </p>
    </header>
  `
})
export class ProjectsHeaderComponent {}