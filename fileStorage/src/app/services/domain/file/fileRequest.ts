import { TypeofDescription, TypeofKeywords } from '../types/typesFile';
import { FileMetadata } from './fileMetadata';
import { FileName } from './fileName';

export class FileRequest {
  constructor(
    public name: FileName,
    public description: TypeofDescription,
    public keywords: TypeofKeywords,
    public metadata: FileMetadata,
    public file: any,
  )
  {}
}
