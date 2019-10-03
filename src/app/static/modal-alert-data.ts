import {AlertType} from './alert-type';

export class ModalAlertData {
  title: string;
  content: any;
  alertType: AlertType;
  closeButtonLabel: string;

  constructor(data?) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.alertType = data.alertType;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}
