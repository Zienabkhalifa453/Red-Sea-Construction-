import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './components/service-card.component';
import { ServiceProcessComponent } from './components/service-process.component';
import { ServiceCtaComponent } from './components/service-cta.component';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServiceCardComponent,
    ServiceProcessComponent,
    ServiceCtaComponent
  ],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Hero Section -->
      <section class="relative py-24 overflow-hidden">
        <div class="absolute inset-0 bg-primary/5"></div>
        <div class="container mx-auto px-4 relative">
          <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p class="text-xl text-gray-600">
              Comprehensive construction and development solutions tailored to your needs.
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (service of services; track service.title) {
              <app-service-card 
                [service]="service"
                [attr.data-aos]="'fade-up'"
                [attr.data-aos-delay]="100 * $index"
              />
            }
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <app-service-process />

      <!-- CTA Section -->
      <app-service-cta />
    </main>
  `
})
export class ServicesComponent {
  protected readonly services: Service[] = [
    {
      icon: 'fas fa-building',
      title: 'Construction Management',
      description: 'Expert construction management services for projects of all sizes.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      features: [
        'Project Planning and Scheduling',
        'Cost Control and Budgeting',
        'Quality Assurance',
        'Safety Management',
        'Subcontractor Coordination'
      ]
    },
    {
      icon: 'fas fa-city',
      title: 'Property Development',
      description: 'End-to-end property development services for commercial and residential projects.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      features: [
        'Site Selection and Analysis',
        'Feasibility Studies',
        'Design Development',
        'Construction Management',
        'Project Marketing'
      ]
    },
    {
      icon: 'fas fa-hammer',
      title: 'Renovation Services',
      description: 'Expert renovation and remodeling services for existing properties.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      features: [
        'Interior Renovations',
        'Exterior Updates',
        'Structural Modifications',
        'Energy Efficiency Upgrades',
        'Historic Preservation'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Consulting Services',
      description: 'Professional consulting for construction and development projects.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      features: [
        'Project Feasibility Analysis',
        'Risk Assessment',
        'Technical Due Diligence',
        'Value Engineering',
        'Sustainability Consulting'
      ]
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Building',
      description: 'Green building solutions for a sustainable future.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      features: [
        'LEED Certification Support',
        'Energy Efficiency Design',
        'Sustainable Materials',
        'Waste Management',
        'Environmental Impact Assessment'
      ]
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance solutions for buildings and facilities.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'Facility Inspections',
        'Equipment Servicing',
        'Building Systems Optimization'
      ]
    }
  ];
}