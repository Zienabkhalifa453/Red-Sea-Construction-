import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-categories',
  standalone: true,
  template: `
    <div 
      class="flex flex-wrap justify-center gap-4 mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      @for (category of categories; track category) {
        <button
          class="px-6 py-2 rounded-full transition-all duration-300"
          [class.bg-accent]="selectedCategory === category"
          [class.text-white]="selectedCategory === category"
          [class.bg-gray-100]="selectedCategory !== category"
          [class.hover:bg-accent-light]="selectedCategory !== category"
          [class.hover:text-white]="selectedCategory !== category"
          (click)="onSelect(category)"
        >
          {{ category }}
        </button>
      }
    </div>
  `
})
export class ProjectCategoriesComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  onSelect(category: string) {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }
}