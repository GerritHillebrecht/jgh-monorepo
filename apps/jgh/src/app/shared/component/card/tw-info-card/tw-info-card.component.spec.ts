import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwInfoCardComponent } from './tw-info-card.component';

describe('TwInfoCardComponent', () => {
  let component: TwInfoCardComponent;
  let fixture: ComponentFixture<TwInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwInfoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
