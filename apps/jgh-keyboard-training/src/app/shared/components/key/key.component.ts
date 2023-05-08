import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-kt-key',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent {
  @Input({ required: true }) key!: string;
  @Input({ required: true }) active = false;
}
