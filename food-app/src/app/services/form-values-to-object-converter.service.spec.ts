import { TestBed } from '@angular/core/testing';

import { FormValuesToObjectConverterService } from './form-values-to-object-converter.service';

describe('FormValuesToObjectConverterService', () => {
  let service: FormValuesToObjectConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValuesToObjectConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
