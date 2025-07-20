import { Component, Input } from '@angular/core';
import { Task } from '../../../../interfaces/task';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
@Input() taskList: Task[] = [];
}
