import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderBackgroundSliceComponent } from '..';
import { ContentSliderService } from '../../service';
import { ContentSliderSlide as Slide } from '../../model';
import { GooeyButtonComponent } from '../../../../button/gooey-button/gooey-button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jgh-lib-content-slider-slide',
  standalone: true,
  imports: [
    CommonModule,
    ContentSliderBackgroundSliceComponent,
    GooeyButtonComponent,
    MatIconModule,
  ],
  templateUrl: './content-slider-slide.component.html',
  styleUrls: ['./content-slider-slide.component.scss'],
})
export class ContentSliderSlideComponent implements OnInit {
  @Input() set active(active: boolean) {
    setTimeout(() => {
      this.activeSlide = active;
    }, 10);
    setTimeout(() => {
      this.turbulence = active;
    }, 2000);
  }

  @Input() slide!: Slide;
  @Input() index!: number;

  protected activeSlide = false;
  protected turbulence = false;

  constructor(protected sliderService: ContentSliderService) {}

  ngOnInit(): void {
    console.log(this.slide);
  }
}
