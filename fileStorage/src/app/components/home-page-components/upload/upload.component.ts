import { FileServiceObservable } from './../../../services/observables/file.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";

import { FileType } from './types';

import { UploadFacadeService } from './facade/upload.facade';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{

  file: any;
  imageShow: any;
  metadata: { type: string } = { type: '' };

  files!: UntypedFormGroup;

  keywords: Set<string> = new Set([]);
  currentKeyword: string = '';

  showModal: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private uploadFacadeService: UploadFacadeService,
    private fileServiceObservable: FileServiceObservable,
    private _sanitizer: DomSanitizer
  ) {
    this.mapFileFormGroup();
  }

  ngOnInit(): void {

    this.fileServiceObservable.editFile.subscribe((file: any) => {
      this.file = file;
      this.metadata = file?.metadata;

      this.imageShow = this._sanitizer
        .bypassSecurityTrustResourceUrl(`data:${this.file?.metadata.type};base64, ${this.file?.content}`);

      this.mapFileFormGroup(this.file);

      if(file && file.keywords) {
        for (let word of file.keywords) {
          this.keywords.add(word);
        }
      }
    });

  }

  mapFileFormGroup(file?: any) {
    this.files = this.formBuilder.group({
      name: [this.file ? this.file.name.value : '', Validators.required],
      description: [ this.file ? this.file.description : ''],
      keywords: [this.file ? [...this.file.keywords] : ['']],
      content: [this.file ? file.content : null],
      metadata: [this.file ? this.file.metadata : {type: '' } , Validators.required]
    });
  }

  createUrlPreview(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.file = file;
      this.imageShow = (<FileReader>event.target).result;
      this.metadata = { type: file.type }
    }
  }
  uploadFile(event: any) {
    const filesUploaded: File = event.target.files[0];

    if(filesUploaded) {
      this.createUrlPreview(filesUploaded);
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
    this.file = null;
    this.files.reset();
    this.keywords.clear();
  }

  addKeywordFromInput(event: any) {
    const newKeyword = event.target.value;
    if (newKeyword.trim()) {
      this.keywords.add(newKeyword);
      event.target.value = '';
    }
  }
  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  async submitFile() {

    if (this.files.valid) {

      this.files.controls['keywords'].setValue([...this.keywords]);
      this.files.controls['content'].setValue(this.file);
      this.files.controls["metadata"].setValue(this.metadata);

      await this.uploadFacadeService.instance().saveOrUpdate(this.files.value as unknown as FileType);

      this.closeModal();
    }
  }
}
