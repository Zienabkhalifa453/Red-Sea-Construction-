import { Component } from '@angular/core';
import { Milestone } from '../../../../shared/types';

@Component({
  selector: 'app-milestones',
  standalone: true,
  template: `
    <section>
      <h3 class="text-2xl font-bold mb-8 text-center">Key Milestones</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        @for (milestone of milestones; track milestone.year) {
          <div class="bg-blue-50 p-6 rounded-lg">
            <div class="text-2xl font-bold text-blue-600 mb-2">{{ milestone.year }}</div>
            <h4 class="font-bold mb-2">{{ milestone.title }}</h4>
            <p class="text-sm text-gray-600">{{ milestone.achievement }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class MilestonesComponent {
  protected readonly milestones: Milestone[] = [
    {
      year: 2010,
      title: 'Company Launch',
      achievement: 'Successfully established operations in Jeddah'
    },
    {
      year: 2015,
      title: '100th Project',
      achievement: 'Completed our 100th successful project'
    },
    {
      year: 2018,
      title: 'Innovation Award',
      achievement: 'Received first industry innovation award'
    },
    {
      year: 2020,
      title: 'Sustainability Goal',
      achievement: 'Achieved carbon neutral operations'
    }
  ];
}