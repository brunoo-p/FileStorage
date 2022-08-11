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
    private fileService: FileService
  ) {}

  private async save(file: FileType): Promise<void> {
    const { name, description, keywords, file: content} = file;

    const newFile = new FileRequest(
      new FileName(name),
      description,
      keywords,
      new FileMetadata( content.type),
      content.file
    )

    await this.fileService.instance().save(newFile);
  }

  private async listAll(): Promise<any> {
    await this.fileService.instance().listAll();
  }
  private edit(id: string, update: Omit<FileType, 'file'>): any {
    console.log(id, update);
    // await this.fileService

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
