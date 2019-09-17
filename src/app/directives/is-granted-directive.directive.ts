import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionManagerServiceService} from '../services/permission-manager-service.service';
import {PermissionType} from '../models/permission-type';

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerS: PermissionManagerServiceService
  ) { }

  @Input() set appIsGranted(permission: PermissionType) {
    this.isGranted(permission);
  }
  private isGranted(permission: PermissionType) {
    if (this.permissionManagerS.isGranted(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
