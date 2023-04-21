import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHeroCardComponent } from '../../../blog/component/blog-hero-card/blog-hero-card.component';
import { BlogSlide } from '../blog-slider/blog-slider.component';

@Component({
  selector: 'jgh-bt-blog-slide',
  standalone: true,
  imports: [CommonModule, BlogHeroCardComponent],
  templateUrl: './blog-slide.component.html',
  styleUrls: ['./blog-slide.component.scss'],
})
export class BlogSlideComponent {
  @Input() image = 'assets/images/background/blog/info-block/block-1.jpg';
  protected slideOptions: Required<BlogSlide> = {
    image: this.image,
    backgroundColor: 'transparent',
    fit: 'cover',
    posX: 'center',
    posY: 'center',
    pulse: false,
    textContent: {
      headline: 'Get yours today',
      subheadline: 'New shakes at the bar',
      description: 'Now with 🍓strawberry,  🍌banana and  🍫chocolate flavor.',
    },
  };
  @Input() set options(options: Partial<Omit<BlogSlide, 'backgroundColor'>>) {
    this.slideOptions = {
      ...this.slideOptions,
      ...options,
    };
  }
}
