import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedSectionComponent } from './dotted-section.component';

describe('DottedSectionComponent', () => {
  let component: DottedSectionComponent;
  let fixture: ComponentFixture<DottedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DottedSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DottedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
