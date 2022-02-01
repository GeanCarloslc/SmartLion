import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputtextComponent } from './inputtext/inputtext';
import { MatButtonModule } from '@angular/material/button';



const routes: Routes = [
  { path: 'inputtext', component: InputtextComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    MatButtonModule
  ],
  exports: [
    RouterModule, 
    MatButtonModule
  ]
})
export class ComponentRoutingModule { }
