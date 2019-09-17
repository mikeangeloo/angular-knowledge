import {PermissionBase} from './permission-base';
import {PermissionType} from './permission-type';
import {Permission} from './permission';
import {Resource} from './resource';

export class UnknowPermission extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.BILL, [
        PermissionType.READ,
        PermissionType.ORDER
      ])
    ];
  }
}
