import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div>
      <h3 class="text-lg font-bold mb-6 text-accent">
        {{ 'footer.services' | translate }}
      </h3>
      <ul class="space-y-3">
        @for (service of services; track service) {
          <li>
            <a 
              routerLink="/services"
              class="text-white/70 hover:text-accent transition-colors flex items-center group"
            >
              <i class="fas fa-chevron-right text-xs mr-2 transform transition-transform group-hover:translate-x-1"></i>
              {{ service | translate }}
            </a>
          </li>
        }
      </ul>
    </div>
  `
})
export class ServicesListComponent {
  protected readonly services = [
    'footer.services.construction',
    'footer.services.development',
    'footer.services.renovation',
    'footer.services.consulting'
  ];
}