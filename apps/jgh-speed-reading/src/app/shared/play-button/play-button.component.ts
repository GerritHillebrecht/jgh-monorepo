import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-sr-play-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
  @Input() playState: 'play' | 'pause' = 'pause';
  protected readonly playIcon = faPlay;
  protected readonly pauseIcon = faPause;
}
