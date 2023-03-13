import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrHttpService {
  isUrl(url: string | null): URL | false {
    try {
      return new URL(url || '');
    } catch {
      return false;
    }
  }
}
