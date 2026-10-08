import { Component, HostListener, OnInit } from '@angular/core';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  isScrolled = false;
  activeSection = 'hero';
  profile = profile;

  links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-workflow', label: 'AI Workflow' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollState();
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    document.body.style.overflow = this.isMenuCollapsed ? '' : 'hidden';
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
    document.body.style.overflow = '';
  }

  scrollTo(id: string): void {
    this.closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateScrollState(): void {
    this.isScrolled = window.scrollY > 20;
    const ids = ['hero', 'about', 'skills', 'projects', 'ai-workflow', 'contact'];
    let current = 'hero';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          current = id;
        }
      }
    }
    this.activeSection = current;
  }
}
