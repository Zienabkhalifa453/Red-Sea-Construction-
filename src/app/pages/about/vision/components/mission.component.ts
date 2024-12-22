import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  standalone: true,
  template: `
    <section class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Our Mission</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (point of missionPoints; track point.title) {
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-4">{{ point.title }}</h4>
            <p class="text-gray-600">{{ point.description }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class MissionComponent {
  protected readonly missionPoints = [
    {
      title: 'Excellence in Construction',
      description: 'Deliver high-quality construction projects that exceed client expectations through innovative solutions and attention to detail.'
    },
    {
      title: 'Sustainable Development',
      description: 'Lead the industry in sustainable construction practices and environmentally conscious development solutions.'
    },
    {
      title: 'Community Impact',
      description: 'Create lasting value for communities through thoughtful development and responsible construction practices.'
    }
  ];
}