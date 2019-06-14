import { TestBed } from '@angular/core/testing';

import { AccomodationsService } from './accomodations.service';

describe('AccomodationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccomodationsService = TestBed.get(AccomodationsService);
    expect(service).toBeTruthy();
  });
});
