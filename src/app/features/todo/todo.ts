import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';
import { PopupType } from '../../interfaces/popuptype';

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
  popUpIsShowed:boolean = false;
  msgPopup: string = '';
  popupType: PopupType = 'info';
  timeoutId: any;

 addTask(task: string) {
  if (task) {
       const msg="Nova tarefa adicionada!";
      this.tasks.push({ task, done: false });
      this.showPopup(msg, 'success');
    }else{
       this.showPopup("Nada para adicionar!", 'error');
    }
  }
  taskDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.tasksDone = this.tasks.filter(task => task.done);
    if( this.tasks[index].done){
       this.showPopup("Nova tarefa concluída!", 'info');
    }
    
   }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksDone = this.tasks.filter(task => task.done);
    this.showPopup("Tarefa removida!", 'warning');
  }
  showPopup(msg:string,type:PopupType) {
    this.msgPopup = msg;
    this.popupType = type; 
     this.popUpIsShowed = true;
     if(this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
       this.timeoutId=setTimeout(() => {
          this.popUpIsShowed = false;
          this.timeoutId = null;
      }, 3000);
  }
}