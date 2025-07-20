import { Component } from '@angular/core';
interface Task{
  task:string,
  did:boolean
}
const MOCK=Array.from({length:2},(_,i)=>({
  task:`Task_${i+1}`,did:true
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
