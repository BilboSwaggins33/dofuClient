import { TestBed } from '@angular/core/testing';

import { DofuService } from './dofu.service';

describe('DofuService', () => {
  let service: DofuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DofuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
