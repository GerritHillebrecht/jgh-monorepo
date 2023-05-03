import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBmiComponent } from './section-bmi.component';

describe('SectionBmiComponent', () => {
  let component: SectionBmiComponent;
  let fixture: ComponentFixture<SectionBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBmiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
