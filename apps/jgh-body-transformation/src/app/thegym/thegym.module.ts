import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThegymRoutingModule } from './thegym-routing.module';
import { GymLayoutComponent } from './pages/layout/gym-layout.component';

import { GoogleMapsComponent } from '@jgh-lib/ui/maps/google-maps';

@NgModule({
  declarations: [GymLayoutComponent],
  imports: [CommonModule, ThegymRoutingModule, GoogleMapsComponent],
})
export class ThegymModule {}
