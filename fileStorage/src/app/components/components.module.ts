import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialAngularModule } from './material-angular/material-angular.module';

import { UploadComponent } from './home-page-components/upload/upload.component';
import { FieldsModule } from './fields/fields.module';
import { SignUpComponent } from './forms-authentication/signUp/signUp.component';
import { FormsAuthenticationComponent } from './forms-authentication/forms-authentication.component';
import { SignInComponent } from './forms-authentication/signIn/signIn.component';
import { ModalComponent } from "./modal/modal.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    FormsAuthenticationComponent,
    UploadComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsModule,
    MaterialAngularModule,
    PdfViewerModule
  ],
  exports: [
    FormsAuthenticationComponent,
    SignInComponent,
    UploadComponent,
    ModalComponent,
  ]
})
export class ComponentsModule { }
