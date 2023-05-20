import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShinyCardComponent } from './shiny-card.component';

describe('ShinyCardComponent', () => {
  let component: ShinyCardComponent;
  let fixture: ComponentFixture<ShinyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShinyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShinyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
