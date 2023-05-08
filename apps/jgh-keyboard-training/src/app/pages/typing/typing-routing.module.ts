import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardLayoutComponent } from './layout/keyboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: KeyboardLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingRoutingModule {}
