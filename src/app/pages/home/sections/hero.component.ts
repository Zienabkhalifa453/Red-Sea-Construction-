import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  template: `
    <section class="relative min-h-screen flex flex-col justify-between items-center overflow-hidden">
      <!-- Background Video -->
      <div class="absolute inset-0">
        <video 
          autoplay 
          muted 
          loop 
          playsinline 
          class="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        >
          <source src="https://player.vimeo.com/external/371834740.hd.mp4?s=c6170c3c2c22ea0c2e9362d583e3468f6b254049&profile_id=175" type="video/mp4">
        </video>
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
        <div class="max-w-4xl" data-aos="fade-up">
          <!-- Welcome Text -->
          <div 
            class="text-accent font-semibold mb-4 tracking-wider animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ 'home.hero.welcome' | translate }}
          </div>

          <!-- Main Title -->
          <h1 
            class="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {{ 'home.hero.title' | translate }}
          </h1>

          <!-- Subtitle -->
          <p 
            class="text-xl md:text-2xl mb-8 text-white/90"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {{ 'home.hero.subtitle' | translate }}
          </p>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a 
              routerLink="/contact" 
              class="group relative px-8 py-4 rounded-lg text-lg font-semibold overflow-hidden"
            >
              <div class="absolute inset-0 bg-accent transition-all duration-300 group-hover:scale-105"></div>
              <span class="relative text-white flex items-center">
                {{ 'home.hero.cta.startProject' | translate }}
                <i class="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i>
              </span>
            </a>
            <a 
              routerLink="/projects" 
              class="group relative px-8 py-4 rounded-lg text-lg font-semibold overflow-hidden"
            >
              <div class="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105"></div>
              <span class="relative text-white flex items-center">
                {{ 'home.hero.cta.viewWork' | translate }}
                <i class="fas fa-external-link-alt ml-2 transform transition-transform group-hover:translate-x-1"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="mb-4 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div class="w-8 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center">
          <div class="w-2 h-2 bg-accent rounded-full animate-scroll"></div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  `,
  styles: [`
    @keyframes scroll {
      0% { transform: translateY(0); opacity: 0; }
      50% { transform: translateY(20px); opacity: 1; }
      100% { transform: translateY(40px); opacity: 0; }
    }

    .animate-scroll {
      animation: scroll 2s ease-in-out infinite;
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroSectionComponent {}
