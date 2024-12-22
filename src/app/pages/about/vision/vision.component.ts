import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../components/ui/section-title.component';
import { VisionStatementComponent } from './components/vision-statement.component';
import { MissionComponent } from './components/mission.component';
import { ValuesComponent } from './components/values.component';
import { GoalsComponent } from './components/goals.component';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [
    SectionTitleComponent,
    VisionStatementComponent,
    MissionComponent,
    ValuesComponent,
    GoalsComponent
  ],
  template: `
    <main class="py-16">
      <div class="container mx-auto px-4">
        <app-section-title title="Vision & Mission" />
        <app-vision-statement />
        <app-mission />
        <app-values />
        <app-goals />
      </div>
    </main>
  `
})
export class VisionComponent {}