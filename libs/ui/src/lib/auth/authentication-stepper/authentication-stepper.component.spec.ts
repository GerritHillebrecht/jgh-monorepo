import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationStepperComponent } from './authentication-stepper.component';

describe('AuthenticationStepperComponent', () => {
  let component: AuthenticationStepperComponent;
  let fixture: ComponentFixture<AuthenticationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
