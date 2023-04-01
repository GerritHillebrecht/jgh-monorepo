import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBarComponent } from './share-bar.component';

describe('ShareBarComponent', () => {
  let component: ShareBarComponent;
  let fixture: ComponentFixture<ShareBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
