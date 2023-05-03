import {
  AfterViewInit,
  Component,
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

interface Slide {
  thumb: {
    src: string;
    tags: string[];
    fit?: 'cover' | 'contain';
    posX?: 'center' | 'left' | 'right';
    posY?: 'center' | 'top' | 'bottom';
  };
  image: {
    src: string;
    fit?: 'cover' | 'contain';
    posX?: 'center' | 'left' | 'right';
    posY?: 'center' | 'top' | 'bottom';
    backgroundColor?: string | 'transparent';
  };
  title: string;
  subtitle: string;
}

@Component({
  selector: 'jgh-monorepo-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LeadingZeroPipe],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef: Swiper | undefined;

  protected activeSlideIndex = 1;

  protected readonly btnPrevious = faAngleLeft;
  protected readonly btnNext = faAngleRight;
  protected readonly openLink = faUpRightFromSquare;

  private readonly swiper = new Swiper('.gallery-slider', {
    keyboard: true,
    loopedSlides: 3,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false,
    },
    on: {
      slideChange: (swiper) => {
        this.activeSlideIndex = swiper.realIndex + 1;
      },
    },
    loop: true,
    modules: [Pagination, Controller, Keyboard, Scrollbar],
  });

  private readonly thumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: false,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    loop: true,
    modules: [Controller, Navigation],
  });

  protected readonly slides: Slide[] = [
    // Gymbros
    {
      thumb: {
        tags: ['Gym', 'Fitness', 'Workout'],
        src: 'assets/images/home/gymbro-image.jpg',
      },
      image: {
        src: 'https://firebasestorage.googleapis.com/v0/b/jgh-dev.appspot.com/o/images%2Fslider%2Fjgh%2Fblock-4.jpg?alt=media&token=550079a6-6530-497f-8f2b-f960a61c2a84',
      },
      title: 'Meet your Gymbros',
      subtitle: 'Get ready to unleash your full potential and achieve your fitness goals at our state-of-the-art fitness studio - with expert trainers, personalized workout plans, and a supportive community, we\'ll help you transform your body and life, so join now and start your journey towards a healthier, happier you!',
    },

    // Teams
    {
      thumb: {
        tags: ['Social', 'Teams', 'Chat'],
        src: 'assets/images/home/teams-thumb-2.jpg',
      },
      image: {
        src: 'assets/images/home/teams-image.jpg',
        fit: 'contain',
        posX: 'left',
        backgroundColor: 'rgb(12, 29, 55)',
      },
      title: 'Always connected',
      subtitle:
        'Expand your network: Social media lets you connect with people worldwide, helping you grow your network and stay in touch with friends, family, and colleagues.',
    },

    // Bionic Reading
    {
      thumb: {
        tags: ['Reading', 'Improvement', 'Selfcare'],
        src: 'assets/images/home/br.jpg',
        posY: 'top',
      },
      image: {
        src: 'assets/images/home/br-image.jpg',
        backgroundColor: 'rgb(243, 242, 247)',
        fit: 'contain',
        posX: 'left',
      },
      title: 'Read even faster',
      subtitle: 'Find your next workout partner',
    },
    {
      thumb: {
        tags: ['Gym', 'Fitness', 'Workout'],
        src: 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
      },
      image: {
        src: 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
      },
      title: 'Meet your Gymbros',
      subtitle: 'Find your next workout partner',
    },
    {
      thumb: {
        tags: ['Gym', 'Fitness', 'Workout'],
        src: 'https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      title: 'Meet your Gymbros',
      subtitle: 'Find your next workout partner',
    },
    {
      thumb: {
        tags: ['Gym', 'Fitness', 'Workout'],
        src: 'https://images.unsplash.com/photo-1682946617589-752f065bf7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1682946617589-752f065bf7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      title: 'Meet your Gymbros',
      subtitle: 'Find your next workout partner',
    },
    {
      thumb: {
        tags: ['Gym', 'Fitness', 'Workout'],
        src: 'https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      title: 'Meet your Gymbros',
      subtitle: 'Find your next workout partner',
    },

    // 'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    // 'https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
    // 'https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    // 'https://images.unsplash.com/photo-1682946617589-752f065bf7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    // 'https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  ];

  ngAfterViewInit(): void {
    this.swiper.init();
    this.thumbs.init();

    this.swiper.controller.control = this.thumbs;
    this.thumbs.controller.control = this.swiper;
  }
}
