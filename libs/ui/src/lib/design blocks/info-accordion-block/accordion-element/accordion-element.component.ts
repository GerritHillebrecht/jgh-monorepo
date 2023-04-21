import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { AccordionElement } from '../model/accordion.model';
import { AccordionService } from '../service/accordion.service';

@Component({
  selector: 'jgh-lib-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.scss'],
})
export class AccordionElementComponent {
  @Input() accordion?: AccordionElement;
  @Input() index = 0;
  @Input() color?: string;
  @Output() setActiveAccordion = new EventEmitter<number>();
  @ViewChild('body') private readonly body?: ElementRef<HTMLDivElement>;

  private accordionService = inject(AccordionService);
  protected active = false;

  toggle() {
    !this.active ? this.open() : this.close();
  }

  open() {
    if (this.body) {
      this.accordionService.openedAccordion$.next(this.index);
      this.active = true;
      this.body.nativeElement.style.maxHeight =
        this.body.nativeElement.scrollHeight + 'px';
    }
  }

  close() {
    this.active = false;
    if (this.body) {
      this.body.nativeElement.style.maxHeight = '0px';
    }
  }

  protected handleHeaderClick() {
    this.toggle();
    this.setActiveAccordion.emit(this.index);
  }
}
