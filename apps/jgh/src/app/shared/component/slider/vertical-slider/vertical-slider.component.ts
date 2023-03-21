import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper, {
  Autoplay,
  EffectCube,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';

@Component({
  selector: 'jgh-monorepo-vertical-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
})
export class VerticalSliderComponent implements OnInit {
  protected swiper: Swiper = new Swiper('.swiper', {
    direction: 'vertical',
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: true,
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  });

  ngOnInit(): void {
    this.swiper.init();
  }
}
