import { TestBed } from '@angular/core/testing';

import { BrFetchService } from './br-fetch.service';

describe('BrFetchService', () => {
  let service: BrFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
