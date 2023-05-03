import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthSliderComponent } from './full-width-slider.component';

describe('FullWidthSliderComponent', () => {
  let component: FullWidthSliderComponent;
  let fixture: ComponentFixture<FullWidthSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullWidthSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullWidthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
