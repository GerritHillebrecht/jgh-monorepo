import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { BlogHeroCardComponent } from '../../../blog/component/blog-hero-card/blog-hero-card.component';
import { BlogSlideComponent } from '../blog-slide/blog-slide.component';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export interface BlogSlide {
  image: string;
  backgroundColor?: 'transparent' | string;
  pulse?: boolean;
  fit?: 'cover' | 'contain';
  posX?: 'left' | 'center' | 'right' | 'string';
  posY?: 'top' | 'center' | 'bottom' | 'string';
  textContent?: {
    headline: string;
    subheadline: string;
    description?: string;
  };
}

@Component({
  selector: 'jgh-bt-blog-slider',
  standalone: true,
  imports: [
    CommonModule,
    HeadlineBlockComponent,
    BlogHeroCardComponent,
    BlogSlideComponent,
  ],
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
})
export class BlogSliderComponent implements AfterViewInit {
  protected previouslyActiveIndex = 0;
  protected activeIndex = 0;
  protected readonly slides: BlogSlide[] = [
    {
      image: 'assets/images/background/blog/info-block/block-1.jpg',
      posX: 'right',
      fit: 'contain',
      textContent: {
        headline: 'Get yours today',
        subheadline:
          '<span class="text-stone-700">New shakes at the bar</span>',
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
      },
    },
    {
      image: 'assets/images/background/blog/info-block/block-2.jpg',
      backgroundColor: '#1e1b4b',
      pulse: true,
      textContent: {
        headline: 'Get ready ',
        subheadline: '<span class="text-stone-50">The new x-fit area</span>',
        description: `200qm. 3 Towers. Unlimited possibilities.`,
      },
    },
    {
      image: 'assets/images/background/blog/hero/hero-1_1920.jpg',
      backgroundColor: '#450a0a',
      posY: 'top',
      textContent: {
        headline: 'Victoria Parkes',
        subheadline: 'your new gymbro',
        description: `Victoria is here and ready to help you reach your goals.`,
      },
    },
  ];

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => key === 'ArrowRight' || key === 'ArrowLeft')
      )
      .subscribe((key) => {
        if (key === 'ArrowRight') {
          this.nextSlide();
        }
        if (key === 'ArrowLeft') {
          this.previousSlide();
        }
      });
  }

  selectSlide(index: number): void {
    this.previouslyActiveIndex = this.activeIndex;
    this.activeIndex = index;
  }

  protected nextSlide(): void {
    this.previouslyActiveIndex = this.activeIndex;
    this.activeIndex =
      this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1;
  }

  protected previousSlide(): void {
    this.previouslyActiveIndex = this.activeIndex;
    this.activeIndex =
      this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1;
  }
}
