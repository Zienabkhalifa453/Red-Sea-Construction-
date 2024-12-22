import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list.component';
import { CareerHeroComponent } from './components/career-hero.component';
import { CareerBenefitsComponent } from './components/career-benefits.component';
import { CareerProcessComponent } from './components/career-process.component';
import { CareerCtaComponent } from './components/career-cta.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    CommonModule,
    CareerHeroComponent,
    JobListComponent,
    CareerBenefitsComponent,
    CareerProcessComponent,
    CareerCtaComponent
  ],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Hero Section -->
      <app-career-hero />

      <!-- Open Positions -->
      <app-job-list />

      <!-- Benefits Section -->
      <app-career-benefits />

      <!-- Hiring Process -->
      <app-career-process />

      <!-- CTA Section -->
      <app-career-cta />
    </main>
  `
})
export class CareerComponent {}