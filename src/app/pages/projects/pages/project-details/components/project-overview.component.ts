import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  template: `
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-3xl font-bold mb-8">Project Overview</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Key Information -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">Client</h3>
            <p class="text-gray-600">{{ project.details.client }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Duration</h3>
            <p class="text-gray-600">{{ project.details.duration }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Project Value</h3>
            <p class="text-gray-600">{{ project.details.value }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Location</h3>
            <p class="text-gray-600">{{ project.location }}</p>
          </div>
        </div>

        <!-- Scope of Work -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Scope of Work</h3>
          <ul class="space-y-2">
            @for (item of project.details.scope; track item) {
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                {{ item }}
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `
})
export class ProjectOverviewComponent {
  @Input({ required: true }) project!: Project;
}