import { TestBed } from '@angular/core/testing';

import { ConexionMBDService } from './conexion-mbd.service';

describe('ConexionMBDService', () => {
  let service: ConexionMBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionMBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
