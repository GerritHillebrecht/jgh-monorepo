import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Course {
  title: string;
  trainer: string;
  duration: number;
  image: Image;
  path: string;
}

export interface Image {
  webp?: string;
  avif?: string;
  jpg: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = new BehaviorSubject<Course[]>([
    {
      title: 'Spinning',
      trainer: 'Mike Tyson',
      duration: 90,
      image: {
        jpg: 'assets/images/courses/cycling_400.jpg',
        webp: 'assets/images/courses/cycling_400.webp',
      },
      path: 'spinning',
    },
    {
      title: 'Boxing',
      trainer: 'John Doe',
      duration: 60,
      image: {
        jpg: 'assets/images/courses/boxing_400.jpg',
        webp: 'assets/images/courses/boxing_400.webp',
      },
      path: 'cardio',
    },
    {
      title: 'Karate',
      trainer: 'John Doe',
      duration: 60,
      image: {
        jpg: 'assets/images/courses/karate_400.jpg',
        webp: 'assets/images/courses/karate_400.webp',
      },
      path: 'cardio',
    },
    {
      title: 'Squash',
      trainer: 'John Doe',
      duration: 60,
      image: {
        jpg: 'https://www.berliner-freizeit-tipps.de/wp-content/uploads/2019/03/bild-squash-anlagen-berlin.jpg',
      },
      path: 'squash',
    },
    {
      title: 'Hyrox',
      trainer: 'John Doe',
      duration: 60,
      image: {
        jpg: 'https://d27ush0hbdz2nj.cloudfront.net/2ec40b3bc896197e4c6b44f0b7e05a0f/Unbenannt-110.jpg',
        // webp: 'assets/images/courses/karate_400.webp',
      },
      path: 'Hyrox',
    },
    {
      title: 'Schwimmen',
      trainer: 'John Doe',
      duration: 60,
      image: {
        jpg: 'https://images.unsplash.com/photo-1480109866847-0b432ceb666a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      path: 'swimming',
    },
  ]);

  getCourses(): Observable<Course[]> {
    return this.courses.asObservable();
  }
}
