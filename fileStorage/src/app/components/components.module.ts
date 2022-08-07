import { FieldsModule } from './fields/fields.module';
import { SignUpComponent } from './forms-authentication/signUp/signUp.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsAuthenticationComponent } from './forms-authentication/forms-authentication.component';
import { NgModule } from "@angular/core";
import { SignInComponent } from './forms-authentication/signIn/signIn.component';

@NgModule({
  declarations: [
    FormsAuthenticationComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsModule
  ],
  exports: [
    FormsAuthenticationComponent,
    SignInComponent,
  ]
})
export class ComponentsModule { }
