import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingLayoutComponent } from './layout/pricing-layout.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { CtaComponent } from '../shared/button/cta/cta.component';
import { FullWidthInfoBarComponent } from '@jgh-lib/ui';

@NgModule({
  declarations: [PricingLayoutComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    HeadlineBlockComponent,
    CtaComponent,
    FullWidthInfoBarComponent,
  ],
})
export class PricingModule {}
