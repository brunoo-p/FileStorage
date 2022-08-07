import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['../styles.css', './input-text.component.css']
})
export class InputTextComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() required: boolean = true;

  get formControl(): AbstractControl {
    console.log(this.formGroup.controls[this.controlName])
    return this.formGroup.controls[this.controlName];
  }
}
