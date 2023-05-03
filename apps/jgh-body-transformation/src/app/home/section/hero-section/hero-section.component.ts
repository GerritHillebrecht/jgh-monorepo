import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../../shared/button/cta/cta.component';
import { PictureElementComponent } from '@jgh-lib/ui/image/picture-element/picture-element.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jgh-bt-hero-section',
  standalone: true,
  imports: [CommonModule, CtaComponent, PictureElementComponent, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  protected words = [
    'energy',
    'strength',
    'confidence',
    'health',
    'fitness',
    'happiness',
  ];

  wordsIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.wordsIndex++;
      if (this.wordsIndex >= this.words.length) {
        this.wordsIndex = 0;
      }
    }, 500);
  }
}
