import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectImage } from '../../../pages/projects/models/project.model';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative overflow-hidden rounded-2xl bg-gray-900">
      <!-- Main Image -->
      <div class="relative aspect-video">
        <img 
          [src]="currentImage.url" 
          [alt]="currentImage.caption"
          class="h-full w-full object-cover transition-transform duration-700"
          [class.opacity-100]="!transitioning"
          [class.opacity-0]="transitioning"
        >
        
        <!-- Navigation -->
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <button 
            class="rounded-full bg-accent/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-accent/50"
            (click)="prevImage()"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            class="rounded-full bg-accent/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-accent/50"
            (click)="nextImage()"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Caption -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
          <p class="text-lg text-white">{{ currentImage.caption }}</p>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-sm text-accent">{{ currentImage.category }}</p>
            <p class="text-sm text-gray-300">{{ currentIndex + 1 }} / {{ images.length }}</p>
          </div>
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="bg-black/90 p-4">
        <div class="flex gap-2 overflow-x-auto">
          @for (image of images; track image.url; let i = $index) {
            <button 
              class="relative flex-shrink-0 overflow-hidden rounded-lg transition-all hover:scale-105"
              [class.ring-2]="i === currentIndex"
              [class.ring-accent]="i === currentIndex"
              (click)="showImage(i)"
            >
              <img 
                [src]="image.url" 
                [alt]="image.caption"
                class="h-16 w-24 object-cover"
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
export class ImageSliderComponent {
  @Input() images: ProjectImage[] = [];
  protected currentIndex = 0;
  protected transitioning = false;

  protected get currentImage(): ProjectImage {
    return this.images[this.currentIndex];
  }

  protected prevImage(): void {
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.transitioning = false;
    }, 300);
  }

  protected nextImage(): void {
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.transitioning = false;
    }, 300);
  }

  protected showImage(index: number): void {
    if (index === this.currentIndex) return;
    this.transitioning = true;
    setTimeout(() => {
      this.currentIndex = index;
      this.transitioning = false;
    }, 300);
  }
}