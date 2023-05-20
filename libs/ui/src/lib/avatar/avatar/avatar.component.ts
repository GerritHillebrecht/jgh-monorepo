import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'jgh-lib-avatar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() set image(image: string | null | undefined) {
    if (image) {
      this._image = image;
    }
  }

  @Input() size = 40;

  protected _image =
    'assets/images/avatar/user.jpg';
}
