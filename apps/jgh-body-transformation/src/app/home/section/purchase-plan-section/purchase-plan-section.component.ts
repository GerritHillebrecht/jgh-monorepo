import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePlanCardComponent } from '@jgh-lib/ui';

@Component({
  selector: 'jgh-bt-purchase-plan-section',
  standalone: true,
  imports: [CommonModule, PurchasePlanCardComponent],
  templateUrl: './purchase-plan-section.component.html',
  styleUrls: ['./purchase-plan-section.component.scss'],
})
export class PurchasePlanSectionComponent {
  protected readonly plans = [
    {
      price: 29,
    },
    {
      price: 49,
    },
    {
      price: 79,
    },
  ];
}
