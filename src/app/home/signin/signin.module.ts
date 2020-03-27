import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/loign.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { PoButtonModule, PoFieldModule, PoDividerModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PoButtonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoFieldModule,
    FormsModule,
    PoDividerModule
  ],
  declarations: [
      LoginComponent
    ]
})
export class SigninModulo { }