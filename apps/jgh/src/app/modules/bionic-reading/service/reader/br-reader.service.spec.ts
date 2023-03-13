import { TestBed } from '@angular/core/testing';

import { BrReaderService } from './br-reader.service';

describe('BrReaderService', () => {
  let service: BrReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
