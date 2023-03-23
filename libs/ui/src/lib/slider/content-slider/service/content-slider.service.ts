import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { images } from '../example.images';

type SlideIndex = 'active' | 'previous';
export interface ContentSliderSlide {
  image?: string;
  body: {
    title: string;
    subtitle: string;
    text: string;
    tags?: string[];
  };
  cta: {
    text: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ContentSliderService {
  selectedSlides = new Map<SlideIndex, number>([
    ['active', 0],
    ['previous', 0],
  ]);

  readonly slideIndexChange$ = new BehaviorSubject<number>(0);

  settings = {
    initialized: false,
    amounts: {
      elements: 10,
      slides: 5,
    },
    defaults: {
      images,
      delayBetweenSlides: 100,
    },
  };

  slides = [
    {
      image: this.settings.defaults.images[5],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`]
      },
      cta: {
        text: `View Project`,
      },
    },
    ...Array.from({ length: this.settings.amounts.slides }, (_, index) => {
      const slide: ContentSliderSlide = {
        image: this.settings.defaults.images[index],
        body: {
          title: `Lewis creativity Studio`,
          subtitle: `Branding & Interaction`,
          text: `We create high quality products to help the life of our clients and their customers.`,
        },
        cta: {
          text: `View Project`,
        },
      };
      return slide;
    }),
  ];

  slices = Array.from(
    { length: this.settings.amounts.elements },
    (_, index) => index
  );

  animationDelays: string[] = Array.from(
    { length: this.settings.amounts.elements },
    (_, index) => index
  ).map((index) => {
    const half = Math.ceil(this.settings.amounts.elements / 2);
    return `${
      Math.round(index < half ? index : half - (index - half + 1)) *
      this.settings.defaults.delayBetweenSlides
    }ms`;
  });

  selectSlide(index: number): void {
    this.slideIndexChange$.next(index);
    this.selectedSlides.set('previous', this.selectedSlides.get('active') || 0);
    this.selectedSlides.set('active', index);
  }

  nextSlide(): void {
    const activeIndex = this.selectedSlides.get('active') || 0;
    const nextSlide =
      activeIndex === this.slides.length - 1 ? 0 : activeIndex + 1;
    this.slideIndexChange$.next(nextSlide);
    this.selectedSlides.set('previous', activeIndex);
    this.selectedSlides.set('active', nextSlide);
  }

  previousSlide(): void {
    const activeIndex = this.selectedSlides.get('active') || 0;
    const nextSlide =
      activeIndex === 0 ? this.slides.length - 1 : activeIndex - 1;
    this.slideIndexChange$.next(nextSlide);
    this.selectedSlides.set('previous', activeIndex);
    this.selectedSlides.set('active', nextSlide);
  }
}
