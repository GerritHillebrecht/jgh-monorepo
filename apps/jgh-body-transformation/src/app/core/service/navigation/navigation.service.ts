import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Navlink {
  label: string;
  path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  readonly navOpened$ = new BehaviorSubject<boolean>(false);
  readonly links: Navlink[] = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Courses',
      path: 'courses',
    },
    {
      label: 'Schedule',
      path: 'schedule',
    },
    {
      label: 'The Gym',
      path: 'gym',
    },
    {
      label: 'Blog',
      path: 'blog',
    },
    {
      label: 'Pricing',
      path: 'plans',
    },
  ];
}
