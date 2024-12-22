import { Component } from '@angular/core';
import { CompanyValue } from '../../../shared/types';

@Component({
  selector: 'app-values',
  standalone: true,
  template: `
    <section class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (value of values; track value.title) {
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-4">{{ value.title }}</h4>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class ValuesComponent {
  protected readonly values: CompanyValue[] = [
    {
      title: 'Integrity',
      description: 'We conduct our business with the highest standards of professional behavior and ethics.'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new and better ways to deliver value to our clients and stakeholders.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, maintaining the highest standards of quality and safety.'
    }
  ];
}