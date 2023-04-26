import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DottedSectionComponent } from '../../../shared/blocks/dotted-section/dotted-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-bt-section-video',
  standalone: true,
  imports: [CommonModule, DottedSectionComponent, FontAwesomeModule],
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss'],
})
export class SectionVideoComponent {
  @ViewChild('video') videoPlayer?: ElementRef<HTMLVideoElement>;
  play = faPlayCircle;

  playVideo() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.play();
    }
  }

  pauseVideo() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
    }
  }
}
