import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  openedAccordion$ = new Subject<number>();
}
