import { TestBed } from '@angular/core/testing';

import { LogisticService } from './logistic.service';

describe('LogisticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogisticService = TestBed.get(LogisticService);
    expect(service).toBeTruthy();
  });
});
