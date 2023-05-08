import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/typing/typing.module').then((m) => m.TypingModule),
  },
];
