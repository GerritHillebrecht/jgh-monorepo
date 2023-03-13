import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BrReaderService } from '../../service';

@Component({
  selector: 'jgh-monorepo-reader',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export default class ReaderComponent {
  readonly textElements$ = this.readerService.textElementsFromUrl(
    this.route.paramMap
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly readerService: BrReaderService
  ) {}
}
