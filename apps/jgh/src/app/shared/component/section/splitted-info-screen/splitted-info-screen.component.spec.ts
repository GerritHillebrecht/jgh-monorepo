import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplittedInfoScreenComponent } from './splitted-info-screen.component';

describe('SplittedInfoScreenComponent', () => {
  let component: SplittedInfoScreenComponent;
  let fixture: ComponentFixture<SplittedInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplittedInfoScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplittedInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
