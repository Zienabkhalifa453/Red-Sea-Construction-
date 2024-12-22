import { Component, Input, inject } from '@angular/core';
import { ProjectCardComponent } from './project-card.component';
import { ProjectFilterService } from '../services/project-filter.service';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      @for (project of filteredProjects; track project.id) {
        <app-project-card 
          [project]="project"
          [delay]="(100 * $index).toString()"
        />
      }
    </div>
  `
})
export class ProjectGridComponent {
  private projectFilter = inject(ProjectFilterService);
  @Input() set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.updateFilteredProjects();
  }

  private _selectedCategory = 'All';
  protected filteredProjects = this.projectFilter.getAllProjects();

  private updateFilteredProjects() {
    this.filteredProjects = this.projectFilter.getFilteredProjects(this._selectedCategory);
  }
}