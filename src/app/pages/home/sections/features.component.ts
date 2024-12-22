import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  stats?: { value: string; label: string }[];
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional construction projects
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (feature of features; track feature.title) {
            <div 
              class="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Icon -->
              <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <i [class]="feature.icon + ' text-2xl'"></i>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 mb-6">{{ feature.description }}</p>

              <!-- Stats -->
              @if (feature.stats) {
                <div class="grid grid-cols-2 gap-4">
                  @for (stat of feature.stats; track stat.label) {
                    <div>
                      <div class="text-2xl font-bold text-accent">{{ stat.value }}</div>
                      <div class="text-sm text-gray-500">{{ stat.label }}</div>
                    </div>
                  }
                </div>
              }

              <!-- Decorative Elements -->
              <div class="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-tl-full transform transition-transform group-hover:scale-150 group-hover:rotate-45"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  protected readonly features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure excellence in every project we deliver.',
      stats: [
        { value: '100%', label: 'Quality Score' },
        { value: '0', label: 'Defects' }
      ]
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Building',
      description: 'Committed to eco-friendly construction practices and sustainable development.',
      stats: [
        { value: '75%', label: 'Energy Saved' },
        { value: '90%', label: 'Materials Recycled' }
      ]
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising quality.',
      stats: [
        { value: '98%', label: 'On-Time Rate' },
        { value: '24/7', label: 'Support' }
      ]
    }
  ];
}