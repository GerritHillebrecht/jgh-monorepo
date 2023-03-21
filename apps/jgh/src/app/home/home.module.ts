import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './pages/landing';
import {
  SliderComponent,
  VerticalSliderComponent,
} from '../shared/component/slider';
import { AuthenticationStepperComponent } from '../shared/component/authentication-stepper/authentication-stepper.component';
import {
  TripleTextImageSectionComponent,
  SplittedInfoScreenComponent,
} from '../shared/component/section';
import {
  InfoCardLargeComponent,
  TwInfoCardComponent,
} from '../shared/component/card/';
import { ContentSliderComponent } from '../shared/component/slider/content-slider/content-slider.component';

@NgModule({
  declarations: [HomeLandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SliderComponent,
    AuthenticationStepperComponent,
    SplittedInfoScreenComponent,
    TripleTextImageSectionComponent,
    InfoCardLargeComponent,
    TwInfoCardComponent,
    VerticalSliderComponent,
    ContentSliderComponent,
  ],
})
export class HomeModule {}
