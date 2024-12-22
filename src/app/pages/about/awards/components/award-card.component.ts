import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Award } from '../../../../shared/types';

@Component({
  selector: 'app-award-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <!-- Award Year Badge -->
      <div class="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
        {{ award.year }}
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Trophy Icon -->
        <div class="text-4xl text-accent mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
          <i class="fas fa-trophy"></i>
        </div>

        <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
          {{ award.title }}
        </h3>
        
        <p class="text-gray-600 mb-4">{{ award.description }}</p>
        
        <div class="flex items-center text-sm text-gray-500">
          <i class="fas fa-building mr-2"></i>
          {{ award.awardedBy }}
        </div>

        <!-- Decorative Elements -->
        <div class="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-tl-full transform transition-transform group-hover:scale-150 group-hover:rotate-45"></div>
      </div>
    </div>
  `
})
export class AwardCardComponent {
  @Input({ required: true }) award!: Award;
}