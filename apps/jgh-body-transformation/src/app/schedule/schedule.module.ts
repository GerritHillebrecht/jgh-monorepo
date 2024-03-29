import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleLayoutComponent } from './layout/schedule-layout.component';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';
import { WeekdaySelectorComponent } from './components/ui/weekday-selector/weekday-selector.component';
import { CourseCardComponent } from './components/ui/course-card/course-card.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';

@NgModule({
  declarations: [ScheduleLayoutComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FullWidthInfoBarComponent,
    WeekdaySelectorComponent,
    CourseCardComponent,
    HeadlineBlockComponent
  ],
})
export class ScheduleModule {}
