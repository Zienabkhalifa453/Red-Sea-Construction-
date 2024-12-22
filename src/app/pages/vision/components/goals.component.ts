import { Component } from '@angular/core';
import { Goal } from '../../../shared/types';

@Component({
  selector: 'app-goals',
  standalone: true,
  template: `
    <section>
      <h3 class="text-2xl font-bold mb-8 text-center">Strategic Goals</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (goal of goals; track goal.title) {
          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="text-xl font-bold mb-3">{{ goal.title }}</h4>
            <p class="text-gray-600 mb-4">{{ goal.description }}</p>
            <div class="text-sm text-blue-600">Target: {{ goal.targetDate }}</div>
          </div>
        }
      </div>
    </section>
  `
})
export class GoalsComponent {
  protected readonly goals: Goal[] = [
    {
      title: 'Sustainable Development Leadership',
      description: 'Achieve recognition as the leading sustainable construction company in the Middle East',
      targetDate: '2025'
    },
    {
      title: 'Digital Transformation',
      description: 'Fully integrate digital technologies across all operations and project management',
      targetDate: '2024'
    },
    {
      title: 'Regional Expansion',
      description: 'Establish strong presence in five new major cities across the GCC',
      targetDate: '2026'
    },
    {
      title: 'Green Building Portfolio',
      description: 'Ensure 75% of all new projects meet international green building standards',
      targetDate: '2025'
    }
  ];
}