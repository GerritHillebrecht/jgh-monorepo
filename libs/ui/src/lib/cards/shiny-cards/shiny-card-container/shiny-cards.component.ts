import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShinyCardsDirective } from './shiny-cards.directive';

@Component({
  selector: 'jgh-lib-shiny-cards',
  standalone: true,
  imports: [CommonModule, ShinyCardsDirective],
  templateUrl: './shiny-cards.component.html',
  styleUrls: ['./shiny-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShinyCardsComponent {}
