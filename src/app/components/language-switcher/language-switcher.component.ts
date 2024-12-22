import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleLanguage()"
      class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors"
      [class.space-x-reverse]="currentLang === 'ar'"
    >
      <i class="fas fa-globe"></i>
      <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
    </button>
  `
})
export class LanguageSwitcherComponent {
  protected currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  protected toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    this.currentLang = newLang;
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', newLang === 'ar');
  }
}