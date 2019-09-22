import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['email', 'fullName', 'mobile', 'city', 'actions'];

  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
      });
  }

}
