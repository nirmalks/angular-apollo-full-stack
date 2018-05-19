import { TestBed, inject } from '@angular/core/testing';

import { CricketerService } from './cricketer.service';

describe('CricketerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricketerService]
    });
  });

  it('should be created', inject([CricketerService], (service: CricketerService) => {
    expect(service).toBeTruthy();
  }));
});
