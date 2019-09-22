import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {dematerialize} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe
  ) { }

  employeeList: AngularFireList<any>;

  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges(); // creando observable
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: this.datePipe.transform(employee.hireDate, 'yyy-MM-dd'),
      isPermanent: employee.isPermanent
    });
  }

  updateEmployee(employee) {
    this.employeeList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: this.datePipe.transform(employee.hireDate, 'yyy-MM-dd'),
      isPermanent: employee.isPermanent
    });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}
