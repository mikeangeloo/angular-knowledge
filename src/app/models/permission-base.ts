import {PermissionType} from './permission-type';

export abstract class PermissionBase {
  public permissions: PermissionType[];
  constructor() {}
}
