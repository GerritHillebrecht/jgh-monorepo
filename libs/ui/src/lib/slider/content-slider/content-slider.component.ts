import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  ContentSliderSlideComponent as SlideComponent,
  ContentSliderPaginationComponent as PaginationComponent,
} from './components';
import { ContentSliderService, Slide } from './service';
import { GestureDirective } from './directive/gesture.directive';

@Component({
  selector: 'jgh-lib-content-slider',
  standalone: true,
  imports: [
    CommonModule,
    SlideComponent,
    PaginationComponent,
    GestureDirective,
  ],
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss'],
})
export class ContentSliderComponent implements OnInit {
  @Input() set setSlides(slides: Slide[] | null | undefined) {
    this.sliderService.slides = slides || [];
  }
  @Output() indexChange = new EventEmitter<number>();

  slides = this.sliderService.slides;

  constructor(protected readonly sliderService: ContentSliderService) {}

  ngOnInit(): void {
    // Emit Slider Index Changes
    this.sliderService.slideIndexChange$.subscribe((index) =>
      this.indexChange.emit(index)
    );

    // Register keyboard events
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => ['ArrowRight', 'ArrowLeft'].includes(key))
      )
      .subscribe((key) =>
        key === 'ArrowRight'
          ? this.sliderService.nextSlide()
          : this.sliderService.previousSlide()
      );
  }

  nextSlide(): void {
    this.sliderService.nextSlide();
  }

  previousSlide(): void {
    this.sliderService.previousSlide();
  }

  selectSlide(index: number): void {
    this.sliderService.selectSlide(index);
  }
}
