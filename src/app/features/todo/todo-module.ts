import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { List } from './components/list/list';
import { Set } from './components/set/set';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from "../../utils/utils-module"; 


@NgModule({
  declarations: [
    Todo,
    List,
    Set
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    UtilsModule
],
  exports:[Todo]
})
export class TodoModule { }
