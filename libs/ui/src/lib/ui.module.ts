import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStepperComponent } from './auth-stepper/auth-stepper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthStepperComponent],
  exports: [AuthStepperComponent],
})
export class UiModule {}
