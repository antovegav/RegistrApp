import { TestBed } from '@angular/core/testing';

import { ObtenerUsuarioService } from './obtener-usuario.service';

describe('ObtenerUsuarioService', () => {
  let service: ObtenerUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
