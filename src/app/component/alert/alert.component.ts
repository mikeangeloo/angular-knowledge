import {Component, Inject, OnInit} from '@angular/core';
import {AlertType} from '../../static/alert-type';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ModalAlertData} from '../../static/modal-alert-data';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalAlertData

  ) { }

  ngOnInit() {
  }

  getAlertIcon() {
    switch (this.data.alertType) {
      case AlertType.INFO: return 'info';
      case AlertType.WARNING: return 'warning';
      case AlertType.ERROR: return 'error';
    }
  }

}
