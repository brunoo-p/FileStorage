import { FileServiceObservable } from './../../../../services/observables/file.service';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { ArrayBuffer } from './service/toArrayBuffer';

@Component({
  selector: 'app-card-container',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardContainerComponent implements OnInit{
  @Input() file!: any;

  @Output() setExcludeFile = new EventEmitter();
  @Output() setDownloadFile = new EventEmitter();

  isImage = true;
  imageShow: any;
  pdf: any;

  constructor(
    private _sanitizer: DomSanitizer,
    private fileServiceObservable: FileServiceObservable
  ) {}

  ngOnInit() {
    this.imageShow = this._sanitizer
      .bypassSecurityTrustResourceUrl(`data:${this.file.metadata.type};base64, ${this.file.content}`);
      if(this.file.metadata.type.includes('pdf')) {
        this.pdf = this._sanitizer
        .bypassSecurityTrustResourceUrl(`data:application/pdf;base64, ${this.file.content}`);
      }
  }

  trackByKeywordList(index: number){
    return index;
  }
  editFile(file: any) {
    this.fileServiceObservable.editFile = file;
  }
  deleteFile(excludeFile: any) {
    let list: any;
    this.fileServiceObservable.fileList.subscribe((prev: any) => list= prev);
    this.fileServiceObservable.fileList = list?.filter((file: any) => file.id !== excludeFile.id);

    this.setExcludeFile.emit(excludeFile);
  }
  downloadFile(downloadFile: any) {
    // let file = documents.filter(doc => ( doc.id === idFile ));

    // let name = file[0].docName;

    const arrayBuffer = ArrayBuffer.base64ToArrayBuffer(downloadFile.content);
    ArrayBuffer.createAndDownloadBlobFile (arrayBuffer, downloadFile.name.value, downloadFile.metadata.type);
    console.log(downloadFile);
  }
}
