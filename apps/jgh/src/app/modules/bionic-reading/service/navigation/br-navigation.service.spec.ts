import { TestBed } from '@angular/core/testing';

import { BrNavigationService } from './br-navigation.service';

describe('BrNavigationService', () => {
  let service: BrNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
