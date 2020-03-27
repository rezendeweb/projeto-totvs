import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/loign.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';

@NgModule({
  imports: [
    CommonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule
  ],
  declarations: [
      LoginComponent
    ]
})
export class SigninModulo { }