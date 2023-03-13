import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app',
    children: [
      {
        path: 'bionic-reading',
        loadChildren: () =>
          import('@jgh/modules/bionic-reading').then(
            (m) => m.BionicReadingModule
          ),
      },
    ],
  },
];
