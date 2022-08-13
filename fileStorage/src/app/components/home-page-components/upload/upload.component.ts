import { FileType } from './types';
import { UploadFacadeService } from './facade/upload.facade';
import { FileService } from './../../../services/domain/file/file.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{

  @Input() set file(currentFile: any){
    this.setFile(currentFile);
  }
  @Output() setCurrentFile = new EventEmitter();

  currentFile: any;

  files: UntypedFormGroup;

  keywords: Set<string> = new Set([]);
  currentKeyword: string = '';

  showModal: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private uploadFacadeService: UploadFacadeService
  ) {

    this.files = this.formBuilder.group({
      name: [true ? '' : '', Validators.required],
      description: [ true ? '' : ''],
      keywords: [true ? [''] : ['']],
      content: [true ? null : null, Validators.required],
      metadata: [true ? '' : '' , Validators.required]
    });
  }

  setFile(currentFile: any) {
    this.currentFile = currentFile
  }

  createUrlPreview(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {

      this.setCurrentFile.emit({ file: file, base64: (<FileReader>event.target).result, type: file.type })
      this.files.controls["metadata"].setValue({ type: file.type })

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
    this.setCurrentFile.emit(null);
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
      this.files.controls['content'].setValue(this.currentFile);

      console.log(this.files.value);
      // await this.uploadFacadeService.instance().save(this.files.value as unknown as FileType);
      // this.files.reset();
      // this.keywords.clear();
      // this.closeModal();
    }
  }
}
