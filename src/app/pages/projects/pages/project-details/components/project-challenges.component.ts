import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-challenges',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-3xl font-bold mb-8">Project Journey</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-red-600">The Challenge</h3>
          <p class="text-gray-600">{{ details.challenge }}</p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-blue-600">Our Solution</h3>
          <p class="text-gray-600">{{ details.solution }}</p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-green-600">The Result</h3>
          <p class="text-gray-600">{{ details.result }}</p>
        </div>
      </div>
    </section>
  `
})
export class ProjectChallengesComponent {
  @Input({ required: true }) details!: Project['details'];
}