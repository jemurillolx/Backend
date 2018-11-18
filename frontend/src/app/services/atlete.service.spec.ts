import { TestBed } from '@angular/core/testing';

import { AtleteService } from './atlete.service';

describe('AtleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtleteService = TestBed.get(AtleteService);
    expect(service).toBeTruthy();
  });
});
