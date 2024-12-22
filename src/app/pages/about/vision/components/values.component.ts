import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyValue } from '../../../../shared/types';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Core Values</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (value of values; track value.title) {
          <div 
            class="group bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            data-aos="fade-up"
            [attr.data-aos-delay]="100 * $index"
          >
            <div class="text-4xl text-accent mb-6 transform transition-transform group-hover:scale-110">
              <i [class]="value.icon || 'fas fa-star'"></i>
            </div>
            
            <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
              {{ value.title }}
            </h3>
            
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
      description: 'We conduct our business with the highest standards of professional behavior and ethics.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new and better ways to deliver value to our clients and stakeholders.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, maintaining the highest standards of quality and safety.',
      icon: 'fas fa-award'
    }
  ];
}