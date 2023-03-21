import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-monorepo-background-slice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-slice.component.html',
  styleUrls: ['./background-slice.component.scss'],
})
export class BackgroundSliceComponent implements OnInit {
  @Input() image: string | undefined;
  @Input() index!: number;
  @Input() maxIndex!: number;
  @Input() animationDelay!: string;

  protected clipPath = '';

  ngOnInit(): void {
    this.clipPath = `inset(0 (${this.maxIndex - this.index}) * 10% 0 (${
      this.index
    } - 1) * 10% - 0.1%)`;
  }
}
