import { TestBed } from '@angular/core/testing';

import { BrCompilerService } from './br-compiler.service';

describe('BrCompilerService', () => {
  let service: BrCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
