import { TestBed, inject } from '@angular/core/testing';

import { GenericModelService } from './generic-model.service';

describe('GenericModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericModelService]
    });
  });

  it('should ...', inject([GenericModelService], (service: GenericModelService) => {
    expect(service).toBeTruthy();
  }));
});
