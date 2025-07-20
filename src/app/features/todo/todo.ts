import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';

const MOCK=Array.from({length:5},(_,i)=>({
  task:`Task_${i+1}`,done:false
}));

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo {
 tasks:Task[]=MOCK;
}
