import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="path" class="hover:text-accent transition-colors">{{ label }}</a>
  `
})
export class NavLinkComponent {
  @Input() path!: string;
  @Input() label!: string;
}