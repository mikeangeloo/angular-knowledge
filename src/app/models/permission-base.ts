import {PermissionType} from './permission-type';
import {Permission} from './permission';

export abstract class PermissionBase {
  public permissions: Permission[];
  constructor() {}
}
