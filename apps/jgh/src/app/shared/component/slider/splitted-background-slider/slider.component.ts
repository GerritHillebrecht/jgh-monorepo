import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, fromEvent, map } from 'rxjs';
import { SlideComponent } from './component/slide/slide.component';

@Component({
  selector: 'jgh-monorepo-slider',
  standalone: true,
  imports: [CommonModule, SlideComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: true }) slider:
    | ElementRef<HTMLDivElement>
    | undefined;

  numberOfElements = 10;
  numberOfSlides = 5;

  activeSlide = 0;
  previouslyActiveIndex = 0;
  initialized = false;

  images: string[] = [
    '../../../../../assets/images/background/text/headline-background-abstract.jpg',
    'https://images.unsplash.com/photo-1679022046232-d5550f60ece8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2533&q=80',
    '../../../../../assets/images/background/text/default-background-example.jpg',
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1564731071754-001b53a902fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ];

  elements = Array.from({ length: this.numberOfElements }, (_, index) => index);
  slides = Array.from(
    { length: this.numberOfSlides },
    (_, index) => this.images[index]
  );

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => key === 'ArrowRight' || key === 'ArrowLeft')
      )
      .subscribe((key) => {
        if (key === 'ArrowRight') {
          this.nextSlide();
        }
        if (key === 'ArrowLeft') {
          this.previousSlide();
        }
      });
  }

  ngAfterViewInit(): void {
    console.log('View initialized');
    setTimeout(() => {
      this.initialized = true;
    }, 1);
  }

  selectSlide(index: number): void {
    this.previouslyActiveIndex = this.activeSlide;
    this.activeSlide = index;
  }

  protected nextSlide(): void {
    this.previouslyActiveIndex = this.activeSlide;
    this.activeSlide =
      this.activeSlide === this.slides.length - 1 ? 0 : this.activeSlide + 1;
  }

  protected previousSlide(): void {
    this.previouslyActiveIndex = this.activeSlide;
    this.activeSlide =
      this.activeSlide === 0 ? this.slides.length - 1 : this.activeSlide - 1;
  }
}
