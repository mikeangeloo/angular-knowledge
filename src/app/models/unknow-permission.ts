import {PermissionBase} from './permission-base';
import {PermissionType} from './permission-type';

export class UnknowPermission extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      PermissionType.OTHER
    ];
  }
}
