import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesLayoutComponent } from './pages/layout/courses-layout.component';
import { FullImageCardComponent } from '@jgh-lib/ui';
import { CtaComponent } from '../shared/button/cta/cta.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CoursesLayoutComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FullImageCardComponent,
    CtaComponent,
    MatIconModule,
  ],
})
export class CoursesModule {}
