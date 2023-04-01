import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesLayoutComponent } from './pages/layout/courses-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
