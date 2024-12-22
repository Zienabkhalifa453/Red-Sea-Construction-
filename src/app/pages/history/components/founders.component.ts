import { Component } from '@angular/core';
import { COMPANY_FOUNDERS } from '../../../shared/constants/history';

@Component({
  selector: 'app-founders',
  standalone: true,
  template: `
    <section class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Our Founders</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (founder of founders; track founder.name) {
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img [src]="founder.image" [alt]="founder.name" class="w-full h-full object-cover">
            </div>
            <h4 class="text-xl font-bold mb-2">{{ founder.name }}</h4>
            <p class="text-gray-600 mb-3">{{ founder.role }}</p>
            <p class="text-sm text-gray-500">{{ founder.bio }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class FoundersComponent {
  protected readonly founders = COMPANY_FOUNDERS;
}