import { FormType } from './../types';
import { EventEmitter, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['../forms-authentication.component.css']
})
export class SignUpComponent {

  @Output() setFormToShow = new EventEmitter<keyof typeof FormType>();
  @Output() eventSubmitRegister = new EventEmitter<UntypedFormGroup>();
  register: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.register = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      phone: ['', Validators.required],
      cpf: ['', [Validators.required]]
    })
  }

  changeForm(): void {
    this.setFormToShow.emit(FormType.SignIn);
  }
  handleRegister(): void {
    this.eventSubmitRegister.emit(this.register);
  }

}
