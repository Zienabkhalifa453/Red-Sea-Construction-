import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectFilterService } from '../../services/project-filter.service';
import { ProjectSliderComponent } from '../../components/project-slider/project-slider.component';
import { ProjectInfoComponent } from '../../components/project-info/project-info.component';
import { ProjectSidebarComponent } from '../../components/project-sidebar/project-sidebar.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    ProjectSliderComponent,
    ProjectInfoComponent,
    ProjectSidebarComponent
  ],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div class="container mx-auto px-4">
        <!-- Back Navigation -->
        <a 
          routerLink="/projects"
          class="inline-flex items-center text-accent hover:text-accent-dark transition-colors group mb-8"
        >
          <svg 
            class="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </a>

        @if (project) {
          <div class="max-w-6xl mx-auto">
            <!-- Image Slider -->
            <div class="mb-12" data-aos="fade-up">
              <app-project-slider [images]="project.gallery" />
            </div>

            <!-- Project Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Main Content -->
              <div class="lg:col-span-2" data-aos="fade-up">
                <app-project-info [project]="project" />
              </div>

              <!-- Sidebar -->
              <div data-aos="fade-up" data-aos-delay="100">
                <app-project-sidebar [project]="project" />
              </div>
            </div>
          </div>
        }
      </div>
    </main>
  `
})
export class ProjectDetailsComponent {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectFilterService);
  
  protected project = this.projectService.getProjectById(
    this.route.snapshot.params['id']
  );
}