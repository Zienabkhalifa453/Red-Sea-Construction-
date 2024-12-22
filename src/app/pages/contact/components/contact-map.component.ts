import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="aspect-video">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
          alt="Office Location Map"
          class="w-full h-full object-cover"
        >
      </div>
      <div class="p-4 bg-gradient-to-r from-accent to-primary text-white">
        <p class="text-sm font-medium">
          <i class="fas fa-map-marker-alt mr-2"></i>
          Find us in the heart of Jeddah's Business District
        </p>
      </div>
    </div>
  `
})
export class ContactMapComponent {}