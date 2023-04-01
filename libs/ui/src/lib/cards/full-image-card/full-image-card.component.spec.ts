import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageCardComponent } from './full-image-card.component';

describe('FullImageCardComponent', () => {
  let component: FullImageCardComponent;
  let fixture: ComponentFixture<FullImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullImageCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
