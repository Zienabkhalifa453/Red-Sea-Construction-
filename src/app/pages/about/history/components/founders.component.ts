import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Founder } from '../../../../shared/types';

@Component({
  selector: 'app-founders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Founders</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (founder of founders; track founder.name) {
          <div 
            class="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
            data-aos="fade-up"
            [attr.data-aos-delay]="100 * $index"
          >
            <!-- Founder Image -->
            <div class="relative h-64 overflow-hidden">
              <img 
                [src]="founder.image" 
                [alt]="founder.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {{ founder.name }}
              </h3>
              <p class="text-accent mb-4">{{ founder.role }}</p>
              <p class="text-gray-600">{{ founder.bio }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class FoundersComponent {
  protected readonly founders: Founder[] = [
    {
      name: 'Ahmed Al-Sayed',
      role: 'Founding CEO',
      bio: 'Over 25 years of construction industry experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Sarah Rahman',
      role: 'Co-Founder & COO',
      bio: 'Expert in sustainable development and project management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    {
      name: 'Mohammed Al-Hassan',
      role: 'Co-Founder & CTO',
      bio: 'Pioneer in construction technology innovation',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  ];
}