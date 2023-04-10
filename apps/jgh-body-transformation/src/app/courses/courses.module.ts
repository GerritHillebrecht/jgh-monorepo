import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesLayoutComponent } from './pages/layout/courses-layout.component';
import { FullImageCardComponent, FullWidthInfoBarComponent } from '@jgh-lib/ui';
import { CtaComponent } from '../shared/button/cta/cta.component';
import { MatIconModule } from '@angular/material/icon';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';

@NgModule({
  declarations: [CoursesLayoutComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FullImageCardComponent,
    CtaComponent,
    MatIconModule,
    FullWidthInfoBarComponent,
    HeadlineBlockComponent
  ],
})
export class CoursesModule {}
