import { TestBed } from '@angular/core/testing';

import { Tr } from './tr';

describe('Tr', () => {
  let service: Tr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
