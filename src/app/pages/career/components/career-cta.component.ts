import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-career-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative py-24 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          alt="Construction site"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 
            class="text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Build Your Career?
          </h2>
          
          <p 
            class="text-xl mb-8 text-white/90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join a team of passionate professionals and help shape the future of construction
            in the Middle East. We're always looking for talented individuals to join our team.
          </p>

          <div 
            class="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a 
              href="#open-positions"
              class="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              View Open Positions
            </a>
            <a 
              routerLink="/contact"
              class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CareerCtaComponent {}