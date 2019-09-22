import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

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
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>
  ) { }



  ngOnInit() {
    this.employeeService.getEmployees();
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }


  onSubmit() {
    if (this.employeeService.form.valid) {
      if (!this.employeeService.form.get('$key').value) {
        this.employeeService.insertEmployee(this.employeeService.form.value);
      } else {
        this.employeeService.updateEmployee(this.employeeService.form.value);
      }
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.notificationService.success('Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
    this.dialogRef.close();
  }
}
