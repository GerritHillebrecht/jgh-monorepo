import { Injectable } from '@angular/core';
import { NotificationService } from '@jgh/shared/service';
import { fromEvent, of, throwError } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  retry,
  switchMap,
  tap,
} from 'rxjs/operators';
import { BrHttpService } from '..';

@Injectable({
  providedIn: 'root',
})
export class BrPasteService {
  readonly pasteEvent$ = fromEvent<ClipboardEvent>(document, 'paste').pipe(
    // debounceTime(500)
    tap((value) => console.log('value', value))
  );

  readonly pastedText$ = this.pasteEvent$.pipe(
    map(({ clipboardData }) => clipboardData?.getData('text/plain'))
  );

  readonly pastedUrl$ = this.pastedText$.pipe(
    // tap((asd) => console.log('asd', asd)),
    distinctUntilChanged(),
    switchMap((textFromClipboard) =>
      textFromClipboard
        ? of(textFromClipboard)
        : throwError(() => {
            this.notificationService.notify({
              message: 'Bitte eine URL einfügen',
              type: 'error',
              actionLabel: 'Mach ich',
            });
            return new Error('Clipboard error, no text');
          })
    ),
    switchMap((pastedText) =>
      this.httpService.isUrl(pastedText)
        ? of(this.httpService.isUrl(pastedText) as URL)
        : throwError(() => {
            this.notificationService.notify({
              message: 'Das ist leider keine korrekte URL',
              type: 'error',
              actionLabel: 'Verstanden',
            });
            return new Error('Not a URL');
          })
    ),
    tap((url) =>
      this.notificationService.notify({
        message: `${url.host} wird geladen...`,
        type: 'success',
        actionLabel: 'Yay!',
      })
    ),
    retry()
  );

  constructor(
    private readonly httpService: BrHttpService,
    private readonly notificationService: NotificationService
  ) {}
}
