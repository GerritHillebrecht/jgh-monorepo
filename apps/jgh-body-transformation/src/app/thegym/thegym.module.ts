import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThegymRoutingModule } from './thegym-routing.module';
import { GymLayoutComponent } from './pages/layout/gym-layout.component';

import { GoogleMapsComponent } from '@jgh-lib/ui/maps/google-maps';
import { PictureBlockComponent } from '@jgh-lib/ui/design blocks/picture-block/picture-block.component';
import { MasonryComponent } from '@jgh-lib/ui/image/masonry/masonry.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';

@NgModule({
  declarations: [GymLayoutComponent],
  imports: [
    CommonModule,
    ThegymRoutingModule,
    GoogleMapsComponent,
    PictureBlockComponent,
    MasonryComponent,
    HeadlineBlockComponent
  ],
})
export class ThegymModule {}
