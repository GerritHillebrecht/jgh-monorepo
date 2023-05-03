import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
];
