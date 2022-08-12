import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { HttpStatusCode } from './http/httpType';
import { ApiRequestValidator } from './validation/apiRequestValidator';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {


  async caller<T>(
    callApi: () => Observable<HttpResponse<T>>,
    mapper?: (payload: any, header?: any) => any,
    expectedStatusCode?: HttpStatusCode
  ): Promise<T> {
    try {
      let response: any = callApi();
      response = await lastValueFrom(response);
      console.debug('debug', response);
      ApiRequestValidator.checkStatus(response, expectedStatusCode);

      if(mapper) {
        return mapper(response.body);
      }

      return response;

    } catch (error: any) {

      console.log(error);
      throw new Error(`Error: ${error}`);

    }

  }
}
