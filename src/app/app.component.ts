import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PermissionManagerServiceService} from './services/permission-manager-service.service';
import {Role} from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public permissions: any;

  constructor(private userS: PermissionManagerServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userS.authAs(localStorage.getItem('role') as Role);
    this.buildForm();
  }

  buildForm() {
    const currentRole = localStorage.getItem('role') === null
      ? Role.UNKNOWN
      : localStorage.getItem('role');
    this.form = this.fb.group({
      role: [currentRole, [Validators.required]]
    });
  }

  loginAs() {
    this.userS.authAs(this.form.get('role').value as Role);
    location.reload();
  }

  getRole() {
    return localStorage.getItem('role');
  }

}
