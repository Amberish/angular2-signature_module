/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignatureService } from './signature.service';

describe('Service: Signature', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignatureService]
    });
  });

  it('should ...', inject([SignatureService], (service: SignatureService) => {
    expect(service).toBeTruthy();
  }));
});
