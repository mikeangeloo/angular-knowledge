import {PermissionType} from './permission-type';
import {PermissionBase} from './permission-base';

export class UserPermissions extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      PermissionType.READ
    ];
  }
}
