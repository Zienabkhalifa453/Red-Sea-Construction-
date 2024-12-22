import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectImage } from '../../models/project.model';

@Component({
  selector: 'app-project-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative rounded-xl overflow-hidden shadow-lg bg-gray-900">
      <!-- Main Image Container -->
      <div class="relative aspect-[16/9] md:aspect-[21/9]">
        <!-- Current Image -->
        <img 
          [src]="currentImage.url" 
          [alt]="currentImage.caption"
          class="w-full h-full object-cover transition-all duration-500"
          [class.opacity-100]="!transitioning"
          [class.opacity-0]="transitioning"
        >
        
        <!-- Navigation Buttons -->
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
          <button 
            (click)="prevImage()"
            class="w-10 h-10 rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 flex items-center justify-center group"
            aria-label="Previous image"
          >
            <svg 
              class="w-6 h-6 transform transition-transform group-hover:-translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            (click)="nextImage()"
            class="w-10 h-10 rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 flex items-center justify-center group"
            aria-label="Next image"
          >
            <svg 
              class="w-6 h-6 transform transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Image Info Overlay -->
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6">
          <p class="text-white text-lg md:text-xl font-medium">{{ currentImage.caption }}</p>
          <div class="mt-2 flex items-center justify-between text-sm">
            <span class="text-accent">{{ currentImage.category }}</span>
            <span class="text-gray-300">{{ currentIndex + 1 }} / {{ images.length }}</span>
          </div>
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="bg-black/90 p-3">
        <div class="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
          @for (image of images; track image.url; let i = $index) {
            <button 
              (click)="showImage(i)"
              class="relative flex-shrink-0 rounded-md overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
              [class.ring-2]="i === currentIndex"
              [class.ring-accent]="i === currentIndex"
            >
              <img 
                [src]="image.url" 
                [alt]="image.caption"
                class="w-20 h-14 object-cover"
              >
              <div 
                class="absolute inset-0 bg-black/50 transition-opacity"
                [class.opacity-50]="i !== currentIndex"
                [class.opacity-0]="i === currentIndex"
              ></div>
            </button>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectSliderComponent {
  @Input() images: ProjectImage[] = [];
  
  protected currentIndex = 0;
  protected transitioning = false;

  protected get currentImage(): ProjectImage {
    return this.images[this.currentIndex];
  }

  protected prevImage(): void {
    if (this.images.length <= 1) return;
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.transitioning = false;
    }, 300);
  }

  protected nextImage(): void {
    if (this.images.length <= 1) return;
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.transitioning = false;
    }, 300);
  }

  protected showImage(index: number): void {
    if (index === this.currentIndex || index < 0 || index >= this.images.length) return;
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = index;
      this.transitioning = false;
    }, 300);
  }
}