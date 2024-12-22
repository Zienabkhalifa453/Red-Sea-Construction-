import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  template: `
    <section id="open-positions" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">Open Positions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our current opportunities and find your perfect role
          </p>
        </div>

        <!-- Job Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          @for (department of departments; track department) {
            <button
              class="px-6 py-2 rounded-full transition-all duration-300"
              [class.bg-accent]="selectedDepartment === department"
              [class.text-white]="selectedDepartment === department"
              [class.bg-gray-100]="selectedDepartment !== department"
              [class.hover:bg-accent-light]="selectedDepartment !== department"
              [class.hover:text-white]="selectedDepartment !== department"
              (click)="filterByDepartment(department)"
            >
              {{ department }}
            </button>
          }
        </div>

        <!-- Job Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (job of filteredJobs; track job.title) {
            <app-job-card 
              [job]="job"
              [attr.data-aos]="'fade-up'"
              [attr.data-aos-delay]="100 * $index"
            />
          }
        </div>
      </div>
    </section>
  `
})
export class JobListComponent {
  protected readonly departments = [
    'All',
    'Engineering',
    'Project Management',
    'Architecture',
    'Construction'
  ];

  protected selectedDepartment = 'All';
  protected jobs: Job[] = [
    {
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      description: 'Lead and oversee large-scale construction projects from inception to completion.',
      requirements: [
        '10+ years of project management experience',
        'PMP certification',
        'Strong leadership and communication skills',
        'Experience with sustainable construction practices'
      ]
    },
    {
      title: 'Structural Engineer',
      department: 'Engineering',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Design and analyze structural systems for commercial and residential projects.',
      requirements: [
        'Masters in Structural Engineering',
        '5+ years of experience',
        'Proficiency in AutoCAD and structural analysis software',
        'Saudi Engineering Council registration'
      ]
    },
    {
      title: 'Senior Architect',
      department: 'Architecture',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Design innovative and sustainable architectural solutions for high-profile projects.',
      requirements: [
        'Masters in Architecture',
        '8+ years of experience',
        'Strong portfolio of completed projects',
        'Experience with BIM software'
      ]
    },
    {
      title: 'Construction Site Manager',
      department: 'Construction',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      description: 'Manage day-to-day construction operations and ensure project quality and safety.',
      requirements: [
        'Bachelors in Civil Engineering',
        '7+ years of site management experience',
        'Strong knowledge of construction methods and safety regulations',
        'Experience with quality control systems'
      ]
    }
  ];

  protected get filteredJobs(): Job[] {
    if (this.selectedDepartment === 'All') {
      return this.jobs;
    }
    return this.jobs.filter(job => job.department === this.selectedDepartment);
  }

  protected filterByDepartment(department: string): void {
    this.selectedDepartment = department;
  }
}