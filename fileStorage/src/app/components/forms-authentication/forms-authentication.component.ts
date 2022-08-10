import { FormType, KeyForm, Login } from './types';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-authentication',
  templateUrl: './forms-authentication.component.html',
  styleUrls: ['./forms-authentication.component.css']
})
export class FormsAuthenticationComponent {

  private showForm: KeyForm = FormType.SignIn;
  showLogin = this.showForm === FormType.SignIn;

  changeForm(form: KeyForm): void {
    this.showForm = FormType[form];
    this.showLogin = this.showForm === FormType.SignIn;
  }

  submitLogin(login: FormGroup): void {
    alert(JSON.stringify(login.value, null, 2));
  }

  submitRegister(register: FormGroup): void {
    alert(JSON.stringify(register.value, null, 2));

  }
}
