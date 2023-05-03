import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, {
  Autoplay,
  Controller,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';

@Component({
  selector: 'jgh-monorepo-full-width-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-width-slider.component.html',
  styleUrls: ['./full-width-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FullWidthSliderComponent implements OnInit, AfterViewInit {
  protected readonly thumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    modules: [
      Controller,
      Pagination,
      Navigation,
      Scrollbar,
      Autoplay,
      Keyboard,
    ],
  });

  protected readonly slider = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    loop: true,
    // loopedSlides: 6,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    modules: [
      Controller,
      Pagination,
      Navigation,
      Scrollbar,
      Autoplay,
      Keyboard,
    ],
  });

  ngOnInit(): void {
    this.slider.init();
    this.thumbs.init();
  }

  ngAfterViewInit(): void {
    this.slider.controller.control = this.thumbs;
    this.thumbs.controller.control = this.slider;
    console.log('Full Width Slider View Initialized');
  }
}
