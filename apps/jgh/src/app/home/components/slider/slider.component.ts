import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, {
  Controller,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { LeadingZeroPipe } from '@jgh-lib/utility/leading-zero/leading-zero.pipe';
import { Slide } from './model/slide.model';
import { sliderOptions } from './constants/swiper.options';
import { thumbsOptions } from './constants/thumbs.opitons';
import { slides } from './constants/slides';

@Component({
  selector: 'jgh-monorepo-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LeadingZeroPipe],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements AfterViewInit {
  @Input() height = '100vh';

  protected readonly slides: Slide[] = slides;
  protected activeSlideIndex = 1;

  protected readonly btnPrevious = faAngleLeft;
  protected readonly btnNext = faAngleRight;
  protected readonly openLink = faUpRightFromSquare;

  private readonly thumbs = new Swiper('.gallery-thumbs', thumbsOptions);
  private readonly swiper = new Swiper('.gallery-slider', {
    ...sliderOptions,
    on: {
      slideChange: (swiper) => {
        this.activeSlideIndex = swiper.realIndex + 1;
      },
    },
  });

  ngAfterViewInit(): void {
    this.swiper.init();
    this.thumbs.init();

    this.swiper.controller.control = this.thumbs;
    this.thumbs.controller.control = this.swiper;
  }
}
