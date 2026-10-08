import { Component } from '@angular/core';
import { projects, profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = projects;
  profile = profile;

  copiedNote = false;

  indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  showDemoContactAlert(): void {
    alert(`To schedule a live walkthrough of the Employee Management System, please drop an email to ${this.profile.email} or call ${this.profile.phoneDisplay}.`);
  }
}
