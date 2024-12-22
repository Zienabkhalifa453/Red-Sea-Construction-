import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive, 
    TranslateModule, 
    LanguageSwitcherComponent
  ],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300"
      [class.shadow-lg]="isScrolled"
    >
      <nav class="bg-primary text-white">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-2">
            <!-- Logo -->
            <a [routerLink]="'/'" class="flex items-center py-2">
              <img 
                src="assets/images/logo.png" 
                alt="Red Sea Construction"
                class="h-16 w-auto"
              >
            </a>

            <!-- Mobile Menu Button -->
            <button 
              class="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              (click)="toggleMobileMenu()"
              aria-label="Toggle menu"
            >
              <i [class]="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
            </button>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-6">
              <!-- Main Nav Links -->
              <ul class="flex space-x-6">
                <li>
                  <a 
                    routerLink="/" 
                    routerLinkActive="text-accent"
                    [routerLinkActiveOptions]="{exact: true}"
                    class="hover:text-accent transition-colors"
                  >
                    {{ 'header.menu.home' | translate }}
                  </a>
                </li>
                <li>
                  <a 
                    routerLink="/projects" 
                    routerLinkActive="text-accent"
                    class="hover:text-accent transition-colors"
                  >
                    {{ 'header.menu.projects' | translate }}
                  </a>
                </li>
                <li>
                  <a 
                    routerLink="/services" 
                    routerLinkActive="text-accent"
                    class="hover:text-accent transition-colors"
                  >
                    {{ 'header.menu.services' | translate }}
                  </a>
                </li>
                <li class="relative group">
                  <a 
                    routerLink="/about" 
                    routerLinkActive="text-accent"
                    class="hover:text-accent transition-colors flex items-center"
                  >
                    {{ 'header.menu.about' | translate }}
                    <svg 
                      class="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </a>
                  <!-- Dropdown Menu -->
                  <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                    <div class="py-2">
                      <a 
                        routerLink="/about" 
                        routerLinkActive="bg-accent/10 text-accent"
                        [routerLinkActiveOptions]="{exact: true}"
                        class="block px-4 py-2 text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {{ 'header.aboutSubmenu.overview' | translate }}
                      </a>
                      <a 
                        routerLink="/about/history" 
                        routerLinkActive="bg-accent/10 text-accent"
                        class="block px-4 py-2 text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {{ 'header.aboutSubmenu.history' | translate }}
                      </a>
                      <a 
                        routerLink="/about/awards" 
                        routerLinkActive="bg-accent/10 text-accent"
                        class="block px-4 py-2 text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {{ 'header.aboutSubmenu.awards' | translate }}
                      </a>
                      <a 
                        routerLink="/about/vision" 
                        routerLinkActive="bg-accent/10 text-accent"
                        class="block px-4 py-2 text-gray-800 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {{ 'header.aboutSubmenu.vision' | translate }}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a 
                    routerLink="/careers" 
                    routerLinkActive="text-accent"
                    class="hover:text-accent transition-colors"
                  >
                    {{ 'header.menu.careers' | translate }}
                  </a>
                </li>
                <li>
                  <a 
                    routerLink="/contact" 
                    routerLinkActive="text-accent"
                    class="hover:text-accent transition-colors"
                  >
                    {{ 'header.menu.contact' | translate }}
                  </a>
                </li>
              </ul>
              
              <!-- Language Switcher -->
              <app-language-switcher />
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div 
          class="lg:hidden"
          [class.h-0]="!isMobileMenuOpen"
          [class.h-auto]="isMobileMenuOpen"
          [class.opacity-0]="!isMobileMenuOpen"
          [class.opacity-100]="isMobileMenuOpen"
          [class.invisible]="!isMobileMenuOpen"
          [class.visible]="isMobileMenuOpen"
          class="transition-all duration-300 overflow-hidden"
        >
          <div class="container mx-auto px-4 py-4 border-t border-white/10">
            <ul class="space-y-4">
              <li>
                <a 
                  routerLink="/" 
                  routerLinkActive="text-accent"
                  [routerLinkActiveOptions]="{exact: true}"
                  class="block py-2 hover:text-accent transition-colors"
                  (click)="closeMobileMenu()"
                >
                  {{ 'header.menu.home' | translate }}
                </a>
              </li>
              <li>
                <a 
                  routerLink="/projects" 
                  routerLinkActive="text-accent"
                  class="block py-2 hover:text-accent transition-colors"
                  (click)="closeMobileMenu()"
                >
                  {{ 'header.menu.projects' | translate }}
                </a>
              </li>
              <li>
                <a 
                  routerLink="/services" 
                  routerLinkActive="text-accent"
                  class="block py-2 hover:text-accent transition-colors"
                  (click)="closeMobileMenu()"
                >
                  {{ 'header.menu.services' | translate }}
                </a>
              </li>
              <li>
                <button 
                  class="w-full flex items-center justify-between py-2 hover:text-accent transition-colors"
                  (click)="toggleMobileSubmenu()"
                >
                  <span>{{ 'header.menu.about' | translate }}</span>
                  <svg 
                    class="w-4 h-4 transform transition-transform"
                    [class.rotate-180]="isMobileSubmenuOpen"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <!-- Mobile Submenu -->
                <div 
                  class="pl-4 space-y-2 overflow-hidden transition-all duration-300"
                  [class.h-0]="!isMobileSubmenuOpen"
                  [class.h-auto]="isMobileSubmenuOpen"
                  [class.opacity-0]="!isMobileSubmenuOpen"
                  [class.opacity-100]="isMobileSubmenuOpen"
                  [class.mt-0]="!isMobileSubmenuOpen"
                  [class.mt-2]="isMobileSubmenuOpen"
                >
                  <a 
                    routerLink="/about" 
                    routerLinkActive="text-accent"
                    [routerLinkActiveOptions]="{exact: true}"
                    class="block py-2 hover:text-accent transition-colors"
                    (click)="closeMobileMenu()"
                  >
                    {{ 'header.aboutSubmenu.overview' | translate }}
                  </a>
                  <a 
                    routerLink="/about/history" 
                    routerLinkActive="text-accent"
                    class="block py-2 hover:text-accent transition-colors"
                    (click)="closeMobileMenu()"
                  >
                    {{ 'header.aboutSubmenu.history' | translate }}
                  </a>
                  <a 
                    routerLink="/about/awards" 
                    routerLinkActive="text-accent"
                    class="block py-2 hover:text-accent transition-colors"
                    (click)="closeMobileMenu()"
                  >
                    {{ 'header.aboutSubmenu.awards' | translate }}
                  </a>
                  <a 
                    routerLink="/about/vision" 
                    routerLinkActive="text-accent"
                    class="block py-2 hover:text-accent transition-colors"
                    (click)="closeMobileMenu()"
                  >
                    {{ 'header.aboutSubmenu.vision' | translate }}
                  </a>
                </div>
              </li>
              <li>
                <a 
                  routerLink="/careers" 
                  routerLinkActive="text-accent"
                  class="block py-2 hover:text-accent transition-colors"
                  (click)="closeMobileMenu()"
                >
                  {{ 'header.menu.careers' | translate }}
                </a>
              </li>
              <li>
                <a 
                  routerLink="/contact" 
                  routerLinkActive="text-accent"
                  class="block py-2 hover:text-accent transition-colors"
                  (click)="closeMobileMenu()"
                >
                  {{ 'header.menu.contact' | translate }}
                </a>
              </li>
              <li class="pt-4 border-t border-white/10">
                <app-language-switcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Spacer to prevent content from hiding under fixed header -->
    <div class="h-20"></div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
      transition: all 0.3s ease;
    }

    .mobile-menu-enter-from,
    .mobile-menu-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `]
})
export class HeaderComponent {
  protected isScrolled = false;
  protected isMobileMenuOpen = false;
  protected isMobileSubmenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  protected toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isMobileSubmenuOpen = false;
    }
  }

  protected toggleMobileSubmenu() {
    this.isMobileSubmenuOpen = !this.isMobileSubmenuOpen;
  }

  protected closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isMobileSubmenuOpen = false;
  }
}