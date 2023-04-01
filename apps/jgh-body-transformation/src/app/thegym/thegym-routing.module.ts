import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymLayoutComponent } from './pages/layout/gym-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GymLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThegymRoutingModule {}
