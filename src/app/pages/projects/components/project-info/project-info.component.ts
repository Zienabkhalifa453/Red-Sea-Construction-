import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <!-- Project Title & Description -->
      <div>
        <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
        <p class="text-xl text-gray-600">{{ project.description }}</p>
      </div>

      <!-- Project Journey -->
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Project Journey</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div>
            <h3 class="text-lg font-semibold text-red-600 mb-2">Challenge</h3>
            <p class="text-gray-600">{{ project.details.challenge }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-blue-600 mb-2">Solution</h3>
            <p class="text-gray-600">{{ project.details.solution }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">Result</h3>
            <p class="text-gray-600">{{ project.details.result }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectInfoComponent {
  @Input({ required: true }) project!: Project;
}