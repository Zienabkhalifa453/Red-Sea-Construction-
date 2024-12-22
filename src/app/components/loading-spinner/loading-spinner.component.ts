import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 backdrop-blur-sm">
      <div class="relative">
        <!-- Outer Ring -->
        <div class="absolute inset-0 rounded-full border-8 border-accent/20"></div>
        
        <!-- Spinning Ring -->
        <div class="w-32 h-32 border-8 border-accent border-t-transparent rounded-full animate-spin"></div>
        
        <!-- Inner Content -->
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <!-- Logo -->
          <div class="text-2xl font-bold text-accent mb-2 animate-pulse">RSC</div>
          
          <!-- Loading Text -->
          <div class="flex space-x-1">
            @for (dot of loadingDots; track dot) {
              <div 
                class="w-2 h-2 bg-accent rounded-full animate-bounce"
                [style.animation-delay]="dot * 0.1 + 's'"
              ></div>
            }
          </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute -inset-4">
          <div class="absolute inset-0 rounded-full bg-accent/5 animate-pulse" style="animation-delay: 0.5s"></div>
          <div class="absolute inset-0 rounded-full bg-accent/5 animate-pulse" style="animation-delay: 1s"></div>
        </div>
      </div>

      <!-- Loading Text -->
      <div class="absolute bottom-8 left-0 right-0 text-center">
        <p class="text-white/90 text-lg font-medium">Loading</p>
        <p class="text-accent/80 text-sm mt-1">Building Excellence</p>
      </div>
    </div>
  `,
  styles: [`
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `]
})
export class LoadingSpinnerComponent {
  protected readonly loadingDots = [0, 1, 2]; // For the bouncing dots animation
}