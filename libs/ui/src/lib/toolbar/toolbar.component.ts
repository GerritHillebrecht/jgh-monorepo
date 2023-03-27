import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="relative flex flex-row px-4 items-center h-14 sm:h-16">
    <ng-content></ng-content>
  </div>`,
  styles: [``],
})
export class ToolbarComponent {}
