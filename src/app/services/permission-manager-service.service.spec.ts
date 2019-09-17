import { TestBed } from '@angular/core/testing';

import { PermissionManagerServiceService } from './permission-manager-service.service';

describe('PermissionManagerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionManagerServiceService = TestBed.get(PermissionManagerServiceService);
    expect(service).toBeTruthy();
  });
});
