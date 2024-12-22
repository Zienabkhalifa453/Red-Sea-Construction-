import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-statement',
  standalone: true,
  template: `
    <section class="mb-16 text-center max-w-3xl mx-auto">
      <h3 class="text-3xl font-bold mb-6">Our Vision</h3>
      <p class="text-xl text-gray-600 leading-relaxed">
        To be the leading construction and development company in the Middle East,
        known for innovative solutions, sustainable practices, and transformative projects
        that shape the future of urban development.
      </p>
    </section>
  `
})
export class VisionStatementComponent {}