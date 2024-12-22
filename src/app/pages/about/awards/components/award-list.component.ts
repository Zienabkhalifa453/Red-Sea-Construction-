import { Component } from '@angular/core';
import { Award } from '../../../../shared/types';

@Component({
  selector: 'app-award-list',
  standalone: true,
  template: `
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (award of awards; track award.year) {
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 font-bold text-lg mb-2">{{ award.year }}</div>
            <h3 class="text-xl font-bold mb-3">{{ award.title }}</h3>
            <p class="text-gray-600 mb-4">{{ award.description }}</p>
            <div class="text-sm text-gray-500">Awarded by: {{ award.awardedBy }}</div>
          </div>
        }
      </div>
    </section>
  `
})
export class AwardListComponent {
  protected readonly awards: Award[] = [
    {
      year: 2023,
      title: 'Excellence in Sustainable Construction',
      description: 'Recognized for implementing innovative sustainable practices in construction projects',
      awardedBy: 'Middle East Construction Awards'
    },
    {
      year: 2022,
      title: 'Best Commercial Project',
      description: 'Award for the outstanding design and execution of the Red Sea Business Center',
      awardedBy: 'Saudi Construction Excellence Awards'
    },
    {
      year: 2021,
      title: 'Safety Achievement Award',
      description: 'Recognition for maintaining exceptional safety standards across all projects',
      awardedBy: 'Construction Safety Council'
    }
  ];
}