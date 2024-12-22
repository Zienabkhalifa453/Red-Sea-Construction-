import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/ui/section-title.component';
import { TimelineComponent } from './components/timeline.component';
import { FoundersComponent } from './components/founders.component';
import { MilestonesComponent } from './components/milestones.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    SectionTitleComponent,
    TimelineComponent,
    FoundersComponent,
    MilestonesComponent
  ],
  template: `
    <main class="py-16">
      <div class="container mx-auto px-4">
        <app-section-title title="Our History" />
        <app-timeline />
        <app-founders />
        <app-milestones />
      </div>
    </main>
  `
})
export class HistoryComponent {}