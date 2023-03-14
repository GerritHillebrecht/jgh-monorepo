import { TestBed } from '@angular/core/testing';

import { BrFormService } from './br-form.service';

describe('BrFormService', () => {
  let service: BrFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
