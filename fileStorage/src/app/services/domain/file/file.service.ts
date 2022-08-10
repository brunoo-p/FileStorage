import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  saveFile() {
    console.log('saved');
  }
}
