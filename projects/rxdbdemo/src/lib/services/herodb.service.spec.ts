import { TestBed } from '@angular/core/testing';

import { HerodbService } from './herodb.service';

describe('HerodbService', () => {
  let service: HerodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
