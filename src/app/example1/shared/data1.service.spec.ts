import { TestBed, inject } from '@angular/core/testing';

import { Data1Service } from './data1.service';

describe('Data1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data1Service]
    });
  });

  it('should ...', inject([Data1Service], (service: Data1Service) => {
    expect(service).toBeTruthy();
  }));
});
