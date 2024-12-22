import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineEvent } from '../../../../shared/types';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-16">
      <!-- Timeline Line -->
      <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20"></div>

      <!-- Timeline Events -->
      <div class="relative">
        @for (event of timeline; track event.year) {
          <div 
            class="mb-16 flex items-center"
            data-aos="fade-up"
            [attr.data-aos-delay]="100 * $index"
          >
            <!-- Left Content -->
            <div class="w-1/2 pr-12 text-right" [class.order-1]="$index % 2 === 0">
              <div class="text-2xl font-bold text-accent mb-2">{{ event.year }}</div>
              <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
              <p class="text-gray-600">{{ event.description }}</p>
            </div>

            <!-- Timeline Point -->
            <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg"></div>

            <!-- Right Content -->
            <div class="w-1/2 pl-12" [class.order-0]="$index % 2 === 0"></div>
          </div>
        }
      </div>
    </section>
  `
})
export class TimelineComponent {
  protected readonly timeline: TimelineEvent[] = [
    {
      year: 2010,
      title: 'Company Founded',
      description: 'Red Sea Construction was established in Jeddah'
    },
    {
      year: 2015,
      title: 'Regional Expansion',
      description: 'Opened offices in Dubai and Riyadh'
    },
    {
      year: 2018,
      title: 'Major Project Milestone',
      description: 'Completed our first large-scale commercial development'
    },
    {
      year: 2020,
      title: 'Sustainable Initiative',
      description: 'Launched our green building program'
    }
  ];
}