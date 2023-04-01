import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePlanCardComponent } from './purchase-plan-card.component';

describe('PurchasePlanCardComponent', () => {
  let component: PurchasePlanCardComponent;
  let fixture: ComponentFixture<PurchasePlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePlanCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
