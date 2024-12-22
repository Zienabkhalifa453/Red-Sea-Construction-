import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 bg-primary/5">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and development solutions tailored to your needs
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <div 
              class="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Service Image -->
              <div class="relative h-48 overflow-hidden">
                <img 
                  [src]="service.image" 
                  [alt]="service.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <!-- Icon -->
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <i [class]="service.icon + ' text-xl'"></i>
                </div>

                <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {{ service.title }}
                </h3>
                
                <p class="text-gray-600">{{ service.description }}</p>
              </div>

              <!-- Learn More Link -->
              <div class="p-6 pt-0">
                <a 
                  routerLink="/services"
                  class="inline-flex items-center text-accent hover:text-accent-dark transition-colors"
                >
                  <span class="mr-2">Learn More</span>
                  <svg 
                    class="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          }
        </div>

        <!-- View All Services Button -->
        <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            routerLink="/services"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors group"
          >
            <span>View All Services</span>
            <svg 
              class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  protected readonly services: Service[] = [
    {
      icon: 'fas fa-building',
      title: 'Construction Management',
      description: 'Expert construction management services for projects of all sizes.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5'
    },
    {
      icon: 'fas fa-city',
      title: 'Property Development',
      description: 'End-to-end property development services for commercial and residential projects.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Renovation Services',
      description: 'Expert renovation and remodeling services for existing properties.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12'
    }
  ];
}