import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { FormType } from './../types';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['../forms-authentication.component.css']
})
export class SignInComponent {

  @Output() setFormToShow = new EventEmitter<keyof typeof FormType>();
  @Output() eventSubmitLogin = new EventEmitter<UntypedFormGroup>();
  login: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {

    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators. required, Validators.minLength(8), Validators.maxLength(20)]],
      keepConnected: [false]
    });

  }

  changeForm(): void {
    this.setFormToShow.emit(FormType.SignUp);
  }

  keepConnected(): void {
    const prevValue = this.login.get('keepConnected');
    prevValue?.setValue(!prevValue);
  }

  submitLogin(): void {
    this.eventSubmitLogin.emit(this.login);
  }
}
