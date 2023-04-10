import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-full-width-info-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-width-info-bar.component.html',
  styleUrls: ['./full-width-info-bar.component.scss'],
})
export class FullWidthInfoBarComponent {
  @Input() image = 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80';
  @Input() blackAndWhite = false;
}
