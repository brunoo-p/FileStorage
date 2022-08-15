import { FileServiceObservable } from './../../../../services/observables/file.service';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-container',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardContainerComponent implements OnInit{
  @Input() file!: any;
  @Output() setEditFile = new EventEmitter();

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
    this.fileServiceObservable.editFile.subscribe((file: any) => console.log(file));
  }
}
