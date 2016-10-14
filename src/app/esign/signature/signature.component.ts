import { Component, OnInit, Input } from '@angular/core';
import { SignatureService } from './signature.service';
import { Signature } from './signature.model';
import { FONTS } from './signature.data';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  providers: [ SignatureService ],
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  @Input() text: string;
  signature: Signature;
  signatures : Signature[];

  constructor(private service: SignatureService) { 
  }

  ngOnInit() {
    this.signatures = this.service.get();
  }

}
