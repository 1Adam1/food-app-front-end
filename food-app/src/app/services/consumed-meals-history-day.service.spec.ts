import { TestBed } from '@angular/core/testing';

import { ConsumedMealsHistoryDayService } from './consumed-meals-history-day.service';

describe('ConsumedMealsHistoryDayService', () => {
  let service: ConsumedMealsHistoryDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumedMealsHistoryDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
