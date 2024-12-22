import { Component } from '@angular/core';
import { Certification } from '../../../../shared/types';

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
    <section>
      <h3 class="text-2xl font-bold mb-8 text-center">Industry Certifications</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        @for (cert of certifications; track cert.name) {
          <div class="bg-gray-50 p-6 rounded-lg text-center">
            <div class="text-3xl text-blue-600 mb-4">
              <i class="fas fa-certificate"></i>
            </div>
            <h4 class="font-bold mb-2">{{ cert.name }}</h4>
            <p class="text-sm text-gray-600">Valid until: {{ cert.validUntil }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class CertificationsComponent {
  protected readonly certifications: Certification[] = [
    {
      name: 'ISO 9001:2015',
      validUntil: '2025'
    },
    {
      name: 'ISO 14001:2015',
      validUntil: '2024'
    },
    {
      name: 'OHSAS 18001',
      validUntil: '2024'
    },
    {
      name: 'LEED Certification',
      validUntil: '2025'
    }
  ];
}