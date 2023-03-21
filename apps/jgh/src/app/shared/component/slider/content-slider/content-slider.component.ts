import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { images } from './example.images';
import { fromEvent, interval } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import {
  ContentSliderSlideComponent as SlideComponent,
  ContentSliderPaginationComponent as PaginationComponent,
} from './components';
import { ContentSliderService } from './service';
import { GestureDirective } from './directive/gesture.directive';

@Component({
  selector: 'jgh-monorepo-content-slider',
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
  constructor(protected readonly sliderService: ContentSliderService) {}

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => ['ArrowRight', 'ArrowLeft'].includes(key))
      )
      .subscribe((key) =>
        key === 'ArrowRight' ? this.nextSlide() : this.previousSlide()
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
