import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatSlideToggleModule,

  ],
})
export class MaterialAngularModule { }
