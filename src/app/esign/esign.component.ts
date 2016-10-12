import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'esign',
  templateUrl: './esign.component.html',
  styleUrls: ['./esign.component.css']
})
export class EsignComponent implements OnInit {
  @Input() open: boolean;
  @Input() signText: string;

  //Get access to template ref
  @ViewChild('modal') modal;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.open == true){
      this.modal.open();
    }
  }

}
