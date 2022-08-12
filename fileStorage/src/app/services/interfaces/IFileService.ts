import { FileRequest } from './../domain/file/fileRequest';
export interface IFileService {
  save: (profileId: string, file: FileRequest) => Promise<any>
  listAll: () => Promise<any>
}
