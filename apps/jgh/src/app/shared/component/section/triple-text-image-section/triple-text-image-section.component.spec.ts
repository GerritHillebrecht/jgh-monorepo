import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleTextImageSectionComponent } from './triple-text-image-section.component';

describe('TripleTextImageSectionComponent', () => {
  let component: TripleTextImageSectionComponent;
  let fixture: ComponentFixture<TripleTextImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleTextImageSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TripleTextImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
