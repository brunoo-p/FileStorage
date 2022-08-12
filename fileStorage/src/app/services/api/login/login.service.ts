import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


import { environment } from './../../../../environments/environment';

import { IAuth } from '../../interfaces/IAuth';
import { LoginRequest } from "../../domain/auth/loginRequest";
import { RegisterRequest } from './../../domain/auth/registerRequest';
import { MapProfile } from './../../domain/profile/mappers/mapProfile.service';

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
    private mapProfile: MapProfile
  ) {

    this.api = this.httpClient;
  }

  private async signIn(api: HttpClient, login: LoginRequest): Promise<any>{

    const url = `${this._baseUrl}/auth/signIn`;
    const callApi = () => api
      .post<LoginRequest>(
        url,
        login,
        { observe: 'response' }
      );
    return await this.apiCallerService.caller(callApi, this.mapProfile.fromObject, HttpStatusCode.OK);

  }

  private async signUp(api: HttpClient, register: RegisterRequest): Promise<any> {

    const url = `${this._baseUrl}/auth/signUp`;
    const callApi = () => api
      .post<RegisterRequest>(
        url,
        register,
        { observe: 'response' }
      );
    return await this.apiCallerService.caller(callApi, undefined, HttpStatusCode.CREATED);

  }

  instance = () : IAuth => ({
    signIn: (login: LoginRequest) => this.signIn(this.api, login),
    signUp: (register: RegisterRequest) => this.signUp(this.api, register)
  })
}
