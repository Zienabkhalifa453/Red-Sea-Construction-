import { Component } from '@angular/core';
import { COMPANY_TIMELINE } from '../../../shared/constants/history';

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <section class="mb-16">
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        @for (event of timeline; track event.year) {
          <div class="relative mb-12">
            <div class="flex items-center">
              <div class="w-1/2 pr-8 text-right" [class.order-1]="event.year % 2 === 0">
                <div class="text-xl font-bold text-blue-600">{{ event.year }}</div>
                <h3 class="text-lg font-bold mb-2">{{ event.title }}</h3>
                <p class="text-gray-600">{{ event.description }}</p>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div class="w-1/2 pl-8" [class.order-0]="event.year % 2 === 0"></div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class TimelineComponent {
  protected readonly timeline = COMPANY_TIMELINE;
}