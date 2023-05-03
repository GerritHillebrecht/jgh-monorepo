import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './pages/landing';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';
import { FullWidthSliderComponent } from './components/full-width-slider/full-width-slider.component';
import { SliderComponent } from './components/slider/slider.component';

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
    FullWidthSliderComponent,
    SliderComponent,
    NavbarComponent,
  ],
})
export class HomeModule {}
