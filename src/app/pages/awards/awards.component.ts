import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/ui/section-title.component';
import { AwardListComponent } from './components/award-list.component';
import { CertificationsComponent } from './components/certifications.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    SectionTitleComponent,
    AwardListComponent,
    CertificationsComponent
  ],
  template: `
    <main class="py-16">
      <div class="container mx-auto px-4">
        <app-section-title title="Awards & Recognition" />
        <app-award-list />
        <app-certifications />
      </div>
    </main>
  `
})
export class AwardsComponent {}