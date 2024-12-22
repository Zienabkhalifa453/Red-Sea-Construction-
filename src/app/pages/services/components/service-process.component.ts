import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">Our Process</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          @for (step of steps; track step.title) {
            <div 
              class="relative"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Step Card -->
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <!-- Icon -->
                <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 transform transition-transform hover:scale-110 hover:rotate-12">
                  <i [class]="step.icon + ' text-2xl'"></i>
                </div>

                <!-- Content -->
                <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>

                <!-- Step Number -->
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {{ $index + 1 }}
                </div>
              </div>

              <!-- Connector Line -->
              @if ($index < steps.length - 1) {
                <div class="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/20"></div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServiceProcessComponent {
  protected readonly steps: ProcessStep[] = [
    {
      icon: 'fas fa-comments',
      title: 'Consultation',
      description: 'Initial meeting to understand your requirements and vision'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Planning',
      description: 'Detailed project planning and resource allocation'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Execution',
      description: 'Professional implementation with regular updates'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Delivery',
      description: 'Final inspection and project handover'
    }
  ];
}