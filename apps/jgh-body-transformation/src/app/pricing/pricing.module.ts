import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingLayoutComponent } from './layout/pricing-layout.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { CtaComponent } from '../shared/button/cta/cta.component';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';
import { PlansComponent } from '../shared/blocks/plans/plans.component';
import { DottedSectionComponent } from '../shared/blocks/dotted-section/dotted-section.component';
import { AccordionModule } from '@jgh-lib/ui/design blocks/info-accordion-block/';

@NgModule({
  declarations: [PricingLayoutComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    HeadlineBlockComponent,
    CtaComponent,
    FullWidthInfoBarComponent,
    PlansComponent,
    DottedSectionComponent,
    AccordionModule,
  ],
})
export class PricingModule {}
