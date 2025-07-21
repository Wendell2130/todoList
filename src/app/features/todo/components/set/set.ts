import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-set',
  standalone: false,
  templateUrl: './set.html',
  styleUrl: './set.scss'
})
export class Set {
  newTaskInput = new FormControl('');
  @Output() newTask=new EventEmitter<string>();
  
  sendTask() {
    const task = this.newTaskInput.value;
    if (task) {
      this.newTask.emit(task);
      this.newTaskInput.setValue('');
    }else{
      this.newTask.emit('');
     
    }
  }
}
