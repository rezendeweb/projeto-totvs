import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PoPageModule } from '@portinari/portinari-ui';

@NgModule({
  imports: [
    CommonModule,
    PoPageModule
  ],
  declarations: [NotFoundComponent]
})
export class ErrorsModule { }