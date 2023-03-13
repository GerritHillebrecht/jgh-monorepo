import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BionicReadingLayoutComponent } from './pages/layout';

const routes: Routes = [
  {
    path: '',
    component: BionicReadingLayoutComponent,
    children: [
      {
        path: ':url',
        loadComponent: () => import('./pages/reader/reader.component'),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BionicReadingRoutingModule {}
