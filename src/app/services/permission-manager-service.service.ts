import { Injectable } from '@angular/core';
import {PermissionBase} from '../models/permission-base';
import {PermissionType} from '../models/permission-type';
import {PermissionsFactory} from '../factory/permissions-factory.';
import {Role} from '../models/role';
import {Resource} from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerServiceService {

  private permissions: PermissionBase;
  constructor() {
    this.permissions = PermissionsFactory.getInstance();
  }

  isGranted(resource: Resource, permission: PermissionType) {
    for (const res of this.permissions.permissions) {
      if (resource === res.resource) {
        for (const perm of res.permissions) {
          if (perm === permission) {
            return true;
          }
        }
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
