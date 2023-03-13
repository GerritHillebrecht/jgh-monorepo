import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Notification {
  message: string;
  type: 'success' | 'info' | 'warn' | 'error';
  actionLabel?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  readonly notification$ = new Subject<Notification>();

  notify({ message, type, actionLabel = 'Danke' }: Notification) {
    this.notification$.next({ message, type, actionLabel });
  }
}
