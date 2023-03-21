import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSliceComponent } from './background-slice.component';

describe('BackgroundSliceComponent', () => {
  let component: BackgroundSliceComponent;
  let fixture: ComponentFixture<BackgroundSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSliceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
