import { FileRequest } from './../domain/file/fileRequest';
export interface IFileService {
  save: (file: FormData) => Promise<any>;
  edit: (documentId: string, file: FormData) => any;
  listAll: (profileId: string) => any;
}
