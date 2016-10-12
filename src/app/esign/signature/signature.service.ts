import { Injectable } from '@angular/core';
import { Signature } from './signature.model';

@Injectable()
export class SignatureService {
  signatures : Signature[];

  constructor() { }

  get() {
     return this.signatures = [{
        text: "Amberish",
        style: {color: "#CCCCCC"}
      }, {
        text: "Jitender",
        style: {color: "#CCCCCC"}
      }, {
        text: "Amit",
        style: {color: "#CCCCCC"}
      }];
  }

}
