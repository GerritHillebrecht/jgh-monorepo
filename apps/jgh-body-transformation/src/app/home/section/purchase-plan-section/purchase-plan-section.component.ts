import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePlanCardComponent } from '@jgh-lib/ui';
import { PlansComponent } from '../../../shared/blocks/plans/plans.component';
import { PricingService } from '../../../pricing/service/pricing.service';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { DottedSectionComponent } from '../../../shared/blocks/dotted-section/dotted-section.component';

@Component({
  selector: 'jgh-bt-purchase-plan-section',
  standalone: true,
  imports: [
    CommonModule,
    PurchasePlanCardComponent,
    PlansComponent,
    HeadlineBlockComponent,
    DottedSectionComponent,
  ],
  templateUrl: './purchase-plan-section.component.html',
  styleUrls: ['./purchase-plan-section.component.scss'],
})
export class PurchasePlanSectionComponent {
  protected readonly plans = inject(PricingService).plans;
}
