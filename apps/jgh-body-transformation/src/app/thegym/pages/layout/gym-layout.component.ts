import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { PictureBlockElement } from '@jgh-lib/ui/design blocks/picture-block/picture-block.component';
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';

@Component({
  selector: 'jgh-bt-gym-layout',
  templateUrl: './gym-layout.component.html',
  styleUrls: ['./gym-layout.component.scss'],
})
export class GymLayoutComponent implements OnInit, AfterViewInit {
  @ViewChildren('.slide') slides: QueryList<HTMLDivElement> | undefined;

  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // configure Swiper to use modules
    modules: [Navigation, Pagination, Keyboard],
  });

  images: (PictureBlockElement | string)[] = [
    'https://images.unsplash.com/photo-1675379067601-252f63636654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    'https://images.unsplash.com/photo-1530598784845-fb5b89c7abda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://plus.unsplash.com/premium_photo-1661897141033-eeb71b5e76b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1675379067601-252f63636654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    'https://plus.unsplash.com/premium_photo-1661897141033-eeb71b5e76b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1530598784845-fb5b89c7abda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  ];

  ngOnInit(): void {
    console.log('GymLayoutComponent');
  }

  ngAfterViewInit(): void {
    this.swiper.init();
    const slides = document.querySelectorAll('.slide');
    console.log('slides', this.slides?.toArray());
  }
}
