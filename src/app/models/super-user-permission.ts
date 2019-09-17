import {PermissionType} from './permission-type';
import {PermissionBase} from './permission-base';
import {Permission} from './permission';
import {Resource} from './resource';

export class SuperUserPermission extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.BILL, [
        PermissionType.CREATE, PermissionType.READ,
        PermissionType.UPDATE
      ]),
      new Permission(Resource.PASTA, [
        PermissionType.CREATE, PermissionType.READ,
        PermissionType.UPDATE
      ]),
      new Permission(Resource.PIZZA, [
        PermissionType.CREATE, PermissionType.READ,
        PermissionType.UPDATE
      ])
    ];
  }
}
