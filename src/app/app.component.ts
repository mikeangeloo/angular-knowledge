import { Component } from '@angular/core';
import {ModalService} from './shared/modal.service';
import {AlertType} from './static/alert-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-role-guards';

  constructor(
    private modalService: ModalService
  ) {}

  openInfoModal() {
    const test = ['Test1', 'Test2', 'Test3'];
    this.modalService.openInfoModal(
      test
    );
  }


}
