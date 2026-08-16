import { Component } from '@angular/core';
import { education, experience, profile, socials } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profile = profile;
  experience = experience;
  education = education;
  socials = socials;
}
