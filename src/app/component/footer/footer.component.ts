import { Component } from '@angular/core';
import { profile, socials } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  profile = profile;
  socials = socials;
  year = new Date().getFullYear();
}
