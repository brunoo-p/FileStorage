import { Component,} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsAuthenticationFacade } from './forms-authentication.facade';

import { LoginRequest } from './../../services/domain/auth/loginRequest';
import { Email } from './../../services/domain/auth/credential/email';
import { Password } from './../../services/domain/auth/credential/password';

import { FormType, KeyForm } from './types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-authentication',
  templateUrl: './forms-authentication.component.html',
  styleUrls: ['./forms-authentication.component.css']
})
export class FormsAuthenticationComponent {

  private showForm: KeyForm = FormType.SignIn;
  showLogin = this.showForm === FormType.SignIn;

  constructor(private formsFacade: FormsAuthenticationFacade, private router: Router) {

  }

  changeForm(form: KeyForm): void {
    this.showForm = FormType[form];
    this.showLogin = this.showForm === FormType.SignIn;
  }

  async submitLogin(login: FormGroup) {

    if(login.valid) {
      const createLogin = new LoginRequest(
        new Email(login.controls['email'].value),
        new Password(login.controls['password'].value)
      );

      await this.formsFacade.instance().signIn(createLogin);
      this.router.navigate(['']);
    }
  }

  submitRegister(register: FormGroup): void {
    alert(JSON.stringify(register.value, null, 2));

  }

}
