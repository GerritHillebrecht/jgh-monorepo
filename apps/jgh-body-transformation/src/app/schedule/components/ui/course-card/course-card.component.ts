import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Course } from '../../../service/schedule.service';
import { CtaComponent } from '../../../../shared/button/cta/cta.component';

@Component({
  selector: 'jgh-bt-course-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CtaComponent],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course?: Course;
}
