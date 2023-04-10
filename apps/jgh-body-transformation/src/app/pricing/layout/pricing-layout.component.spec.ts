import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingLayoutComponent } from './pricing-layout.component';

describe('PricingLayoutComponent', () => {
  let component: PricingLayoutComponent;
  let fixture: ComponentFixture<PricingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
