import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div>
      <h3 class="text-lg font-bold mb-6 text-accent">
        {{ 'footer.contact' | translate }}
      </h3>
      <ul class="space-y-4">
        <li class="flex items-start">
          <i class="fas fa-location-dot mt-1.5 mr-3 text-accent"></i>
          <span class="text-white/70">
            {{ 'footer.address' | translate }}
          </span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-phone mr-3 text-accent"></i>
          <span class="text-white/70">+966 12 345 6789</span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-envelope mr-3 text-accent"></i>
          <span class="text-white/70">info&#64;redseaconstruction.com</span>
        </li>
      </ul>
    </div>
  `
})
export class ContactInfoComponent {}