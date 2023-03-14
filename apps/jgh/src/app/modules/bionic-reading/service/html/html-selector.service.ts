import { Injectable } from '@angular/core';
import { parseDom } from '@jgh/shared/utils/functions';

@Injectable({
  providedIn: 'root',
})
export class HtmlSelectorService {
  elements(dom: string) {
    const parsedDocument = parseDom(dom);
    // Remove all navigation elements
    parsedDocument
      .querySelectorAll('header, footer, button, nav, a')
      .forEach((item) => item.remove());

    // Select all text elements
    const elements = Array.from(
      parsedDocument.querySelectorAll('p, h1, h2, h3, h4, h5, h6')
    );

    console.log('elements', elements);
    return elements;
  }

  private removeTags(str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  }
}
