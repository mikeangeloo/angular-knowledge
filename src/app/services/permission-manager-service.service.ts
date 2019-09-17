import { Injectable } from '@angular/core';
import {PermissionBase} from '../models/permission-base';
import {PermissionType} from '../models/permission-type';
import {PermissionsFactory} from '../factory/permissions-factory.';
import {Role} from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerServiceService {

  private permissions: PermissionBase;
  constructor() { }

  isGranted(permission: PermissionType) {
    const permissions = PermissionsFactory.getInstance().permissions;
    for (const perm of permissions) {
      if (perm === permission) {
        return true;
      }
    }
    return false;
  }

  getPermission() {
    return PermissionsFactory.getInstance().permissions;
  }

  authAs(role: Role) {
    localStorage.setItem('role',
      (role === null)
        ? Role.UNKNOWN
        : role
    );
    this.permissions = PermissionsFactory.getInstance();
  }
}
