import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { skills, SkillItem } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = skills;
  categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Frameworks', label: 'Frameworks' },
    { id: 'Backend', label: 'Backend' },
    { id: 'WordPress', label: 'WordPress & CMS' },
    { id: 'AI Tools', label: 'AI Tools & IDEs' }
  ];
  activeCategory = 'all';

  constructor(private sanitizer: DomSanitizer) {}

  setCategory(catId: string): void {
    this.activeCategory = catId;
  }

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  get filteredSkills(): SkillItem[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter((s) => s.category === this.activeCategory);
  }
}
