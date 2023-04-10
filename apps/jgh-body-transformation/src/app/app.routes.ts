import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'gym',
    loadChildren: () =>
      import('./thegym/thegym.module').then((m) => m.ThegymModule),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
];
