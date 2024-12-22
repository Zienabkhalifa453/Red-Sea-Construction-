import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group bg-white rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl">
      <!-- Job Header -->
      <div class="mb-4">
        <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {{ job.title }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center text-sm text-gray-600">
            <i class="fas fa-building mr-2 text-accent"></i>
            {{ job.department }}
          </span>
          <span class="inline-flex items-center text-sm text-gray-600">
            <i class="fas fa-location-dot mr-2 text-accent"></i>
            {{ job.location }}
          </span>
          <span class="inline-flex items-center text-sm text-gray-600">
            <i class="fas fa-clock mr-2 text-accent"></i>
            {{ job.type }}
          </span>
        </div>
      </div>

      <!-- Job Description -->
      <p class="text-gray-600 mb-4">{{ job.description }}</p>

      <!-- Requirements -->
      <div class="mb-6">
        <h4 class="font-semibold mb-2">Requirements:</h4>
        <ul class="space-y-2">
          @for (req of job.requirements; track req) {
            <li class="flex items-start">
              <span class="text-accent mr-2">•</span>
              <span class="text-gray-600">{{ req }}</span>
            </li>
          }
        </ul>
      </div>

      <!-- Apply Button -->
      <button class="w-full bg-accent/10 text-accent py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
        Apply Now
      </button>
    </div>
  `
})
export class JobCardComponent {
  @Input({ required: true }) job!: {
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
  };
}