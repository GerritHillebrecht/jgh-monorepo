import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';

@Component({
  selector: 'jgh-bt-gym-layout',
  templateUrl: './gym-layout.component.html',
  styleUrls: ['./gym-layout.component.scss'],
})
export class GymLayoutComponent implements OnInit, AfterViewInit {
  @ViewChildren('.slide') slides: QueryList<HTMLDivElement> | undefined;

  location = faLocationDot;

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

  ngOnInit(): void {
    this.swiper.init();
  }

  ngAfterViewInit(): void {
    console.log('GymLayoutComponent ngAfterViewInit');
  }
}
