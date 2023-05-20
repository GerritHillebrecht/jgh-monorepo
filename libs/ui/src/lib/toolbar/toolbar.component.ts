import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `<nav
    class="relative flex flex-row px-4 items-center h-14 sm:h-16 z-50 w-full"
    [ngStyle]="{ top, position, backgroundColor, 'border-bottom': border }"
  >
    <ng-content></ng-content>
  </nav>`,
  styles: [``],
})
export class ToolbarComponent {
  @Input() position: 'fixed' | 'sticky' | 'relative' = 'sticky';
  @Input() top = '0px';
  @Input() backgroundColor = 'transparent';
  @Input() border = 'none';
}
