import { Component } from '@angular/core';
import { CompanyInfoComponent } from './components/company-info.component';
import { QuickLinksComponent } from './components/quick-links.component';
import { ServicesListComponent } from './components/services-list.component';
import { ContactInfoComponent } from './components/contact-info.component';
import { BottomBarComponent } from './components/bottom-bar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CompanyInfoComponent,
    QuickLinksComponent,
    ServicesListComponent,
    ContactInfoComponent,
    BottomBarComponent
  ],
  template: `
    <footer class="relative bg-primary pt-20 pb-10 text-white overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <app-company-info />
          <app-quick-links />
          <app-services-list />
          <app-contact-info />
        </div>

        <app-bottom-bar />
      </div>
    </footer>
  `
})
export class FooterComponent {}