import { TestBed } from '@angular/core/testing';

import { HtmlSelectorService } from './html-selector.service';

describe('HtmlSelectorService', () => {
  let service: HtmlSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
