import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';

import { HttpStatusCode } from './http/httpType';
import { ApiRequestValidator } from './validation/apiRequestValidator';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  async caller<T>(
    // callApi: () => Promise<HttpResponse<T>>,
    callApi: () => Observable<any>,
    mapper?: (payload: any, header?: any) => T,
    expectedStatusCode?: HttpStatusCode
  ): Promise<T> {
    try {
      const response: any = await callApi();
      ApiRequestValidator.checkStatus(response, expectedStatusCode);

      if(mapper) {
        return mapper(response.data);
      }

      return response;

    } catch (error: any) {

      console.log(error);
      throw new Error(`Error: ${error}`);

    }

  }
}
