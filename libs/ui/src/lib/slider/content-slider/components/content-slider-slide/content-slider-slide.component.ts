import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderBackgroundSliceComponent } from '..';
import { ContentSliderService, Slide } from '../../service';
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
export class ContentSliderSlideComponent {
  @Input() set active(active: boolean) {
    setTimeout(() => {
      this.activeSlide = active;
    }, 10);
  }
  @Input() slide!: Slide;
  @Input() index!: number;

  protected activeSlide = false;

  constructor(protected sliderService: ContentSliderService) {}
}
