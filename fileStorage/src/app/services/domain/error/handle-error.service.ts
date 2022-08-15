import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatusCode } from './../../api/http/httpType';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  getError(error: any): string {
    let message = '';

    if(error instanceof ErrorEvent){

      message = `${error.message}`;

    }else {

      if(error.status === HttpStatusCode.UNAUTHORIZED) {
        message =  'Unauthorized to continue';
      }

      if(error.status === HttpStatusCode.NOT_FOUND) {
        message = 'Sorry, not founded';
      }
      if(error.status === HttpStatusCode.INTERNAL_SERVER_ERROR){
        message = 'Internal server error';
      }
      if(error.status === 0) {
        message = 'Server Error: Connection Refused';
      }
    }

    return message;
  }
}
