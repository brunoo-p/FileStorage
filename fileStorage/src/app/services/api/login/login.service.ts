import { ContextAuthService } from './../context/contextAuth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { environment } from './../../../../environments/environment';

import { LoginRequest } from "../../domain/auth/loginRequest";

import { ApiCallerService } from './../apiCaller.service';
import { HttpStatusCode } from '../http/httpType';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;
  private api: HttpClient;

  constructor(
    // private apiCallerService: ApiCallerService,
    private httpClient: HttpClient,
    private contextAuthService: ContextAuthService

  ) {

    this.api = this.httpClient;
  }

  private async signIn(api: HttpClient, login: LoginRequest): Promise<void>{

    // const apiCall = () => api.post<LoginRequest>(this.baseUrl, login);
    // const response = this.apiCallerService.caller(apiCall, undefined, HttpStatusCode.OK);
    this.contextAuthService.userProfile = login;
    console.log('user', this.contextAuthService.userProfile);
    localStorage.setItem('@Token', JSON.stringify(login));
  }

  instance = () => ({
    signIn: (login: LoginRequest) => this.signIn(this.api, login)
  })
}
