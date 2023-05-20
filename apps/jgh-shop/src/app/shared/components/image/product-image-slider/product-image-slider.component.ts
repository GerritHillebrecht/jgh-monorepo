import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';

@Component({
  selector: 'jgh-shop-product-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.scss'],
})
export class ProductImageSliderComponent implements AfterViewInit {
  @ViewChild('swiper') private swiperRef:
    | ElementRef<HTMLDivElement>
    | undefined;

  private readonly swiper = new Swiper('.swiper', {
    keyboard: {
      onlyInViewport: true,
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      snapOnRelease: true,
      enabled: true,
    },
    modules: [Navigation, Keyboard, Pagination, Scrollbar],
  });

  ngAfterViewInit(): void {
    if (this.swiperRef) {
      const parentElement = this.swiperRef.nativeElement.parentElement;

      if (parentElement) {
        const { offsetWidth, offsetHeight } = parentElement;

        this.assignStyle(this.swiperRef.nativeElement, {
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
    this.swiper.init();
  }

  private assignStyle(
    element: HTMLElement,
    styles: Partial<CSSStyleDeclaration>
  ) {
    Object.assign(element.style, styles);
  }
}
