import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jgh-bt-cta',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  @Input() bgColor = 'bg-stone-50';
  @Input() textColor = 'text-stone-900';
  @Input() active = false;
}
