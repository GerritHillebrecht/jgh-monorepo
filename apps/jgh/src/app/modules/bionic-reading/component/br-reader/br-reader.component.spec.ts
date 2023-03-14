import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrReaderComponent } from './br-reader.component';

describe('BrReaderComponent', () => {
  let component: BrReaderComponent;
  let fixture: ComponentFixture<BrReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrReaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
