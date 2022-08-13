import { FileRequest } from './../../services/domain/file/fileRequest';
import { UploadFacadeService } from './../../components/home-page-components/upload/facade/upload.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  keywords = ['travel', 'house', 'docmuent', 'other', 'blabla', 'vish', 'blabla', 'vish'];
  currentFile: any;
  mockFiles: any;
  files!: any;

  constructor(uploadFacadeService: UploadFacadeService) {
    this.files = uploadFacadeService.instance().listAll('62f5c08aea7ab48433fd5685');
    console.log('files', this.files);
    this.mockFiles = [
      {
        image:"https://th.bing.com/th/id/R.e845dcd4bdc68f9c6ab2452eaf3f92e9?rik=FiCuXFONfJUnRA&pid=ImgRaw&r=0",
        name: "My house",
        description: "That's my country house",
        keywords: this.keywords
      },
      {
        image:"https://th.bing.com/th/id/OIP.R1IrQrZdZ2JWKLLxEwJxyQHaFj?pid=ImgDet&rs=1",
        name: "My house",
        description: "That's house is awesome!",
        keywords: this.keywords
      },
      {
        image:"https://th.bing.com/th/id/R.e845dcd4bdc68f9c6ab2452eaf3f92e9?rik=FiCuXFONfJUnRA&pid=ImgRaw&r=0",
        name: "My house",
        description: "That's my country house",
        keywords: this.keywords
      },
      {
        image:"https://th.bing.com/th/id/R.e845dcd4bdc68f9c6ab2452eaf3f92e9?rik=FiCuXFONfJUnRA&pid=ImgRaw&r=0",
        name: "My house",
        description: "That's my country house",
        keywords: this.keywords
      }
    ]
  }
  trackByFile(index: number){
    return index;
  }
  setCurrentFile(event: any){
    this.currentFile = event;
    console.log(event);
  }
}
