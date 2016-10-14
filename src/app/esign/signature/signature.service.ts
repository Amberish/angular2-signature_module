import { Injectable } from '@angular/core';
import { Signature } from './signature.model';
import { FONTS } from './signature.data';

@Injectable()
export class SignatureService {
  text: string;
  signatures : Signature[];

  constructor() {}

  get() {
     return this.composeAllSignature(this.text);
  }

  /**
   * Composing signatures object by adding text and style
   */
  private composeAllSignature(text: string, styles: Array<Object> = FONTS) {
    return this.signatures = styles.map(style => {
      return this.compose(text, style);
    });
  }

  /**
   * Compose a single signature
   */
  private compose(text: string, style: Object) {
    return {
      text,
      style
    };
  }

}
