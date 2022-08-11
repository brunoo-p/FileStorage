import { FileRequest } from './../domain/file/fileRequest';
export interface IFileService {
  save: (file: FileRequest) => Promise<any>
  listAll: () => Promise<any>
}
