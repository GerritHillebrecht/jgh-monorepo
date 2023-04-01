import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSectionComponent } from './trainer-section.component';

describe('TrainerSectionComponent', () => {
  let component: TrainerSectionComponent;
  let fixture: ComponentFixture<TrainerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
