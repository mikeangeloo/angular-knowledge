import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsGrantedDirectiveDirective } from './directives/is-granted-directive.directive';
import {ReactiveFormsModule} from '@angular/forms';
import { PermissionsComponent } from './components/permissions/permissions.component';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    IsGrantedDirectiveDirective,
    PermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbTabsetModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
