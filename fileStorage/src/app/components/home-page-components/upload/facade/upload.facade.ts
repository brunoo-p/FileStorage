import { StorageManagerService } from './../../../../services/domain/utils/storage/storageManager.service';
import { FileServiceObservable } from './../../../../services/observables/file.service';
import { Injectable } from '@angular/core';

import { FileService } from '../../../../services/domain/file/file.service';
import { FileRequest } from '../../../../services/domain/file/fileRequest';

import { FileName } from '../../../../services/domain/file/fileName';
import { FileMetadata } from '../../../../services/domain/file/fileMetadata';

import { FileType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UploadFacadeService {

  constructor(
    private fileService: FileService,
    private fileServiceObservable: FileServiceObservable,
    private storageManagerService :StorageManagerService
  ) {}

  private async saveOrUpdate(file: FileType): Promise<void> {
    const { name, description, keywords, metadata, content} = file;

    const { id } = this.storageManagerService.getItem('@Fs:user');
    const newFile = new FileRequest(
      id,
      new FileName(name),
      description,
      keywords,
      content,
      new FileMetadata(metadata.type),
    )

    const data: FormData = newFile.mapFormData();
    if(content.id){
      return await this.fileService.instance().edit(content.id, data);
    }else {
      return await this.fileService.instance().save(data);
    }
  }

  private async listAll(): Promise<any> {

    const { id } = this.storageManagerService.getItem('@Fs:user');
    const response = await this.fileService.instance().listAll(id);
    this.fileServiceObservable.fileList = response;
  }


  instance = (): IFileFacade => ({
    saveOrUpdate: (file: FileType) => this.saveOrUpdate(file),
    listAll: () => this.listAll(),
  })
}

interface IFileFacade {
  saveOrUpdate: (File: FileType) => Promise<void>,
  listAll: () => Promise<any>,
}
