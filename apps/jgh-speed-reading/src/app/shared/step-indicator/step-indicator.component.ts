import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-sr-step-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss'],
})
export class StepIndicatorComponent {
  @Input() number = 1;
  @Input() fromColor = '#7928CA';
  @Input() toColor = '#FF0080';
}
