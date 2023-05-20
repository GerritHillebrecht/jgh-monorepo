import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlowingHoverCardComponent } from './glowing-hover-card.component';

describe('GlowingHoverCardComponent', () => {
  let component: GlowingHoverCardComponent;
  let fixture: ComponentFixture<GlowingHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowingHoverCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlowingHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
