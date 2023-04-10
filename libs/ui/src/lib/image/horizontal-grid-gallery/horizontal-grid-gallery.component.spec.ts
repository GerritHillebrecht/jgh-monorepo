import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGridGalleryComponent } from './horizontal-grid-gallery.component';

describe('HorizontalGridGalleryComponent', () => {
  let component: HorizontalGridGalleryComponent;
  let fixture: ComponentFixture<HorizontalGridGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalGridGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalGridGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
