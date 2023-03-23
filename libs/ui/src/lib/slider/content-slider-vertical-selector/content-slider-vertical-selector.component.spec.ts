import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderVerticalSelectorComponent } from './content-slider-vertical-selector.component';

describe('ContentSliderVerticalSelectorComponent', () => {
  let component: ContentSliderVerticalSelectorComponent;
  let fixture: ComponentFixture<ContentSliderVerticalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSliderVerticalSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSliderVerticalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
