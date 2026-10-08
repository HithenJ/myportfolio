import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { profile, socials } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  profile = profile;
  socials = socials;

  activeRole = '';
  activeTab: 'config' | 'metrics' | 'stack' = 'config';
  copiedEmail = false;
  isMobile = false;

  constructor() {
    this.checkMobile();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 576;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
  }

  private roleIndex = 0;
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

  setTab(tab: 'config' | 'metrics' | 'stack'): void {
    this.activeTab = tab;
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.copiedEmail = true;
      setTimeout(() => (this.copiedEmail = false), 2500);
    });
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private typeEffect(): void {
    const currentRole = this.profile.roles[this.roleIndex];

    if (!this.isDeleting && this.charIndex <= currentRole.length) {
      this.activeRole = currentRole.substring(0, this.charIndex++);
    } else if (this.isDeleting && this.charIndex >= 0) {
      this.activeRole = currentRole.substring(0, this.charIndex--);
    }

    if (this.charIndex === currentRole.length + 1) {
      this.isDeleting = true;
      this.timeoutId = setTimeout(() => this.typeEffect(), 1400);
      return;
    }

    if (this.charIndex === -1) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.profile.roles.length;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), this.isDeleting ? 45 : 90);
  }
}
