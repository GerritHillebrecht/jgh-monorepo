import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ContentSliderComponent } from '@jgh-lib/ui/slider/content-slider/content-slider.component';
import { ContentSliderVerticalSelectorComponent } from '@jgh-lib/ui/slider/content-slider-vertical-selector/content-slider-vertical-selector.component';

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
