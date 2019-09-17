import { Resource } from './resource';
import { PermissionType } from './permission-type';

export class Permission {
  public resource: Resource;
  public permissions: PermissionType[];
  constructor(resource: Resource, permissions: PermissionType[]) {
    this.resource = resource;
    this.permissions = permissions;
  }
}
