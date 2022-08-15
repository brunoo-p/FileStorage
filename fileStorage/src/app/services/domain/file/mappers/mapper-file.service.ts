import { FileMetadata } from './../fileMetadata';
import { Injectable } from '@angular/core';
import { FileName } from '../fileName';
import { FileRequest } from '../fileRequest';

@Injectable({
  providedIn: 'root'
})
export class MapperFileService {

  constructor() {}

  private mapFile(file: any) {
    const data = {
      id: file.id,
      profileId: file.profileId,
      name: new FileName(file.name),
      description: file.description,
      keywords: file.keywords,
      content: file.content,
      metadata: new FileMetadata(file.metadata)
    };
    return data;

  }
  fromObject(file: any) {
    try {

      // return this.mapFile(file);
      if (file !== null && file.length) {

        return {
          id: file.id,
          profileId: file.profileId,
          name: new FileName(file.name),
          description: file.description,
          keywords: file.keywords,
          content: file.content,
          metadata: new FileMetadata(file.metadata)
        }
      }
      return [];

    }catch (err)
    {
      console.log(err);
      throw new Error(`Error: ${err}`);
    }

  }

  fromArray(files: any) {

    try {

      // return files.map((file: any) => this.fromObject(file));
      if (files !== null && files.length) {
        return files.map((file: any) => (
          {
            id: file.id,
            profileId: file.profileId,
            name: new FileName(file.name),
            description: file.description,
            keywords: file.keywords,
            content: file.content,
            metadata: new FileMetadata(file.metadata)
          }
        ))
      }
      return [];

    }catch (err)
    {
      console.log(err);
      throw new Error(`Error: ${err}`);
    }
  }
}
