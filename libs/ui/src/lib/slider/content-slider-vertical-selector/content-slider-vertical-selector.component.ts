import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderSlide } from '../content-slider/service/content-slider.service';

@Component({
  selector: 'jgh-lib-content-slider-vertical-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-slider-vertical-selector.component.html',
  styleUrls: ['./content-slider-vertical-selector.component.scss'],
})
export class ContentSliderVerticalSelectorComponent implements AfterViewInit {
  @Input()
  slides: ContentSliderSlide[] = [];  

  @Output()
  selectedIndex = new EventEmitter<number>();

  currentIndex = 0;
  projects: Element[] | undefined;

  ngAfterViewInit(): void {
    this.projects = Array.from(document.querySelectorAll('.project'));
  }

  changeCurrentIndex(index: number) {
    if (!this.projects) return;

    this.selectedIndex.emit(index);
    this.currentIndex = index;
    const currentProject = this.projects[index];
    setTimeout(() => {
      currentProject.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 10);
  }
}
