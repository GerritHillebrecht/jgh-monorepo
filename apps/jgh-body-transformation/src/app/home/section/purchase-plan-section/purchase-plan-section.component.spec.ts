import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePlanSectionComponent } from './purchase-plan-section.component';

describe('PurchasePlanSectionComponent', () => {
  let component: PurchasePlanSectionComponent;
  let fixture: ComponentFixture<PurchasePlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePlanSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasePlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
