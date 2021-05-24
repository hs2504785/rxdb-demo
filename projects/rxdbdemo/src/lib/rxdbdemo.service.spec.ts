import { TestBed } from '@angular/core/testing';

import { RxdbdemoService } from './rxdbdemo.service';

describe('RxdbdemoService', () => {
  let service: RxdbdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxdbdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
