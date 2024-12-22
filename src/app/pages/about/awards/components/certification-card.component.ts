import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../../shared/types';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="group relative bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl text-center transition-all duration-500 hover:from-accent/10 hover:to-primary/10"
    >
      <!-- Certificate Icon -->
      <div 
        class="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12"
      >
        <i class="fas fa-certificate text-3xl text-accent"></i>
      </div>

      <h4 class="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
        {{ certification.name }}
      </h4>

      <div class="text-sm text-gray-600">
        Valid until: <span class="font-semibold">{{ certification.validUntil }}</span>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute inset-0 border-2 border-accent/10 rounded-xl transform transition-transform group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
    </div>
  `
})
export class CertificationCardComponent {
  @Input({ required: true }) certification!: Certification;
}