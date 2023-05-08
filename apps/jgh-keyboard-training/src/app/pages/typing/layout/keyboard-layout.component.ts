import { Component, signal } from '@angular/core';

@Component({
  selector: 'jgh-kt-keyboard-layout',
  templateUrl: './keyboard-layout.component.html',
  styleUrls: ['./keyboard-layout.component.scss'],
})
export class KeyboardLayoutComponent {
  activeLetter = signal<number>(0);
}
