import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, CourseService } from '../../service/course.service';

@Component({
  selector: 'jgh-bt-courses-layout',
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.scss'],
})
export class CoursesLayoutComponent {
  protected readonly courses: Observable<Course[]>;

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}
