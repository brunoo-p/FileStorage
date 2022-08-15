import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SloganComponent } from './../pages/authentication-page/slogan/slogan.component';
import { NavbarComponent } from './home-page-components/navbar/nav.component';

import { EmptyMessageComponent } from './../pages/home-page/empty-message/empty-message.component';
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { FieldsModule } from './fields/fields.module';

import { CardContainerComponent } from './home-page-components/upload/card-file/card.component';
import { UploadComponent } from './home-page-components/upload/upload.component';
import { SignUpComponent } from './forms-authentication/signUp/signUp.component';
import { FormsAuthenticationComponent } from './forms-authentication/forms-authentication.component';
import { SignInComponent } from './forms-authentication/signIn/signIn.component';
import { ModalComponent } from "./modal/modal.component";
import { HeaderComponent } from './home-page-components/header/header.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SloganComponent,
    FormsAuthenticationComponent,
    EmptyMessageComponent,
    UploadComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent,
    CardContainerComponent
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
    SloganComponent,
    EmptyMessageComponent,
    UploadComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent,
    CardContainerComponent
  ],
})
export class ComponentsModule { }
