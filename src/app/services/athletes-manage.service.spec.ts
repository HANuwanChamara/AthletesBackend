import { TestBed } from '@angular/core/testing';

import { AthletesManageService } from './athletes-manage.service';

describe('AthletesManageService', () => {
  let service: AthletesManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthletesManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
