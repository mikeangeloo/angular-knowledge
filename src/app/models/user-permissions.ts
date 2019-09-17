import {PermissionType} from './permission-type';
import {PermissionBase} from './permission-base';
import {Permission} from './permission';
import {Resource} from './resource';

export class UserPermissions extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.BILL, [
        PermissionType.READ,
        PermissionType.ORDER
      ]),
      new Permission(Resource.PASTA, [
        PermissionType.READ,
        PermissionType.ORDER
      ]),
      new Permission(Resource.PIZZA, [
        PermissionType.READ
      ])
    ];
  }
}
