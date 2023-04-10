import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PictureBlockComponent,
  PictureBlockElement,
} from '../../design blocks/picture-block/picture-block.component';

@Component({
  selector: 'jgh-lib-masonry',
  standalone: true,
  imports: [CommonModule, PictureBlockComponent],
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss'],
})
export class MasonryComponent {
  @Input() images: (PictureBlockElement | string)[] = [];

  typeOfPicutreBlockElement = (
    element: PictureBlockElement | string
  ): element is PictureBlockElement => {
    return typeof element !== 'string';
  };
}
