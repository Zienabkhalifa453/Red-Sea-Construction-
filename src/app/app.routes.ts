import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent) 
  },
  { 
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.routes')
      .then(m => m.projectRoutes)
  },
  { 
    path: 'services',
    loadComponent: () => import('./pages/services/services.component')
      .then(m => m.ServicesComponent)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes')
      .then(m => m.aboutRoutes)
  },
  { 
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/career/career.component')
      .then(m => m.CareerComponent)
  }
];