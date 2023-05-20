import { Controller, Navigation, SwiperOptions } from 'swiper';

export const thumbsOptions = {
  slidesPerView: 'auto',
  centeredSlides: false,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  loop: true,
  modules: [Controller, Navigation],
} satisfies SwiperOptions;
