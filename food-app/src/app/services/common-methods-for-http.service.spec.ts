import { TestBed } from '@angular/core/testing';

import { CommonMethodsForHttpService } from './common-methods-for-http.service';

describe('CommonMethodsForHttpService', () => {
  let service: CommonMethodsForHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonMethodsForHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
