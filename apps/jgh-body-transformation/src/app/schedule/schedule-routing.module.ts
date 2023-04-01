import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleLayoutComponent } from './layout/schedule-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
