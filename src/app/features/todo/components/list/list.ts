import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../interfaces/task';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  @Input() taskList: Task[] = [];
  @Output() taskDoneToggle = new EventEmitter<number>();
  @Output() taskDelete = new EventEmitter<number>();

  changeTaskDone(index: number) {
    this.taskDoneToggle.emit(index);

  }
  deleteTask(index: number) {
    this.taskDelete.emit(index);

  }
  trackByTask(index: number, item: Task): string {
    return item.task; 
  }
}
