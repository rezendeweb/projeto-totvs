import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PoModule, PoPageModule } from '@portinari/portinari-ui';
import { SigninModulo } from './signin/signin.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PoModule,
    SigninModulo,
    PoPageModule,
    TarefasModule,
    FormsModule
  ],
  declarations: [
    PrincipalComponent
  ],
  exports: [
    PoModule,
    PoPageModule
  ]
})
export class HomeModule { }