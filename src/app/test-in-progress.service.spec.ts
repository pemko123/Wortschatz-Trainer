import { TestBed } from '@angular/core/testing';

import { TestInProgressService } from './test-in-progress.service';

describe('TestInProgressService', () => {
  let service: TestInProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestInProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
