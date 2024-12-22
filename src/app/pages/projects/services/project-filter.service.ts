import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { SAMPLE_PROJECTS } from '../data/sample-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectFilterService {
  private projects: Project[] = SAMPLE_PROJECTS;

  getAllProjects(): Project[] {
    return this.projects;
  }

  getFilteredProjects(category: string): Project[] {
    if (category === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === category);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}