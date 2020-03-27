import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PoModule } from '@portinari/portinari-ui';
import { SigninModulo } from './signin/signin.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PoModule,
    SigninModulo
  ],
  declarations: [
    PrincipalComponent
  ]
})
export class HomeModule { }