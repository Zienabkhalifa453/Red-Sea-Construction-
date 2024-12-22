import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../components/ui/section-title.component';

interface AboutSection {
  title: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <main class="py-16">
      <div class="container mx-auto px-4">
        <app-section-title title="About Us" />
        
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-xl text-gray-600" data-aos="fade-up">
            Red Sea Construction is a leading construction and development company 
            in the Middle East, known for innovative solutions and sustainable practices.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (section of sections; track section.title) {
            <a 
              [routerLink]="section.link"
              class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
              data-aos="fade-up"
            >
              <!-- Background Image -->
              <div class="relative h-48 overflow-hidden">
                <img 
                  [src]="section.image" 
                  [alt]="section.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {{ section.title }}
                </h3>
                <p class="text-gray-600 mb-4">{{ section.description }}</p>
                
                <div class="flex items-center text-accent group-hover:text-accent-dark transition-colors">
                  <span class="mr-2">Learn More</span>
                  <svg 
                    class="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </main>
  `
})
export class AboutComponent {
  protected readonly sections: AboutSection[] = [
    {
      title: 'Our History',
      description: 'Discover our journey from humble beginnings to industry leadership.',
      link: '/about/history',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      title: 'Awards & Recognition',
      description: 'Explore our achievements and industry certifications.',
      link: '/about/awards',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'
    },
    {
      title: 'Vision & Mission',
      description: 'Learn about our values and future aspirations.',
      link: '/about/vision',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    }
  ];
}