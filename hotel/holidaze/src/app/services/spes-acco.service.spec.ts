import { TestBed } from '@angular/core/testing';

import { SpesAccoService } from './spes-acco.service';

describe('SpesAccoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpesAccoService = TestBed.get(SpesAccoService);
    expect(service).toBeTruthy();
  });
});
