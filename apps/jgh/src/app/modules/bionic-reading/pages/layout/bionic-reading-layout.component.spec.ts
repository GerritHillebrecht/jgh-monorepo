import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BionicReadingLayoutComponent } from './bionic-reading-layout.component';

describe('BionicReadingLayoutComponent', () => {
  let component: BionicReadingLayoutComponent;
  let fixture: ComponentFixture<BionicReadingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BionicReadingLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BionicReadingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
