import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SocialLinksComponent } from '../social-links.component';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [CommonModule, TranslateModule, SocialLinksComponent],
  template: `
    <div>
      <img 
        src="assets/images/logo.png"
        alt="Red Sea Construction"
        class="h-12 mb-6"
      >
      <p class="text-white/80 mb-6">
        {{ 'footer.description' | translate }}
      </p>
      <app-social-links />
    </div>
  `
})
export class CompanyInfoComponent {}