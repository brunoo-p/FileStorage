import { FileServiceObservable } from './../../services/observables/file.service';
import { UploadFacadeService } from './../../components/home-page-components/upload/facade/upload.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  currentFile: any;
  mockFiles: any;
  files: any = [];

  constructor(
    private uploadFacadeService: UploadFacadeService,
    private fileServiceObservable: FileServiceObservable,
  ) {}

  ngOnInit() {

    this.uploadFacadeService.instance().listAll();
    this.fileServiceObservable.fileList.subscribe((list: any) => this.files = list);

  }

  trackByFile(index: number){
    return index;
  }
  setCurrentFile(event: any){
    this.fileServiceObservable.editFile = event;
    this.fileServiceObservable.editFile.subscribe((file: any) => this.currentFile = file);
  }
}
