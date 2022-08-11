import { Component,} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormsAuthenticationFacade } from './facade/forms-authentication.facade';

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

  constructor(
    private formsFacade: FormsAuthenticationFacade,
    private router: Router
  ) {

  }

  changeForm(form: KeyForm): void {
    this.showForm = FormType[form];
    this.showLogin = this.showForm === FormType.SignIn;
  }

  async submitLogin(login: FormGroup): Promise<void> {

    if(login.valid) {

      const keepConnected = login.controls['keepConnected'].value;
      await this.formsFacade.instance().signIn(login.value, keepConnected);

      this.router.navigate(['']);
    }
  }

  async submitRegister(register: FormGroup): Promise<void> {
    if (register.valid) {

      await this.formsFacade.instance().signUp(register.value);

      this.router.navigate(['']);

    }

  }

}
