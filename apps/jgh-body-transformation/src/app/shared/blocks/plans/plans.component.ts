import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../button/cta/cta.component';
import { HeadlineBlockComponent } from '@jgh-lib/ui/typographie/headline-block/headline-block.component';
import { RotateInDirective } from '../../directive/rotate-in.directive';

interface Plan {
  name: string;
  description: string;
  slogan: string;
  price: number;
}

@Component({
  selector: 'jgh-bt-plans',
  standalone: true,
  imports: [
    CommonModule,
    CtaComponent,
    HeadlineBlockComponent,
    RotateInDirective,
  ],
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  @Input() plans: Plan[] = [
    {
      name: 'Basic',
      description:
        'Access hours are from 9am to 5pm. Use all the equipment and facilities.',
      slogan: 'Train your ass off',
      price: 19.99,
    },
    {
      name: 'Premium',
      description:
        'Train with your Gymbros, relax in the spa area or dive off in the pool. Come in at any time and push your body with supplements tailered to your needs.',
      slogan: 'All the perks. All the time.',
      price: 39.99,
    },
    {
      name: 'Ultimate',
      description:
        'Power up your body with a personal Gymbro and bring all your friends, all the time.',
      slogan: 'Everything, with everyone',
      price: 79.99,
    },
  ];
}
