import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLayoutComponent } from './gym-layout.component';

describe('GymLayoutComponent', () => {
  let component: GymLayoutComponent;
  let fixture: ComponentFixture<GymLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
