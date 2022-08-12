import { ContextAuthService } from './../../../../services/api/context/contextAuth.service';
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
    private contextAuthService: ContextAuthService
  ) {}

  private async save(file: FileType): Promise<void> {
    const { name, description, keywords, metadata, content} = file;

    const profileId = '62f5c08aea7ab48433fd5685';
    const newFile = new FileRequest(
      profileId,
      new FileName(name),
      description,
      keywords,
      content,
      new FileMetadata(metadata.type),
    )

    const data: FormData = newFile.mapFormData();
    const response = await this.fileService.instance().save(data);
  }

  private async listAll(): Promise<any> {
    const profileId = '62f5c08aea7ab48433fd5685';
    const response = await this.fileService.instance().listAll(profileId);
    console.log(response);
  }
  private edit(id: string, update: Omit<FileType, 'file'>): any {
    console.log(id, update);

  }


  instance = (): IFileFacade => ({
    save: (file: FileType) => this.save(file),
    listAll: () => this.listAll(),
    edit: (id: string, update: Omit<FileType, 'file'>) => this.edit(id, update)
  })
}

interface IFileFacade {
  save: (File: FileType) => Promise<void>,
  listAll: () => Promise<any>,
  edit: (id: string, update: Omit<FileType, 'file'>) => any
}
