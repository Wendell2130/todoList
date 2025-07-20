import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { List } from './components/list/list';
import { Set } from './components/set/set';



@NgModule({
  declarations: [
    Todo,
    List,
    Set
  ],
  imports: [
    CommonModule
  ],
  exports:[Todo]
})
export class TodoModule { }
