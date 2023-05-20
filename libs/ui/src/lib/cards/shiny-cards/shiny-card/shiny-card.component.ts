import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-shiny-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shiny-card.component.html',
  styleUrls: ['./shiny-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShinyCardComponent {}
