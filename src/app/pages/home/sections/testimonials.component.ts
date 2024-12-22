import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.author) {
            <div 
              class="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Quote Icon -->
              <div class="absolute -top-4 -right-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-12 transition-transform">
                <i class="fas fa-quote-right"></i>
              </div>

              <!-- Rating Stars -->
              <div class="flex items-center mb-6">
                @for (star of [1,2,3,4,5]; track star) {
                  <i 
                    class="fas fa-star text-accent mr-1"
                    [class.opacity-50]="star > testimonial.rating"
                  ></i>
                }
              </div>

              <!-- Quote -->
              <blockquote class="text-gray-600 mb-6">
                "{{ testimonial.quote }}"
              </blockquote>

              <!-- Author Info -->
              <div class="flex items-center">
                <img 
                  [src]="testimonial.image" 
                  [alt]="testimonial.author"
                  class="w-12 h-12 rounded-full object-cover mr-4"
                >
                <div>
                  <div class="font-bold">{{ testimonial.author }}</div>
                  <div class="text-sm text-gray-500">
                    {{ testimonial.role }}, {{ testimonial.company }}
                  </div>
                </div>
              </div>

              <!-- Decorative Elements -->
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-tr-full transform transition-transform group-hover:scale-150 group-hover:-rotate-45"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = [
    {
      quote: 'Red Sea Construction delivered our project on time and exceeded our expectations in terms of quality and professionalism.',
      author: 'Ahmed Al-Rashid',
      role: 'CEO',
      company: 'Al-Rashid Developments',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      rating: 5
    },
    {
      quote: 'Their commitment to sustainable construction practices and innovative solutions sets them apart in the industry.',
      author: 'Sarah Al-Malik',
      role: 'Director',
      company: 'Green Building Council',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5
    },
    {
      quote: 'Working with Red Sea Construction was a seamless experience. Their attention to detail is unmatched.',
      author: 'Mohammed Al-Fahad',
      role: 'Property Developer',
      company: 'Al-Fahad Group',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      rating: 5
    }
  ];
}