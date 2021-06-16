import { TestBed } from '@angular/core/testing';

import { RestomaService } from './restoma.service';

describe('RestomaService', () => {
  let service: RestomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
