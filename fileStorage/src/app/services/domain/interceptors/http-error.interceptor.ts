import { ErrorService } from './../error/error.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HandleErrorService } from "../error/handle-error.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private handleErrorService: HandleErrorService,
    private errorService: ErrorService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        const message = this.handleErrorService.getError(error);
        this.errorService.add({ class: 'error', message: message });
        return throwError(() => new Error(message))
      })
    )
  }
}
