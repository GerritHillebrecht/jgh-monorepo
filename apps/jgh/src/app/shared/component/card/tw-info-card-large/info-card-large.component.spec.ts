import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardLargeComponent } from './info-card-large.component';

describe('InfoCardLargeComponent', () => {
  let component: InfoCardLargeComponent;
  let fixture: ComponentFixture<InfoCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardLargeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
