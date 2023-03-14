import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { NotificationService } from '../../../../shared/service';
import { map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { BrFetchService } from '../fetch/br-fetch.service';
import { HtmlSelectorService } from '../html/html-selector.service';
import { BrHttpService } from '../http/br-http.service';
import { BrNavigationService } from '../navigation/br-navigation.service';

@Injectable({
  providedIn: 'root',
})
export class BrReaderService {
  constructor(
    private readonly http: BrHttpService,
    private readonly navigation: BrNavigationService,
    private readonly notification: NotificationService,
    private readonly fetch: BrFetchService,
    private readonly html: HtmlSelectorService
  ) {}

  textElementsFromUrl(paramMap: Observable<ParamMap>) {
    return paramMap.pipe(
      switchMap((params) => {
        const url = this.http.isUrl(params.get('url'));
        return url
          ? this.fetch.getDomTree(url.href, true)
          : throwError(this.handleError);
      }),
      map((domTree) => this.html.elements(domTree)),
      map((elements) => elements.map((element) => element.outerHTML)),
      tap((domTree) => console.log('domTree', domTree))
    );
  }

  private handleError() {
    this.notification.notify({
      message: 'Das ist leider keine korrekte URL',
      type: 'error',
      actionLabel: 'Verstanden',
    });
    this.navigation.navigateTo('');
    return new Error('Not a URL');
  }
}
