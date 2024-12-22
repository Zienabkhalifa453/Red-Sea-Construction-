import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div class="pt-8 border-t border-white/10">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/60 text-sm mb-4 md:mb-0">
          © {{ currentYear }} {{ 'footer.copyright' | translate }}
        </p>
        <div class="flex space-x-6">
          <a 
            routerLink="/privacy"
            class="text-white/60 hover:text-accent text-sm transition-colors"
          >
            {{ 'footer.privacy' | translate }}
          </a>
          <a 
            routerLink="/terms"
            class="text-white/60 hover:text-accent text-sm transition-colors"
          >
            {{ 'footer.terms' | translate }}
          </a>
        </div>
      </div>
    </div>
  `
})
export class BottomBarComponent {
  protected readonly currentYear = new Date().getFullYear();
}