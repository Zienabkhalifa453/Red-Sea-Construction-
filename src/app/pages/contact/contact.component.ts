import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form.component';
import { ContactInfoComponent } from './components/contact-info.component';
import { ContactMapComponent } from './components/contact-map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent,
    ContactInfoComponent,
    ContactMapComponent
  ],
  template: `
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <header class="text-center mb-16" data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's discuss how we can 
            bring your vision to life.
          </p>
        </header>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Form Section -->
          <div 
            class="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            data-aos="fade-right"
          >
            <app-contact-form />
          </div>

          <!-- Contact Info Section -->
          <div data-aos="fade-left">
            <app-contact-info />
            <app-contact-map />
          </div>
        </div>
      </div>
    </main>
  `
})
export class ContactComponent {}