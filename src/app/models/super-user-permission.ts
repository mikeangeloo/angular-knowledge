import {PermissionType} from './permission-type';
import {PermissionBase} from './permission-base';

export class SuperUserPermission extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      PermissionType.CREATE, PermissionType.READ,
      PermissionType.UPDATE, PermissionType.DELETE,
      PermissionType.OTHER
    ];
  }
}
