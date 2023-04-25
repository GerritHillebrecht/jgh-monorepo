import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'jgh-bt-dotted-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dotted-section.component.html',
  styleUrls: ['./dotted-section.component.scss'],
})
export class DottedSectionComponent implements AfterViewInit {
  @Input() sectionClasses = '';

  @ViewChild('section') section!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (this.sectionClasses.length > 0) {
      this.sectionClasses.split(' ').forEach((sectionClass) => {
        this.section.nativeElement.classList.add(sectionClass);
      });
    }
  }
}
