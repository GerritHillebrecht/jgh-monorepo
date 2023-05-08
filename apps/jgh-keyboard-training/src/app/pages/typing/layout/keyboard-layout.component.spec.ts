import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyboardLayoutComponent } from './keyboard-layout.component';

describe('KeyboardLayoutComponent', () => {
  let component: KeyboardLayoutComponent;
  let fixture: ComponentFixture<KeyboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyboardLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
