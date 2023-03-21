/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@jgh/home').then((m) => m.HomeModule),
  },
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
