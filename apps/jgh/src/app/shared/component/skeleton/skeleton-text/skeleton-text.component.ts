import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-text.component.html',
  styleUrls: ['./skeleton-text.component.scss'],
})
export class SkeletonTextComponent {
  @Input()
  width: string = '200px';

  @Input()
  height: string = '20px';
}
