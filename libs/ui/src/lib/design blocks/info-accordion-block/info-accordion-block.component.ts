import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  inject,
} from '@angular/core';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';
import { Accordion } from './model';
import { AccordionService } from './service/accordion.service';

@Component({
  selector: 'jgh-lib-info-accordion-block',
  templateUrl: './info-accordion-block.component.html',
  styleUrls: ['./info-accordion-block.component.scss'],
})
export class InfoAccordionBlockComponent implements OnInit, AfterViewInit {
  @ContentChildren(AccordionElementComponent)
  accordionElements?: QueryList<AccordionElementComponent>;

  @Input() openFirstElement = true;
  @Input() rtl = false;
  @Input() backgroundColor?: string;
  @Input() image: Accordion['image'] =
    'assets/images/design-block/info-accordion/accordion-1.jpg';

  private accordionService = inject(AccordionService);

  ngOnInit(): void {
    this.accordionService.openedAccordion$.subscribe((index) => {
      if (this.accordionElements) {
        this.accordionElements
          .filter((_, i) => index !== i)
          .forEach((accordionElement) => accordionElement.close());
      }
    });
  }

  private openFirstAccordion() {
    if (this.accordionElements) {
      this.accordionElements.first.open();
    }
  }

  ngAfterViewInit(): void {
    if (this.openFirstElement) {
      this.openFirstAccordion();
    }
  }
}
