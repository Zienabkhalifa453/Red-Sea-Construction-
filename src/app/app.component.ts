import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingService } from './services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    LanguageSwitcherComponent,
    LoadingSpinnerComponent
  ],
  template: `
    @if (loading$ | async) {
      <app-loading-spinner />
    }
    <app-header />
    <router-outlet />
    <app-footer />
    <app-language-switcher class="fixed bottom-4 right-4 z-50" />
  `
})
export class AppComponent implements OnInit {
  protected loading$ = this.loadingService.isLoading$;

  constructor(
    private translate: TranslateService,
    private loadingService: LoadingService
  ) {
    // Set default language
    translate.setDefaultLang('en');
    translate.use('en');

    // Add languages
    translate.addLangs(['en', 'ar']);

    // Get browser language
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');

    // Hide loading spinner after initial load
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loadingService.hide();
      }, 1000); // Add a small delay for smoother transition
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
}