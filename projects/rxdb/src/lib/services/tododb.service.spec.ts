import { TestBed } from '@angular/core/testing';

import { TododbService } from './tododb.service';

describe('TododbService', () => {
  let service: TododbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TododbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
