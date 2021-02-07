import { TestBed } from '@angular/core/testing';

import { NotAuthenticatedUserGuard } from './not-authenticated-user.guard';

describe('NotAuthenticatedUserGuard', () => {
  let guard: NotAuthenticatedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAuthenticatedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
