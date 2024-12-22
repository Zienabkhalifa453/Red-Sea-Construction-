import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../shared/types';

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-blue-800 text-white">
      <div class="container mx-auto px-4">
        <ul class="flex space-x-8 py-3">
          @for (link of links; track link.path) {
            <li>
              <a 
                [routerLink]="link.path"
                routerLinkActive="text-blue-300"
                class="hover:text-blue-300 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>
  `
})
export class SubNavComponent {
  @Input({ required: true }) links!: NavLink[];
}