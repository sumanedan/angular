import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {Childroutes} from './childroutes'


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    Childroutes
  ],
  exports:[UserComponent]
})
export class ChildroutesModule { }
