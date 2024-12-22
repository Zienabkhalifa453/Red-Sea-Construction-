import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-career-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">Our Hiring Process</h2>
          <p class="text-xl text-white/80 max-w-3xl mx-auto">
            A transparent and efficient process to help you join our team
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
              <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
                <!-- Icon -->
                <div class="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 hover:rotate-12">
                  <i [class]="step.icon + ' text-2xl'"></i>
                </div>

                <!-- Content -->
                <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                <p class="text-white/80">{{ step.description }}</p>

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
export class CareerProcessComponent {
  protected readonly steps: ProcessStep[] = [
    {
      icon: 'fas fa-file-alt',
      title: 'Application',
      description: 'Submit your application and resume through our online portal'
    },
    {
      icon: 'fas fa-phone',
      title: 'Initial Call',
      description: 'Brief phone discussion to understand your background and aspirations'
    },
    {
      icon: 'fas fa-users',
      title: 'Interviews',
      description: 'Meet with team members and discuss your experience in detail'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Offer',
      description: 'Receive and review your offer package and join our team'
    }
  ];
}