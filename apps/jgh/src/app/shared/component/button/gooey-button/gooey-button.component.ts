import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gooey-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gooey-button.component.html',
  styleUrls: ['./gooey-button.component.scss'],
})
export class GooeyButtonComponent {
  @Input()
  numberOfBubbles: number = 10;

  protected bubbleArray: number[];

  constructor() {
    this.bubbleArray = Array.from(
      { length: this.numberOfBubbles },
      (_, i) => i
    );
  }
}
