import { Component, 
          OnInit, 
          Input, 
          ViewChild, 
          Output, 
          EventEmitter } from '@angular/core';

@Component({
  selector: 'esign',
  templateUrl: './esign.component.html',
  styleUrls: ['./esign.component.css']
})
export class EsignComponent implements OnInit {
  @Input() open: boolean;
  @Input() text: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  //Get access to template ref
  @ViewChild('modal') modal;

  constructor(private emitter: EventEmitter<any>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    console.log(changes);
    if(this.open == true){
      this.modal.open();
    }
  }

  modalOnClose() {
    this.open = false;
  }

}
