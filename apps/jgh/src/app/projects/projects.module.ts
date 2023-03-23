import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {
  ContentSliderComponent,
  ContentSliderVerticalSelectorComponent,
} from '@jgh-lib/ui';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ContentSliderComponent,
    ContentSliderVerticalSelectorComponent,
  ],
})
export class ProjectsModule {}
