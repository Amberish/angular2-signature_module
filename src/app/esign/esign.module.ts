import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';

import { EsignComponent } from './esign.component';
import { EsignDirective } from './esign.directive';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [EsignComponent],
  declarations: [EsignComponent, EsignDirective, SignatureComponent]
})
export class EsignModule { }
