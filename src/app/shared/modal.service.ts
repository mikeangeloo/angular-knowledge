import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AlertComponent} from '../component/alert/alert.component';
import {AlertType} from '../static/alert-type';
import {ModalAlertData} from '../static/modal-alert-data';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog
  ) { }

  openInfoModal(message) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: new ModalAlertData({
        title: 'INFO',
        content: message,
        closeButtonLabel: 'Close',
        alertType: AlertType.INFO
      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }
  openWarningModal() { }
  openErrorModal() { }
  openConfirmModal() { }
}
