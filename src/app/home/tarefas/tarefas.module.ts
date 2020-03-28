import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule, PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { PoPageDynamicTableModule } from '@portinari/portinari-templates';

import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [
    CommonModule,
    PoPageModule,
    FormsModule,
    PoModule,
    PoPageDynamicTableModule
  ],
  declarations: [
    TaskComponent
  ]
})
export class TarefasModule { }