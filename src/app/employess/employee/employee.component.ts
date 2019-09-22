import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../shared/employee.service';
import {DepartmentService} from '../../shared/department.service';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService
  ) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }
  onSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
      this.employeeService.insertEmployee(this.form.value);
      this.form.reset();
      this.initializeFormGroup();
      this.notificationService.success('Submitted successfully');
    }
  }
}
