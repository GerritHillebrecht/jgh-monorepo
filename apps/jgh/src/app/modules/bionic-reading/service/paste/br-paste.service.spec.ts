import { TestBed } from '@angular/core/testing';

import { BrPasteService } from './br-paste.service';

describe('BrPasteService', () => {
  let service: BrPasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrPasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
