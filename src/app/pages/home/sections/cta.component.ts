import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="Construction site"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-blue-900/90"></div>
      </div>
      
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 
            class="text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Start Your Project?
          </h2>
          
          <p 
            class="text-xl mb-8 text-white/90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's discuss how we can help bring your vision to life. Our team of experts
            is ready to provide the perfect solution for your needs.
          </p>

          <div 
            class="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a 
              routerLink="/contact"
              class="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Get in Touch
            </a>
            <a 
              routerLink="/projects"
              class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CtaSectionComponent {}