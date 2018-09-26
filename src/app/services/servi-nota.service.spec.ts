import { TestBed, inject } from '@angular/core/testing';

import { ServiNotaService } from './servi-nota.service';

describe('ServiNotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiNotaService]
    });
  });

  it('should be created', inject([ServiNotaService], (service: ServiNotaService) => {
    expect(service).toBeTruthy();
  }));
});
