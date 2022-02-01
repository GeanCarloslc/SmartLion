import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputtextComponent } from './inputtext/inputtext';
import { ComponentRoutingModule } from './component-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputtextComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule
  ], 
  exports: [
    InputtextComponent,

  ]
})
export class ComponentModule { }
