import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSliderComponent } from './highlight-slider.component';

describe('HighlightSliderComponent', () => {
  let component: HighlightSliderComponent;
  let fixture: ComponentFixture<HighlightSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
