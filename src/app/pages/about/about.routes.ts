import { Routes } from '@angular/router';

export const aboutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.component')
      .then(m => m.HistoryComponent)
  },
  {
    path: 'awards',
    loadComponent: () => import('./awards/awards.component')
      .then(m => m.AwardsComponent)
  },
  {
    path: 'vision',
    loadComponent: () => import('./vision/vision.component')
      .then(m => m.VisionComponent)
  }
];