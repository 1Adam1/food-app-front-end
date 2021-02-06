import { TestBed } from '@angular/core/testing';

import { ProductOfferService } from './product-offer.service';

describe('ProductOfferService', () => {
  let service: ProductOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
