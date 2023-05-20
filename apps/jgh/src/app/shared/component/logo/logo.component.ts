import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-monorepo-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() fontSize = '8rem';
  @Input() animate = true;
  @Input() shiny = true;
  @Input() mixBlendMode = 'unset';
}
