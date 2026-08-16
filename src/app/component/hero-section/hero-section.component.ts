import { Component, OnDestroy, OnInit } from '@angular/core';
import { profile, socials } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  profile = profile;
  socials = socials;
  displayText = '';

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeEffect(): void {
    const currentWord = this.profile.roles[this.wordIndex];

    if (!this.isDeleting && this.charIndex <= currentWord.length) {
      this.displayText = currentWord.substring(0, this.charIndex++);
    } else if (this.isDeleting && this.charIndex >= 0) {
      this.displayText = currentWord.substring(0, this.charIndex--);
    }

    if (this.charIndex === currentWord.length + 1) {
      this.isDeleting = true;
      this.timeoutId = setTimeout(() => this.typeEffect(), 1100);
      return;
    }

    if (this.charIndex === -1) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.profile.roles.length;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : 95);
  }
}
