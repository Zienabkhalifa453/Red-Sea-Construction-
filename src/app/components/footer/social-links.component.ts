import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex space-x-4">
      @for (link of socialLinks; track link.platform) {
        <a 
          [href]="link.url" 
          [attr.aria-label]="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
        >
          <i [class]="link.icon + ' transform transition-transform group-hover:scale-110'"></i>
        </a>
      }
    </div>
  `
})
export class SocialLinksComponent {
  protected readonly socialLinks = [
    {
      platform: 'LinkedIn',
      url: '#',
      label: 'Follow us on LinkedIn',
      icon: 'fab fa-linkedin-in'
    },
    {
      platform: 'Twitter',
      url: '#',
      label: 'Follow us on Twitter',
      icon: 'fab fa-twitter'
    },
    {
      platform: 'Instagram',
      url: '#',
      label: 'Follow us on Instagram',
      icon: 'fab fa-instagram'
    },
    {
      platform: 'Facebook',
      url: '#',
      label: 'Follow us on Facebook',
      icon: 'fab fa-facebook-f'
    }
  ];
}