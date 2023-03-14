import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrCompilerService {
  private removeTags(str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  }
}
