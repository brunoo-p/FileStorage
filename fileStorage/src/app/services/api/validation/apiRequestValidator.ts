import { HttpStatusCode } from '../http/httpType';

export class ApiRequestValidator {

  private static checkForStatus(response: any, expectedStatusCode: HttpStatusCode ): void {
    const responseStatusCode = response.status;
    if (responseStatusCode === expectedStatusCode) {
      return;
    };

    throw new Error(`HttpClient did not fail. However responseStatusCode=${responseStatusCode} was is different from expectedStatusCode=${expectedStatusCode}`)
  }

  static checkStatus(response: any, httpStatusCode?: HttpStatusCode | null): void {
    if (httpStatusCode !== null && httpStatusCode !== undefined ) {
      this.checkForStatus(response, httpStatusCode);
    }
  }
}
