import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero.component';
import { ServicesSectionComponent } from './sections/services.component';
import { StatsSectionComponent } from './sections/stats.component';
import { ProjectsHighlightComponent } from './sections/projects-highlight.component';
import { TestimonialsComponent } from './sections/testimonials.component';
import { CtaSectionComponent } from './sections/cta.component';
import { FeaturesComponent } from './sections/features.component';
import { ProcessComponent } from './sections/process.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturesComponent,
    ServicesSectionComponent,
    ProcessComponent,
    StatsSectionComponent,
    ProjectsHighlightComponent,
    TestimonialsComponent,
    CtaSectionComponent
  ],
  template: `
    <main class="overflow-hidden">
      <app-hero-section />
      <app-features />
      <app-services-section />
      <app-process />
      <app-stats-section />
      <app-projects-highlight />
      <app-testimonials />
      <app-cta-section />
    </main>
  `
})
export class HomeComponent {}