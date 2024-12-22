import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div>
      <h3 class="text-lg font-bold mb-6 text-accent">
        {{ 'footer.quickLinks' | translate }}
      </h3>
      <ul class="space-y-3">
        @for (link of links; track link.path) {
          <li>
            <a 
              [routerLink]="link.path"
              class="text-white/70 hover:text-accent transition-colors flex items-center group"
            >
              <i class="fas fa-chevron-right text-xs mr-2 transform transition-transform group-hover:translate-x-1"></i>
              {{ link.label | translate }}
            </a>
          </li>
        }
      </ul>
    </div>
  `
})
export class QuickLinksComponent {
  protected readonly links = [
    { path: '/', label: 'footer.links.home' },
    { path: '/about', label: 'footer.links.about' },
    { path: '/projects', label: 'footer.links.projects' },
    { path: '/careers', label: 'footer.links.careers' },
    { path: '/contact', label: 'footer.links.contact' }
  ];
}