import { TestBed } from '@angular/core/testing';

import { ImovelStorageService } from './imovel-storage.service';

describe('ImovelStorageService', () => {
  let service: ImovelStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImovelStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
