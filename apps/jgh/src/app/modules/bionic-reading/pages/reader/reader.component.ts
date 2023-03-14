import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BrFormService, BrReaderService } from '../../service';
import { BrFetchService } from '../../service/fetch/br-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BrReaderComponent } from '../../component';

@Component({
  selector: 'jgh-monorepo-reader',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, BrReaderComponent],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
  providers: [BrFetchService],
})
export default class ReaderComponent {
  readonly textElements$ = combineLatest([
    this.reader.textElementsFromUrl(this.route.paramMap),
    this.formService.settings$,
  ]).pipe(
    map(([textElements, settings]) => textElements),
    tap((textElements) => {
      console.log({ textElements });
    })
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly reader: BrReaderService,
    private readonly formService: BrFormService
  ) {}
}
