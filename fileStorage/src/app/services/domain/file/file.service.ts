import { MapperFileService } from './mappers/mapper-file.service';
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
    private mapperFileService: MapperFileService,
    private apiCallerService: ApiCallerService
  ) {

    this.api = this.httpClient;

  }
  private async saveFile(api: HttpClient, file: FormData): Promise<any> {
    const url = `${this.baseUrl}/document/${file.get("profileId")}`;
    const callApi = () => api
      .post<FormData>(
        url,
        file,
        { observe: 'response'}
      );

    return await this.apiCallerService.caller(callApi, this.mapperFileService.fromObject, HttpStatusCode.CREATED);

  }

  private async editFile(api: HttpClient, documentId: string, update: FormData): Promise<any> {
    const url = `${this.baseUrl}/document/${documentId}`;
    const callApi = () => api
      .put<FormData>(
        url,
        update,
        { observe: 'response' }
      );
      const response = await this.apiCallerService.caller(callApi, this.mapperFileService.fromObject, HttpStatusCode.OK);
      return response;
  }

  private async listAll(api: HttpClient, profileId: string) {
    const url = `${this.baseUrl}/document/${profileId}`;
    const callApi = () => api
      .get<any>(
        url,
        { observe: 'response' }
      )

      const response = await this.apiCallerService.caller(callApi, this.mapperFileService.fromArray, HttpStatusCode.OK);
      console.log(response);
      return response;
  };


  instance = (): IFileService => ({
    save: (file: FormData) => this.saveFile(this.api, file),
    edit: (documentId: string, update: FormData) => this.editFile(this.api, documentId, update),
    listAll: (profileId: string) => this.listAll(this.api, profileId)
  })
}
