import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectImage } from '../../../models/project.model';
import { ImageSliderComponent } from '../../../../../shared/components/image-slider/image-slider.component';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent],
  template: `
    <section class="space-y-12">
      <h2 class="text-3xl font-bold text-center">Project Gallery</h2>
      
      <!-- Main Slider -->
      <app-image-slider [images]="filteredImages" />
      
      <!-- Category Filters -->
      <div class="flex justify-center gap-4">
        @for (category of categories; track category) {
          <button
            class="rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
            [class.bg-blue-600]="selectedCategory === category"
            [class.text-white]="selectedCategory === category"
            [class.bg-gray-100]="selectedCategory !== category"
            [class.hover:bg-gray-200]="selectedCategory !== category"
            (click)="selectCategory(category)"
          >
            {{ category.charAt(0).toUpperCase() + category.slice(1) }}
          </button>
        }
      </div>

      <!-- Grid View -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (image of filteredImages; track image.url) {
          <div 
            class="group relative aspect-video cursor-pointer overflow-hidden rounded-xl"
            (click)="openImage(image)"
          >
            <img 
              [src]="image.url" 
              [alt]="image.caption"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p class="text-sm">{{ image.caption }}</p>
                <p class="text-xs text-gray-300">{{ image.category }}</p>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Lightbox -->
      @if (selectedImage) {
        <div 
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          (click)="closeImage()"
        >
          <div class="relative max-w-5xl p-4">
            <img 
              [src]="selectedImage.url" 
              [alt]="selectedImage.caption"
              class="max-h-[85vh] w-auto rounded-lg"
            >
            <div class="mt-4 text-center text-white">
              <p class="text-lg">{{ selectedImage.caption }}</p>
              <p class="text-sm text-gray-400">{{ selectedImage.category }}</p>
            </div>
            <button 
              class="absolute -top-2 -right-2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              (click)="closeImage()"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      }
    </section>
  `
})
export class ProjectGalleryComponent {
  @Input() images: ProjectImage[] = [];
  
  protected categories = ['all', 'exterior', 'interior', 'construction'];
  protected selectedCategory = 'all';
  protected selectedImage: ProjectImage | null = null;

  protected get filteredImages(): ProjectImage[] {
    if (this.selectedCategory === 'all') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  protected selectCategory(category: string) {
    this.selectedCategory = category;
  }

  protected openImage(image: ProjectImage) {
    this.selectedImage = image;
  }

  protected closeImage() {
    this.selectedImage = null;
  }
}