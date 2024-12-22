import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../components/ui/section-title.component';
import { AwardCardComponent } from './components/award-card.component';
import { CertificationCardComponent } from './components/certification-card.component';
import { COMPANY_AWARDS, COMPANY_CERTIFICATIONS } from '../../../shared/constants/awards';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    AwardCardComponent,
    CertificationCardComponent
  ],
  template: `
    <main class="py-16">
      <div class="container mx-auto px-4">
        <app-section-title title="Awards & Recognition" />
        
        <!-- Awards Section -->
        <section class="mb-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (award of awards; track award.year) {
              <app-award-card 
                [award]="award"
                [attr.data-aos]="'fade-up'"
                [attr.data-aos-delay]="100 * $index"
              />
            }
          </div>
        </section>

        <!-- Certifications Section -->
        <section>
          <h2 
            class="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Industry Certifications
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (cert of certifications; track cert.name) {
              <app-certification-card 
                [certification]="cert"
                [attr.data-aos]="'fade-up'"
                [attr.data-aos-delay]="100 * $index"
              />
            }
          </div>
        </section>
      </div>
    </main>
  `
})
export class AwardsComponent {
  protected readonly awards = COMPANY_AWARDS;
  protected readonly certifications = COMPANY_CERTIFICATIONS;
}