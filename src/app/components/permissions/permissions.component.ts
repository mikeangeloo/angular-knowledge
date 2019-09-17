import { Component, OnInit, Input } from '@angular/core';
import {PermissionType} from '../../models/permission-type';
import {Resource} from '../../models/resource';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  @Input() resource: string;

  constructor() {

  }

  ngOnInit() {
  }

  public permissionKeys() {
    return Object.keys(PermissionType);
  }

}
