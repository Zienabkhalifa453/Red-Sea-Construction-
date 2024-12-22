import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
}

@Component({
  selector: 'app-projects-highlight',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most innovative and impactful construction projects
          </p>
        </div>

        <!-- Featured Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of featuredProjects; track project.id) {
            <div 
              class="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
              data-aos="fade-up"
              [attr.data-aos-delay]="100 * $index"
            >
              <!-- Project Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  [src]="project.image" 
                  [alt]="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Project Info -->
              <div class="p-6">
                <div class="mb-4">
                  <span class="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full">
                    {{ project.category }}
                  </span>
                </div>
                <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 mb-6">{{ project.description }}</p>

                <!-- Project Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                  @for (stat of project.stats; track stat.label) {
                    <div class="text-center">
                      <div class="text-lg font-bold text-accent">{{ stat.value }}</div>
                      <div class="text-sm text-gray-500">{{ stat.label }}</div>
                    </div>
                  }
                </div>

                <!-- View Project Button -->
                <a 
                  [routerLink]="['/projects', project.id]"
                  class="inline-flex items-center text-accent hover:text-accent-dark transition-colors"
                >
                  <span class="mr-2">View Project</span>
                  <svg 
                    class="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          }
        </div>

        <!-- View All Projects Button -->
        <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            routerLink="/projects"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors group"
          >
            <span>View All Projects</span>
            <svg 
              class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsHighlightComponent {
  protected readonly featuredProjects: FeaturedProject[] = [
    {
      id: '1',
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'State-of-the-art office building with sustainable features and modern amenities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      stats: [
        { value: '50K', label: 'Sq Meters' },
        { value: '24', label: 'Months' },
        { value: '30', label: 'Floors' }
      ]
    },
    {
      id: '2',
      title: 'Luxury Residential Tower',
      category: 'Residential',
      description: 'Premium residential complex with world-class amenities and ocean views.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      stats: [
        { value: '75K', label: 'Sq Meters' },
        { value: '36', label: 'Months' },
        { value: '45', label: 'Floors' }
      ]
    },
    {
      id: '3',
      title: 'Shopping Mall',
      category: 'Retail',
      description: 'Modern retail space with entertainment facilities and sustainable design.',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6',
      stats: [
        { value: '100K', label: 'Sq Meters' },
        { value: '30', label: 'Months' },
        { value: '5', label: 'Levels' }
      ]
    }
  ];
}