import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from '../chip/chip.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { BlogSlide } from '../../../shared/blog/blog-slider/blog-slider.component';

@Component({
  selector: 'jgh-bt-blog-hero-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, ChipComponent, HeadlineBlockComponent],
  templateUrl: './blog-hero-card.component.html',
  styleUrls: ['./blog-hero-card.component.scss'],
})
export class BlogHeroCardComponent {
  @Input() image = 'assets/images/background/blog/hero/hero-1_1920.jpg';
  @Input() fit: 'cover' | 'contain' = 'cover';
  @Input() posX: 'left' | 'center' | 'right' | 'string' = 'center';
  @Input() posY: 'top' | 'center' | 'bottom' | 'string' = 'center';
  @Input() backgroundColor: 'transparent' | string = 'transparent';
  @Input() pulse = false;
  @Input() textContent: BlogSlide['textContent'] = {
    headline: 'Get yours today',
    subheadline: 'New shakes at the bar',
    description: `Now with
    <span class="text-rose-400 font-bold opacity-100 uppercase">
      🍓strawberry </span
    >,
    <span class="text-orange-300 font-bold opacity-100 uppercase">
      🍌banana</span
    >, and
    <span class="text-amber-800 font-bold opacity-100 uppercase">
      🍫chocolate</span
    >
    flavor.`,
  };
}
