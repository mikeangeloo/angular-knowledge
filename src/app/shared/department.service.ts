import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  deparmentList: AngularFireList<any>;
  array = [];
  constructor(private firebase: AngularFireDatabase) {
    this.deparmentList = this.firebase.list('departments');
    this.deparmentList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
}
