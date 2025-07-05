import { TestBed } from '@angular/core/testing';

import { Bolso } from './bolso';

describe('Bolso', () => {
  let service: Bolso;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bolso);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
