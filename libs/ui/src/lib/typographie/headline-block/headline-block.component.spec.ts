import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineBlockComponent } from './headline-block.component';

describe('HeadlineBlockComponent', () => {
  let component: HeadlineBlockComponent;
  let fixture: ComponentFixture<HeadlineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlineBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadlineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
