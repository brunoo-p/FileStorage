import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['../styles.css']
})
export class InputPassword {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
