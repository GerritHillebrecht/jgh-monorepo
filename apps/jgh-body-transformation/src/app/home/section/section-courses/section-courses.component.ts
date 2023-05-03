import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  image: string;
}

@Component({
  selector: 'jgh-bt-section-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-courses.component.html',
  styleUrls: ['./section-courses.component.scss'],
})
export class SectionCoursesComponent {
  protected readonly courses: Course[] = [
    {
      image: 'assets/images/courses/cardio.jpg',
    },
    {
      image: 'assets/images/courses/cycling.jpg',
    },
    {
      image: 'assets/images/courses/karate_400.jpg',
    },
  ];
}
