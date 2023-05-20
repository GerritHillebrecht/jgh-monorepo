import {
  Controller,
  Keyboard,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';

export const sliderOptions = {
  keyboard: true,
  loopedSlides: 3,
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
  },
  loop: true,
  modules: [Pagination, Controller, Keyboard, Scrollbar],
} satisfies SwiperOptions;
