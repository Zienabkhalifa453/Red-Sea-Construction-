import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    // Initialize with browser language or default to English
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'ar' ? 'ar' : 'en';
    this.setLanguage(defaultLang as Language);
  }

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
  }

  getCurrentLang(): Language {
    return this.currentLang.value;
  }
}