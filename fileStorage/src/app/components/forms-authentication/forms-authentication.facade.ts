import { Injectable } from "@angular/core";

import { LoginRequest } from './../../services/domain/auth/loginRequest';
import { LoginService } from './../../services/api/login/login.service';

import { IAuthFacade } from './../../services/interfaces/IAuthFacade';

@Injectable({
  providedIn: 'root'
})
export class FormsAuthenticationFacade {

  constructor(private loginService: LoginService) {}

  private async signIn(login: LoginRequest): Promise<any> {
    console.log(login);
    await this.loginService.instance().signIn(login);
  }

  public instance = (): IAuthFacade => ({
    signIn: (login: LoginRequest) => this.signIn(login)
  })
}
