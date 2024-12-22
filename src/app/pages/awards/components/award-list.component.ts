import { Component } from '@angular/core';
import { AwardCardComponent } from './award-card.component';
import { COMPANY_AWARDS } from '../../../shared/constants/awards';

@Component({
  selector: 'app-award-list',
  standalone: true,
  imports: [AwardCardComponent],
  template: `
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (award of awards; track award.year) {
          <app-award-card [award]="award" />
        }
      </div>
    </section>
  `
})
export class AwardListComponent {
  protected readonly awards = COMPANY_AWARDS;
}