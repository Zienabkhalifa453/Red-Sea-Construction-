import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <!-- Quick Facts -->
      <div class="bg-white rounded-xl p-6 shadow-lg">
        <h2 class="text-xl font-bold mb-4">Project Details</h2>
        <dl class="space-y-4">
          <div>
            <dt class="text-gray-600">Client</dt>
            <dd class="text-lg font-medium">{{ project.details.client }}</dd>
          </div>
          <div>
            <dt class="text-gray-600">Location</dt>
            <dd class="text-lg font-medium">{{ project.location }}</dd>
          </div>
          <div>
            <dt class="text-gray-600">Duration</dt>
            <dd class="text-lg font-medium">{{ project.details.duration }}</dd>
          </div>
          <div>
            <dt class="text-gray-600">Value</dt>
            <dd class="text-lg font-medium">{{ project.details.value }}</dd>
          </div>
        </dl>
      </div>

      <!-- Specifications -->
      <div class="bg-white rounded-xl p-6 shadow-lg">
        <h2 class="text-xl font-bold mb-4">Specifications</h2>
        <dl class="space-y-4">
          <div>
            <dt class="text-gray-600">Area</dt>
            <dd class="text-lg font-medium">{{ project.specifications.area }}</dd>
          </div>
          <div>
            <dt class="text-gray-600">Floors</dt>
            <dd class="text-lg font-medium">{{ project.specifications.floors }}</dd>
          </div>
          <div>
            <dt class="text-gray-600 mb-2">Key Features</dt>
            <dd class="space-y-1">
              @for (feature of project.specifications.technology; track feature) {
                <div class="flex items-center text-gray-700">
                  <span class="text-accent mr-2">✓</span>
                  {{ feature }}
                </div>
              }
            </dd>
          </div>
        </dl>
      </div>
    </div>
  `
})
export class ProjectSidebarComponent {
  @Input({ required: true }) project!: Project;
}