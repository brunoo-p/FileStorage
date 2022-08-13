import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class MaterialAngularModule { }
