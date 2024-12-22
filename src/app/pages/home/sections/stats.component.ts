import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  template: `
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="Construction background"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/90"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          @for (stat of stats; track stat.value) {
            <div 
              class="text-center"
              data-aos="fade-up"
              [attr.data-aos-delay]="stat.delay"
            >
              <div class="relative">
                <div class="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  {{ stat.value }}
                </div>
                <div class="absolute -inset-4 bg-white/5 blur-lg rounded-full"></div>
              </div>
              <div class="text-lg text-blue-200">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class StatsSectionComponent {
  protected readonly stats = [
    { value: '200+', label: 'Projects Completed', delay: '0' },
    { value: '15+', label: 'Years Experience', delay: '100' },
    { value: '50+', label: 'Expert Team', delay: '200' },
    { value: '98%', label: 'Client Satisfaction', delay: '300' }
  ];
}