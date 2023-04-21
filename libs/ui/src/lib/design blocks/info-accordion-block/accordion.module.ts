import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';
import { InfoAccordionBlockComponent } from './info-accordion-block.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AccordionElementComponent, InfoAccordionBlockComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [AccordionElementComponent, InfoAccordionBlockComponent],
})
export class AccordionModule {}
