import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './pages/landing';
import {
  SliderComponent,
  VerticalSliderComponent,
} from '../shared/component/slider';
import {
  TripleTextImageSectionComponent,
  SplittedInfoScreenComponent,
} from '../shared/component/section';
import {
  InfoCardLargeComponent,
  TwInfoCardComponent,
} from '../shared/component/card/';
import {
  AuthenticationStepperComponent,
  ContentSliderComponent,
} from '@jgh-lib/ui';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';

@NgModule({
  declarations: [HomeLandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // SliderComponent,
    // AuthenticationStepperComponent,
    // SplittedInfoScreenComponent,
    // TripleTextImageSectionComponent,
    // InfoCardLargeComponent,
    // TwInfoCardComponent,
    // VerticalSliderComponent,
    // ContentSliderComponent,
    // AuthenticationStepperComponent,
    NavbarComponent,
  ],
})
export class HomeModule {}
