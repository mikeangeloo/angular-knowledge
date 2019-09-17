import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionManagerServiceService} from '../services/permission-manager-service.service';
import {PermissionType} from '../models/permission-type';
import {Resource} from '../models/resource';

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerS: PermissionManagerServiceService
  ) { }

  @Input() set appIsGranted(permission: Array<string>) {
    this.isGranted(
      permission[0] as Resource,
      permission[1] as PermissionType
    );
  }
  private isGranted(resource: Resource, permissionType: PermissionType) {
    if (this.permissionManagerS.isGranted(resource, permissionType)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
