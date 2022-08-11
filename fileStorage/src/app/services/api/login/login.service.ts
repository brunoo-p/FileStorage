import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


import { environment } from './../../../../environments/environment';

import { IAuth } from '../../interfaces/IAuth';
import { ContextAuthService } from './../context/contextAuth.service';
import { LoginRequest } from "../../domain/auth/loginRequest";
import { RegisterRequest } from './../../domain/auth/registerRequest';

import { ApiCallerService } from './../apiCaller.service';
import { HttpStatusCode } from '../http/httpType';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl = environment.baseUrl;
  private api: HttpClient;

  constructor(
    private apiCallerService: ApiCallerService,
    private httpClient: HttpClient,

  ) {

    this.api = this.httpClient;
  }

  private async signIn(api: HttpClient, login: LoginRequest): Promise<any>{

    const url = `${this._baseUrl}/login`;
    const callApi = () => api
      .post<LoginRequest>(
        url,
        JSON.stringify(login),
        { observe: 'response' }
      );
    return await this.apiCallerService.caller(callApi, undefined, HttpStatusCode.OK);

  }

  private async signUp(api: HttpClient, register: RegisterRequest): Promise<any> {

    const url = `${this._baseUrl}/register`;
    const callApi = () => api
      .post<RegisterRequest>(
        url,
        JSON.stringify(register),
        { observe: 'response' }
      );
    const response = this.apiCallerService.caller(callApi, undefined, HttpStatusCode.CREATED);

    console.log(response);

  }

  instance = () : IAuth => ({
    signIn: (login: LoginRequest) => this.signIn(this.api, login),
    signUp: (register: RegisterRequest) => this.signUp(this.api, register)
  })
}
