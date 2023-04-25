import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { ShareBarComponent } from '../shared/social/share-bar/share-bar.component';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';
import { HeroSectionComponent } from './section/hero-section/hero-section.component';
import { TrainerSectionComponent } from './section/trainer-section/trainer-section.component';
import { MatIconModule } from '@angular/material/icon';
import { PurchasePlanSectionComponent } from './section/purchase-plan-section/purchase-plan-section.component';
import { TestimonialsSectionComponent } from './section/testimonials-section/testimonials-section.component';
import { DetailsSectionComponent } from './section/details-section/details-section.component';
import { SectionDetailsComponent } from './section/section-details/section-details.component';
import { SectionVideoComponent } from './section/section-video/section-video.component';
@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    // CONTENT
    // Utility
    ShareBarComponent,
    FullWidthInfoBarComponent,
    // Sections
    HeroSectionComponent,
    TrainerSectionComponent,
    PurchasePlanSectionComponent,
    TestimonialsSectionComponent,
    DetailsSectionComponent,
    SectionDetailsComponent,
    SectionVideoComponent,
  ],
})
export class HomeModule {}
