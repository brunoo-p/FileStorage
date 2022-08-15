import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { FileRequest } from '../domain/file/fileRequest';

@Injectable({
  providedIn: 'root'
})
export class FileServiceObservable {
  private filesList$ = new BehaviorSubject<FileRequest[]>([]);
  private fileToEdit$ = new BehaviorSubject<FileRequest | null>(null);

  get fileList() {
    return this.filesList$.asObservable();
  }
  set fileList(value: any) {
    this.filesList$.next(value);
  }

  get editFile() {
    return this.fileToEdit$.asObservable();
  }
  set editFile(value: any) {
    this.fileToEdit$.next(value);
  }
}
