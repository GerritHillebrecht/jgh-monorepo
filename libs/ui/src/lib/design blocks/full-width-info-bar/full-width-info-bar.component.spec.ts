import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthInfoBarComponent } from './full-width-info-bar.component';

describe('FullWidthInfoBarComponent', () => {
  let component: FullWidthInfoBarComponent;
  let fixture: ComponentFixture<FullWidthInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullWidthInfoBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullWidthInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
