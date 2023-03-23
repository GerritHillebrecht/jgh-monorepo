/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  // {
  //   path: 'app',
  //   children: [
  //     {
  //       path: 'bionic-reading',
  //       loadChildren: () =>
  //         import('@jgh/modules/bionic-reading').then(
  //           (m) => m.BionicReadingModule
  //         ),
  //     },
  //   ],
  // },
];
