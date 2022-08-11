import { IFileService } from './../../interfaces/IFileService';
import { HttpStatusCode } from './../../api/http/httpType';
import { ApiCallerService } from './../../api/apiCaller.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { environment } from './../../../../environments/environment';

import { FileRequest } from './fileRequest';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = environment.baseUrl;
  private api: HttpClient;

  constructor(
    private httpClient: HttpClient
  ) {

    this.api = this.httpClient;

  }
  private async saveFile(api: HttpClient, file: FileRequest): Promise<any> {
    const callApi = () => api
      .post<FileRequest>(
        this.baseUrl,
        JSON.stringify(file),
        { observe: 'response'}
      );

    return await ApiCallerService.caller(callApi, undefined, HttpStatusCode.CREATED);

  }

  private async listAll(api: HttpClient): Promise<any> {
    const callApi = () => api
      .get<any>(
        this.baseUrl,
        { observe: 'response' }
      )

      return await ApiCallerService.caller(callApi, undefined, HttpStatusCode.OK);
  };


  instance = (): IFileService => ({
    save: (file: FileRequest) => this.saveFile(this.api, file),
    listAll: () => this.listAll(this.api)
  })
}
