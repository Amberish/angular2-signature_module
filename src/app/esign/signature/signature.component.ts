import { Component, OnInit } from '@angular/core';
import { SignatureService } from './signature.service';
import { Signature } from './signature.model';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  providers: [ SignatureService ],
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  signatures : Signature[];

  constructor(private service: SignatureService) { }

  ngOnInit() {
    this.signatures = this.service.get();
  }

}
