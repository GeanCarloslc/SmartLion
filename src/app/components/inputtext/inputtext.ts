
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventEmitter } from 'protractor';




@Component({
  selector: 'inputtext',
  templateUrl: './inputtext.html',
  styleUrls: ['./inputtext.css']
})
export class InputtextComponent implements OnInit {

  @Input() value: EventEmitter
  @Input() label: string
  @Output() value2: EventEmitter

  ngOnInit(): void {

  }

  change(value: any){
    this.value2 = this.value2
    
  }






}
