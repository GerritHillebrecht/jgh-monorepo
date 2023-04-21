import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-bt-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input() animate = false;
  @Input() animationDelay = '0ms';
  @Input() primaryColor = false;
  @Input() passiveColor = false;
  @Input() active = false;
}
