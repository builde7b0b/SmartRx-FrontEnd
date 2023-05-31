import { TestBed } from '@angular/core/testing';

import { PrescriptionService } from './prescription.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrescriptionService', () => {
  let service: PrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrescriptionService]
    });
    service = TestBed.inject(PrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
