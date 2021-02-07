import { TestBed } from '@angular/core/testing';

import { DietPlanDayService } from './diet-plan-day.service';

describe('DietPlanDayService', () => {
  let service: DietPlanDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietPlanDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
