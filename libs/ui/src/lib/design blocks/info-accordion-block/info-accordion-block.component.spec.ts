import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccordionBlockComponent } from './info-accordion-block.component';

describe('InfoAccordionBlockComponent', () => {
  let component: InfoAccordionBlockComponent;
  let fixture: ComponentFixture<InfoAccordionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAccordionBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoAccordionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
