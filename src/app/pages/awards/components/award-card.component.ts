import { Component, Input } from '@angular/core';
import { Award } from '../../../shared/types';

@Component({
  selector: 'app-award-card',
  standalone: true,
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div class="text-blue-600 font-bold text-lg mb-2">{{ award.year }}</div>
      <h3 class="text-xl font-bold mb-3">{{ award.title }}</h3>
      <p class="text-gray-600 mb-4">{{ award.description }}</p>
      <div class="text-sm text-gray-500">Awarded by: {{ award.awardedBy }}</div>
    </div>
  `
})
export class AwardCardComponent {
  @Input({ required: true }) award!: Award;
}