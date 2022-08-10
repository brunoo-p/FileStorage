import { InputPassword } from './input-password/input-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    InputTextComponent,
    InputPassword
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputTextComponent,
    InputPassword
  ],
})
export class FieldsModule { }
