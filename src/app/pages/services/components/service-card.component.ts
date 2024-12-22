import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
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
        <div 
          class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
        >
          <i [class]="service.icon + ' text-xl'"></i>
        </div>

        <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
          {{ service.title }}
        </h3>
        
        <p class="text-gray-600 mb-6">{{ service.description }}</p>

        <!-- Features List -->
        <ul class="space-y-2">
          @for (feature of service.features; track feature) {
            <li class="flex items-center text-gray-600">
              <span class="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-2 text-accent">
                <i class="fas fa-check text-xs"></i>
              </span>
              {{ feature }}
            </li>
          }
        </ul>
      </div>

      <!-- Hover Border Effect -->
      <div class="absolute inset-0 border-2 border-accent/0 rounded-2xl transition-all duration-500 group-hover:border-accent/100 pointer-events-none"></div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: {
    icon: string;
    title: string;
    description: string;
    features: string[];
    image: string;
  };
}