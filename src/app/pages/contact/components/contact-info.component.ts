import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFO } from '../../../shared/constants/company-info';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
      <h2 class="text-2xl font-bold mb-8">Contact Information</h2>
      
      <div class="space-y-8">
        <!-- Office Location -->
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
            <i class="fas fa-location-dot text-xl"></i>
          </div>
          <div>
            <h3 class="font-semibold mb-1">Office Location</h3>
            <p class="text-gray-600">123 Business District</p>
            <p class="text-gray-600">Jeddah, Saudi Arabia</p>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
            <i class="fas fa-phone text-xl"></i>
          </div>
          <div>
            <h3 class="font-semibold mb-1">Contact Details</h3>
            <p class="text-gray-600">Phone: {{ contactInfo.phone }}</p>
            <p class="text-gray-600">Email: {{ contactInfo.email }}</p>
          </div>
        </div>

        <!-- Business Hours -->
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
            <i class="fas fa-clock text-xl"></i>
          </div>
          <div>
            <h3 class="font-semibold mb-1">Business Hours</h3>
            <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p class="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p class="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactInfoComponent {
  protected readonly contactInfo = CONTACT_INFO;
}