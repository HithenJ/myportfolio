import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  words: string[] = ['Front End Development', 'Back End Development'];
  displayText: string = '';
  constructor() { }

   private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];
    
    if (!this.isDeleting && this.charIndex <= currentWord.length) {
      this.displayText = currentWord.substring(0, this.charIndex++);
    } else if (this.isDeleting && this.charIndex >= 0) {
      this.displayText = currentWord.substring(0, this.charIndex--);
    }

    if (this.charIndex === currentWord.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000); // pause at full word
      return;
    } else if (this.charIndex === -1) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 60 : 100);
  }
}

