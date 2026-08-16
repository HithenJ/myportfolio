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
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  private updateScrollState(): void {
    this.isScrolled = window.scrollY > 24;
    const ids = this.links.map((link) => link.id);
    let current = 'hero';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) {
        current = id;
      }
    }
    this.activeSection = current;
  }
}
