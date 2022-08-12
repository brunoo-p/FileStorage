import { FileRequest } from './../domain/file/fileRequest';
export interface IFileService {
  save: (file: FormData) => Promise<any>
  listAll: (profileId: string) => Promise<any>
}
