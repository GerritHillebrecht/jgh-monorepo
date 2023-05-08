import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyComponent } from '../key/key.component';
import { fromEvent } from 'rxjs';

type Key = string;

@Component({
  selector: 'jgh-kt-keyboard',
  standalone: true,
  imports: [CommonModule, KeyComponent],
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  protected readonly pressedKey = signal<string[]>([]);
  protected readonly keyRows: Key[][] = [
    ['dead', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'ß'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü'],
    ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'],
    ['shift', '<', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    [
      'control',
      'alt',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      'altgraph',
      'control',
    ],
  ];

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(document, 'keydown').subscribe((event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
      }
      console.log(event.key);
      this.pressedKey.mutate((keys) => {
        const key = String(event.key.toLowerCase());
        return keys.includes(key) ? keys : keys.push(key);
      });
    });

    fromEvent<KeyboardEvent>(document, 'keyup').subscribe((event) =>
      this.pressedKey.mutate((keys) => {
        const index = keys.indexOf(event.key.toLowerCase());
        if (index > -1) {
          keys.splice(index, 1);
        }
        return keys;
      })
    );
  }
}
