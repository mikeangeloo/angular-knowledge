import {PermissionBase} from '../models/permission-base';
import {Role} from '../models/role';
import {SuperUserPermission} from '../models/super-user-permission';
import {UnknowPermission} from '../models/unknow-permission';
import {UserPermissions} from '../models/user-permissions';
import {AdminPermissions} from '../models/admin-permissions';

export class PermissionsFactory {

  public static instance: PermissionBase;

  private constructor() {}
  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      const role = localStorage.getItem('role');
      switch (role) {
        case Role.SUPERUSER:
          this.instance = new SuperUserPermission();
          break;
        case Role.UNKNOWN:
          this.instance = new UnknowPermission();
          break;
        case Role.USER:
          this.instance = new UserPermissions();
          break;
        case Role.ADMIN:
          this.instance = new AdminPermissions();
          break;
        default:
          this.instance = new UnknowPermission();
          break;
      }
    }
  }
}
