import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { NotificationService } from '@jgh/shared/service';
import { map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { BrHttpService } from '../http/br-http.service';
import { BrNavigationService } from '../navigation/br-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class BrReaderService {
  constructor(
    private readonly httpService: BrHttpService,
    private readonly navigationService: BrNavigationService,
    private readonly notificationService: NotificationService
  ) {}

  textElementsFromUrl(paramMap: Observable<ParamMap>) {
    return paramMap.pipe(
      switchMap((params) => {
        const url = this.httpService.isUrl(params.get('url'));
        return url ? of(url) : throwError(this.handleError);
      }),
      map((value) => ({}))
    );
  }

  private handleError() {
    this.notificationService.notify({
      message: 'Das ist leider keine korrekte URL',
      type: 'error',
      actionLabel: 'Verstanden',
    });
    this.navigationService.navigateTo('');
    return new Error('Not a URL');
  }
}
