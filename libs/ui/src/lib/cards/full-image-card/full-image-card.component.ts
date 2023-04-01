import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Image {
  webp?: string;
  avif?: string;
  jpg: string;
}

@Component({
  selector: 'jgh-lib-full-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-image-card.component.html',
  styleUrls: ['./full-image-card.component.scss'],
})
export class FullImageCardComponent {
  @Input() image: Image = { jpg: 'assets/images/courses/cardio.jpg' };
}
