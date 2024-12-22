import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-specifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-50 rounded-2xl p-8">
      <h2 class="text-3xl font-bold mb-8">Technical Specifications</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Basic Specs -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">Total Area</h3>
            <p class="text-gray-600">{{ specifications.area }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Number of Floors</h3>
            <p class="text-gray-600">{{ specifications.floors }}</p>
          </div>
        </div>

        <!-- Features Lists -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Sustainability Features</h3>
            <ul class="space-y-2">
              @for (feature of specifications.sustainability; track feature) {
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">✓</span>
                  {{ feature }}
                </li>
              }
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Technology Integration</h3>
            <ul class="space-y-2">
              @for (tech of specifications.technology; track tech) {
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  {{ tech }}
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectSpecificationsComponent {
  @Input({ required: true }) specifications!: Project['specifications'];
}