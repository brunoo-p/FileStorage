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
    private httpClient: HttpClient,
    private apiCallerService: ApiCallerService
  ) {

    this.api = this.httpClient;

  }
  private async saveFile(api: HttpClient, profileId: string, file: FileRequest): Promise<any> {
    console.log(profileId, file);
    const url = `${this.baseUrl}/document/${profileId}`
    const callApi = () => api
      .post<FileRequest>(
        url,
        file,
        { observe: 'response'}
      );

    return await this.apiCallerService.caller(callApi, undefined, HttpStatusCode.CREATED);

  }

  private async listAll(api: HttpClient): Promise<any> {
    const callApi = () => api
      .get<any>(
        this.baseUrl,
        { observe: 'response' }
      )

      return await this.apiCallerService.caller(callApi, undefined, HttpStatusCode.OK);
  };


  instance = (): IFileService => ({
    save: (profileId: string, file: FileRequest) => this.saveFile(this.api, profileId, file),
    listAll: () => this.listAll(this.api)
  })
}
