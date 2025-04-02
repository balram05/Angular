import { TestBed } from '@angular/core/testing';

import { ServicetwoService } from './servicetwo.service';

describe('ServicetwoService', () => {
  let service: ServicetwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
