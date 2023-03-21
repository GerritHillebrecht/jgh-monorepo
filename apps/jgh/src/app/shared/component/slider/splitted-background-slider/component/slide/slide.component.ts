import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundSliceComponent } from '../background-slice/background-slice.component';

@Component({
  selector: 'jgh-monorepo-slide',
  standalone: true,
  imports: [CommonModule, BackgroundSliceComponent],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() set slices(slices: number) {
    this._slices = Array.from({ length: slices }, (_, index) => index);
  }
  protected _slices: number[] = Array.from({ length: 10 }, (_, index) => index);
  @Input() active = false;
  @Input() hide = false;
  @Input() image =
    '../../../../../../../assets/images/background/text/headline-background-abstract.jpg';
}
