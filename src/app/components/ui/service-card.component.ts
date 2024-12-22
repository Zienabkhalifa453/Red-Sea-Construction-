import { Component, Input } from '@angular/core';
import { ServiceCard } from '../../shared/types';

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() service!: ServiceCard;
}