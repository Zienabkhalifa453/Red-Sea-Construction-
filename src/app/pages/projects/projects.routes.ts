import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':id',
    component: ProjectDetailsComponent
  }
];