import { Component } from '@angular/core';
import { projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = projects;

  indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
