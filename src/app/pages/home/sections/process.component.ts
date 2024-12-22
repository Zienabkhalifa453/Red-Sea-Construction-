import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">Our Process</h2>
          <p class="text-xl text-blue-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A systematic approach to bringing your vision to life
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          @for (step of steps; track step.title) {
            <div 
              class="relative"
              data-aos="fade-up"
              [attr.data-aos-delay]="step.delay"
            >
              <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                <div class="text-5xl font-bold text-blue-300 mb-4">{{ step.number }}</div>
                <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                <p class="text-blue-200">{{ step.description }}</p>
              </div>
              @if (!step.isLast) {
                <div class="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg class="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  protected readonly steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your vision and requirements',
      delay: '0',
      isLast: false
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Detailed project planning and resource allocation',
      delay: '100',
      isLast: false
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Professional construction with regular updates',
      delay: '200',
      isLast: false
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Final inspection and project handover',
      delay: '300',
      isLast: true
    }
  ];
}