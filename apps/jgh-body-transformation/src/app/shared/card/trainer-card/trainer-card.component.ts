import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent, Trainer } from '@jgh-lib/ui';

@Component({
  selector: 'jgh-bt-trainer-card',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss'],
})
export class TrainerCardComponent {
  @Input() trainer!: Trainer;
}
