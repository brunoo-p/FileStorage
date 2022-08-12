import { ContextAuthService } from './../../../services/api/context/contextAuth.service';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { LoginType, RegisterType } from '../types';

import { Profile } from './../../../services/domain/profile/profile';
import { RegisterRequest } from '../../../services/domain/auth/registerRequest';
import { StorageManagerService } from '../../../services/domain/utils/storage/storageManager.service';
import { LoginRequest } from '../../../services/domain/auth/loginRequest';
import { LoginService } from '../../../services/api/login/login.service';

import { Email } from '../../../services/domain/auth/credential/email';
import { Password } from '../../../services/domain/auth/credential/password';
import { Contact } from '../../../services/domain/auth/credential/contact';
import { CPF } from '../../../services/domain/auth/credential/cpf';


@Injectable({
  providedIn: 'root'
})
export class FormsAuthenticationFacade {

  constructor(
    private loginService: LoginService,
    private storageManager: StorageManagerService,
    private contextAuthService: ContextAuthService
  ) {}

  private setKeepConnected(data: any) {
    this.storageManager.setItem('@Fs:user', data);
  }

  private async signIn(login: LoginType, keepConnected: boolean): Promise<void> {

    const createLogin = new LoginRequest(
      new Email(login.email),
      new Password(login.password)
    );

    const response: Profile = await this.loginService.instance().signIn(createLogin);

    this.contextAuthService.userProfile = response;

    if(response.isActive && keepConnected) {
      this.setKeepConnected(login.email);
    }
  }

  private async signUp(register: RegisterType): Promise<void> {
    const createRegister = new RegisterRequest(
      register.firstName,
      register.lastName,
      new Email(register.email),
      new Password(register.password),
      new Contact(register.phone),
      new CPF(register.cpf)
    );

    const response: HttpResponse<any> = await this.loginService.instance().signUp(createRegister);

  }


  public instance = (): IAuthFacade => ({
    signIn: (login: LoginType, keepConnected: boolean) => this.signIn(login, keepConnected),
    signUp: (register: RegisterType) => this.signUp(register)
  })

}
interface IAuthFacade {
  signIn: (login: LoginType, keepConnected: boolean) => Promise<void>
  signUp: (register: RegisterType) => Promise<void>
}
