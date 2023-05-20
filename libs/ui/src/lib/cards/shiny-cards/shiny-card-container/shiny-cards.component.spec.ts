import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShinyCardsComponent } from './shiny-cards.component';

describe('ShinyCardsComponent', () => {
  let component: ShinyCardsComponent;
  let fixture: ComponentFixture<ShinyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShinyCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShinyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
