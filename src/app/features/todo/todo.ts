import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';

const MOCK=Array.from({length:3},(_,i)=>({
  task:`Exemaple_${i+1}`,done:false
}));

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo {
 tasks:Task[]=MOCK;
 tasksDone:Task[]=this.tasks.filter(task => task.done);
 
 addTask(task: string) {
    alert(`Task added: ${task}`);
    if (task) {
      this.tasks.push({ task, done: false });
    }
  }
  taskDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.tasksDone = this.tasks.filter(task => task.done);
   

  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksDone = this.tasks.filter(task => task.done);
  }
}
