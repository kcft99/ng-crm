import { TestBed, inject } from '@angular/core/testing';

import { APIService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('APIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([APIService], (service: APIService) => {
    expect(service).toBeTruthy();
  }));
});
