import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-career-benefits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="benefits" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">Why Work With Us</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a team that values innovation, growth, and excellence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (benefit of benefits; track benefit.title) {
            <div 
              class="group bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Icon -->
              <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <i [class]="benefit.icon + ' text-2xl'"></i>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {{ benefit.title }}
              </h3>
              <p class="text-gray-600">{{ benefit.description }}</p>

              <!-- Decorative Element -->
              <div class="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-tl-full transform transition-transform group-hover:scale-150 group-hover:rotate-45"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class CareerBenefitsComponent {
  protected readonly benefits: Benefit[] = [
    {
      icon: 'fas fa-chart-line',
      title: 'Career Growth',
      description: 'Clear career progression paths and continuous learning opportunities to help you reach your full potential.'
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Comprehensive Benefits',
      description: 'Competitive salary, health insurance, retirement plans, and other benefits for you and your family.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in an inclusive environment that values teamwork and innovation.'
    }
  ];
}