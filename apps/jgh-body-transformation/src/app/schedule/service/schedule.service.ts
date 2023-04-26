import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BehaviorSubject, map } from 'rxjs';
import { faker } from '@faker-js/faker';

export interface Course {
  name: string;
  type: CourseType;
  icon: IconProp;
  description: string;
  weekday: number;
  time: string;
  duration: number;
  trainer: {
    firstname: string;
    lastname: string;
  };
  location?: string;
}

type CourseType = 'cardio' | 'strength' | 'other';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  weekdays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  courses: Course[] = [
    ...Array.from(
      { length: 30 },
      (_, i) =>
        ({
          name: ['Spinning', 'Murdering', 'Boxing'][
            Math.floor(Math.random() * 3) | 0
          ],
          type: 'cardio',
          icon: 'heart-pulse',
          description: 'Cardio description',
          weekday: Math.floor(Math.random() * 7) | 0,
          time: Math.floor(Math.random() * 10) + 10 + ':00',
          duration: 60,
          trainer: {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
          },
          location: 'Gym 1',
        } satisfies Course)
    ),
    {
      name: 'Spinning',
      type: 'cardio',
      icon: 'heart-pulse',
      description: 'Cardio description',
      weekday: 0,
      time: '10:00',
      duration: 60,
      trainer: {
        firstname: 'John',
        lastname: 'Doe',
      },
      location: 'Gym 1',
    },
    {
      name: 'Murdering',
      icon: 'person-running',
      type: 'cardio',
      description: 'Cardio description',
      weekday: 0,
      time: '15:00',
      duration: 90,
      trainer: {
        firstname: 'John',
        lastname: 'Doe',
      },
      location: 'Gym 2',
    },
    {
      name: 'Boxing',
      type: 'cardio',
      icon: 'dumbbell',
      description: 'Boxing description',
      weekday: 0,
      time: '11:00',
      duration: 60,
      trainer: {
        firstname: 'John',
        lastname: 'Doe',
      },
      location: 'Gym 1',
    },
    {
      name: 'Boxing',
      type: 'cardio',
      icon: 'dumbbell',
      description: 'Boxing description',
      weekday: 1,
      time: '11:00',
      duration: 60,
      trainer: {
        firstname: 'John',
        lastname: 'Doe',
      },
      location: 'Gym 1',
    },
    {
      name: 'Boxing',
      type: 'cardio',
      icon: 'dumbbell',
      description: 'Boxing description',
      weekday: 1,
      time: '13:00',
      duration: 60,
      trainer: {
        firstname: 'John',
        lastname: 'Doe',
      },
      location: 'Gym 2',
    },
  ];

  selectedWeekday$ = new BehaviorSubject<number>(0);
  courses$ = this.selectedWeekday$.pipe(
    map((weekday) =>
      this.courses
        .filter((course) => course.weekday === weekday)
        .sort((a, b) => a.time.localeCompare(b.time))
    )
  );

  selectWeekday(weekday: number) {
    this.selectedWeekday$.next(weekday);
  }
}
