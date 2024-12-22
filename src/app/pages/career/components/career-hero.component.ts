import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-primary/5">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p class="text-xl text-gray-600 mb-8">
            Be part of a dynamic team shaping the future of construction in the Middle East.
            We're always looking for talented individuals who share our passion for excellence.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <a 
              href="#open-positions"
              class="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="#benefits"
              class="px-8 py-4 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors"
            >
              Learn About Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CareerHeroComponent {}