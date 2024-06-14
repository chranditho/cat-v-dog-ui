import { TestBed } from '@angular/core/testing';

import { CatVDogClassifierApiService } from './cat-v-dog-classifier-api.service';

describe('CatVDogClassifierApiService', () => {
  let service: CatVDogClassifierApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatVDogClassifierApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
