import { TestBed } from '@angular/core/testing';

import { LocalstorageloginService } from './localstoragelogin.service';

describe('LocalstorageloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageloginService = TestBed.get(LocalstorageloginService);
    expect(service).toBeTruthy();
  });
});
