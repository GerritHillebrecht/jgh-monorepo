import { TestBed } from '@angular/core/testing';

import { BrHttpService } from './br-http.service';

describe('BrHttpService', () => {
  let service: BrHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
