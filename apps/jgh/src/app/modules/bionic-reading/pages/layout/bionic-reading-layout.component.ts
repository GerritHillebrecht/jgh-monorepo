import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BrNavigationService, BrPasteService } from '../../service';

@Component({
  selector: 'jgh-monorepo-bionic-reading-layout',
  templateUrl: './bionic-reading-layout.component.html',
  styleUrls: ['./bionic-reading-layout.component.scss'],
})
export class BionicReadingLayoutComponent implements OnInit {
  pastedUrl$ = this.pasteService.pastedUrl$.pipe();

  constructor(
    private readonly pasteService: BrPasteService,
    private readonly navigationService: BrNavigationService
  ) {}

  ngOnInit(): void {
    this.pasteService.pastedUrl$
      .pipe(tap((url) => this.navigationService.navigateTo(url.href)))
      .subscribe();
  }
}
