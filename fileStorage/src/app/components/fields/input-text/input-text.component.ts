import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['../styles.css']
})
export class InputTextComponent {
  @Input() formGroup!: UntypedFormGroup;
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() required: boolean = true;

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
