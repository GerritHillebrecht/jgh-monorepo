import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Picture {
  type: string;
  src: string;
  size: number;
}

export type PictureBlockElement = Picture[];

@Component({
  selector: 'jgh-lib-picture-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-block.component.html',
  styleUrls: ['./picture-block.component.scss'],
})
export class PictureBlockComponent {
  @Input() fitToParent = false;
  @Input() image = 'https://via.placeholder.com/1920x1080.jpg';
  @Input() imageSet: PictureBlockElement = [];
}
