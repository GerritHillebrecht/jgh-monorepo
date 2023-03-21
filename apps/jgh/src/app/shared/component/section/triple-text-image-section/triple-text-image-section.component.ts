import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundGlowCircleDirective } from '../../../directive/mouse/background-glow-circle.directive';

@Component({
  selector: 'jgh-monorepo-triple-text-image-section',
  standalone: true,
  imports: [CommonModule, BackgroundGlowCircleDirective],
  templateUrl: './triple-text-image-section.component.html',
  styleUrls: ['./triple-text-image-section.component.scss'],
})
export class TripleTextImageSectionComponent {}
