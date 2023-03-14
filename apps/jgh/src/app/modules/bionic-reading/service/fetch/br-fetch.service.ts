import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrFetchService {
  constructor(private readonly http: HttpClient) {}

  getDomTree(url: string, mock: boolean = false) {
    return !mock
      ? this.http.post(
          'http://localhost:3333/api/bionic-reading',
          { url },
          { responseType: 'text' }
        )
      : of('<h1><span>Hello world!</span></h1>').pipe(delay(2000));
  }
}
