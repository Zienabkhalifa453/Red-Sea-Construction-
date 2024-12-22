import { Component } from '@angular/core';
import { ProjectsHeaderComponent } from './components/projects-header.component';
import { ProjectCategoriesComponent } from './components/project-categories.component';
import { ProjectGridComponent } from './components/project-grid.component';
import { ProjectFilterService } from './services/project-filter.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectsHeaderComponent,
    ProjectCategoriesComponent,
    ProjectGridComponent
  ],
  providers: [ProjectFilterService],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div class="container mx-auto px-4">
        <app-projects-header />
        <app-project-categories 
          [categories]="categories" 
          (categoryChange)="onCategoryChange($event)"
        />
        <app-project-grid [selectedCategory]="selectedCategory" />
      </div>
    </main>
  `
})
export class ProjectsComponent {
  protected categories = [
    'All',
    'Commercial',
    'Residential',
    'Industrial',
    'Infrastructure'
  ];
  protected selectedCategory = 'All';

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}